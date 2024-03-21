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
export interface RollRequest {
	d4: number;
	d6: number;
	d8: number;
	d10: number;
	d12: number;
	d20: number;
	d100: number;
	dF: number;
	modifier: number;
}

export const stringifyRollRequest = (rollRequest: RollRequest): string => {
	const parts: string[] = [];
	if (rollRequest.d4) {
		parts.push(`${rollRequest.d4}d4`);
	}
	if (rollRequest.d6) {
		parts.push(`${rollRequest.d6}d6`);
	}
	if (rollRequest.d8) {
		parts.push(`${rollRequest.d8}d8`);
	}
	if (rollRequest.d100) {
		parts.push(`${rollRequest.d10 + rollRequest.d100}d10`);
		parts.push(`${rollRequest.d100}d00`);
	} else if (rollRequest.d10) {
		parts.push(`${rollRequest.d10}d10`);
	}
	if (rollRequest.d12) {
		parts.push(`${rollRequest.d12}d12`);
	}
	if (rollRequest.d20) {
		parts.push(`${rollRequest.d20}d20`);
	}
	if (rollRequest.dF) {
		parts.push(`${rollRequest.d12}dF`);
	}
	if (rollRequest.modifier) {
		parts.push(`${rollRequest.modifier}`);
	}
	return parts.join("+");
};

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

	const rollRequest: RollRequest = {
		d4: countDiceMatchingRegex(rollParts, d4Regex),
		d6: countDiceMatchingRegex(rollParts, d6Regex),
		d8: countDiceMatchingRegex(rollParts, d8Regex),
		d10: countDiceMatchingRegex(rollParts, d10Regex),
		d12: countDiceMatchingRegex(rollParts, d12Regex),
		d20: countDiceMatchingRegex(rollParts, d20Regex),
		dF: countDiceMatchingRegex(rollParts, dFRegex),
		d100: countDiceMatchingRegex(rollParts, d100Regex),
		modifier: countDiceMatchingRegex(rollParts, modifierRegex),
	};

	const unusedParts = rollParts
		.filter((rollPart) => !d4Regex.test(rollPart))
		.filter((rollPart) => !d6Regex.test(rollPart))
		.filter((rollPart) => !d8Regex.test(rollPart))
		.filter((rollPart) => !d10Regex.test(rollPart))
		.filter((rollPart) => !d12Regex.test(rollPart))
		.filter((rollPart) => !d20Regex.test(rollPart))
		.filter((rollPart) => !d100Regex.test(rollPart))
		.filter((rollPart) => !dFRegex.test(rollPart))
		.filter((rollPart) => !modifierRegex.test(rollPart));
	if (unusedParts.length > 0) {
		console.error({
			description:
				"The roll query contained parts that could not be interpreted",
			rollQuery,
			rollParts,
			rollRequest,
			unusedParts,
		});
	}

	return rollRequest;
};
