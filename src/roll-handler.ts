import type {
	PixelColorway,
	PixelDieType,
} from "@systemic-games/pixels-web-connect";
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
// @ts-ignore
unsafeWindow.listExpectedRolls = listExpectedRolls;
// @ts-ignore
unsafeWindow.expectedRolls = listExpectedRolls();

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
	// @ts-ignore
	unsafeWindow.expectedRolls = listExpectedRolls();
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
			listener = listeners?.d4.shift();
			break;
		}
		case "d6pipped":
		case "d6": {
			diceSize = 6;
			listener = listeners?.d6.shift();
			break;
		}
		case "d8": {
			diceSize = 8;
			listener = listeners?.d8.shift();
			break;
		}
		case "d10": {
			diceSize = 10;
			listener = listeners?.d10.shift();
			break;
		}
		case "d00": {
			diceSize = 100;
			listener = listeners?.d00.shift();
			break;
		}
		case "d12": {
			diceSize = 12;
			listener = listeners?.d12.shift();
			break;
		}
		case "d20": {
			diceSize = 20;
			listener = listeners?.d20.shift();
			break;
		}
		case "d6fudge": {
			diceSize = "F";
			listener = listeners?.dF.shift();
			break;
		}
		default: {
			console.error(`Unknown die type ${dieType} rolled.`);
		}
	}
	let rollEvent: RollEvent;
	if (listener && diceSize) {
		rollEvent = {
			success: true,
			diceSize,
			face,
			dieType,
			dieColorway: colorway,
			dieName: dieName,
			dieId: dieId,
		};
		listener.callback(rollEvent);

		// @ts-ignore
		unsafeWindow.expectedRolls = listExpectedRolls();
	} else {
		rollEvent = {
			success: false,
			diceSize: "unknown",
			dieType: "unknown",
		};
	}
	return rollEvent;
};

const registerVirtualRollers = () => {
	const rollVirtualD4 = (): RollEvent => {
		const randomFace = Math.round(Math.random() * 4) + 1;
		return handleDieRolled("d4", randomFace, "virtual", "Virtual d4", -4);
	};

	const rollVirtualD6 = (): RollEvent => {
		const randomFace = Math.round(Math.random() * 6) + 1;
		return handleDieRolled("d6", randomFace, "virtual", "Virtual d6", -6);
	};

	const rollVirtualD8 = (): RollEvent => {
		const randomFace = Math.round(Math.random() * 8) + 1;
		return handleDieRolled("d8", randomFace, "virtual", "Virtual d8", -8);
	};

	const rollVirtualD10 = (): RollEvent => {
		const randomFace = Math.round(Math.random() * 10);
		return handleDieRolled("d10", randomFace, "virtual", "Virtual d10", -10);
	};

	const rollVirtualD00 = (): RollEvent => {
		const randomFace = Math.round(Math.random() * 10) * 10;
		return handleDieRolled("d00", randomFace, "virtual", "Virtual d00", -100);
	};

	const rollVirtualD12 = (): RollEvent => {
		const randomFace = Math.round(Math.random() * 12) + 1;
		return handleDieRolled("d12", randomFace, "virtual", "Virtual d12", -12);
	};

	const rollVirtualD20 = (): RollEvent => {
		const randomFace = Math.round(Math.random() * 20) + 1;
		return handleDieRolled("d20", randomFace, "virtual", "Virtual d20", -20);
	};

	const rollVirtualDF = (): RollEvent => {
		const randomFace = Math.round(Math.random() * 2) - 1;
		return handleDieRolled("d6fudge", randomFace, "virtual", "Virtual dF", -3);
	};

	// @ts-ignore
	unsafeWindow.rollVirtualD4 = rollVirtualD4;
	// @ts-ignore
	unsafeWindow.rollVirtualD6 = rollVirtualD6;
	// @ts-ignore
	unsafeWindow.rollVirtualD8 = rollVirtualD8;
	// @ts-ignore
	unsafeWindow.rollVirtualD10 = rollVirtualD10;
	// @ts-ignore
	unsafeWindow.rollVirtualD00 = rollVirtualD00;
	// @ts-ignore
	unsafeWindow.rollVirtualD12 = rollVirtualD12;
	// @ts-ignore
	unsafeWindow.rollVirtualD20 = rollVirtualD20;
	// @ts-ignore
	unsafeWindow.rollVirtualDF = rollVirtualDF;

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

		// @ts-ignore
		unsafeWindow.expectedRolls = listExpectedRolls();

		return rollEvent;
	};

	const cancelD6Roll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: 6,
			dieType: "d6virtual",
		};
		listeners?.d6.shift()?.callback(rollEvent);

		// @ts-ignore
		unsafeWindow.expectedRolls = listExpectedRolls();

		return rollEvent;
	};

	const cancelD8Roll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: 8,
			dieType: "d8virtual",
		};
		listeners?.d8.shift()?.callback(rollEvent);

		// @ts-ignore
		unsafeWindow.expectedRolls = listExpectedRolls();

		return rollEvent;
	};

	const cancelD10Roll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: 10,
			dieType: "d10virtual",
		};
		listeners?.d10.shift()?.callback(rollEvent);

		// @ts-ignore
		unsafeWindow.expectedRolls = listExpectedRolls();

		return rollEvent;
	};

	const cancelD00Roll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: 100,
			dieType: "d00virtual",
		};
		listeners?.d00.shift()?.callback(rollEvent);

		// @ts-ignore
		unsafeWindow.expectedRolls = listExpectedRolls();

		return rollEvent;
	};

	const cancelD12Roll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: 12,
			dieType: "d12virtual",
		};
		listeners?.d12.shift()?.callback(rollEvent);

		// @ts-ignore
		unsafeWindow.expectedRolls = listExpectedRolls();

		return rollEvent;
	};

	const cancelD20Roll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: 20,
			dieType: "d20virtual",
		};
		listeners?.d20.shift()?.callback(rollEvent);

		// @ts-ignore
		unsafeWindow.expectedRolls = listExpectedRolls();

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

		// @ts-ignore
		unsafeWindow.expectedRolls = listExpectedRolls();

		return [d10RollEvent, d00RollEvent];
	};

	const cancelDFRoll = (): FailedRollEvent => {
		const rollEvent: FailedRollEvent = {
			success: false,
			diceSize: "F",
			dieType: "dFvirtual",
		};
		listeners?.dF.shift()?.callback(rollEvent);

		// @ts-ignore
		unsafeWindow.expectedRolls = listExpectedRolls();

		return rollEvent;
	};

	// @ts-ignore
	unsafeWindow.cancelD4Roll = cancelD4Roll;
	// @ts-ignore
	unsafeWindow.cancelD6Roll = cancelD6Roll;
	// @ts-ignore
	unsafeWindow.cancelD8Roll = cancelD8Roll;
	// @ts-ignore
	unsafeWindow.cancelD10Roll = cancelD10Roll;
	// @ts-ignore
	unsafeWindow.cancelD00Roll = cancelD00Roll;
	// @ts-ignore
	unsafeWindow.cancelD12Roll = cancelD12Roll;
	// @ts-ignore
	unsafeWindow.cancelD20Roll = cancelD20Roll;
	// @ts-ignore
	unsafeWindow.cancelD100Roll = cancelD100Roll;
	// @ts-ignore
	unsafeWindow.cancelDFRoll = cancelDFRoll;

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
