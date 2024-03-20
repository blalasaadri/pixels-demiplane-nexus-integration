// ==UserScript==
// @name pixels-demiplane-nexus-integration
// @version 0.0.1
// @namespace http://tampermonkey.net/
// @description An unofficial integration for rolling Pixels dice for your Demiplane Nexus charater sheets.
// @author blalasaadri
// @homepage https://github.com/blalasaadri/pixels-demiplane-nexus-userscript#readme
// @icon https://www.google.com/s2/favicons?sz=64&domain=demiplane.com
// @updateURL https://github.com/blalasaadri/pixels-demiplane-nexus-integration/raw/main/userscripts/index.prod.user.js
// @downloadURL https://github.com/blalasaadri/pixels-demiplane-nexus-integration/raw/main/userscripts/index.prod.user.js
// @license https://opensource.org/licenses/MIT
// @match https://app.demiplane.com/nexus/*/character-sheet/*-*-*-*-*
// @require https://unpkg.com/@trim21/gm-fetch@0.1.15
// @require https://unpkg.com/axios@1.6.8
// @require https://unpkg.com/@systemic-games/pixels-web-connect@1.2.0/dist/umd/index.js
// @connect utils-api.demiplane.com
// @run-at document-start
// @grant unsafeWindow
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 156:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const roll_executor_1 = __webpack_require__(787);
const roll_parser_1 = __webpack_require__(329);
const diceRollUrlRegex = /https:\/\/utils-api.demiplane.com\/dice-roll\?roll=(?<roll>.*)/;
const characterSheetUrlRegex = /https:\/\/app.demiplane.com\/nexus\/(?<gameSystem>[a-zA-Z0-9-]+)\/character-sheet\/(?<characterId>[a-z0-9-]+)/;
const readyStates = {
    [XMLHttpRequest.UNSENT]: "UNSENT",
    [XMLHttpRequest.OPENED]: "OPENED",
    [XMLHttpRequest.HEADERS_RECEIVED]: "HEADERS_RECEIVED",
    [XMLHttpRequest.LOADING]: "LOADING",
    [XMLHttpRequest.DONE]: "DONE",
};
const interceptors = [];
/**
 * XML HTPP requests can be intercepted with interceptors.
 * Takes a regex to match against requests made and a callback to process the response.
 * <p/>
 * This solution is heavily inspired by https://stackoverflow.com/a/72137265.
 */
