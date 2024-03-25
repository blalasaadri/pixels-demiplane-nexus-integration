import type {
	PixelColorway,
	PixelDieType,
} from "@systemic-games/pixels-web-connect";
import {
	Color,
	repeatConnect,
	requestPixel,
} from "@systemic-games/pixels-web-connect";
import {
	registerConsoleCommands,
	registerConsoleVariables,
} from "./console-commands";
import { isDebugEnabled, setEnabledForCharacter } from "./integration-utils";
import { updateEnabledForDice } from "./integration-utils";
import type { DiceSize } from "./types";

export type DieType =
	| PixelDieType
	| "d4virtual"
	| "d6virtual"
	| "d8virtual"
	| "d10virtual"
	| "d00virtual"
	| "d12virtual"
	| "d20virtual"
	| "dFvirtual"
	| "d4demiplane"
	| "d6demiplane"
	| "d8demiplane"
	| "d10demiplane"
	| "d12demiplane"
	| "d20demiplane"
	| "d100demiplane"
	| "dFvirtual";

export type DieColorway = PixelColorway | "virtual" | "demiplane";

interface SuccessfullRollEvent {
	success: true;
	diceSize: DiceSize;
	face: number;
	dieType: DieType;
	dieColorway: DieColorway;
	dieName: string;
	dieId: number;
}

interface FailedRollEvent {
	success: false;
	diceSize: DiceSize;
	dieType: DieType;
}

export type RollEvent = SuccessfullRollEvent | FailedRollEvent;

export interface RollEventListener {
	diceSize: DiceSize;
	callback: (event: RollEvent) => void;
}

const listeners: {
	d4: RollEventListener[];
	d6: RollEventListener[];
	d8: RollEventListener[];
	d10: RollEventListener[];
	d00: RollEventListener[];
	d12: RollEventListener[];
	d20: RollEventListener[];
	dF: RollEventListener[];
} = {
	d4: [],
	d6: [],
	d8: [],
	d10: [],
	d00: [],
	d12: [],
	d20: [],
	dF: [],
};

const listExpectedRolls = (): {
	d4: number;
	d6: number;
	d8: number;
	d10: number;
	d00: number;
	d12: number;
	d20: number;
	dF: number;
} => {
	return {
		d4: listeners.d4.length,
		d6: listeners.d6.length,
		d8: listeners.d8.length,
		d10: listeners.d10.length,
		d00: listeners.d00.length,
		d12: listeners.d12.length,
		d20: listeners.d20.length,
		dF: listeners.dF.length,
	};
};
registerConsoleCommands({ listExpectedRolls });
registerConsoleVariables({ expectedRolls: listExpectedRolls() });

export const registerRollListener = (listener: RollEventListener): void => {
	switch (listener.diceSize) {
		case 4: {
			listeners.d4.push(listener);
			break;
		}
		case 6: {
			listeners.d6.push(listener);
			break;
		}
		case 8: {
			listeners.d8.push(listener);
			break;
		}
		case 10: {
			listeners.d10.push(listener);
			break;
		}
		case 12: {
			listeners.d12.push(listener);
			break;
		}
		case 20: {
			listeners.d20.push(listener);
			break;
		}
		case 100: {
			listeners.d10.push(listener);
			listeners.d00.push(listener);
			break;
		}
		case "F": {
			listeners.dF.push(listener);
			break;
		}
		default: {
			console.error(`Expecting roll of unknown die size ${listener.diceSize}`);
		}
	}
	registerConsoleVariables({ expectedRolls: listExpectedRolls() });
};

