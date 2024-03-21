import { integrationEnabledForDice, isDebugEnabled } from "./integration-utils";

const extractRollParts = (rollQuery: string): string[] => {
	return rollQuery
		?.replace(/%2B/g, "+")
		?.replace(/-/g, "+-")
		?.replace(/\++/g, "+")
		?.split("+");
};

/**
 * An object containing fields for each die type (d4, d6, d8, d10, d12, d20, d100 and dF for fudge dice),
 * listing how often that type of die should be rolled.
 * It also containts a constant modifier value that should be added to the final result.
 */
export class RollRequest {
	private _d4 = 0;
	private _d6 = 0;
	private _d8 = 0;
	private _d10 = 0;
	private _d12 = 0;
	private _d20 = 0;
	private _d100 = 0;
	private _dF = 0;
	private _modifier = 0;
	private _unusedParts?: string;

	set d4(value: number) {
		if (value > 0) {
			this._d4 = value;
		}
	}

	get d4(): number {
		return this._d4;
	}

	set d6(value: number) {
		if (value > 0) {
			this._d6 = value;
		}
	}

	get d6(): number {
		return this._d6;
	}

	set d8(value: number) {
		if (value > 0) {
			this._d8 = value;
		}
	}

	get d8(): number {
		return this._d8;
	}

	set d10(value: number) {
		if (value > 0) {
			this._d10 = value;
		}
	}

	get d10(): number {
		return this._d10;
	}

	set d12(value: number) {
		if (value > 0) {
			this._d12 = value;
		}
	}

	get d12(): number {
		return this._d12;
	}

	set d20(value: number) {
		if (value > 0) {
			this._d20 = value;
		}
	}

	get d20(): number {
		return this._d20;
	}

	set d100(value: number) {
		if (value > 0) {
			this._d100 = value;
		}
	}

	get d100(): number {
		return this._d100;
	}

	set dF(value: number) {
		if (value > 0) {
			this._dF = value;
		}
	}

	get dF(): number {
		return this._dF;
	}

	set modifier(value: number) {
		this._modifier = value;
	}

	get modifier(): number {
		return this._modifier;
	}

	set unusedParts(value: string | undefined) {
		this._unusedParts = value;
	}

	get unusedParts(): string | undefined {
		return this._unusedParts;
	}

	containsRolls(): boolean {
		return (
			this.d4 > 0 ||
			this.d6 > 0 ||
			this.d8 > 0 ||
			this.d10 > 0 ||
			this.d100 > 0 ||
			this.d12 > 0 ||
			this.d20 > 0 ||
			this.dF > 0
		);
	}

	stringify(includeModifier = true, separator = ", "): string {
		const parts: string[] = [];
		if (this.d4) {
			parts.push(`${this.d4}D4`);
		}
		if (this.d6) {
			parts.push(`${this.d6}D6`);
		}
		if (this.d8) {
			parts.push(`${this.d8}D8`);
		}
		if (this.d100) {
			parts.push(`${this.d10 + this.d100}D10`);
			parts.push(`${this.d100}D00`);
		} else if (this.d10) {
			parts.push(`${this.d10}D10`);
		}
		if (this.d12) {
			parts.push(`${this.d12}D12`);
		}
		if (this.d20) {
			parts.push(`${this.d20}D20`);
		}
		if (this.dF) {
			parts.push(`${this.d12}DF`);
		}
		if (includeModifier && this.modifier) {
			parts.push(`${modifierRegex}`);
		}
		return parts.join(separator);
	}
}

const countDiceMatchingRegex = (rollParts: string[], regex: RegExp): number =>
	rollParts
		.filter((rollPart) => regex.test(rollPart))
		.map((rollPart) => {
			const matches = rollPart.match(regex);
			return Number.parseInt(matches?.groups?.count || "0");
		})
		.reduce((a, b) => a + b, 0);

const d4Regex = /^(?<count>\d+)d4$/;
const d6Regex = /^(?<count>\d+)d6$/;
const d8Regex = /^(?<count>\d+)d8$/;
const d10Regex = /^(?<count>\d+)d10$/;
const d100Regex = /^(?<count>\d+)d100$/;
const d12Regex = /^(?<count>\d+)d12$/;
const d20Regex = /^(?<count>\d+)d20$/;
const dFRegex = /^(?<count>\d+)dF$/;
const modifierRegex = /^(?<count>-?\d+)$/;

/**
 * A method for parsing the requested rolls into an object that is easier to handle.
 *
 * @param rollQuery the roll query, e.g. "3d6+3", "3d6%2B3", "1d20+9", "2d8+1d6+2", etc.
 * @returns an object listing how many of each possible dice should be rolled for this request
 */
export const parseRollRequest = (rollQuery: string): RollRequest => {
	const rollParts = extractRollParts(rollQuery);

	const enabledForDice = integrationEnabledForDice();

	const rollRequest = new RollRequest();
	if (enabledForDice.d4) {
		rollRequest.d4 = countDiceMatchingRegex(rollParts, d4Regex);
	}
	if (enabledForDice.d6) {
		rollRequest.d6 = countDiceMatchingRegex(rollParts, d6Regex);
	}
	if (enabledForDice.d8) {
		rollRequest.d8 = countDiceMatchingRegex(rollParts, d8Regex);
	}
	if (enabledForDice.d10) {
		rollRequest.d10 = countDiceMatchingRegex(rollParts, d10Regex);
	}
	if (enabledForDice.d12) {
		rollRequest.d12 = countDiceMatchingRegex(rollParts, d12Regex);
	}
	if (enabledForDice.d20) {
		rollRequest.d20 = countDiceMatchingRegex(rollParts, d20Regex);
	}
	if (enabledForDice.d10 && enabledForDice.d00) {
		rollRequest.d100 = countDiceMatchingRegex(rollParts, d100Regex);
	}
	rollRequest.modifier = countDiceMatchingRegex(rollParts, modifierRegex);

	const unusedParts = rollParts
		.filter((rollPart) => !(enabledForDice.d4 && d4Regex.test(rollPart)))
		.filter((rollPart) => !(enabledForDice.d6 && d6Regex.test(rollPart)))
		.filter((rollPart) => !(enabledForDice.d8 && d8Regex.test(rollPart)))
		.filter((rollPart) => !(enabledForDice.d10 && d10Regex.test(rollPart)))
		.filter((rollPart) => !(enabledForDice.d12 && d12Regex.test(rollPart)))
		.filter((rollPart) => !(enabledForDice.d20 && d20Regex.test(rollPart)))
		.filter(
			(rollPart) =>
				!(enabledForDice.d10 && enabledForDice.d00 && d100Regex.test(rollPart)),
		)
		.filter((rollPart) => !(enabledForDice.dF && dFRegex.test(rollPart)))
		.filter((rollPart) => !modifierRegex.test(rollPart));
	if (unusedParts.length > 0) {
		if (isDebugEnabled()) {
			console.log({
				description:
					"The roll query contained parts that could not be interpreted or dice types that are not currently enabled",
				rollQuery,
				rollParts,
				rollRequest,
				unusedParts,
			});
		}
		rollRequest.unusedParts = unusedParts.join("%2B");
	}

	return rollRequest;
};
