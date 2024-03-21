// ==UserScript==
// @name pixels-demiplane-nexus-integration
// @version 0.0.2
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
const integration = (() => {
    const characterSheetUrlRegex = /https:\/\/app.demiplane.com\/nexus\/(?<gameSystem>[a-zA-Z0-9-]+)\/character-sheet\/(?<characterId>[a-z0-9-]+)/;
    const characterSheetInfo = () => {
        var _a, _b;
        const characterSheetUrl = unsafeWindow.location.href;
        const characterSheetMatches = characterSheetUrl.match(characterSheetUrlRegex);
        const characterId = (_a = characterSheetMatches === null || characterSheetMatches === void 0 ? void 0 : characterSheetMatches.groups) === null || _a === void 0 ? void 0 : _a.characterId;
        const gameSystem = (_b = characterSheetMatches === null || characterSheetMatches === void 0 ? void 0 : characterSheetMatches.groups) === null || _b === void 0 ? void 0 : _b.gameSystem;
        return {
            characterId,
            gameSystem,
        };
    };
    const integrationEnabledStorageName = "pixelsIntegrationEnabled";
    const isEnabled = (characterId) => __awaiter(void 0, void 0, void 0, function* () {
        let characterSheetId = characterId;
        if (!characterSheetId) {
            characterSheetId = characterSheetInfo().characterId || "";
        }
        let enabledForCharacter = false;
        const localStorageEntryString = unsafeWindow.localStorage.getItem(integrationEnabledStorageName);
        if (localStorageEntryString) {
            const localStorageEntry = JSON.parse(localStorageEntryString);
            enabledForCharacter = localStorageEntry[characterSheetId] === "true";
        }
        return enabledForCharacter;
    });
    // @ts-ignore
    unsafeWindow.isPixelsIntegrationEnabled = () => {
        let integrationEnabledForCharacter = false;
        const enabledString = unsafeWindow.localStorage.getItem(integrationEnabledStorageName);
        const { characterId } = characterSheetInfo();
        if (enabledString && characterId) {
            const enabledObject = JSON.parse(enabledString);
            const characterEnabledInfo = enabledObject[characterId];
            integrationEnabledForCharacter = characterEnabledInfo === "true";
        }
        return integrationEnabledForCharacter;
    };
    const toggleEnabled = (characterId) => __awaiter(void 0, void 0, void 0, function* () {
        let characterSheetId = characterId;
        if (!characterSheetId) {
            characterSheetId = characterSheetInfo().characterId || "";
        }
        let enabledForCharacter = !isEnabled(characterId);
        const localStorageEntryString = unsafeWindow.localStorage.getItem(integrationEnabledStorageName);
        if (localStorageEntryString) {
            const localStorageEntry = JSON.parse(localStorageEntryString);
            enabledForCharacter = localStorageEntry[characterSheetId] === "true";
        }
        return enabledForCharacter;
    });
    // @ts-ignore
    unsafeWindow.togglePixelsItegrationEnabled = () => {
        let integrationPreviouslyEnabledForCharacter = false;
        const enabledString = unsafeWindow.localStorage.getItem(integrationEnabledStorageName);
        const { characterId } = characterSheetInfo();
        const enabledObject = enabledString
            ? JSON.parse(enabledString)
            : {};
        if (characterId) {
            const characterEnabledInfo = enabledObject[characterId];
            integrationPreviouslyEnabledForCharacter =
                characterEnabledInfo === "true";
            enabledObject[characterId] =
                `${!integrationPreviouslyEnabledForCharacter}`;
            unsafeWindow.localStorage.setItem(integrationEnabledStorageName, JSON.stringify(enabledObject));
        }
        return !integrationPreviouslyEnabledForCharacter;
    };
    return {
        isEnabled,
        toggleEnabled,
        characterSheetInfo,
    };
})();
const interceptors = [];
let interceptor;
// @ts-ignore
if (!XMLHttpRequest.prototype.nativeOpen) {
    // Override the open function
    (() => {
        // @ts-ignore
        XMLHttpRequest.prototype.nativeOpen = XMLHttpRequest.prototype.open;
        // Create our custom "open" function
        const customOpen = function (method, url, async, username, password) {
            // When the request is opened, we want to save the URL in a place where it is retrievable during the send request.
            // @ts-ignore
            this.requestURL = url;
            // After that, things can proceed as normal for the moment.
            if (async === undefined) {
                // @ts-ignore
                this.nativeOpen(method, url);
            }
            else {
                // @ts-ignore
                this.nativeOpen(method, url, async, username, password);
            }
        };
        XMLHttpRequest.prototype.open = customOpen;
    })();
    // Override the send function
    (() => {
        // @ts-ignore
        XMLHttpRequest.prototype.nativeSend = XMLHttpRequest.prototype.send;
        // Create our custom "load" function
        const customSend = function (body) {
            // Check whether we're on a character sheet and if so, what the character's ID is
            const { characterId } = integration.characterSheetInfo();
            integration.isEnabled(characterId || "").then((isEnabled) => {
                // @ts-ignore
                const requestURL = this.requestURL;
                if (characterId &&
                    isEnabled &&
                    diceRollUrlRegex.test(requestURL === null || requestURL === void 0 ? void 0 : requestURL.toString())) {
                    // Do not send the request but instead request the results from our pixels dice
                    console.log(`Received a dice roll request to ${requestURL}, overriding it.`);
                    const { callback } = interceptor;
                    // First, we wait for the response from either Pixels or virtual dice
                    callback(requestURL === null || requestURL === void 0 ? void 0 : requestURL.toString())
                        .then((data) => {
                        // When we have received the response, we have to process it just a bit.
                        console.log(`Received faked response with data ${JSON.stringify(data)}; ensuring that it is a JSON.`);
                        let parsedData = data;
                        if (typeof data === "string") {
                            parsedData = JSON.parse(data);
                        }
                        return parsedData;
                    })
                        .then((data) => {
                        // I haven't yet found a way to fully simulate sending and then receiving a response
                        //  from the API. So instead, now that we actually have the value we'll send the request,
                        //  wait for a reply and then replace the response.
                        this.addEventListener("readystatechange", () => {
                            console.log(`Setting the responseText to ${JSON.stringify(data)}`);
                            // Now that we have processed the data, we set it as the response
                            Object.defineProperty(this, "responseText", {
                                configurable: true,
                                value: JSON.stringify(data),
                            });
                        });
                        // @ts-ignore
                        this.nativeSend(body);
                    })
                        .catch((e) => {
                        console.error(`Interceptor failed for url ${requestURL}.`, e);
                    });
                }
                else {
                    // Either this is not a dice roll request, or the integration is not enabled. Proceed as normal.
                    // @ts-ignore
                    this.nativeSend(body);
                }
            });
        };
        // @ts-ignore
        XMLHttpRequest.prototype.send = customSend;
    })();
}
const main = () => {
    interceptors.push({
        callback: (rollUrl) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const { characterId, gameSystem } = integration.characterSheetInfo();
            const rollUrlMatches = rollUrl.match(diceRollUrlRegex);
            const rollCommand = (_a = rollUrlMatches === null || rollUrlMatches === void 0 ? void 0 : rollUrlMatches.groups) === null || _a === void 0 ? void 0 : _a.roll;
            if (rollCommand) {
                const parsedRollCommand = (0, roll_parser_1.parseRollRequest)(rollCommand);
                const result = yield (0, roll_executor_1.expectRolls)(parsedRollCommand, gameSystem);
                console.log({
                    description: "Itercepting dice rolls",
                    rollUrl,
                    parsedRollCommand,
                    gameSystem,
                    characterSheetId: characterId,
                    result,
                });
                return result;
            }
        }),
    });
    interceptor = interceptors[0];
};
main();


