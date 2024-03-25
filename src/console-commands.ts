// biome-ignore lint/suspicious/noExplicitAny: To be able to register any type of function, we have to ignore the types in the function.
const pixelsIntegrationCommands: { [key: string]: any } = {};

if (!unsafeWindow) {
	// @ts-ignore
	unsafeWindow = window;
}

// @ts-ignore
unsafeWindow.pixelsIntegration = pixelsIntegrationCommands;

export const registerConsoleCommands = (
	// biome-ignore lint/suspicious/noExplicitAny: To be able to register any type of function, we have to ignore the types in the function.
	command: { [commandName: string]: (...args: any[]) => any },
): void => {
	for (const [commandName, commandFunction] of Object.entries(command)) {
		pixelsIntegrationCommands[commandName] = commandFunction;
	}
};

export const registerConsoleVariables = (
	// biome-ignore lint/complexity/noBannedTypes: To be able to register any type of variable, we have to allow for any object.
	variables: { [variableName: string]: number | string | boolean | Object },
): void => {
	for (const variable of Object.keys(variables)) {
		pixelsIntegrationCommands[variable] = variable;
	}
};
