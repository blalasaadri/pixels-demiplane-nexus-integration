// General type definitions for translations
type TranslationObject =
	| { [key: string]: TranslationObject }
	| string
	| undefined;

interface Translations {
	ui: {
		awaitingPixelsRoll: string;
	};
}

// Specific translations
type SupportedLanguages = "en";

const en: Translations & TranslationObject = {
	ui: {
		awaitingPixelsRoll: "Awaiting Pixels roll...",
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
