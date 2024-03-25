import type { PixelDieType } from "@systemic-games/pixels-web-connect";

const characterSheetUrlRegex =
	/https:\/\/app.demiplane.com\/nexus\/(?<gameSystem>[a-zA-Z0-9-]+)\/character-sheet\/(?<characterId>[a-z0-9-]+)/;
export const characterSheetInfo = (): {
	characterId?: string;
	gameSystem?: string;
} => {
	const characterSheetUrl = location.href;
	const characterSheetMatches = characterSheetUrl.match(characterSheetUrlRegex);
	const characterId = characterSheetMatches?.groups?.characterId;
	const gameSystem = characterSheetMatches?.groups?.gameSystem;

	return {
		characterId,
		gameSystem,
	};
};

// Methods for enabling and disabling the integration
interface IntegrationEnabledListener {
	callback: (enabled: boolean, characterId: string) => void;
}

const enabledForCharacterListeners: IntegrationEnabledListener[] = [];

export const registerEnabledForCharacterListener = (
	listener: IntegrationEnabledListener,
): void => {
	enabledForCharacterListeners.push(listener);
};

interface EnabledByCharacter {
	[characterSheetId: string]: boolean;
}

const integrationEnabledStorageName = "pixelsIntegrationEnabled";

export const isEnabledForCharacter = (characterId?: string): boolean => {
	let characterSheetId = characterId;
	if (!characterSheetId) {
		characterSheetId = characterSheetInfo().characterId || "";
	}
	let enabledForCharacter = false;
	const localStorageEntryString =
		localStorage.getItem(integrationEnabledStorageName) || "{}";
	const localStorageEntry: EnabledByCharacter = JSON.parse(
		localStorageEntryString,
	);
	enabledForCharacter = localStorageEntry[characterSheetId] === true;
	return enabledForCharacter;
};

// @ts-ignore
unsafeWindow.isPixelsIntegrationEnabled = isEnabledForCharacter;

export const setEnabledForCharacter = (
	enabled: boolean,
	characterId?: string,
): boolean => {
	let characterSheetId = characterId;
	if (!characterSheetId) {
		characterSheetId = characterSheetInfo().characterId || "";
	}
	const previouslyEnabledForCharacter = isEnabledForCharacter(characterId);
	const localStorageEntryString =
		localStorage.getItem(integrationEnabledStorageName) || "{}";
	const localStorageEntry: EnabledByCharacter = JSON.parse(
		localStorageEntryString,
	);
	localStorageEntry[characterSheetId] = enabled;
	localStorage.setItem(
		integrationEnabledStorageName,
		JSON.stringify(localStorageEntry),
	);
	if (previouslyEnabledForCharacter !== enabled) {
		for (const listener of enabledForCharacterListeners) {
			listener.callback(enabled, characterSheetId);
		}
	}
	return enabled;
};

export const toggleEnabledForCharacter = (characterId?: string): boolean => {
	let characterSheetId = characterId;
	if (!characterSheetId) {
		characterSheetId = characterSheetInfo().characterId || "";
	}
	const previouslyEnabledForCharacter = isEnabledForCharacter(characterId);
	const nowEnabledForCharacter = !previouslyEnabledForCharacter;
	return setEnabledForCharacter(nowEnabledForCharacter, characterSheetId);
};

// @ts-ignore
unsafeWindow.togglePixelsItegrationEnabled = toggleEnabledForCharacter;

const integrationDebugStorageName = "pixelsIntegrationDebug";
export const isDebugEnabled = (): boolean => {
	const localStorageEntryString = localStorage.getItem(
		integrationDebugStorageName,
	);
	return localStorageEntryString === "true";
};

// @ts-ignore
unsafeWindow.togglePixelsItegrationDebug = () => {
	const enabledString = localStorage.getItem(integrationDebugStorageName);
	const integrationDebugPreviouslyEnabled = enabledString === "true";

	localStorage.setItem(
		integrationDebugStorageName,
		`${!integrationDebugPreviouslyEnabled}`,
	);

	return !integrationDebugPreviouslyEnabled;
};

// Settings about which types of dice the integration is enabled for
export interface IntegrationEnabledForDice {
	d4: boolean;
	d6: boolean;
	d8: boolean;
	d10: boolean;
	d00: boolean;
	d12: boolean;
	d20: boolean;
	dF: boolean;
}

export interface IntegrationEnabledForDieListener {
	predicate?: (dieSizes: PixelDieType[]) => boolean;
	callback: (integrationEnabledForDice: IntegrationEnabledForDice) => void;
}

const integrationForDiceEnabledListeners: IntegrationEnabledForDieListener[] =
	[];

export const registerIntegrationForDiceEnabledListener = (
	listerner: IntegrationEnabledForDieListener,
): void => {
	integrationForDiceEnabledListeners.push(listerner);
};

const integrationEnabledForDiceStorageName = "pixelsIntegrationEnabledForDice";
export const getIntegrationEnabledForDice = (): IntegrationEnabledForDice => {
	const enabledString = localStorage.getItem(
		integrationEnabledForDiceStorageName,
	);
	let enabledObject: IntegrationEnabledForDice;
	if (enabledString) {
		enabledObject = JSON.parse(enabledString);
	} else {
		// The settings do not yet exist, so create a default and save it
		enabledObject = {
			d4: false,
			d6: false,
			d8: false,
			d10: false,
			d00: false,
			d12: false,
			d20: false,
			dF: false,
		};
		localStorage.setItem(
			integrationEnabledForDiceStorageName,
			JSON.stringify(enabledObject),
		);
	}
	return enabledObject;
};

