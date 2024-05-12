import type { PixelDieType } from "@systemic-games/pixels-web-connect";
import { registerConsoleCommands } from "./console-commands";

const characterSheetUrlRegex =
	/https:\/\/app.demiplane.com\/nexus\/(?<gameSystem>[a-zA-Z0-9-]+)\/character-sheet\/(?<characterId>[a-z0-9-]+)/;

interface CharacterSheetInfo {
	characterId?: string;
	characterName?: string;
	characterAvatarUrl?: string;
	gameSystem?: string;
}

/**
 * Retrieve information about the current character and the game system a character has been built for.
 * @returns an object containing the fields <code>characterId</code> and <code>gameSystem</code>, both of which are optional.
 */
export const characterSheetInfo = (): CharacterSheetInfo => {
	const characterSheetUrl = location.href;
	const characterSheetMatches = characterSheetUrl.match(characterSheetUrlRegex);
	const gameSystem = characterSheetMatches?.groups?.gameSystem;
	const characterId = characterSheetMatches?.groups?.characterId;

	const characterSheetInfo: CharacterSheetInfo = {
		characterId,
		gameSystem,
	};

	const avatarNameTags = document.getElementsByClassName("character-name");
	if (avatarNameTags.length > 0) {
		characterSheetInfo.characterName =
			(avatarNameTags[0].firstChild as Element)?.textContent || undefined;
	}

	const avatarImageTags = document.getElementsByClassName("avatar__image");
	if (avatarImageTags.length > 0) {
		characterSheetInfo.characterAvatarUrl =
			avatarImageTags[0].getAttribute("src") || undefined;
	}

	if (isDebugEnabled()) {
		console.log({
			descripton: "Character sheet info collected",
			characterSheetInfo,
		});
	}

	return characterSheetInfo;
};

// Methods for enabling and disabling the integration
/**
 * The interface for a listener that is interested in whether the integration is enabled for a specific character.
 */
export interface IntegrationEnabledListener {
	callback: (enabled: boolean, characterId: string) => void;
}

