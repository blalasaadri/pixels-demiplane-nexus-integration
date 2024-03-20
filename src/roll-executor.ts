import type { RollRequest } from "./roll-parser";

/**
 * Whether something is a critical roll or not.
 * This doesn't seem to take the game system into consideration right now (e.g. in Daggerheart if the results of
 * both d12s are the same, that should be a critical success) and only a 20 on a d20 is currently returned as a
 * critical success while only a 1 on a d20 is currently returned as a critical fail.
 */
enum CritResult {
	NO_CRIT = 0,
	CRITICAL_FAILURE = 1,
	CRITICAL_SUCCESS = 2,
}

/**
 * The sizes of dice that could be requested.
 * <p/>
 * Demiplane Nexus doesn't currently support a game with d100s (though the api does respond when requesting a d100
 * - or a d5, a d66, or a d420). So while 1d100 is a possible roll request, they may also use 1d10+1d00 or 1d10+1d%
 * or something else in the future.
 * <p/>
 * They also don't support any games with Fudge dice and the api doesn't work for dF yet. Since Pixels do offer
 * Fudge dice though, I'm going with my best guess as to what the Demiplane syntax may be if they ever do start
 * supporting Fudge dice.
 */
type DiceSize = 4 | 6 | 8 | 10 | 12 | 20 | 100 | "F";
/**
 * A type representing the result of a single roll. This is a separate type rather than just number,
 * so that non-numeric roll results can more easily be integrated in the future.
 * <p/>
 * Note: For Fudge dice, I'm guessing the results can be -1, 0, and +1 (representing '-', '', and '+');
 * but since Demiplane Nexus doesn't currently support any game systems with fudge dice, I cannot test that theory.
 */
type SingleRollResult = number;

/**
 * This is the result from rolling a number of dice with the same size. So while technically speaking the various
 * `DiceSize` type parameters could be different, in practice they will always be the same in any instance of this
 * object.
 */
interface DieRollRequestResultPart {
	type: "dice";
	dice: {
		type: "single_dice";
		value: SingleRollResult;
		size: DiceSize;
		is_kept: boolean;
		rolls: SingleRollResult[];
		exploded: boolean;
		imploded: boolean;
	}[];
	annotation: string;
	value: SingleRollResult;
	is_crit: CritResult;
	num_kept: number;
	text: string;
	num_dice: number;
	dice_size: DiceSize;
	operators: unknown[];
}

/**
 * Part of a result representing either a + or a -.
 */
interface OperatorRollRequestResultPart {
	type: "operator";
	value: "+" | "-";
	annotation: string;
}

/**
 * Part of a result representing a roll modifier.
 */
interface ConstantRollRequestResultPart {
	type: "constant";
	value: number;
	annotation: string;
}

/**
 * Part of a result representing a comment.
 * These seem to be any parts of a roll request that can't be interpreted.
 */
interface CommentRollRequestResultPart {
	type: "comment";
	value: string;
}

type RollRequestResultPart =
	| DieRollRequestResultPart
	| OperatorRollRequestResultPart
	| ConstantRollRequestResultPart
	| CommentRollRequestResultPart;

/**
 * Type representing the result of a roll request.
 */
export interface RollRequestResult {
	total: number;
	crit: CritResult;
	raw_dice: {
		parts: RollRequestResultPart[];
	};
	error: string;
}

const expectResultForDice = async (
	diceSize: DiceSize,
	diceCount: number,
): Promise<{ diceSize: DiceSize; results: SingleRollResult[] }> => {
	const expectedRolls: SingleRollResult[] = new Array(diceCount).fill(
		new Promise((resolve, reject) => {
			if (diceSize === "F") {
				// TODO Wait for either a Pixel or the call of a JS function
				const randomNumber = Math.round(Math.random() * 2) - 1;
				resolve(randomNumber);
			} else {
				// TODO Wait for either a Pixel or the call of a JS function
				const randomNumber = Math.round(Math.random() * diceSize) + 1;
				resolve(randomNumber);
			}
		}),
	);
	return {
		diceSize,
		results: await Promise.all(expectedRolls),
	};
};

