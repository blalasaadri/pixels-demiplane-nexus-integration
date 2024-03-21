import type { PixelDieType } from "@systemic-games/pixels-web-connect";

const characterSheetUrlRegex =
	/https:\/\/app.demiplane.com\/nexus\/(?<gameSystem>[a-zA-Z0-9-]+)\/character-sheet\/(?<characterId>[a-z0-9-]+)/;
export const characterSheetInfo = (): {
	characterId?: string;
	gameSystem?: string;
} => {
	const characterSheetUrl = unsafeWindow.location.href;
	const characterSheetMatches = characterSheetUrl.match(characterSheetUrlRegex);
	const characterId = characterSheetMatches?.groups?.characterId;
	const gameSystem = characterSheetMatches?.groups?.gameSystem;

	return {
		characterId,
		gameSystem,
	};
};

const integrationEnabledStorageName = "pixelsIntegrationEnabled";

export const isEnabled = async (characterId?: string): Promise<boolean> => {
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

export const toggleEnabled = async (characterId?: string): Promise<boolean> => {
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
		integrationPreviouslyEnabledForCharacter = characterEnabledInfo === "true";

		enabledObject[characterId] = `${!integrationPreviouslyEnabledForCharacter}`;
		unsafeWindow.localStorage.setItem(
			integrationEnabledStorageName,
			JSON.stringify(enabledObject),
		);
	}

	return !integrationPreviouslyEnabledForCharacter;
};

const integrationDebugStorageName = "pixelsIntegrationDebug";
export const isDebugEnabled = (): boolean => {
	const localStorageEntryString = unsafeWindow.localStorage.getItem(
		integrationDebugStorageName,
	);
	return localStorageEntryString === "true";
};

// @ts-ignore
unsafeWindow.togglePixelsItegrationDebug = () => {
	const enabledString = unsafeWindow.localStorage.getItem(
		integrationDebugStorageName,
	);
	const integrationDebugPreviouslyEnabled = enabledString === "true";

	unsafeWindow.localStorage.setItem(
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

const integrationEnabledForDiceStorageName = "pixelsIntegrationEnabledForDice";
export const integrationEnabledForDice = (): IntegrationEnabledForDice => {
	const enabledString = unsafeWindow.localStorage.getItem(
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
		unsafeWindow.localStorage.setItem(
			integrationEnabledForDiceStorageName,
			JSON.stringify(enabledObject),
		);
	}
	return enabledObject;
};

export const updateIntegrationEnabledForDice = (
	updatedSettings: Partial<IntegrationEnabledForDice>,
): IntegrationEnabledForDice => {
	const previouslyEnabledString = unsafeWindow.localStorage.getItem(
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
	unsafeWindow.localStorage.setItem(
		integrationEnabledForDiceStorageName,
		JSON.stringify(newlyEnabledObject),
	);
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