export const {
	registerEnabledForCharacterListener,
	isEnabledForCharacter,
	setEnabledForCharacter,
	toggleEnabledForCharacter,
} = (() => {
	// Some parts of the integration are interested in whether the integration is enabled for a specific character.
	// The following lines allow them to know when it changes and react to the new situation.

	const enabledForCharacterListeners: IntegrationEnabledListener[] = [];

	/**
	 * Register a listener that is interested in whether the integration is enabled for a specific character.
	 *
	 * @param listener which will be called when the integration is enabled or disabled for a character.
	 */
	const registerEnabledForCharacterListener = (
		listener: IntegrationEnabledListener,
	): void => {
		enabledForCharacterListeners.push(listener);
	};

	// We the integration can be enabled or disabled on a per-character basis.
	// The following types and functions allow interacting with the state of the integration in that way.

	/**
	 * This is the format we will use when storing the characters, for which the integration is enabled, to the local storage.
	 */
	interface EnabledByCharacter {
		[characterSheetId: string]: boolean;
	}

	/**
	 * The name of the local storage variable that stores the characters, for which the integration is enabled.
	 */
	const integrationEnabledStorageName = "pixelsIntegrationEnabled";

	/**
	 * Is the integration enabled for a specific character?
	 *
	 * @param characterId Optional value. If it is left empty, the current character will be used.
	 * @returns {boolean} whether the integration is enabled for the given character (or current character, if <code>characterId</code> is not given).
	 */
	const isEnabledForCharacter = (characterId?: string): boolean => {
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

	/**
	 * Enables or disables the integration for a specific character.
	 *
	 * @param enabled {boolean} whether the integration should be enabled or disabled.
	 * @param characterId optional value. If it is left empty, the current character will be used.
	 * @returns
	 */
	const setEnabledForCharacter = (
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

	/**
	 * Toggles whether the integration is enabled for a specific character.
	 *
	 * @param characterId optional value. If it is left empty, the current character will be used.
	 * @returns whether the character is enabled or not after this method completes.
	 */
	const toggleEnabledForCharacter = (characterId?: string): boolean => {
		let characterSheetId = characterId;
		if (!characterSheetId) {
			characterSheetId = characterSheetInfo().characterId || "";
		}
		const previouslyEnabledForCharacter = isEnabledForCharacter(characterId);
		const nowEnabledForCharacter = !previouslyEnabledForCharacter;
		return setEnabledForCharacter(nowEnabledForCharacter, characterSheetId);
	};

	// Now let's register the console commands for enabling and disabling the integration for a character.
	registerConsoleCommands({
		isEnabledForCharacter,
		toggleEnabledForCharacter,
		enableForCharacter: (characterSheetId?: string) => {
			setEnabledForCharacter(true, characterSheetId);
		},
		disableForCharacter: (characterSheetId?: string) => {
			setEnabledForCharacter(false, characterSheetId);
		},
	});

	// And these functions will be exported, so they are available throughout the integration code.
	return {
		registerEnabledForCharacterListener,
		isEnabledForCharacter,
		setEnabledForCharacter,
		toggleEnabledForCharacter,
	};
})();

// Debug mode
export const { isDebugEnabled } = (() => {
	/**
	 * The name of the local storage variable that stores whether debug mode is enabled or not.
	 */
	const integrationDebugStorageName = "pixelsIntegrationDebug";

	/**
	 * @returns {boolean} Is debug mode enabled?
	 */
	const isDebugEnabled = (): boolean => {
		const localStorageEntryString = localStorage.getItem(
			integrationDebugStorageName,
		);
		return localStorageEntryString === "true";
	};

	/**
	 * Enables debug mode or keeps it enabled, if it already was.
	 *
	 * @returns {boolean} <code>true</code>
	 */
	const enableDebugMode = () => {
		localStorage.setItem(integrationDebugStorageName, "true");

		return true;
	};

	/**
	 * Disables debug mode or keeps it disabled, if it already was.
	 *
	 * @returns {boolean} <code>false</code>
	 */
	const disableDebugMode = () => {
		localStorage.setItem(integrationDebugStorageName, "false");

		return true;
	};

	/**
	 * Toggles debug mode between enabled and disabled.
	 *
	 * @returns {boolean} Whether debug mode is enabled or disabled after this method completes.
	 */
	const toggleDebugMode = () => {
		const integrationDebugPreviouslyEnabled = isDebugEnabled();

		localStorage.setItem(
			integrationDebugStorageName,
			`${!integrationDebugPreviouslyEnabled}`,
		);

		return !integrationDebugPreviouslyEnabled;
	};

	// Now let's register the console commands for enabling and disabling debug mode.
	registerConsoleCommands({
		isDebugModeEnabled: isDebugEnabled,
		enableDebugMode,
		disableDebugMode,
		toggleDebugMode,
	});

	// This is the only function we have to export, since we don't set debug mode programmatically.
	return {
		isDebugEnabled,
	};
})();

// Settings about which types of dice the integration is enabled for specific dice.
/**
 * An object listing whether the integration is enabled for a all known types of dice.
 */
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

/**
 * A listener that is interested in whether the integration is enabled for specific types of dice.
 */
export interface IntegrationEnabledForDiceListener {
	/**
	 * Optional predicate.
	 * If present, only changes for dice for which the predicate returns <code>true</code> will trigger the callback.
	 * If not present, all such changes will trigger the callback.
	 *
	 * @param dieSizes for which the enablement has changed.
	 * @returns <code>true</code> if the callback should be triggered for this change, <code>false</code> otherwise.
	 */
	predicate?: (dieSizes: PixelDieType[]) => boolean;
	/**
	 * A function that will be called when the integration is enabled for die types that the predicate accepts, or always if no predicate exists.
	 * @param integrationEnabledForDice
	 * @returns {void}
	 */
	callback: (integrationEnabledForDice: IntegrationEnabledForDice) => void;
}

export const {
	registerIntegrationEnabledForDiceListener,
	getEnabledForDiceOverview,
	isEnabledForDieType,
	updateEnabledForDice,
	setEnabledForDieType,
	toggleEnabledForDieType,
} = (() => {
	const enabledForDiceListeners: IntegrationEnabledForDiceListener[] = [];

	/**
	 * Allows registering a listener that will be called when the integration is enabled for dice that match the given predicate.
	 *
	 * @param listerner to be registered.
	 */
	const registerIntegrationEnabledForDiceListener = (
		listerner: IntegrationEnabledForDiceListener,
	): void => {
		enabledForDiceListeners.push(listerner);
	};

	/**
	 * The name of the local storage variable that stores which dice the integration is enabled for.
	 */
	const integrationEnabledForDiceStorageName =
		"pixelsIntegrationEnabledForDice";

	/**
	 * Retrieve an overview over all dice types and whether they are enabled or not.
	 */
	const getEnabledForDiceOverview = (): IntegrationEnabledForDice => {
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

	/**
	 * Check whether the integration is enabled for a specific type of die.
	 *
	 * @param dieType for which the enablement should be checked.
	 * @returns <code>true</code> if the integration is enabled for this type of die, <code>false</code> otherwise.
	 */
	const isEnabledForDieType = (dieType: PixelDieType | "dF") => {
		if (dieType === "unknown") {
			return false;
		}
		let type = dieType;
		if (type === "d6fudge") {
			type = "dF";
		}
		if (type === "d6pipped") {
			type = "d6";
		}
		return getEnabledForDiceOverview()[type];
	};

	/**
	 * Updates which die types the integration is enabled for.
	 *
	 * @param updatedSettings a (potentially partial) object listing which dice the integration is enabled for. Any die type not mentioned will remain unchanged.
	 * @returns an object containing all die types and whether they are enabled or not.
	 */
	const updateEnabledForDice = (
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

		for (const listener of enabledForDiceListeners) {
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

	/**
	 * Sets whether the integration is enabled for a specific type of die.
	 *
	 * @param dieType for which the setting should be changed.
	 * @param enabled whether the integration is enabled for this type of die.
	 * @returns an object containing all die types and whether they are enabled or not.
	 */
	const setEnabledForDieType = (
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
		return updateEnabledForDice(updatedSettings);
	};

	/**
	 * Toggle whether the integration is enabled for a specific type of die or not.
	 *
	 * @param dieType for which the setting should be changed.
	 * @returns an object containing all die types and whether they are enabled or not.
	 */
	const toggleEnabledForDieType = (
		dieType: PixelDieType | "dF",
	): IntegrationEnabledForDice => {
		const integrationEnabledForDice = getEnabledForDiceOverview();
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
		return setEnabledForDieType(dieType, !currentlyEnabled);
	};

	// Now let's register the console commands for enabling and disabling the integration for specific dice.
	registerConsoleCommands({
		isEnabledForDieType,
		enableForDieType: (
			dieType: PixelDieType | "dF",
		): IntegrationEnabledForDice => setEnabledForDieType(dieType, true),
		disableForDieType: (
			dieType: PixelDieType | "dF",
		): IntegrationEnabledForDice => setEnabledForDieType(dieType, false),
		toggleForDieType: toggleEnabledForDieType,
	});

	// And these functions will be exported, so they are available throughout the integration code.
	return {
		registerIntegrationEnabledForDiceListener,
		getEnabledForDiceOverview,
		isEnabledForDieType,
		updateEnabledForDice,
		setEnabledForDieType,
		toggleEnabledForDieType,
	};
})();
