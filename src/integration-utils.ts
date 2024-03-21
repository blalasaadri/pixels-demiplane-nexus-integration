const characterSheetUrlRegex =
	/https:\/\/app.demiplane.com\/nexus\/(?<gameSystem>[a-zA-Z0-9-]+)\/character-sheet\/(?<characterId>[a-z0-9-]+)/;
const characterSheetInfo = (): {
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
const isDebugEnabled = (): boolean => {
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

export { characterSheetInfo, isEnabled, toggleEnabled, isDebugEnabled };