const createXmlHttpOverride = (open) => {
    return function (method, url, async = false, username, password) {
        // TODO This will ensure that the client only ever sees our result; it won't however prevent the call from actually happening.
        //   Maybe there is a way to do that?
        this.addEventListener("readystatechange", function () {
            console.log({
                description: "readystatechange event called",
                readyState: this.readyState,
                readyStateText: readyStates[this.readyState],
            });
            // When the request is opened, we prepare the override
            if (this.readyState === XMLHttpRequest.OPENED) {
                const newOnReadyStateChange = (originalOnreadystatechange) => function (event) {
                    // console.log({
                    // 	description: "Overwritten onreadystatechange called",
                    // 	event: JSON.stringify(event),
                    // 	readyState: this.readyState,
                    // 	url,
                    // });
                    if (!diceRollUrlRegex.test(url.toString())) {
                        console.log("Not a dice roll, doing the regular call.", url);
                        return originalOnreadystatechange === null || originalOnreadystatechange === void 0 ? void 0 : originalOnreadystatechange.call(this, event);
                    }
                    console.log("It is a dice roll, trying to override.", url);
                    // Read data from response.
                    const overrideCall = function () {
                        return __awaiter(this, void 0, void 0, function* () {
                            let data;
                            for (const i in interceptors) {
                                const { regex, override, callback } = interceptors[i];
                                // Override.
                                if (regex === null || regex === void 0 ? void 0 : regex.test(url.toString())) {
                                    if (override) {
                                        try {
                                            data = yield callback(url.toString());
                                            if (typeof data === "string") {
                                                data = JSON.parse(data);
                                            }
                                        }
                                        catch (e) {
                                            console.error(`Interceptor '${regex}' failed for url ${url}. ${e}`);
                                        }
                                    }
                                }
                                else {
                                    console.log(`URL ${url} does not match regex ${regex}`);
                                }
                            }
                            // Override the response text.
                            Object.defineProperty(this, "responseText", {
                                configurable: true,
                                value: JSON.stringify(data),
                            });
                            // Tell the client callback that we're done.
                            // TODO This ensures that the call is still made. We don't really want to do that.
                            return originalOnreadystatechange === null || originalOnreadystatechange === void 0 ? void 0 : originalOnreadystatechange.call(this, event);
                        });
                    };
                    overrideCall.call(this);
                };
                this.onreadystatechange = newOnReadyStateChange(this.onreadystatechange);
            }
        }, false);
        open.call(this, method, url, async, username, password);
    };
};
const main = () => {
    interceptors.push({
        regex: diceRollUrlRegex,
        override: true,
        callback: (rollUrl) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const characterUrlMatches = unsafeWindow.location.href.match(characterSheetUrlRegex);
            const rollUrlMatches = rollUrl.match(diceRollUrlRegex);
            const rollCommand = (_a = rollUrlMatches === null || rollUrlMatches === void 0 ? void 0 : rollUrlMatches.groups) === null || _a === void 0 ? void 0 : _a.roll;
            if (rollCommand) {
                const parsedRollCommand = (0, roll_parser_1.parseRollRequest)(rollCommand);
                const result = yield (0, roll_executor_1.expectRolls)(parsedRollCommand, (_b = characterUrlMatches === null || characterUrlMatches === void 0 ? void 0 : characterUrlMatches.groups) === null || _b === void 0 ? void 0 : _b.gameSystem);
                console.log({
                    description: "Itercepting dice rolls",
                    rollUrl,
                    //rollUrlMatches,
                    //rollCommand,
                    parsedRollCommand,
                    gameSystem: (_c = characterUrlMatches === null || characterUrlMatches === void 0 ? void 0 : characterUrlMatches.groups) === null || _c === void 0 ? void 0 : _c.gameSystem,
                    characterSheetId: (_d = characterUrlMatches === null || characterUrlMatches === void 0 ? void 0 : characterUrlMatches.groups) === null || _d === void 0 ? void 0 : _d.characterId,
                    result,
                });
                return result;
            }
        }),
    });
    XMLHttpRequest.prototype.open = createXmlHttpOverride(XMLHttpRequest.prototype.open);
};
main();


/***/ }),

/***/ 787:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.expectRolls = void 0;
/**
 * Whether something is a critical roll or not.
 * This doesn't seem to take the game system into consideration right now (e.g. in Daggerheart if the results of
 * both d12s are the same, that should be a critical success) and only a 20 on a d20 is currently returned as a
 * critical success while only a 1 on a d20 is currently returned as a critical fail.
 */
var CritResult;
(function (CritResult) {
    CritResult[CritResult["NO_CRIT"] = 0] = "NO_CRIT";
    CritResult[CritResult["CRITICAL_FAILURE"] = 1] = "CRITICAL_FAILURE";
    CritResult[CritResult["CRITICAL_SUCCESS"] = 2] = "CRITICAL_SUCCESS";
})(CritResult || (CritResult = {}));
const expectResultForDice = (diceSize, diceCount) => __awaiter(void 0, void 0, void 0, function* () {
    const expectedRolls = new Array(diceCount).fill(new Promise((resolve, reject) => {
        if (diceSize === "F") {
            // TODO Wait for either a Pixel or the call of a JS function
            const randomNumber = Math.round(Math.random() * 2) - 1;
            resolve(randomNumber);
        }
        else {
            // TODO Wait for either a Pixel or the call of a JS function
            const randomNumber = Math.round(Math.random() * diceSize) + 1;
            resolve(randomNumber);
        }
    }));
    return {
        diceSize,
        results: yield Promise.all(expectedRolls),
    };
});
/**
 * Expect rolls for each die mentioned in the roll request.
 *
 * @param rollRequest A roll request as parsed by the roll-parser
 * @param gameSystem An optional string representing the game system. This may be used for crit detection.
 * @returns A promise representing the result of the given rolls.
 */
