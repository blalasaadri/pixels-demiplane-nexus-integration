const extractRollParts = (rollQuery: string): string[] => {
	return rollQuery
		?.replace("%2B", "+")
		?.replace("-", "+-")
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
		console.error(
			`The roll query contained the following parts that could not be interpreted: ${unusedParts}`,
		);
	}

	return {
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
};
