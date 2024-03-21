import { expectRolls } from "./roll-executor";
import { parseRollRequest } from "./roll-parser";

const diceRollUrlRegex =
	/https:\/\/utils-api.demiplane.com\/dice-roll\?roll=(?<roll>.*)/;

const integration = (() => {
	const characterSheetUrlRegex =
		/https:\/\/app.demiplane.com\/nexus\/(?<gameSystem>[a-zA-Z0-9-]+)\/character-sheet\/(?<characterId>[a-z0-9-]+)/;
	const characterSheetInfo = (): {
		characterId?: string;
		gameSystem?: string;
	} => {
		const characterSheetUrl = unsafeWindow.location.href;
		const characterSheetMatches = characterSheetUrl.match(
			characterSheetUrlRegex,
		);
		const characterId = characterSheetMatches?.groups?.characterId;
		const gameSystem = characterSheetMatches?.groups?.gameSystem;

		return {
			characterId,
			gameSystem,
		};
	};

	const integrationEnabledStorageName = "pixelsIntegrationEnabled";

	const isEnabled = async (characterId?: string): Promise<boolean> => {
		let characterSheetId = characterId;
		if (!characterSheetId) {
			characterSheetId = characterSheetInfo().characterId || "";
		}
		let enabledForCharacter = false;
		const localStorageEntryString = unsafeWindow.localStorage.getItem(
			integrationEnabledStorageName,
		);
		if (localStorageEntryString) {
			const localStorageEntry = JSON.parse(localStorageEntryString);
			enabledForCharacter = localStorageEntry[characterSheetId] === "true";
		}
		return enabledForCharacter;
	};

	// @ts-ignore
	unsafeWindow.isPixelsIntegrationEnabled = (): boolean => {
		let integrationEnabledForCharacter = false;

		const enabledString = unsafeWindow.localStorage.getItem(
			integrationEnabledStorageName,
		);
		const { characterId } = characterSheetInfo();
		if (enabledString && characterId) {
			const enabledObject = JSON.parse(enabledString);
			const characterEnabledInfo = enabledObject[characterId];
			integrationEnabledForCharacter = characterEnabledInfo === "true";
		}

		return integrationEnabledForCharacter;
	};

	const toggleEnabled = async (characterId?: string): Promise<boolean> => {
		let characterSheetId = characterId;
		if (!characterSheetId) {
			characterSheetId = characterSheetInfo().characterId || "";
		}
		let enabledForCharacter = !isEnabled(characterId);
		const localStorageEntryString = unsafeWindow.localStorage.getItem(
			integrationEnabledStorageName,
		);
		if (localStorageEntryString) {
			const localStorageEntry = JSON.parse(localStorageEntryString);
			enabledForCharacter = localStorageEntry[characterSheetId] === "true";
		}
		return enabledForCharacter;
	};

	// @ts-ignore
	unsafeWindow.togglePixelsItegrationEnabled = (): boolean => {
		let integrationPreviouslyEnabledForCharacter = false;

		const enabledString = unsafeWindow.localStorage.getItem(
			integrationEnabledStorageName,
		);
		const { characterId } = characterSheetInfo();
		const enabledObject: { [id: string]: string } = enabledString
			? JSON.parse(enabledString)
			: {};
		if (characterId) {
			const characterEnabledInfo = enabledObject[characterId];
			integrationPreviouslyEnabledForCharacter =
				characterEnabledInfo === "true";

			enabledObject[characterId] =
				`${!integrationPreviouslyEnabledForCharacter}`;
			unsafeWindow.localStorage.setItem(
				integrationEnabledStorageName,
				JSON.stringify(enabledObject),
			);
		}

		return !integrationPreviouslyEnabledForCharacter;
	};

	return {
		isEnabled,
		toggleEnabled,
		characterSheetInfo,
	};
})();

interface HttpRequestInterceptor {
	callback: (url: string) => Promise<unknown>;
}

const interceptors: HttpRequestInterceptor[] = [];
let interceptor: HttpRequestInterceptor;

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
			const { characterId } = integration.characterSheetInfo();

			integration.isEnabled(characterId || "").then((isEnabled) => {
				// @ts-ignore
				const requestURL: string | URL = this.requestURL;

				if (
					characterId &&
					isEnabled &&
					diceRollUrlRegex.test(requestURL?.toString())
				) {
					// Do not send the request but instead request the results from our pixels dice
					console.log(
						`Received a dice roll request to ${requestURL}, overriding it.`,
					);

					const { callback } = interceptor;
					// First, we wait for the response from either Pixels or virtual dice
					callback(requestURL?.toString())
						.then((data) => {
							// When we have received the response, we have to process it just a bit.
							console.log(
								`Received faked response with data ${JSON.stringify(
									data,
								)}; ensuring that it is a JSON.`,
							);
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
								console.log(
									`Setting the responseText to ${JSON.stringify(data)}`,
								);

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

const main = () => {
	interceptors.push({
		callback: async (rollUrl) => {
			const { characterId, gameSystem } = integration.characterSheetInfo();

			const rollUrlMatches = rollUrl.match(diceRollUrlRegex);
			const rollCommand = rollUrlMatches?.groups?.roll;
			if (rollCommand) {
				const parsedRollCommand = parseRollRequest(rollCommand);
				const result = await expectRolls(parsedRollCommand, gameSystem);

				console.log({
					description: "Itercepting dice rolls",
					rollUrl,
					parsedRollCommand,
					gameSystem,
					characterSheetId: characterId,
					result,
				});

				return result;
			}
		},
	});
	interceptor = interceptors[0];
};

main();
