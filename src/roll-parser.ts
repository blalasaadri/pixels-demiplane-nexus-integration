import { getEnabledForDiceOverview, isDebugEnabled } from "./integration-utils";
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

	const enabledForDiceTypes = getEnabledForDiceOverview();

	const rollRequest = new RollRequest();
	if (enabledForDiceTypes.d4) {
		rollRequest.d4 = countDiceMatchingRegex(rollParts, d4Regex);
	}
	if (enabledForDiceTypes.d6) {
		rollRequest.d6 = countDiceMatchingRegex(rollParts, d6Regex);
	}
	if (enabledForDiceTypes.d8) {
		rollRequest.d8 = countDiceMatchingRegex(rollParts, d8Regex);
	}
	if (enabledForDiceTypes.d10) {
		rollRequest.d10 = countDiceMatchingRegex(rollParts, d10Regex);
	}
	if (enabledForDiceTypes.d12) {
		rollRequest.d12 = countDiceMatchingRegex(rollParts, d12Regex);
	}
	if (enabledForDiceTypes.d20) {
		rollRequest.d20 = countDiceMatchingRegex(rollParts, d20Regex);
	}
	if (enabledForDiceTypes.d10 && enabledForDiceTypes.d00) {
		rollRequest.d100 = countDiceMatchingRegex(rollParts, d100Regex);
	}
	rollRequest.modifier = countDiceMatchingRegex(rollParts, modifierRegex);

	const unusedParts = rollParts
		.filter((rollPart) => !(enabledForDiceTypes.d4 && d4Regex.test(rollPart)))
		.filter((rollPart) => !(enabledForDiceTypes.d6 && d6Regex.test(rollPart)))
		.filter((rollPart) => !(enabledForDiceTypes.d8 && d8Regex.test(rollPart)))
		.filter((rollPart) => !(enabledForDiceTypes.d10 && d10Regex.test(rollPart)))
		.filter((rollPart) => !(enabledForDiceTypes.d12 && d12Regex.test(rollPart)))
		.filter((rollPart) => !(enabledForDiceTypes.d20 && d20Regex.test(rollPart)))
		.filter(
			(rollPart) =>
				!(
					enabledForDiceTypes.d10 &&
					enabledForDiceTypes.d00 &&
					d100Regex.test(rollPart)
				),
		)
		.filter((rollPart) => !(enabledForDiceTypes.dF && dFRegex.test(rollPart)))
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