const handleDieRolled = (
	dieType: DieType,
	face: number,
	colorway: DieColorway,
	dieName: string,
	dieId: number,
): RollEvent => {
	let listener: RollEventListener | undefined;
	let diceSize: DiceSize | undefined;
	switch (dieType) {
		case "d4": {
			diceSize = 4;
			listener = listeners.d4.shift();
			break;
		}
		case "d6pipped":
		case "d6": {
			diceSize = 6;
			listener = listeners.d6.shift();
			break;
		}
		case "d8": {
			diceSize = 8;
			listener = listeners.d8.shift();
			break;
		}
		case "d10": {
			diceSize = 10;
			listener = listeners.d10.shift();
			break;
		}
		case "d00": {
			diceSize = 100;
			listener = listeners.d00.shift();
			break;
		}
		case "d12": {
			diceSize = 12;
			listener = listeners.d12.shift();
			break;
		}
		case "d20": {
			diceSize = 20;
			listener = listeners.d20.shift();
			break;
		}
		case "d6fudge": {
			diceSize = "F";
			listener = listeners.dF.shift();
			break;
		}
		default: {
			console.error(`Unknown die type ${dieType} rolled.`);
		}
	}
	let rollEvent: RollEvent;
	if (diceSize) {
		rollEvent = {
			success: true,
			diceSize,
			face,
			dieType,
			dieColorway: colorway,
			dieName: dieName,
			dieId: dieId,
		};
	} else {
		rollEvent = {
			success: false,
			diceSize: "unknown",
			dieType: "unknown",
		};
	}
	if (listener && rollEvent.success) {
		if (isDebugEnabled()) {
			console.log({
				description: "About to call roll listener",
				listener,
			});
		}
		listener.callback(rollEvent);

		registerConsoleVariables({ expectedRolls: listExpectedRolls() });
	}
	return rollEvent;
};

export interface ConnectedDie {
	id: number;
	name: string;
	colorway: PixelColorway;
	dieType: PixelDieType;
}

export interface ConnectedDice {
	d4: ConnectedDie[];
	d6: ConnectedDie[];
	d8: ConnectedDie[];
	d10: ConnectedDie[];
	d00: ConnectedDie[];
	d12: ConnectedDie[];
	d20: ConnectedDie[];
	dF: ConnectedDie[];
}

const connectedDice: ConnectedDice = {
	d4: [],
	d6: [],
	d8: [],
	d10: [],
	d00: [],
	d12: [],
	d20: [],
	dF: [],
};

interface DiceConnectionListener {
	predicate?: (connectedDie: ConnectedDie) => boolean;
	callback: (connectedDice: ConnectedDice) => Promise<void>;
}

const diceConnectionListeners: DiceConnectionListener[] = [];

export const registerDiceConnectionListener = (
	diceConnectionListener: DiceConnectionListener,
): void => {
	diceConnectionListeners.push(diceConnectionListener);
};

const notifyDiceConnectionListeners = async (
	connectedDie: ConnectedDie,
): Promise<void> => {
	console.log({
		description: "Calling dice connection listeners",
		connectedDie,
		diceConnectionListeners,
	});
	for (const listener of diceConnectionListeners) {
		if (!listener.predicate || listener.predicate(connectedDie)) {
			listener.callback(connectedDice);
		}
	}
};

export const getCurrentlyConnectedDice = (): ConnectedDice =>
	JSON.parse(JSON.stringify(connectedDice));
registerConsoleCommands({ getConnectedDice: getCurrentlyConnectedDice });

