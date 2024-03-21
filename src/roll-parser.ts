import { integrationEnabledForDice, isDebugEnabled } from "./integration-utils";
import { RollRequest } from "./types";

const extractRollParts = (rollQuery: string): string[] => {
	return rollQuery
		?.replace(/%2B/g, "+")
		?.replace(/-/g, "+-")
		?.replace(/\++/g, "+")
		?.split("+");
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