/**
 * Expect rolls for each die mentioned in the roll request.
 *
 * @param rollRequest A roll request as parsed by the roll-parser
 * @param gameSystem An optional string representing the game system. This may be used for crit detection.
 * @returns A promise representing the result of the given rolls.
 */
export const expectRolls = async (
	rollRequest: RollRequest,
	gameSystem?: string,
): Promise<RollRequestResult> => {
	const diceRollRequests: Promise<{
		diceSize: DiceSize;
		results: SingleRollResult[];
	}>[] = [];
	// Schedule the individual rolls
	if (rollRequest.d4) {
		diceRollRequests.push(expectResultForDice(4, rollRequest.d4));
	}
	if (rollRequest.d6) {
		diceRollRequests.push(expectResultForDice(6, rollRequest.d6));
	}
	if (rollRequest.d8) {
		diceRollRequests.push(expectResultForDice(8, rollRequest.d8));
	}
	if (rollRequest.d10) {
		diceRollRequests.push(expectResultForDice(10, rollRequest.d10));
	}
	if (rollRequest.d12) {
		diceRollRequests.push(expectResultForDice(12, rollRequest.d12));
	}
	if (rollRequest.d20) {
		diceRollRequests.push(expectResultForDice(20, rollRequest.d20));
	}
	if (rollRequest.d100) {
		diceRollRequests.push(expectResultForDice(100, rollRequest.d100));
	}
	if (rollRequest.dF) {
		diceRollRequests.push(expectResultForDice("F", rollRequest.dF));
	}
	// Wait for all rolls
	const diceRolls: { diceSize: DiceSize; results: SingleRollResult[] }[] =
		await Promise.all(diceRollRequests);

	// Collect the individual rolls into result parts
	const rollResultParts: RollRequestResultPart[] = [];
	if (rollRequest.d4) {
		rollResultParts.push(handleNumericDiceResults(4)(diceRolls));
	}
	const addPlusOperatorIfRequired = () => {
		if (rollResultParts.length > 0) {
			const operatorPart: OperatorRollRequestResultPart = {
				type: "operator",
				value: "+",
				annotation: "",
			};
			rollResultParts.push(operatorPart);
		}
	};
	if (rollRequest.d6) {
		addPlusOperatorIfRequired();
		rollResultParts.push(handleNumericDiceResults(6)(diceRolls));
	}
	if (rollRequest.d8) {
		addPlusOperatorIfRequired();
		rollResultParts.push(handleNumericDiceResults(8)(diceRolls));
	}
	if (rollRequest.d10) {
		addPlusOperatorIfRequired();
		rollResultParts.push(handleNumericDiceResults(10)(diceRolls));
	}
	if (rollRequest.d12) {
		addPlusOperatorIfRequired();
		rollResultParts.push(
			handleNumericDiceResults(
				12,
				gameSystem === "daggerheart"
					? (d12Results: SingleRollResult[]) => {
							return d12Results.length === 2 && d12Results[0] === d12Results[1];
					  }
					: undefined,
			)(diceRolls),
		);
	}
	if (rollRequest.d20) {
		addPlusOperatorIfRequired();
		rollResultParts.push(
			handleNumericDiceResults(
				20,
				gameSystem === "pathfinder2e"
					? (d20results: SingleRollResult[]) => {
							const found = d20results?.find((result) => result === 20);
							return found !== undefined && found >= 0;
					  }
					: undefined,
				gameSystem === "pathfinder2e"
					? (d20results: SingleRollResult[]) => {
							const found = d20results?.find((result) => result === 1);
							return found !== undefined && found >= 0;
					  }
					: undefined,
			)(diceRolls),
		);
	}
	if (rollRequest.d100) {
		addPlusOperatorIfRequired();
		rollResultParts.push(handleNumericDiceResults(100)(diceRolls));
	}
	if (rollRequest.dF) {
		addPlusOperatorIfRequired();
		rollResultParts.push(handleFudgeDiceResults(diceRolls));
	}
	if (rollRequest.modifier) {
		addPlusOperatorIfRequired();
		const modifierResultPart: ConstantRollRequestResultPart = {
			type: "constant",
			value: rollRequest.modifier,
			annotation: "",
		};
		rollResultParts.push(modifierResultPart);
	}
	const pixelsComment: CommentRollRequestResultPart = {
		type: "comment",
		value: "Rolled with the unofficial Demiplane Nexus Pixels dice integration",
	};
	rollResultParts.push(pixelsComment);

	// Prepare and then return the result
	const result: RollRequestResult = {
		total: diceRolls
			.flatMap(({ results }) => results)
			.reduce((a, b) => a + b, rollRequest.modifier),
		crit: CritResult.NO_CRIT, // This seems to always be the case
		raw_dice: {
			parts: rollResultParts,
		},
		error: "",
	};
	return result;
};