export const updateIntegrationEnabledForDice = (
	updatedSettings: Partial<IntegrationEnabledForDice>,
): IntegrationEnabledForDice => {
	const previouslyEnabledString = localStorage.getItem(
		integrationEnabledForDiceStorageName,
	);
	let previouslyEnabledObject: IntegrationEnabledForDice;
	if (previouslyEnabledString) {
		previouslyEnabledObject = JSON.parse(previouslyEnabledString);
	} else {
		// The settings do not yet exist, so create a default
		previouslyEnabledObject = {
			d4: false,
			d6: false,
			d8: false,
			d10: false,
			d00: false,
			d12: false,
			d20: false,
			dF: false,
		};
	}
	const newlyEnabledObject: IntegrationEnabledForDice = {
		...previouslyEnabledObject,
		...updatedSettings,
	};
	localStorage.setItem(
		integrationEnabledForDiceStorageName,
		JSON.stringify(newlyEnabledObject),
	);

	for (const listener of integrationForDiceEnabledListeners) {
		const updatedForDieSizes: PixelDieType[] = [];
		for (const key of Object.keys(updatedSettings)) {
			switch (key) {
				case "d4": {
					updatedForDieSizes.push("d4");
					break;
				}
				case "d6": {
					updatedForDieSizes.push("d6");
					break;
				}
				case "d8": {
					updatedForDieSizes.push("d8");
					break;
				}
				case "d10": {
					updatedForDieSizes.push("d10");
					break;
				}
				case "d00": {
					updatedForDieSizes.push("d00");
					break;
				}
				case "d12": {
					updatedForDieSizes.push("d12");
					break;
				}
				case "d20": {
					updatedForDieSizes.push("d20");
					break;
				}
				case "dF": {
					updatedForDieSizes.push("d6fudge");
					break;
				}
			}
		}
		if (!listener.predicate || listener.predicate(updatedForDieSizes)) {
			listener.callback(newlyEnabledObject);
		}
	}

	return newlyEnabledObject;
};

export const setPixelsIntegrationEnabledForDieType = (
	dieType: PixelDieType | "dF",
	enabled: boolean,
): IntegrationEnabledForDice => {
	const updatedSettings: Partial<IntegrationEnabledForDice> = {};
	switch (dieType) {
		case "d4": {
			updatedSettings.d4 = enabled;
			break;
		}
		case "d6pipped":
		case "d6": {
			updatedSettings.d6 = enabled;
			break;
		}
		case "d8": {
			updatedSettings.d8 = enabled;
			break;
		}
		case "d10": {
			updatedSettings.d10 = enabled;
			break;
		}
		case "d00": {
			updatedSettings.d00 = enabled;
			break;
		}
		case "d12": {
			updatedSettings.d12 = enabled;
			break;
		}
		case "d20": {
			updatedSettings.d20 = enabled;
			break;
		}
		case "d6fudge":
		case "dF": {
			updatedSettings.dF = enabled;
			break;
		}
		default: {
			throw new Error(`Unknown dice type ${dieType}`);
		}
	}
	return updateIntegrationEnabledForDice(updatedSettings);
};

export const togglePixelsIntegrationEnabledForDieType = (
	dieType: PixelDieType | "dF",
): IntegrationEnabledForDice => {
	const integrationEnabledForDice = getIntegrationEnabledForDice();
	let currentlyEnabled = false;
	switch (dieType) {
		case "d4": {
			currentlyEnabled = integrationEnabledForDice.d4;
			break;
		}
		case "d6pipped":
		case "d6": {
			currentlyEnabled = integrationEnabledForDice.d6;
			break;
		}
		case "d8": {
			currentlyEnabled = integrationEnabledForDice.d8;
			break;
		}
		case "d10": {
			currentlyEnabled = integrationEnabledForDice.d10;
			break;
		}
		case "d00": {
			currentlyEnabled = integrationEnabledForDice.d00;
			break;
		}
		case "d12": {
			currentlyEnabled = integrationEnabledForDice.d12;
			break;
		}
		case "d20": {
			currentlyEnabled = integrationEnabledForDice.d20;
			break;
		}
		case "d6fudge":
		case "dF": {
			currentlyEnabled = integrationEnabledForDice.dF;
			break;
		}
	}
	return setPixelsIntegrationEnabledForDieType(dieType, !currentlyEnabled);
};

// @ts-ignore
unsafeWindow.enablePixelsIntegrationForDieType = (
	dieType: PixelDieType | "dF",
): IntegrationEnabledForDice =>
	setPixelsIntegrationEnabledForDieType(dieType, true);

// @ts-ignore
unsafeWindow.disablePixelsIntegrationForDieType = (
	dieType: PixelDieType | "dF",
): IntegrationEnabledForDice =>
	setPixelsIntegrationEnabledForDieType(dieType, false);

// @ts-ignore
unsafeWindow.togglePixelsIntegrationForDieType = (
	dieType: PixelDieType | "dF",
): IntegrationEnabledForDice =>
	togglePixelsIntegrationEnabledForDieType(dieType);
