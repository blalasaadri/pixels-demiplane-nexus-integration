import * as integration from "./integration-utils";
import { expectRolls, mergeRollResults } from "./roll-executor";
import { parseRollRequest } from "./roll-parser";
import {
	addRollsExpectedNotification,
	removeRollsExpectedNotification,
} from "./ui-notifications";
import { setupPixelsMenu } from "./ui-pixels-menu";

const diceRollUrlRegex =
	/^https:\/\/utils-api.demiplane.com\/dice-roll\?roll=(?<roll>[^&]*)$/;

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
			// @ts-ignore
			if (this.pixelsRoll === undefined) {
				// @ts-ignore
				this.pixelsRoll = diceRollUrlRegex.test(url.toString());
			}

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

			(() => {
				// @ts-ignore
				const useIntegration = this.pixelsRoll;
				// @ts-ignore
				const requestURL: string | URL = this.requestURL;

				const isEnabled = integration.isEnabledForCharacter(characterId || "");

				const rollUrl = requestURL?.toString();
				const rollUrlMatches = rollUrl.match(diceRollUrlRegex);
				const rollCommand = rollUrlMatches?.groups?.roll;

				if (useIntegration && characterId && isEnabled && rollCommand) {
					if (integration.isDebugEnabled()) {
						console.log(
							`Received a dice roll request to ${requestURL}, overriding it.`,
						);
					}

					const rollRequest = parseRollRequest(rollCommand);

					const sendRollRequestToDemiplane = (rollQuery?: string) => {
						const newRequestURL = `https://utils-api.demiplane.com/dice-roll?roll=${
							rollQuery || 0
						}`;
						// @ts-ignore
						this.pixelsRoll = false;
						this.open("GET", newRequestURL);
						// @ts-ignore
						this.nativeSend(body);
					};

					if (!rollRequest.containsRolls()) {
						console.log("The Pixel integration is not waiting for any rolls.");
						sendRollRequestToDemiplane(rollCommand);
					} else {
						console.log(
							`The Pixel integration is waiting for the following rolls: '${rollRequest.stringify(
								false,
							)}'`,
						);
						try {
							addRollsExpectedNotification(rollRequest);
						} catch (e) {
							console.error("Could not add expected rolls notification", e);
						}

						// Do not send the request yet, but instead request the results from virtual dice or Pixels dice
						expectRolls(rollRequest, gameSystem)
							.then((data) => {
								removeRollsExpectedNotification();

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
							.then((localResponseBody) => {
								// I haven't yet found a way to fully simulate sending and then receiving a response
								//  from the API. So instead, now that we actually have the value we'll send the request,
								//  wait for a reply and then replace the response.
								this.addEventListener("readystatechange", () => {
									if (this.readyState === XMLHttpRequest.DONE) {
										const remoteResponseBody = JSON.parse(this.responseText);
										const mergedResponseBody = mergeRollResults(
											localResponseBody,
											remoteResponseBody,
											rollCommand,
										);

										if (integration.isDebugEnabled()) {
											console.log({
												description: "Setting body of response",
												readyState: this.readyState,
												remoteResponseBody,
												localResponseBody,
												mergedResponseBody,
											});
										}

										// Now that we have processed the data, we set it as the response
										Object.defineProperty(this, "responseText", {
											configurable: true,
											value: JSON.stringify(mergedResponseBody),
										});
									}
								});
								sendRollRequestToDemiplane(rollRequest.unusedParts);
							})
							.catch((e) => {
								console.error(`Interceptor failed for url ${requestURL}.`, e);
							});
					}
				} else {
					// Either this is not a dice roll request, or the integration is not enabled. Proceed as normal.
					// @ts-ignore
					this.nativeSend(body);
				}
			})();
		};

		// @ts-ignore
		XMLHttpRequest.prototype.send = customSend;
	})();
}

const characterSheetUrlRegex =
	/https:\/\/app.demiplane.com\/nexus\/[a-zA-Z0-9-]+\/character-sheet\/[a-z0-9-]+/;
// Listen for navigation events
unsafeWindow.navigation.addEventListener("navigate", (event) => {
	// If we have navigated to a character sheet, we may have to add a pixels menu button.
	if (characterSheetUrlRegex.test(event.destination.url)) {
		// Make sure that we don't already have a pixels menu button, before adding one.
		const pixelsMenuButtons = unsafeWindow.document.getElementsByClassName(
			"top-nav-nexus-pixels-menu-btn",
		);
		if (pixelsMenuButtons.length === 0) {
			setupPixelsMenu()
				.then(() => {
					if (integration.isDebugEnabled()) {
						console.log("Pixels menu has been created.");
					}
				})
				.catch((e) => {
					console.error("Error while setting up pixels menu.", e);
				});
		}
	}
});