const handleNumericDiceResults = (
	generatorDiceSize: DiceSize,
	critSuccessPredicate?: (results: SingleRollResult[]) => boolean,
	critFailurePredicate?: (results: SingleRollResult[]) => boolean,
): ((
	diceRolls: { diceSize: DiceSize; results: SingleRollResult[] }[],
) => DieRollRequestResultPart) => {
	return (diceRolls: { diceSize: DiceSize; results: SingleRollResult[] }[]) => {
		const individualResults: SingleRollResult[] = diceRolls
			.filter(({ diceSize }) => generatorDiceSize === diceSize)
			.flatMap(({ results }) => results);
		const resultPart: DieRollRequestResultPart = {
			type: "dice",
			dice: [], // Will be set later
			annotation: "",
			value: 0, // Will be set later
			is_crit: CritResult.NO_CRIT, // May be changed later
			num_kept: 0, // Will be set later
			text: "", // Will be set later
			num_dice: individualResults.length,
			dice_size: generatorDiceSize,
			operators: [],
		};
		const diceResultTexts: string[] = [];
		for (const individualResult of individualResults) {
			resultPart.dice.push({
				type: "single_dice",
				value: individualResult,
				size: generatorDiceSize,
				is_kept: true,
				rolls: [individualResult],
				exploded: false,
				imploded: false,
			});
			resultPart.value += individualResult;
			resultPart.num_kept += 1;
			if (individualResult === 1) {
				diceResultTexts.push("**1**");
			} else if (individualResult === generatorDiceSize) {
				diceResultTexts.push(`**${generatorDiceSize}**`);
			} else {
				diceResultTexts.push(`${individualResult}`);
			}
		}
		resultPart.text = `${
			individualResults.length
		}d${generatorDiceSize} (${diceResultTexts.join(", ")}) `;
		if (critSuccessPredicate?.(individualResults)) {
			resultPart.is_crit = CritResult.CRITICAL_SUCCESS;
		} else if (critFailurePredicate?.(individualResults)) {
			resultPart.is_crit = CritResult.CRITICAL_FAILURE;
		}
		return resultPart;
	};
};

const handleFudgeDiceResults = (
	diceRolls: { diceSize: DiceSize; results: SingleRollResult[] }[],
): DieRollRequestResultPart => {
	const individualResults: SingleRollResult[] = diceRolls
		.filter(({ diceSize }) => diceSize === "F")
		.flatMap(({ results }) => results);
	const resultPart: DieRollRequestResultPart = {
		type: "dice",
		dice: [], // Will be set later
		annotation: "",
		value: 0, // Will be set later
		is_crit: CritResult.NO_CRIT,
		num_kept: 0, // Will be set later
		text: "", // Will be set later
		num_dice: individualResults.length,
		dice_size: "F",
		operators: [],
	};
	const diceResultTexts: string[] = [];
	for (const individualResult of individualResults) {
		resultPart.dice.push({
			type: "single_dice",
			value: individualResult,
			size: "F",
			is_kept: true,
			rolls: [individualResult],
			exploded: false,
			imploded: false,
		});
		resultPart.value += individualResult;
		resultPart.num_kept += 1;
		diceResultTexts.push(`${individualResult}`);
	}
	resultPart.text = `${individualResults.length}dF (${diceResultTexts.join(
		", ",
	)}) `;
	return resultPart;
};
