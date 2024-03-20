import { expectRolls } from "./roll-executor";
import { parseRollRequest } from "./roll-parser";

const diceRollUrlRegex =
	/https:\/\/utils-api.demiplane.com\/dice-roll\?roll=(?<roll>.*)/;
const characterSheetUrlRegex =
	/https:\/\/app.demiplane.com\/nexus\/(?<gameSystem>[a-zA-Z0-9-]+)\/character-sheet\/(?<characterId>[a-z0-9-]+)/;

const readyStates: { [i: number]: string } = {
	[XMLHttpRequest.UNSENT]: "UNSENT",
	[XMLHttpRequest.OPENED]: "OPENED",
	[XMLHttpRequest.HEADERS_RECEIVED]: "HEADERS_RECEIVED",
	[XMLHttpRequest.LOADING]: "LOADING",
	[XMLHttpRequest.DONE]: "DONE",
};

interface HttpRequestInterceptor {
	override: boolean;
	regex: RegExp;
	callback: (url: string) => Promise<unknown>;
}

const interceptors: HttpRequestInterceptor[] = [];

/**
 * XML HTPP requests can be intercepted with interceptors.
 * Takes a regex to match against requests made and a callback to process the response.
 * <p/>
 * This solution is heavily inspired by https://stackoverflow.com/a/72137265.
 */
const createXmlHttpOverride = (
	open: XMLHttpRequest["open"],
): XMLHttpRequest["open"] => {
	return function (
		this: XMLHttpRequest,
		method: string,
		url: string | URL,
		async = false,
		username?: string | null,
		password?: string | null,
	): void {
		// TODO This will ensure that the client only ever sees our result; it won't however prevent the call from actually happening.
		//   Maybe there is a way to do that?
		this.addEventListener(
			"readystatechange",
			function () {
				console.log({
					description: "readystatechange event called",
					readyState: this.readyState,
					readyStateText: readyStates[this.readyState],
				});
				// When the request is opened, we prepare the override
				if (this.readyState === XMLHttpRequest.OPENED) {
					const newOnReadyStateChange = (
						originalOnreadystatechange: XMLHttpRequest["onreadystatechange"],
					) =>
						function (this: XMLHttpRequest, event: Event) {
							// console.log({
							// 	description: "Overwritten onreadystatechange called",
							// 	event: JSON.stringify(event),
							// 	readyState: this.readyState,
							// 	url,
							// });
							if (!diceRollUrlRegex.test(url.toString())) {
								console.log("Not a dice roll, doing the regular call.", url);
								return originalOnreadystatechange?.call(this, event);
							}
							console.log("It is a dice roll, trying to override.", url);

							// Read data from response.
							const overrideCall = async function (this: XMLHttpRequest) {
								let data: unknown;

								for (const i in interceptors) {
									const { regex, override, callback } = interceptors[i];

									// Override.
									if (regex?.test(url.toString())) {
										if (override) {
											try {
												data = await callback(url.toString());
												if (typeof data === "string") {
													data = JSON.parse(data);
												}
											} catch (e) {
												console.error(
													`Interceptor '${regex}' failed for url ${url}. ${e}`,
												);
											}
										}
									} else {
										console.log(`URL ${url} does not match regex ${regex}`);
									}
								}

								// Override the response text.
								Object.defineProperty(this, "responseText", {
									configurable: true,
									value: JSON.stringify(data),
								});

								// Tell the client callback that we're done.
								// TODO This ensures that the call is still made. We don't really want to do that.
								return originalOnreadystatechange?.call(this, event);
							};
							overrideCall.call(this);
						};
					this.onreadystatechange = newOnReadyStateChange(
						this.onreadystatechange,
					);
				}
			},
			false,
		);

		open.call(this, method, url, async as boolean, username, password);
	};
};

const main = () => {
	interceptors.push({
		regex: diceRollUrlRegex,
		override: true,
		callback: async (rollUrl) => {
			const characterUrlMatches = unsafeWindow.location.href.match(
				characterSheetUrlRegex,
			);

			const rollUrlMatches = rollUrl.match(diceRollUrlRegex);
			const rollCommand = rollUrlMatches?.groups?.roll;
			if (rollCommand) {
				const parsedRollCommand = parseRollRequest(rollCommand);
				const result = await expectRolls(
					parsedRollCommand,
					characterUrlMatches?.groups?.gameSystem,
				);

				console.log({
					description: "Itercepting dice rolls",
					rollUrl,
					//rollUrlMatches,
					//rollCommand,
					parsedRollCommand,
					gameSystem: characterUrlMatches?.groups?.gameSystem,
					characterSheetId: characterUrlMatches?.groups?.characterId,
					result,
				});

				return result;
			}
		},
	});

	XMLHttpRequest.prototype.open = createXmlHttpOverride(
		XMLHttpRequest.prototype.open,
	);
};

main();