export const connectToDie = async () => {
	const pixel = await requestPixel();

	pixel.addEventListener("status", (status) => {
		const {
			dieType,
			colorway: pixelColorway,
			name: pixelName,
			pixelId,
		} = pixel;
		const connectedDie: ConnectedDie = {
			id: pixelId,
			name: pixelName,
			colorway: pixelColorway,
			dieType,
		};
		if (isDebugEnabled()) {
			console.log({
				description: "Pixels die status changed",
				connectedDie,
				batteryLevel: pixel.batteryLevel,
				status,
			});
		}
		switch (status) {
			case "ready": {
				switch (dieType) {
					case "d4": {
						connectedDice.d4.push(connectedDie);
						break;
					}
					case "d6":
					case "d6pipped": {
						connectedDice.d6.push(connectedDie);
						break;
					}
					case "d8": {
						connectedDice.d8.push(connectedDie);
						break;
					}
					case "d10": {
						connectedDice.d10.push(connectedDie);
						break;
					}
					case "d00": {
						connectedDice.d00.push(connectedDie);
						break;
					}
					case "d12": {
						connectedDice.d12.push(connectedDie);
						break;
					}
					case "d20": {
						connectedDice.d20.push(connectedDie);
						break;
					}
					case "d6fudge": {
						connectedDice.dF.push(connectedDie);
						break;
					}
				}
				updateEnabledForDice({
					[dieType]: true,
				});
				notifyDiceConnectionListeners(connectedDie);
				break;
			}
			case "disconnecting":
			case "disconnected": {
				const disconnectedDice: ConnectedDie[] = [];
				switch (dieType) {
					case "d4": {
						const matchingDice = connectedDice.d4.filter(
							({ id }) => id === pixelId,
						);
						if (matchingDice.length > 0) {
							connectedDice.d4 = connectedDice.d4.filter(
								({ id }) => id !== pixelId,
							);
							disconnectedDice.push(...matchingDice);
						}
						break;
					}
					case "d6":
					case "d6pipped": {
						const matchingDice = connectedDice.d6.filter(
							({ id }) => id === pixelId,
						);
						if (matchingDice.length > 0) {
							connectedDice.d6 = connectedDice.d6.filter(
								({ id }) => id !== pixelId,
							);
							disconnectedDice.push(...matchingDice);
						}
						break;
					}
					case "d8": {
						const matchingDice = connectedDice.d8.filter(
							({ id }) => id === pixelId,
						);
						if (matchingDice.length > 0) {
							connectedDice.d8 = connectedDice.d8.filter(
								({ id }) => id !== pixelId,
							);
							disconnectedDice.push(...matchingDice);
						}
						break;
					}
					case "d10":
					case "d00": {
						const matchingD10s = connectedDice.d10.filter(
							({ id }) => id === pixelId,
						);
						if (matchingD10s.length > 0) {
							connectedDice.d10 = connectedDice.d10.filter(
								({ id }) => id !== pixelId,
							);
							disconnectedDice.push(...matchingD10s);
						}

						const matchingD00s = connectedDice.d00.filter(
							({ id }) => id === pixelId,
						);
						if (matchingD00s.length > 0) {
							connectedDice.d00 = connectedDice.d00.filter(
								({ id }) => id !== pixelId,
							);
							disconnectedDice.push(...matchingD00s);
						}
						break;
					}
					case "d12": {
						const matchingDice = connectedDice.d12.filter(
							({ id }) => id === pixelId,
						);
						if (matchingDice.length > 0) {
							connectedDice.d12 = connectedDice.d12.filter(
								({ id }) => id !== pixelId,
							);
						}
						disconnectedDice.push(...matchingDice);
						break;
					}
					case "d20": {
						const matchingDice = connectedDice.d20.filter(
							({ id }) => id === pixelId,
						);
						if (matchingDice.length > 0) {
							connectedDice.d20 = connectedDice.d20.filter(
								({ id }) => id !== pixelId,
							);
							disconnectedDice.push(...matchingDice);
						}
						break;
					}
					case "d6fudge": {
						const matchingDice = connectedDice.dF.filter(
							({ id }) => id === pixelId,
						);
						if (matchingDice.length > 0) {
							connectedDice.dF = connectedDice.dF.filter(
								({ id }) => id !== pixelId,
							);
							disconnectedDice.push(...matchingDice);
						}
						break;
					}
					case "unknown": {
						console.error(
							`Unknown die type ${dieType} disconnecting. Don't know, what to do about it.`,
						);
					}
				}
				updateEnabledForDice({
					d4: connectedDice.d4.length > 0,
					d6: connectedDice.d6.length > 0,
					d8: connectedDice.d8.length > 0,
					d10: connectedDice.d10.length > 0,
					d00: connectedDice.d00.length > 0,
					d12: connectedDice.d12.length > 0,
					d20: connectedDice.d20.length > 0,
					dF: connectedDice.dF.length > 0,
				});
				for (const disconnectedDie of disconnectedDice) {
					notifyDiceConnectionListeners(disconnectedDie);
				}
				break;
			}
		}
	});

	await repeatConnect(pixel, {
		retries: 10,
	});
	// Blink the die to indicate a successful connection
	pixel.blink(Color.brightBlue, {
		count: 3,
		duration: 2000,
		fade: 0.5,
	});

	// If we're connecting a die, we want to enable the integration (if it isn't already)
	setEnabledForCharacter(true);

	const { dieType, colorway: pixelColorway, name: pixelName, pixelId } = pixel;
	pixel.addEventListener("roll", (face) => {
		if (isDebugEnabled()) {
			console.log({
				description: "Pixels die rolled",
				pixelColorway,
				batteryLevel: pixel.batteryLevel,
				pixelName,
				dieType,
				pixelId,
			});
		}
		handleDieRolled(dieType, face, pixelColorway, pixelName, pixelId);
	});
};

