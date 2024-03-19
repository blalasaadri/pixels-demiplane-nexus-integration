const readyStates: { [i: number]: string } = {
	[XMLHttpRequest.UNSENT]: "UNSENT",
	[XMLHttpRequest.OPENED]: "OPENED",
	[XMLHttpRequest.HEADERS_RECEIVED]: "HEADERS_RECEIVED",
	[XMLHttpRequest.LOADING]: "LOADING",
	[XMLHttpRequest.DONE]: "DONE",
};

// Heavily inspired by https://stackoverflow.com/a/72137265

interface HttpRequestInterceptor {
	override: boolean;
	regex: RegExp;
	callback: (url: string) => Promise<unknown>;
}

let interceptors: HttpRequestInterceptor[] = [];

/*
 * Add a interceptor.
 */
const addInterceptor = (interceptor: HttpRequestInterceptor) => {
	interceptors.push(interceptor);
};

/*
 * Clear interceptors
 */
const clearInterceptors = () => {
	interceptors = [];
};

const urlRegex =
	/https:\/\/utils-api.demiplane.com\/dice-roll\?roll=(?<roll>.*)/;

/*
 * XML HTPP requests can be intercepted with interceptors.
 * Takes a regex to match against requests made and a callback to process the response.
 */
const createXmlHttpOverride = (
	open: XMLHttpRequest['open'],
): XMLHttpRequest['open'] => {
	return function (
		this: XMLHttpRequest,
		method: string,
		url: string | URL,
		async: boolean = false,
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
                    const newOnReadyStateChange = (originalOnreadystatechange: XMLHttpRequest["onreadystatechange"]) =>
                    function (this: XMLHttpRequest, event: Event) {
                        // console.log({
                        // 	description: "Overwritten onreadystatechange called",
                        // 	event: JSON.stringify(event),
                        // 	readyState: this.readyState,
                        // 	url,
                        // });
                        if (!urlRegex.test(url.toString())) {
                            console.log("Not a dice roll, doing the regular call.", url);
                            return originalOnreadystatechange?.call(this, event);
                        }
                        console.log("It is a dice roll, trying to override.", url);

                        // Read data from response.
                        const overrideCall = async function (this: XMLHttpRequest) {
                            let success = false;
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
                                            success = true;
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
                                value: JSON.stringify(data),
                            });

                            // Tell the client callback that we're done.
                            // TODO This ensures that the call is still made. We don't really want to do that.
                            return originalOnreadystatechange?.call(this, event);
                        };
                        overrideCall.call(this);
                    };
					this.onreadystatechange = newOnReadyStateChange(this.onreadystatechange);
				}
			},
			false,
		);

		open.call(this, method, url, async, username, password);
	};
};

const main = () => {
	addInterceptor({
		regex: urlRegex,
		override: true,
		callback: async (url) => {
			const matches = url.match(urlRegex);
			const rollCommand = matches?.groups?.roll;
			if (rollCommand) {
				const rollCommandParts = rollCommand?.split(/(?:\+%2B\+)|(?:%2B)|\+/);

				console.log({
					description: "Trying to roll dice",
					url,
					matches,
					rollCommand,
					rollCommandParts,
				});
			}

			// Replace response data.
			const result = {
				pixels: true,
				total: 21,
				crit: 0,
				raw_dice: {
					parts: [
						{
							type: "dice",
							dice: [
								{
									type: "single_dice",
									value: 3,
									size: 12,
									is_kept: true,
									rolls: [3],
									exploded: false,
									imploded: false,
								},
							],
							annotation: "",
							value: 3,
							is_crit: 0,
							num_kept: 1,
							text: "1d12 (3) ",
							num_dice: 1,
							dice_size: 12,
							operators: [],
						},
						{
							type: "operator",
							value: "+",
							annotation: "",
						},
						{
							type: "dice",
							dice: [
								{
									type: "single_dice",
									value: 17,
									size: 20,
									is_kept: true,
									rolls: [17],
									exploded: false,
									imploded: false,
								},
							],
							annotation: "",
							value: 17,
							is_crit: 0,
							num_kept: 1,
							text: "1d20 (17) ",
							num_dice: 1,
							dice_size: 20,
							operators: [],
						},
						{
							type: "operator",
							value: "+",
							annotation: "",
						},
						{
							type: "constant",
							value: 1,
							annotation: "",
						},
					],
				},
				error: "",
			};
			return result;
		},
	});

	XMLHttpRequest.prototype.open = createXmlHttpOverride(
		XMLHttpRequest.prototype.open,
	);
};

main();
