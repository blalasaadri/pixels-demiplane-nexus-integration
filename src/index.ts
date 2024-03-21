import * as integration from "./integration-utils";
import { expectRolls } from "./roll-executor";
import { parseRollRequest, stringifyRollRequest } from "./roll-parser";

const diceRollUrlRegex =
	/https:\/\/utils-api.demiplane.com\/dice-roll\?roll=(?<roll>.*)/;

// @ts-ignore
if (!XMLHttpRequest.prototype.nativeOpen) {
	// Override the open function
	(() => {
		// @ts-ignore
		XMLHttpRequest.prototype.nativeOpen = XMLHttpRequest.prototype.open;

		// Create our custom "open" function
		const customOpen: XMLHttpRequest["open"] = function (
			this: XMLHttpRequest,
			method: string,
			url: string | URL,
			async?: boolean,
			username?: string | null,
			password?: string | null,
		) {
			// When the request is opened, we want to save the URL in a place where it is retrievable during the send request.
			// @ts-ignore
			this.requestURL = url;

			// After that, things can proceed as normal for the moment.
			if (async === undefined) {
				// @ts-ignore
				this.nativeOpen(method, url);
			} else {
				// @ts-ignore
				this.nativeOpen(method, url, async, username, password);
			}
		};

		XMLHttpRequest.prototype.open = customOpen;
	})();

	// Override the send function
	(() => {
		// @ts-ignore
		XMLHttpRequest.prototype.nativeSend = XMLHttpRequest.prototype.send;

		// Create our custom "load" function
		const customSend: XMLHttpRequest["send"] = function (
			this: XMLHttpRequest,
			body?: Document | XMLHttpRequestBodyInit | null,
		) {
			// Check whether we're on a character sheet and if so, what the character's ID is
			const { characterId, gameSystem } = integration.characterSheetInfo();

			integration.isEnabled(characterId || "").then((isEnabled) => {
				// @ts-ignore
				const requestURL: string | URL = this.requestURL;

				const rollUrl = requestURL?.toString();
				const rollUrlMatches = rollUrl.match(diceRollUrlRegex);
				const rollCommand = rollUrlMatches?.groups?.roll;

				if (
					characterId &&
					isEnabled &&
					diceRollUrlRegex.test(requestURL?.toString()) &&
					rollCommand
				) {
					if (integration.isDebugEnabled()) {
						console.log(
							`Received a dice roll request to ${requestURL}, overriding it.`,
						);
					}

					const rollRequest = parseRollRequest(rollCommand);
					console.log(
						`The Pixel integration is waiting for the following rolls: ${stringifyRollRequest(
							rollRequest,
						)}`,
					);

					// Do not send the request yet, but instead request the results from virtual dice or Pixels dice
					expectRolls(rollRequest, gameSystem)
						.then((data) => {
							// When we have received the response, we have to process it just a bit.
							if (integration.isDebugEnabled()) {
								console.log(
									`Received faked response with data ${JSON.stringify(
										data,
									)}; ensuring that it is a JSON.`,
								);
							}
							let parsedData = data;
							if (typeof data === "string") {
								parsedData = JSON.parse(data);
							}
							return parsedData;
						})
						.then((data) => {
							// I haven't yet found a way to fully simulate sending and then receiving a response
							//  from the API. So instead, now that we actually have the value we'll send the request,
							//  wait for a reply and then replace the response.
							this.addEventListener("readystatechange", () => {
								if (integration.isDebugEnabled()) {
									console.log(
										`Setting the responseText to ${JSON.stringify(data)}`,
									);
								}

								// Now that we have processed the data, we set it as the response
								Object.defineProperty(this, "responseText", {
									configurable: true,
									value: JSON.stringify(data),
								});
							});
							// @ts-ignore
							this.nativeSend(body);
						})
						.catch((e) => {
							console.error(`Interceptor failed for url ${requestURL}.`, e);
						});
				} else {
					// Either this is not a dice roll request, or the integration is not enabled. Proceed as normal.
					// @ts-ignore
					this.nativeSend(body);
				}
			});
		};

		// @ts-ignore
		XMLHttpRequest.prototype.send = customSend;
	})();
}