const registerVirtualRollers = () => {
	const rollVirtualD4 = (count = 1): RollEvent[] => {
		const cleanCount = Math.max(count, 1);
		const results: RollEvent[] = new Array(cleanCount);
		for (let i = 0; i < cleanCount; i++) {
			const randomFace = Math.round(Math.random() * 4) + 1;
			results[i] = handleDieRolled(
				"d4",
				randomFace,
				"virtual",
				"Virtual d4",
				-4,
			);
		}
		return results;
	};

	const rollVirtualD6 = (count = 1): RollEvent[] => {
		const cleanCount = Math.max(count, 1);
		const results: RollEvent[] = new Array(cleanCount);
		for (let i = 0; i < cleanCount; i++) {
			const randomFace = Math.round(Math.random() * 6) + 1;
			results[i] = handleDieRolled(
				"d6",
				randomFace,
				"virtual",
				"Virtual d6",
				-6,
			);
		}
		return results;
	};

	const rollVirtualD8 = (count = 1): RollEvent[] => {
		const cleanCount = Math.max(count, 1);
		const results: RollEvent[] = new Array(cleanCount);
		for (let i = 0; i < cleanCount; i++) {
			const randomFace = Math.round(Math.random() * 8) + 1;
			results[i] = handleDieRolled(
				"d8",
				randomFace,
				"virtual",
				"Virtual d8",
				-8,
			);
		}
		return results;
	};

	const rollVirtualD10 = (count = 1): RollEvent[] => {
		const cleanCount = Math.max(count, 1);
		const results: RollEvent[] = new Array(cleanCount);
		for (let i = 0; i < cleanCount; i++) {
			const randomFace = Math.round(Math.random() * 10);
			results[i] = handleDieRolled(
				"d10",
				randomFace,
				"virtual",
				"Virtual d10",
				-10,
			);
		}
		return results;
	};

	const rollVirtualD00 = (count = 1): RollEvent[] => {
		const cleanCount = Math.max(count, 1);
		const results: RollEvent[] = new Array(cleanCount);
		for (let i = 0; i < cleanCount; i++) {
			const randomFace = Math.round(Math.random() * 10) * 10;
			results[i] = handleDieRolled(
				"d00",
				randomFace,
				"virtual",
				"Virtual d00",
				-100,
			);
		}
		return results;
	};

	const rollVirtualD12 = (count = 1): RollEvent[] => {
		const cleanCount = Math.max(count, 1);
		const results: RollEvent[] = new Array(cleanCount);
		for (let i = 0; i < cleanCount; i++) {
			const randomFace = Math.round(Math.random() * 12) + 1;
			results[i] = handleDieRolled(
				"d12",
				randomFace,
				"virtual",
				"Virtual d12",
				-12,
			);
		}
		return results;
	};

	const rollVirtualD20 = (count = 1): RollEvent[] => {
		const cleanCount = Math.max(count, 1);
		const results: RollEvent[] = new Array(cleanCount);
		for (let i = 0; i < cleanCount; i++) {
			const randomFace = Math.round(Math.random() * 20) + 1;
			results[i] = handleDieRolled(
				"d20",
				randomFace,
				"virtual",
				"Virtual d20",
				-20,
			);
		}
		return results;
	};

	const rollVirtualDF = (count = 1): RollEvent[] => {
		const cleanCount = Math.max(count, 1);
		const results: RollEvent[] = new Array(cleanCount);
		for (let i = 0; i < cleanCount; i++) {
			const randomFace = Math.round(Math.random() * 2) - 1;
			results[i] = handleDieRolled(
				"d6fudge",
				randomFace,
				"virtual",
				"Virtual dF",
				-3,
			);
		}
		return results;
	};

	registerConsoleCommands({
		rollVirtualD4,
		rollVirtualD6,
		rollVirtualD8,
		rollVirtualD10,
		rollVirtualD00,
		rollVirtualD12,
		rollVirtualD20,
		rollVirtualDF,
	});

	return {
		rollVirtualD4,
		rollVirtualD6,
		rollVirtualD8,
		rollVirtualD10,
		rollVirtualD00,
		rollVirtualD12,
		rollVirtualD20,
		rollVirtualDF,
	};
};
registerVirtualRollers();

