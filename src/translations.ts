// General type definitions for translations
type TranslationObject =
	| { [key: string]: TranslationObject }
	| string
	| undefined;

interface Translations {
	ui: {
		notification: {
			awaitingPixelsRoll: string;
		};
		pixelsMenu: {
			button: {
				title: string;
				ariaLabel: string;
			};
			settings: {
				title: string;
				connectDieButton: {
					text: string;
					ariaLabel: string;
				};
				enableForCharacter: {
					text: string;
				};
			};
			overview: {
				title: string;
			};
		};
	};
}

// Specific translations
type SupportedLanguages = "en";

const en: Translations & TranslationObject = {
	ui: {
		notification: {
			awaitingPixelsRoll: "Awaiting Pixels roll...",
		},
		pixelsMenu: {
			button: {
				title: "Pixels Dice",
				ariaLabel: "pixels dice menu button",
			},
			settings: {
				title: "Dice settings",
				connectDieButton: {
					text: "Connect Pixels die",
					ariaLabel: "connect pixels die",
				},
				enableForCharacter: {
					text: "Enable for Character",
				},
			},
			overview: {
				title: "Dice overview",
			},
		},
	},
};

// Methods for accessing the translations
const getValueAtPath = (
	path: string[],
	object: TranslationObject,
): string | undefined => {
	if (!object || typeof object === "string") {
		return object;
	}
	if (path.length > 1) {
		const nextPathElement = path.shift();
		if (nextPathElement) {
			return getValueAtPath(path, object[nextPathElement]);
		}
	} else {
		return object[path[0]] as string | undefined;
	}
	return undefined;
};

export const getTranslation = (
	key: string,
	lang: SupportedLanguages = "en",
): string => {
	switch (lang) {
		case "en": {
			return getValueAtPath(key.split("."), en) || "";
		}
	}
	return "";
};