const expectRolls = (rollRequest, gameSystem) => __awaiter(void 0, void 0, void 0, function* () {
    const diceRollRequests = [];
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
    const diceRolls = yield Promise.all(diceRollRequests);
    // Collect the individual rolls into result parts
    const rollResultParts = [];
    if (rollRequest.d4) {
        rollResultParts.push(handleNumericDiceResults(4)(diceRolls));
    }
    const addPlusOperatorIfRequired = () => {
        if (rollResultParts.length > 0) {
            const operatorPart = {
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
        rollResultParts.push(handleNumericDiceResults(12, gameSystem === "daggerheart"
            ? (d12Results) => {
                return d12Results.length === 2 && d12Results[0] === d12Results[1];
            }
            : undefined)(diceRolls));
    }
    if (rollRequest.d20) {
        addPlusOperatorIfRequired();
        rollResultParts.push(handleNumericDiceResults(20, gameSystem === "pathfinder2e"
            ? (d20results) => {
                const found = d20results === null || d20results === void 0 ? void 0 : d20results.find((result) => result === 20);
                return found !== undefined && found >= 0;
            }
            : undefined, gameSystem === "pathfinder2e"
            ? (d20results) => {
                const found = d20results === null || d20results === void 0 ? void 0 : d20results.find((result) => result === 1);
                return found !== undefined && found >= 0;
            }
            : undefined)(diceRolls));
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
        const modifierResultPart = {
            type: "constant",
            value: rollRequest.modifier,
            annotation: "",
        };
        rollResultParts.push(modifierResultPart);
    }
    const pixelsComment = {
        type: "comment",
        value: "Rolled with the unofficial Demiplane Nexus Pixels dice integration",
    };
    rollResultParts.push(pixelsComment);
    // Prepare and then return the result
    const result = {
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
});
exports.expectRolls = expectRolls;
const handleNumericDiceResults = (generatorDiceSize, critSuccessPredicate, critFailurePredicate) => {
    return (diceRolls) => {
        const individualResults = diceRolls
            .filter(({ diceSize }) => generatorDiceSize === diceSize)
            .flatMap(({ results }) => results);
        const resultPart = {
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
        const diceResultTexts = [];
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
            }
            else if (individualResult === generatorDiceSize) {
                diceResultTexts.push(`**${generatorDiceSize}**`);
            }
            else {
                diceResultTexts.push(`${individualResult}`);
            }
        }
        resultPart.text = `${individualResults.length}d${generatorDiceSize} (${diceResultTexts.join(", ")}) `;
        if (critSuccessPredicate === null || critSuccessPredicate === void 0 ? void 0 : critSuccessPredicate(individualResults)) {
            resultPart.is_crit = CritResult.CRITICAL_SUCCESS;
        }
        else if (critFailurePredicate === null || critFailurePredicate === void 0 ? void 0 : critFailurePredicate(individualResults)) {
            resultPart.is_crit = CritResult.CRITICAL_FAILURE;
        }
        return resultPart;
    };
};
const handleFudgeDiceResults = (diceRolls) => {
    const individualResults = diceRolls
        .filter(({ diceSize }) => diceSize === "F")
        .flatMap(({ results }) => results);
    const resultPart = {
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
    const diceResultTexts = [];
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
    resultPart.text = `${individualResults.length}dF (${diceResultTexts.join(", ")}) `;
    return resultPart;
};


/***/ }),

/***/ 329:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseRollRequest = void 0;
const extractRollParts = (rollQuery) => {
    var _a, _b, _c;
    return (_c = (_b = (_a = rollQuery === null || rollQuery === void 0 ? void 0 : rollQuery.replace(/%2B/g, "+")) === null || _a === void 0 ? void 0 : _a.replace(/-/g, "+-")) === null || _b === void 0 ? void 0 : _b.replace(/\++/g, "+")) === null || _c === void 0 ? void 0 : _c.split("+");
};
const countDiceMatchingRegex = (rollParts, regex) => rollParts
    .filter((rollPart) => regex.test(rollPart))
    .map((rollPart) => {
    var _a;
    const matches = rollPart.match(regex);
    return Number.parseInt(((_a = matches === null || matches === void 0 ? void 0 : matches.groups) === null || _a === void 0 ? void 0 : _a.count) || "0");
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
const parseRollRequest = (rollQuery) => {
    const rollParts = extractRollParts(rollQuery);
    const rollRequest = {
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
            description: "The roll query contained parts that could not be interpreted",
            rollQuery,
            rollParts,
            rollRequest,
            unusedParts,
        });
    }
    return rollRequest;
};
exports.parseRollRequest = parseRollRequest;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(156);
/******/ 	
/******/ })()
;