const registerRollCancelers = () => {
	const cancelD4Roll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: 4,
			dieType: "d4virtual",
		};
		listeners?.d4.shift()?.callback(rollEvent);

		registerConsoleVariables({ expectedRolls: listExpectedRolls() });

		return rollEvent;
	};

	const cancelD6Roll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: 6,
			dieType: "d6virtual",
		};
		listeners?.d6.shift()?.callback(rollEvent);

		registerConsoleVariables({ expectedRolls: listExpectedRolls() });

		return rollEvent;
	};

	const cancelD8Roll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: 8,
			dieType: "d8virtual",
		};
		listeners?.d8.shift()?.callback(rollEvent);

		registerConsoleVariables({ expectedRolls: listExpectedRolls() });

		return rollEvent;
	};

	const cancelD10Roll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: 10,
			dieType: "d10virtual",
		};
		listeners?.d10.shift()?.callback(rollEvent);

		registerConsoleVariables({ expectedRolls: listExpectedRolls() });

		return rollEvent;
	};

	const cancelD00Roll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: 100,
			dieType: "d00virtual",
		};
		listeners?.d00.shift()?.callback(rollEvent);

		registerConsoleVariables({ expectedRolls: listExpectedRolls() });

		return rollEvent;
	};

	const cancelD12Roll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: 12,
			dieType: "d12virtual",
		};
		listeners?.d12.shift()?.callback(rollEvent);

		registerConsoleVariables({ expectedRolls: listExpectedRolls() });

		return rollEvent;
	};

	const cancelD20Roll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: 20,
			dieType: "d20virtual",
		};
		listeners?.d20.shift()?.callback(rollEvent);

		registerConsoleVariables({ expectedRolls: listExpectedRolls() });

		return rollEvent;
	};

	const cancelD100Roll = (): FailedRollEvent[] => {
		const d10RollEvent: FailedRollEvent = {
			success: false,
			diceSize: 10,
			dieType: "d10virtual",
		};
		listeners?.d10.shift()?.callback(d10RollEvent);
		const d00RollEvent: FailedRollEvent = {
			success: false,
			diceSize: 100,
			dieType: "d00virtual",
		};
		listeners?.d00.shift()?.callback(d00RollEvent);

		registerConsoleVariables({ expectedRolls: listExpectedRolls() });

		return [d10RollEvent, d00RollEvent];
	};

	const cancelDFRoll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: "F",
			dieType: "dFvirtual",
		};
		listeners?.dF.shift()?.callback(rollEvent);

		registerConsoleVariables({ expectedRolls: listExpectedRolls() });

		return rollEvent;
	};

	registerConsoleCommands({
		cancelD4Roll,
		cancelD6Roll,
		cancelD8Roll,
		cancelD10Roll,
		cancelD00Roll,
		cancelD12Roll,
		cancelD20Roll,
		cancelD100Roll,
		cancelDFRoll,
	});

	return {
		cancelD4Roll,
		cancelD6Roll,
		cancelD8Roll,
		cancelD10Roll,
		cancelD12Roll,
		cancelD20Roll,
		cancelD100Roll,
		cancelDFRoll,
	};
};
registerRollCancelers();