/***/ }),

/***/ 787:
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
exports.expectRolls = exports.CritResult = void 0;
const roll_handler_1 = __webpack_require__(952);
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
})(CritResult || (exports.CritResult = CritResult = {}));
const expectResultForDice = (diceSize, diceCount) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Requested rolls of ${diceCount}d${diceSize}`);
    const expectedRolls = new Array(diceCount);
    expectedRolls.fill(new Promise((resolve, reject) => {
        console.log(`Waiting for a roll of 1d${diceSize}`);
        (0, roll_handler_1.registerRollListener)({
            diceSize,
            callback: (rollEvent) => {
                console.log({
                    description: "Roll event occurred",
                    rollEvent,
                });
                if (rollEvent.success) {
                    // TODO Do more with the result
                    resolve(rollEvent.face);
                }
                else {
                    reject();
                }
            },
        });
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

/***/ 952:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerRollListener = void 0;
const listeners = {
    d4: [],
    d6: [],
    d8: [],
    d10: [],
    d00: [],
    d12: [],
    d20: [],
    dF: [],
};
const listExpectedRolls = () => {
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
const registerRollListener = (listener) => {
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
exports.registerRollListener = registerRollListener;
const handleDieRolled = (dieType, face, colorway, dieName, dieId) => {
    let listener;
    let diceSize;
    switch (dieType) {
        case "d4": {
            diceSize = 4;
            listener = listeners === null || listeners === void 0 ? void 0 : listeners.d4.shift();
            break;
        }
        case "d6pipped":
        case "d6": {
            diceSize = 6;
            listener = listeners === null || listeners === void 0 ? void 0 : listeners.d6.shift();
            break;
        }
        case "d8": {
            diceSize = 8;
            listener = listeners === null || listeners === void 0 ? void 0 : listeners.d8.shift();
            break;
        }
        case "d10": {
            diceSize = 10;
            listener = listeners === null || listeners === void 0 ? void 0 : listeners.d10.shift();
            break;
        }
        case "d00": {
            diceSize = 100;
            listener = listeners === null || listeners === void 0 ? void 0 : listeners.d00.shift();
            break;
        }
        case "d12": {
            diceSize = 12;
            listener = listeners === null || listeners === void 0 ? void 0 : listeners.d12.shift();
            break;
        }
        case "d20": {
            diceSize = 20;
            listener = listeners === null || listeners === void 0 ? void 0 : listeners.d20.shift();
            break;
        }
        case "d6fudge": {
            diceSize = "F";
            listener = listeners === null || listeners === void 0 ? void 0 : listeners.dF.shift();
            break;
        }
        default: {
            console.error(`Unknown die type ${dieType} rolled.`);
        }
    }
    let rollEvent;
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
    }
    else {
        rollEvent = {
            success: false,
            diceSize: "unknown",
            dieType: "unknown",
        };
    }
    return rollEvent;
};
const registerVirtualRollers = () => {
    const rollVirtualD4 = () => {
        const randomFace = Math.round(Math.random() * 4) + 1;
        return handleDieRolled("d4", randomFace, "virtual", "Virtual d4", -4);
    };
    const rollVirtualD6 = () => {
        const randomFace = Math.round(Math.random() * 6) + 1;
        return handleDieRolled("d6", randomFace, "virtual", "Virtual d6", -6);
    };
    const rollVirtualD8 = () => {
        const randomFace = Math.round(Math.random() * 8) + 1;
        return handleDieRolled("d8", randomFace, "virtual", "Virtual d8", -8);
    };
    const rollVirtualD10 = () => {
        const randomFace = Math.round(Math.random() * 10);
        return handleDieRolled("d10", randomFace, "virtual", "Virtual d10", -10);
    };
    const rollVirtualD00 = () => {
        const randomFace = Math.round(Math.random() * 10) * 10;
        return handleDieRolled("d00", randomFace, "virtual", "Virtual d00", -100);
    };
    const rollVirtualD12 = () => {
        const randomFace = Math.round(Math.random() * 12) + 1;
        return handleDieRolled("d12", randomFace, "virtual", "Virtual d12", -12);
    };
    const rollVirtualD20 = () => {
        const randomFace = Math.round(Math.random() * 20) + 1;
        return handleDieRolled("d20", randomFace, "virtual", "Virtual d20", -20);
    };
    const rollVirtualDF = () => {
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
    const cancelD4Roll = () => {
        var _a;
        const rollEvent = {
            success: false,
            diceSize: 4,
            dieType: "d4virtual",
        };
        (_a = listeners === null || listeners === void 0 ? void 0 : listeners.d4.shift()) === null || _a === void 0 ? void 0 : _a.callback(rollEvent);
        // @ts-ignore
        unsafeWindow.expectedRolls = listExpectedRolls();
        return rollEvent;
    };
    const cancelD6Roll = () => {
        var _a;
        const rollEvent = {
            success: false,
            diceSize: 6,
            dieType: "d6virtual",
        };
        (_a = listeners === null || listeners === void 0 ? void 0 : listeners.d6.shift()) === null || _a === void 0 ? void 0 : _a.callback(rollEvent);
        // @ts-ignore
        unsafeWindow.expectedRolls = listExpectedRolls();
        return rollEvent;
    };
    const cancelD8Roll = () => {
        var _a;
        const rollEvent = {
            success: false,
            diceSize: 8,
            dieType: "d8virtual",
        };
        (_a = listeners === null || listeners === void 0 ? void 0 : listeners.d8.shift()) === null || _a === void 0 ? void 0 : _a.callback(rollEvent);
        // @ts-ignore
        unsafeWindow.expectedRolls = listExpectedRolls();
        return rollEvent;
    };
    const cancelD10Roll = () => {
        var _a;
        const rollEvent = {
            success: false,
            diceSize: 10,
            dieType: "d10virtual",
        };
        (_a = listeners === null || listeners === void 0 ? void 0 : listeners.d10.shift()) === null || _a === void 0 ? void 0 : _a.callback(rollEvent);
        // @ts-ignore
        unsafeWindow.expectedRolls = listExpectedRolls();
        return rollEvent;
    };
    const cancelD00Roll = () => {
        var _a;
        const rollEvent = {
            success: false,
            diceSize: 100,
            dieType: "d00virtual",
        };
        (_a = listeners === null || listeners === void 0 ? void 0 : listeners.d00.shift()) === null || _a === void 0 ? void 0 : _a.callback(rollEvent);
        // @ts-ignore
        unsafeWindow.expectedRolls = listExpectedRolls();
        return rollEvent;
    };
    const cancelD12Roll = () => {
        var _a;
        const rollEvent = {
            success: false,
            diceSize: 12,
            dieType: "d12virtual",
        };
        (_a = listeners === null || listeners === void 0 ? void 0 : listeners.d12.shift()) === null || _a === void 0 ? void 0 : _a.callback(rollEvent);
        // @ts-ignore
        unsafeWindow.expectedRolls = listExpectedRolls();
        return rollEvent;
    };
    const cancelD20Roll = () => {
        var _a;
        const rollEvent = {
            success: false,
            diceSize: 20,
            dieType: "d20virtual",
        };
        (_a = listeners === null || listeners === void 0 ? void 0 : listeners.d20.shift()) === null || _a === void 0 ? void 0 : _a.callback(rollEvent);
        // @ts-ignore
        unsafeWindow.expectedRolls = listExpectedRolls();
        return rollEvent;
    };
    const cancelD100Roll = () => {
        var _a, _b;
        const d10RollEvent = {
            success: false,
            diceSize: 10,
            dieType: "d10virtual",
        };
        (_a = listeners === null || listeners === void 0 ? void 0 : listeners.d10.shift()) === null || _a === void 0 ? void 0 : _a.callback(d10RollEvent);
        const d00RollEvent = {
            success: false,
            diceSize: 100,
            dieType: "d00virtual",
        };
        (_b = listeners === null || listeners === void 0 ? void 0 : listeners.d00.shift()) === null || _b === void 0 ? void 0 : _b.callback(d00RollEvent);
        // @ts-ignore
        unsafeWindow.expectedRolls = listExpectedRolls();
        return [d10RollEvent, d00RollEvent];
    };
    const cancelDFRoll = () => {
        var _a;
        const rollEvent = {
            success: false,
            diceSize: "F",
            dieType: "dFvirtual",
        };
        (_a = listeners === null || listeners === void 0 ? void 0 : listeners.dF.shift()) === null || _a === void 0 ? void 0 : _a.callback(rollEvent);
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