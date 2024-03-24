// ==UserScript==
// @name pixels-demiplane-nexus-integration
// @version 0.1.5
// @namespace http://tampermonkey.net/
// @description An unofficial integration for rolling Pixels dice for your Demiplane Nexus charater sheets.
// @author blalasaadri
// @homepage https://github.com/blalasaadri/pixels-demiplane-nexus-userscript#readme
// @icon https://github.com/blalasaadri/pixels-demiplane-nexus-integration/raw/main/assets/integration_logo.svg
// @updateURL https://github.com/blalasaadri/pixels-demiplane-nexus-integration/raw/main/userscripts/index.prod.user.js
// @downloadURL https://github.com/blalasaadri/pixels-demiplane-nexus-integration/raw/main/userscripts/index.prod.user.js
// @license https://opensource.org/licenses/MIT
// @match https://app.demiplane.com/*
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


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const integration = __importStar(__webpack_require__(530));
const roll_executor_1 = __webpack_require__(787);
const roll_parser_1 = __webpack_require__(329);
const ui_notifications_1 = __webpack_require__(213);
const ui_pixels_menu_1 = __webpack_require__(426);
const diceRollUrlRegex = /^https:\/\/utils-api.demiplane.com\/dice-roll\?roll=(?<roll>[^&]*)$/;
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
            // @ts-ignore
            if (this.pixelsRoll === undefined) {
                // @ts-ignore
                this.pixelsRoll = diceRollUrlRegex.test(url.toString());
            }
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
            const { characterId, gameSystem } = integration.characterSheetInfo();
            (() => {
                var _a;
                // @ts-ignore
                const useIntegration = this.pixelsRoll;
                // @ts-ignore
                const requestURL = this.requestURL;
                const isEnabled = integration.isEnabledForCharacter(characterId || "");
                const rollUrl = requestURL === null || requestURL === void 0 ? void 0 : requestURL.toString();
                const rollUrlMatches = rollUrl.match(diceRollUrlRegex);
                const rollCommand = (_a = rollUrlMatches === null || rollUrlMatches === void 0 ? void 0 : rollUrlMatches.groups) === null || _a === void 0 ? void 0 : _a.roll;
                if (useIntegration && characterId && isEnabled && rollCommand) {
                    if (integration.isDebugEnabled()) {
                        console.log(`Received a dice roll request to ${requestURL}, overriding it.`);
                    }
                    const rollRequest = (0, roll_parser_1.parseRollRequest)(rollCommand);
                    const sendRollRequestToDemiplane = (rollQuery) => {
                        const newRequestURL = `https://utils-api.demiplane.com/dice-roll?roll=${rollQuery || 0}`;
                        // @ts-ignore
                        this.pixelsRoll = false;
                        this.open("GET", newRequestURL);
                        // @ts-ignore
                        this.nativeSend(body);
                    };
                    if (!rollRequest.containsRolls()) {
                        console.log("The Pixel integration is not waiting for any rolls.");
                        sendRollRequestToDemiplane(rollCommand);
                    }
                    else {
                        console.log(`The Pixel integration is waiting for the following rolls: '${rollRequest.stringify(false)}'`);
                        try {
                            (0, ui_notifications_1.addRollsExpectedNotification)(rollRequest);
                        }
                        catch (e) {
                            console.error("Could not add expected rolls notification", e);
                        }
                        // Do not send the request yet, but instead request the results from virtual dice or Pixels dice
                        (0, roll_executor_1.expectRolls)(rollRequest, gameSystem)
                            .then((data) => {
                            (0, ui_notifications_1.removeRollsExpectedNotification)();
                            // When we have received the response, we have to process it just a bit.
                            if (integration.isDebugEnabled()) {
                                console.log(`Received faked response with data ${JSON.stringify(data)}; ensuring that it is a JSON.`);
                            }
                            let parsedData = data;
                            if (typeof data === "string") {
                                parsedData = JSON.parse(data);
                            }
                            return parsedData;
                        })
                            .then((localResponseBody) => {
                            // I haven't yet found a way to fully simulate sending and then receiving a response
                            //  from the API. So instead, now that we actually have the value we'll send the request,
                            //  wait for a reply and then replace the response.
                            this.addEventListener("readystatechange", () => {
                                if (this.readyState === XMLHttpRequest.DONE) {
                                    const remoteResponseBody = JSON.parse(this.responseText);
                                    const mergedResponseBody = (0, roll_executor_1.mergeRollResults)(localResponseBody, remoteResponseBody, rollCommand);
                                    if (integration.isDebugEnabled()) {
                                        console.log({
                                            description: "Setting body of response",
                                            readyState: this.readyState,
                                            remoteResponseBody,
                                            localResponseBody,
                                            mergedResponseBody,
                                        });
                                    }
                                    // Now that we have processed the data, we set it as the response
                                    Object.defineProperty(this, "responseText", {
                                        configurable: true,
                                        value: JSON.stringify(mergedResponseBody),
                                    });
                                }
                            });
                            sendRollRequestToDemiplane(rollRequest.unusedParts);
                        })
                            .catch((e) => {
                            console.error(`Interceptor failed for url ${requestURL}.`, e);
                        });
                    }
                }
                else {
                    // Either this is not a dice roll request, or the integration is not enabled. Proceed as normal.
                    // @ts-ignore
                    this.nativeSend(body);
                }
            })();
        };
        // @ts-ignore
        XMLHttpRequest.prototype.send = customSend;
    })();
}
const characterSheetUrlRegex = /https:\/\/app.demiplane.com\/nexus\/[a-zA-Z0-9-]+\/character-sheet\/[a-z0-9-]+/;
// Listen for navigation events
unsafeWindow.navigation.addEventListener("navigate", (event) => {
    // If we have navigated to a character sheet, we may have to add a pixels menu button.
    if (characterSheetUrlRegex.test(event.destination.url)) {
        // Make sure that we don't already have a pixels menu button, before adding one.
        const pixelsMenuButtons = unsafeWindow.document.getElementsByClassName("top-nav-nexus-pixels-menu-btn");
        if (pixelsMenuButtons.length === 0) {
            (0, ui_pixels_menu_1.setupPixelsMenu)()
                .then(() => {
                if (integration.isDebugEnabled()) {
                    console.log("Pixels menu has been created.");
                }
            })
                .catch((e) => {
                console.error("Error while setting up pixels menu.", e);
            });
        }
    }
});


/***/ }),

/***/ 530:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.togglePixelsIntegrationEnabledForDieType = exports.setPixelsIntegrationEnabledForDieType = exports.updateIntegrationEnabledForDice = exports.getIntegrationEnabledForDice = exports.registerIntegrationForDiceEnabledListener = exports.isDebugEnabled = exports.toggleEnabledForCharacter = exports.setEnabledForCharacter = exports.isEnabledForCharacter = exports.registerEnabledForCharacterListener = exports.characterSheetInfo = void 0;
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
exports.characterSheetInfo = characterSheetInfo;
const enabledForCharacterListeners = [];
const registerEnabledForCharacterListener = (listener) => {
    enabledForCharacterListeners.push(listener);
};
exports.registerEnabledForCharacterListener = registerEnabledForCharacterListener;
const integrationEnabledStorageName = "pixelsIntegrationEnabled";
const isEnabledForCharacter = (characterId) => {
    let characterSheetId = characterId;
    if (!characterSheetId) {
        characterSheetId = (0, exports.characterSheetInfo)().characterId || "";
    }
    let enabledForCharacter = false;
    const localStorageEntryString = unsafeWindow.localStorage.getItem(integrationEnabledStorageName) || "{}";
    const localStorageEntry = JSON.parse(localStorageEntryString);
    enabledForCharacter = localStorageEntry[characterSheetId] === true;
    return enabledForCharacter;
};
exports.isEnabledForCharacter = isEnabledForCharacter;
// @ts-ignore
unsafeWindow.isPixelsIntegrationEnabled = exports.isEnabledForCharacter;
const setEnabledForCharacter = (enabled, characterId) => {
    let characterSheetId = characterId;
    if (!characterSheetId) {
        characterSheetId = (0, exports.characterSheetInfo)().characterId || "";
    }
    const previouslyEnabledForCharacter = (0, exports.isEnabledForCharacter)(characterId);
    const localStorageEntryString = unsafeWindow.localStorage.getItem(integrationEnabledStorageName) || "{}";
    const localStorageEntry = JSON.parse(localStorageEntryString);
    localStorageEntry[characterSheetId] = enabled;
    unsafeWindow.localStorage.setItem(integrationEnabledStorageName, JSON.stringify(localStorageEntry));
    if (previouslyEnabledForCharacter !== enabled) {
        for (const listener of enabledForCharacterListeners) {
            listener.callback(enabled, characterSheetId);
        }
    }
    return enabled;
};
exports.setEnabledForCharacter = setEnabledForCharacter;
const toggleEnabledForCharacter = (characterId) => {
    let characterSheetId = characterId;
    if (!characterSheetId) {
        characterSheetId = (0, exports.characterSheetInfo)().characterId || "";
    }
    const previouslyEnabledForCharacter = (0, exports.isEnabledForCharacter)(characterId);
    const nowEnabledForCharacter = !previouslyEnabledForCharacter;
    return (0, exports.setEnabledForCharacter)(nowEnabledForCharacter, characterSheetId);
};
exports.toggleEnabledForCharacter = toggleEnabledForCharacter;
// @ts-ignore
unsafeWindow.togglePixelsItegrationEnabled = exports.toggleEnabledForCharacter;
const integrationDebugStorageName = "pixelsIntegrationDebug";
const isDebugEnabled = () => {
    const localStorageEntryString = unsafeWindow.localStorage.getItem(integrationDebugStorageName);
    return localStorageEntryString === "true";
};
exports.isDebugEnabled = isDebugEnabled;
// @ts-ignore
unsafeWindow.togglePixelsItegrationDebug = () => {
    const enabledString = unsafeWindow.localStorage.getItem(integrationDebugStorageName);
    const integrationDebugPreviouslyEnabled = enabledString === "true";
    unsafeWindow.localStorage.setItem(integrationDebugStorageName, `${!integrationDebugPreviouslyEnabled}`);
    return !integrationDebugPreviouslyEnabled;
};
const integrationForDiceEnabledListeners = [];
const registerIntegrationForDiceEnabledListener = (listerner) => {
    integrationForDiceEnabledListeners.push(listerner);
};
exports.registerIntegrationForDiceEnabledListener = registerIntegrationForDiceEnabledListener;
const integrationEnabledForDiceStorageName = "pixelsIntegrationEnabledForDice";
const getIntegrationEnabledForDice = () => {
    const enabledString = unsafeWindow.localStorage.getItem(integrationEnabledForDiceStorageName);
    let enabledObject;
    if (enabledString) {
        enabledObject = JSON.parse(enabledString);
    }
    else {
        // The settings do not yet exist, so create a default and save it
        enabledObject = {
            d4: false,
            d6: false,
            d8: false,
            d10: false,
            d00: false,
            d12: false,
            d20: false,
            dF: false,
        };
        unsafeWindow.localStorage.setItem(integrationEnabledForDiceStorageName, JSON.stringify(enabledObject));
    }
    return enabledObject;
};
exports.getIntegrationEnabledForDice = getIntegrationEnabledForDice;
const updateIntegrationEnabledForDice = (updatedSettings) => {
    const previouslyEnabledString = unsafeWindow.localStorage.getItem(integrationEnabledForDiceStorageName);
    let previouslyEnabledObject;
    if (previouslyEnabledString) {
        previouslyEnabledObject = JSON.parse(previouslyEnabledString);
    }
    else {
        // The settings do not yet exist, so create a default
        previouslyEnabledObject = {
            d4: false,
            d6: false,
            d8: false,
            d10: false,
            d00: false,
            d12: false,
            d20: false,
            dF: false,
        };
    }
    const newlyEnabledObject = Object.assign(Object.assign({}, previouslyEnabledObject), updatedSettings);
    unsafeWindow.localStorage.setItem(integrationEnabledForDiceStorageName, JSON.stringify(newlyEnabledObject));
    for (const listener of integrationForDiceEnabledListeners) {
        const updatedForDieSizes = [];
        for (const key of Object.keys(updatedSettings)) {
            switch (key) {
                case "d4": {
                    updatedForDieSizes.push("d4");
                    break;
                }
                case "d6": {
                    updatedForDieSizes.push("d6");
                    break;
                }
                case "d8": {
                    updatedForDieSizes.push("d8");
                    break;
                }
                case "d10": {
                    updatedForDieSizes.push("d10");
                    break;
                }
                case "d00": {
                    updatedForDieSizes.push("d00");
                    break;
                }
                case "d12": {
                    updatedForDieSizes.push("d12");
                    break;
                }
                case "d20": {
                    updatedForDieSizes.push("d20");
                    break;
                }
                case "dF": {
                    updatedForDieSizes.push("d6fudge");
                    break;
                }
            }
        }
        if (!listener.predicate || listener.predicate(updatedForDieSizes)) {
            listener.callback(newlyEnabledObject);
        }
    }
    return newlyEnabledObject;
};
exports.updateIntegrationEnabledForDice = updateIntegrationEnabledForDice;
const setPixelsIntegrationEnabledForDieType = (dieType, enabled) => {
    const updatedSettings = {};
    switch (dieType) {
        case "d4": {
            updatedSettings.d4 = enabled;
            break;
        }
        case "d6pipped":
        case "d6": {
            updatedSettings.d6 = enabled;
            break;
        }
        case "d8": {
            updatedSettings.d8 = enabled;
            break;
        }
        case "d10": {
            updatedSettings.d10 = enabled;
            break;
        }
        case "d00": {
            updatedSettings.d00 = enabled;
            break;
        }
        case "d12": {
            updatedSettings.d12 = enabled;
            break;
        }
        case "d20": {
            updatedSettings.d20 = enabled;
            break;
        }
        case "d6fudge":
        case "dF": {
            updatedSettings.dF = enabled;
            break;
        }
        default: {
            throw new Error(`Unknown dice type ${dieType}`);
        }
    }
    return (0, exports.updateIntegrationEnabledForDice)(updatedSettings);
};
exports.setPixelsIntegrationEnabledForDieType = setPixelsIntegrationEnabledForDieType;
const togglePixelsIntegrationEnabledForDieType = (dieType) => {
    const integrationEnabledForDice = (0, exports.getIntegrationEnabledForDice)();
    let currentlyEnabled = false;
    switch (dieType) {
        case "d4": {
            currentlyEnabled = integrationEnabledForDice.d4;
            break;
        }
        case "d6pipped":
        case "d6": {
            currentlyEnabled = integrationEnabledForDice.d6;
            break;
        }
        case "d8": {
            currentlyEnabled = integrationEnabledForDice.d8;
            break;
        }
        case "d10": {
            currentlyEnabled = integrationEnabledForDice.d10;
            break;
        }
        case "d00": {
            currentlyEnabled = integrationEnabledForDice.d00;
            break;
        }
        case "d12": {
            currentlyEnabled = integrationEnabledForDice.d12;
            break;
        }
        case "d20": {
            currentlyEnabled = integrationEnabledForDice.d20;
            break;
        }
        case "d6fudge":
        case "dF": {
            currentlyEnabled = integrationEnabledForDice.dF;
            break;
        }
    }
    return (0, exports.setPixelsIntegrationEnabledForDieType)(dieType, !currentlyEnabled);
};
exports.togglePixelsIntegrationEnabledForDieType = togglePixelsIntegrationEnabledForDieType;
// @ts-ignore
unsafeWindow.enablePixelsIntegrationForDieType = (dieType) => (0, exports.setPixelsIntegrationEnabledForDieType)(dieType, true);
// @ts-ignore
unsafeWindow.disablePixelsIntegrationForDieType = (dieType) => (0, exports.setPixelsIntegrationEnabledForDieType)(dieType, false);
// @ts-ignore
unsafeWindow.togglePixelsIntegrationForDieType = (dieType) => (0, exports.togglePixelsIntegrationEnabledForDieType)(dieType);


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
exports.mergeRollResults = exports.expectRolls = exports.CritResult = void 0;
const integration_utils_1 = __webpack_require__(530);
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
    if ((0, integration_utils_1.isDebugEnabled)()) {
        console.log(`Requested rolls of ${diceCount}d${diceSize}`);
    }
    const expectedRolls = new Array(diceCount)
        .fill(null)
        .map(() => new Promise((resolve, reject) => {
        if ((0, integration_utils_1.isDebugEnabled)()) {
            console.log(`Waiting for a roll of 1d${diceSize}`);
        }
        (0, roll_handler_1.registerRollListener)({
            diceSize,
            callback: (rollEvent) => {
                if ((0, integration_utils_1.isDebugEnabled)()) {
                    console.log({
                        description: "Roll event occurred",
                        rollEvent,
                    });
                }
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
const mergeRollResults = (firstRollResult, secondRollResult, originalRollCommand) => {
    const mergedResult = Object.assign({}, firstRollResult);
    // Update the total
    mergedResult.total += secondRollResult.total;
    // Update the crit info
    if (firstRollResult.crit === CritResult.CRITICAL_SUCCESS ||
        secondRollResult.crit === CritResult.CRITICAL_SUCCESS) {
        mergedResult.crit = CritResult.CRITICAL_SUCCESS;
    }
    else if (firstRollResult.crit === CritResult.CRITICAL_FAILURE ||
        secondRollResult.crit === CritResult.CRITICAL_FAILURE) {
        mergedResult.crit = CritResult.CRITICAL_FAILURE;
    }
    else {
        mergedResult.crit = CritResult.NO_CRIT;
    }
    // Set the new parts in the merged result
    mergedResult.raw_dice.parts = (() => {
        var _a, _b;
        const rollDiceParts = (() => {
            const rollDiceParts = {
                d4: [],
                d6: [],
                d8: [],
                d10: [],
                d00: [],
                d12: [],
                d20: [],
                dF: [],
                modifiers: [],
                comments: [],
            };
            for (const rollPart of [
                ...firstRollResult.raw_dice.parts,
                ...secondRollResult.raw_dice.parts,
            ]) {
                switch (rollPart.type) {
                    case "dice": {
                        switch (rollPart.dice_size) {
                            case 4: {
                                rollDiceParts.d4.push(rollPart);
                                break;
                            }
                            case 6: {
                                rollDiceParts.d6.push(rollPart);
                                break;
                            }
                            case 8: {
                                rollDiceParts.d8.push(rollPart);
                                break;
                            }
                            case 10: {
                                rollDiceParts.d10.push(rollPart);
                                break;
                            }
                            case 100: {
                                rollDiceParts.d00.push(rollPart);
                                break;
                            }
                            case 12: {
                                rollDiceParts.d12.push(rollPart);
                                break;
                            }
                            case 20: {
                                rollDiceParts.d20.push(rollPart);
                                break;
                            }
                            case "F": {
                                rollDiceParts.dF.push(rollPart);
                                break;
                            }
                            default: {
                                console.error({
                                    description: "Could not add a roll result",
                                    rollPart,
                                });
                            }
                        }
                        break;
                    }
                    case "constant": {
                        rollDiceParts.modifiers.push(rollPart);
                        break;
                    }
                    case "comment": {
                        rollDiceParts.comments.push(rollPart);
                        break;
                    }
                    case "operator": {
                        // Ignore operators, we'll add those manually at a later point
                        break;
                    }
                }
            }
            return rollDiceParts;
        })();
        const addToMergedRoll = (dieType, count, matchingParts) => {
            const numberOfDice = matchingParts
                .flatMap(({ dice }) => dice.length)
                .reduce((a, b) => a + b, 0);
            if (numberOfDice !== count) {
                console.error({
                    description: "The expected number of rolls for a die size doesn't match the actual number of rolls for that size. Continuing nevertheless.",
                    expectedNumber: count,
                    actualNumber: matchingParts.length,
                    actualRolls: matchingParts,
                    dieType,
                });
            }
            let first = true;
            for (const rollPart of matchingParts) {
                if (!first) {
                    const operatorPart = {
                        type: "operator",
                        value: "+",
                        annotation: "",
                    };
                    mergedRawDiceParts.push(operatorPart);
                }
                mergedRawDiceParts.push(rollPart);
                first = false;
            }
        };
        const mergedRawDiceParts = [];
        const rollCommandParts = (_b = (_a = originalRollCommand === null || originalRollCommand === void 0 ? void 0 : originalRollCommand.replace(/%2B/g, "+")) === null || _a === void 0 ? void 0 : _a.replace(/\++/g, "+")) === null || _b === void 0 ? void 0 : _b.split(/(\+|-)/);
        const rollCommandDiePartRegex = /^(?<count>\d+)d(?<dieType>(\d+)|F)$/;
        const rollCommandModifierPartRegex = /^(?<count>\d+)$/;
        let modifiersAdded = false;
        for (const rollCommandPart of rollCommandParts) {
            console.log(`Testing ${rollCommandPart}...`);
            if (rollCommandDiePartRegex.test(rollCommandPart)) {
                const matches = rollCommandPart.match(rollCommandDiePartRegex);
                const { count, dieType } = matches === null || matches === void 0 ? void 0 : matches.groups;
                switch (dieType) {
                    case "4": {
                        addToMergedRoll(dieType, Number.parseInt(count), rollDiceParts.d4);
                        break;
                    }
                    case "6": {
                        addToMergedRoll(dieType, Number.parseInt(count), rollDiceParts.d6);
                        break;
                    }
                    case "8": {
                        addToMergedRoll(dieType, Number.parseInt(count), rollDiceParts.d8);
                        break;
                    }
                    case "10": {
                        addToMergedRoll(dieType, Number.parseInt(count), rollDiceParts.d10);
                        break;
                    }
                    case "100": {
                        addToMergedRoll(dieType, Number.parseInt(count), rollDiceParts.d00);
                        break;
                    }
                    case "12": {
                        addToMergedRoll(dieType, Number.parseInt(count), rollDiceParts.d12);
                        break;
                    }
                    case "20": {
                        addToMergedRoll(dieType, Number.parseInt(count), rollDiceParts.d20);
                        break;
                    }
                    case "F": {
                        addToMergedRoll(dieType, Number.parseInt(count), rollDiceParts.dF);
                        break;
                    }
                }
            }
            else if (rollCommandPart === "+" || rollCommandPart === "-") {
                const operatorPart = {
                    type: "operator",
                    value: rollCommandPart,
                    annotation: "",
                };
                mergedRawDiceParts.push(operatorPart);
            }
            else if (rollCommandModifierPartRegex.test(rollCommandPart)) {
                if (!modifiersAdded) {
                    const collectedModifier = {
                        type: "constant",
                        value: 0,
                        annotation: "",
                    };
                    for (const modifier of rollDiceParts.modifiers) {
                        collectedModifier.value += modifier.value;
                    }
                    mergedRawDiceParts.push(collectedModifier);
                    modifiersAdded = true;
                }
            }
            else {
                console.error({
                    description: "Unknown part of the roll command found, not using it.",
                    part: rollCommandPart,
                });
            }
        }
        return mergedRawDiceParts;
    })();
    if ((0, integration_utils_1.isDebugEnabled)()) {
        console.log({
            firstRollResult,
            secondRollResult,
            mergedResult,
        });
    }
    return mergedResult;
};
exports.mergeRollResults = mergeRollResults;
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
exports.connectToDie = exports.getCurrentlyConnectedDice = exports.registerDiceConnectionListener = exports.registerRollListener = void 0;
const pixels_web_connect_1 = __webpack_require__(198);
const integration_utils_1 = __webpack_require__(530);
const integration_utils_2 = __webpack_require__(530);
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
    let rollEvent;
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
    }
    else {
        rollEvent = {
            success: false,
            diceSize: "unknown",
            dieType: "unknown",
        };
    }
    if (listener && rollEvent.success) {
        if ((0, integration_utils_1.isDebugEnabled)()) {
            console.log({
                description: "About to call roll listener",
                listener,
            });
        }
        listener.callback(rollEvent);
        // @ts-ignore
        unsafeWindow.expectedRolls = listExpectedRolls();
    }
    return rollEvent;
};
const connectedDice = {
    d4: [],
    d6: [],
    d8: [],
    d10: [],
    d00: [],
    d12: [],
    d20: [],
    dF: [],
};
const diceConnectionListeners = [];
const registerDiceConnectionListener = (diceConnectionListener) => {
    diceConnectionListeners.push(diceConnectionListener);
};
exports.registerDiceConnectionListener = registerDiceConnectionListener;
const notifyDiceConnectionListeners = (connectedDie) => __awaiter(void 0, void 0, void 0, function* () {
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
});
const getCurrentlyConnectedDice = () => JSON.parse(JSON.stringify(connectedDice));
exports.getCurrentlyConnectedDice = getCurrentlyConnectedDice;
// @ts-ignore
unsafeWindow.pixelsIntegrationConnectedDice = exports.getCurrentlyConnectedDice;
const connectToDie = () => __awaiter(void 0, void 0, void 0, function* () {
    const pixel = yield (0, pixels_web_connect_1.requestPixel)();
    pixel.addEventListener("status", (status) => {
        const { dieType, colorway: pixelColorway, name: pixelName, pixelId, } = pixel;
        const connectedDie = {
            id: pixelId,
            name: pixelName,
            colorway: pixelColorway,
            dieType,
        };
        if ((0, integration_utils_1.isDebugEnabled)()) {
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
                (0, integration_utils_2.updateIntegrationEnabledForDice)({
                    [dieType]: true,
                });
                notifyDiceConnectionListeners(connectedDie);
                break;
            }
            case "disconnecting":
            case "disconnected": {
                const disconnectedDice = [];
                switch (dieType) {
                    case "d4": {
                        const matchingDice = connectedDice.d4.filter(({ id }) => id === pixelId);
                        if (matchingDice.length > 0) {
                            connectedDice.d4 = connectedDice.d4.filter(({ id }) => id !== pixelId);
                            disconnectedDice.push(...matchingDice);
                        }
                        break;
                    }
                    case "d6":
                    case "d6pipped": {
                        const matchingDice = connectedDice.d6.filter(({ id }) => id === pixelId);
                        if (matchingDice.length > 0) {
                            connectedDice.d6 = connectedDice.d6.filter(({ id }) => id !== pixelId);
                            disconnectedDice.push(...matchingDice);
                        }
                        break;
                    }
                    case "d8": {
                        const matchingDice = connectedDice.d8.filter(({ id }) => id === pixelId);
                        if (matchingDice.length > 0) {
                            connectedDice.d8 = connectedDice.d8.filter(({ id }) => id !== pixelId);
                            disconnectedDice.push(...matchingDice);
                        }
                        break;
                    }
                    case "d10":
                    case "d00": {
                        const matchingD10s = connectedDice.d10.filter(({ id }) => id === pixelId);
                        if (matchingD10s.length > 0) {
                            connectedDice.d10 = connectedDice.d10.filter(({ id }) => id !== pixelId);
                            disconnectedDice.push(...matchingD10s);
                        }
                        const matchingD00s = connectedDice.d00.filter(({ id }) => id === pixelId);
                        if (matchingD00s.length > 0) {
                            connectedDice.d00 = connectedDice.d00.filter(({ id }) => id !== pixelId);
                            disconnectedDice.push(...matchingD00s);
                        }
                        break;
                    }
                    case "d12": {
                        const matchingDice = connectedDice.d12.filter(({ id }) => id === pixelId);
                        if (matchingDice.length > 0) {
                            connectedDice.d12 = connectedDice.d12.filter(({ id }) => id !== pixelId);
                        }
                        disconnectedDice.push(...matchingDice);
                        break;
                    }
                    case "d20": {
                        const matchingDice = connectedDice.d20.filter(({ id }) => id === pixelId);
                        if (matchingDice.length > 0) {
                            connectedDice.d20 = connectedDice.d20.filter(({ id }) => id !== pixelId);
                            disconnectedDice.push(...matchingDice);
                        }
                        break;
                    }
                    case "d6fudge": {
                        const matchingDice = connectedDice.dF.filter(({ id }) => id === pixelId);
                        if (matchingDice.length > 0) {
                            connectedDice.dF = connectedDice.dF.filter(({ id }) => id !== pixelId);
                            disconnectedDice.push(...matchingDice);
                        }
                        break;
                    }
                    case "unknown": {
                        console.error(`Unknown die type ${dieType} disconnecting. Don't know, what to do about it.`);
                    }
                }
                (0, integration_utils_2.updateIntegrationEnabledForDice)({
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
    yield (0, pixels_web_connect_1.repeatConnect)(pixel, {
        retries: 10,
    });
    // Blink the die to indicate a successful connection
    pixel.blink(pixels_web_connect_1.Color.brightBlue, {
        count: 3,
        duration: 2000,
        fade: 0.5,
    });
    // If we're connecting a die, we want to enable the integration (if it isn't already)
    (0, integration_utils_1.setEnabledForCharacter)(true);
    const { dieType, colorway: pixelColorway, name: pixelName, pixelId } = pixel;
    pixel.addEventListener("roll", (face) => {
        if ((0, integration_utils_1.isDebugEnabled)()) {
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
});
exports.connectToDie = connectToDie;
const registerVirtualRollers = () => {
    const rollVirtualD4 = (count = 1) => {
        const cleanCount = Math.max(count, 1);
        const results = new Array(cleanCount);
        for (let i = 0; i < cleanCount; i++) {
            const randomFace = Math.round(Math.random() * 4) + 1;
            results[i] = handleDieRolled("d4", randomFace, "virtual", "Virtual d4", -4);
        }
        return results;
    };
    const rollVirtualD6 = (count = 1) => {
        const cleanCount = Math.max(count, 1);
        const results = new Array(cleanCount);
        for (let i = 0; i < cleanCount; i++) {
            const randomFace = Math.round(Math.random() * 6) + 1;
            results[i] = handleDieRolled("d6", randomFace, "virtual", "Virtual d6", -6);
        }
        return results;
    };
    const rollVirtualD8 = (count = 1) => {
        const cleanCount = Math.max(count, 1);
        const results = new Array(cleanCount);
        for (let i = 0; i < cleanCount; i++) {
            const randomFace = Math.round(Math.random() * 8) + 1;
            results[i] = handleDieRolled("d8", randomFace, "virtual", "Virtual d8", -8);
        }
        return results;
    };
    const rollVirtualD10 = (count = 1) => {
        const cleanCount = Math.max(count, 1);
        const results = new Array(cleanCount);
        for (let i = 0; i < cleanCount; i++) {
            const randomFace = Math.round(Math.random() * 10);
            results[i] = handleDieRolled("d10", randomFace, "virtual", "Virtual d10", -10);
        }
        return results;
    };
    const rollVirtualD00 = (count = 1) => {
        const cleanCount = Math.max(count, 1);
        const results = new Array(cleanCount);
        for (let i = 0; i < cleanCount; i++) {
            const randomFace = Math.round(Math.random() * 10) * 10;
            results[i] = handleDieRolled("d00", randomFace, "virtual", "Virtual d00", -100);
        }
        return results;
    };
    const rollVirtualD12 = (count = 1) => {
        const cleanCount = Math.max(count, 1);
        const results = new Array(cleanCount);
        for (let i = 0; i < cleanCount; i++) {
            const randomFace = Math.round(Math.random() * 12) + 1;
            results[i] = handleDieRolled("d12", randomFace, "virtual", "Virtual d12", -12);
        }
        return results;
    };
    const rollVirtualD20 = (count = 1) => {
        const cleanCount = Math.max(count, 1);
        const results = new Array(cleanCount);
        for (let i = 0; i < cleanCount; i++) {
            const randomFace = Math.round(Math.random() * 20) + 1;
            results[i] = handleDieRolled("d20", randomFace, "virtual", "Virtual d20", -20);
        }
        return results;
    };
    const rollVirtualDF = (count = 1) => {
        const cleanCount = Math.max(count, 1);
        const results = new Array(cleanCount);
        for (let i = 0; i < cleanCount; i++) {
            const randomFace = Math.round(Math.random() * 2) - 1;
            results[i] = handleDieRolled("d6fudge", randomFace, "virtual", "Virtual dF", -3);
        }
        return results;
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseRollRequest = void 0;
const integration_utils_1 = __webpack_require__(530);
const types_1 = __webpack_require__(613);
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
    const enabledForDice = (0, integration_utils_1.getIntegrationEnabledForDice)();
    const rollRequest = new types_1.RollRequest();
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
        .filter((rollPart) => !(enabledForDice.d10 && enabledForDice.d00 && d100Regex.test(rollPart)))
        .filter((rollPart) => !(enabledForDice.dF && dFRegex.test(rollPart)))
        .filter((rollPart) => !modifierRegex.test(rollPart));
    if (unusedParts.length > 0) {
        if ((0, integration_utils_1.isDebugEnabled)()) {
            console.log({
                description: "The roll query contained parts that could not be interpreted or dice types that are not currently enabled",
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
exports.parseRollRequest = parseRollRequest;


/***/ }),

/***/ 414:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTranslation = void 0;
const en = {
    ui: {
        notification: {
            awaitingPixelsRoll: "Awaiting Pixels roll...",
        },
        pixelsMenu: {
            button: {
                title: "Pixels Dice",
                ariaLabel: "pixels dice menu button",
            },
            settings: {
                title: "Dice settings",
                connectDieButton: {
                    text: "Connect Pixels die",
                    ariaLabel: "connect pixels die",
                },
                enableForCharacter: {
                    text: "Enable for Character",
                },
            },
            overview: {
                title: "Dice overview",
            },
        },
    },
};
// Methods for accessing the translations
const getValueAtPath = (path, object) => {
    if (!object || typeof object === "string") {
        return object;
    }
    if (path.length > 1) {
        const nextPathElement = path.shift();
        if (nextPathElement) {
            return getValueAtPath(path, object[nextPathElement]);
        }
    }
    else {
        return object[path[0]];
    }
    return undefined;
};
const getTranslation = (key, lang = "en") => {
    switch (lang) {
        case "en": {
            return getValueAtPath(key.split("."), en) || "";
        }
    }
    return "";
};
exports.getTranslation = getTranslation;


/***/ }),

/***/ 613:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RollRequest = void 0;
/**
 * An object containing fields for each die type (d4, d6, d8, d10, d12, d20, d100 and dF for fudge dice),
 * listing how often that type of die should be rolled.
 * It also containts a constant modifier value that should be added to the final result.
 */
class RollRequest {
    constructor() {
        this._d4 = 0;
        this._d6 = 0;
        this._d8 = 0;
        this._d10 = 0;
        this._d12 = 0;
        this._d20 = 0;
        this._d100 = 0;
        this._dF = 0;
        this._modifier = 0;
    }
    set d4(value) {
        if (value > 0) {
            this._d4 = value;
        }
    }
    get d4() {
        return this._d4;
    }
    set d6(value) {
        if (value > 0) {
            this._d6 = value;
        }
    }
    get d6() {
        return this._d6;
    }
    set d8(value) {
        if (value > 0) {
            this._d8 = value;
        }
    }
    get d8() {
        return this._d8;
    }
    set d10(value) {
        if (value > 0) {
            this._d10 = value;
        }
    }
    get d10() {
        return this._d10;
    }
    set d12(value) {
        if (value > 0) {
            this._d12 = value;
        }
    }
    get d12() {
        return this._d12;
    }
    set d20(value) {
        if (value > 0) {
            this._d20 = value;
        }
    }
    get d20() {
        return this._d20;
    }
    set d100(value) {
        if (value > 0) {
            this._d100 = value;
        }
    }
    get d100() {
        return this._d100;
    }
    set dF(value) {
        if (value > 0) {
            this._dF = value;
        }
    }
    get dF() {
        return this._dF;
    }
    set modifier(value) {
        this._modifier = value;
    }
    get modifier() {
        return this._modifier;
    }
    set unusedParts(value) {
        this._unusedParts = value;
    }
    get unusedParts() {
        return this._unusedParts;
    }
    containsRolls() {
        return (this.d4 > 0 ||
            this.d6 > 0 ||
            this.d8 > 0 ||
            this.d10 > 0 ||
            this.d100 > 0 ||
            this.d12 > 0 ||
            this.d20 > 0 ||
            this.dF > 0);
    }
    stringify(includeModifier = true, separator = ", ") {
        const parts = [];
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
        }
        else if (this.d10) {
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
            parts.push(`${this.modifier}`);
        }
        return parts.join(separator);
    }
}
exports.RollRequest = RollRequest;


/***/ }),

/***/ 213:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeRollsExpectedNotification = exports.addRollsExpectedNotification = void 0;
const integration_utils_1 = __webpack_require__(530);
const translations_1 = __webpack_require__(414);
let rollsExpectedNotification;
const getDiceSvg = (svgClass, width, height) => {
    const diceRollerGrids = unsafeWindow.document.getElementsByClassName("dice-roller__dice-grid");
    if (diceRollerGrids.length === 0) {
        if ((0, integration_utils_1.isDebugEnabled)()) {
            console.log(`No dice roller grid found, so no svg with class ${svgClass} could be found.`);
        }
        return undefined;
    }
    const svgs = diceRollerGrids[0].getElementsByClassName(svgClass);
    if (svgs.length === 0) {
        if ((0, integration_utils_1.isDebugEnabled)()) {
            console.log(`No svg with class ${svgClass} could be found.`);
        }
        return undefined;
    }
    const svg = svgs[0].cloneNode(true);
    svg.setAttribute("width", `${width}`);
    svg.setAttribute("height", `${height}`);
    return svg;
};
const getD4Svg = () => getDiceSvg("dice-d4", 28, 18);
const getD6Svg = () => getDiceSvg("dice-fab-d6", 26, 18);
const getD8Svg = () => getDiceSvg("dice-fab-d8", 22, 18);
const getD10Svg = () => getDiceSvg("dice-fab-d10", 28, 18);
const getD12Svg = () => getDiceSvg("dice-fab-d12", 28, 18);
const getD20Svg = () => getDiceSvg("dice-fab-20", 26, 18);
const getRollDiceHistoryCssClass = () => {
    const { gameSystem } = (0, integration_utils_1.characterSheetInfo)();
    switch (gameSystem) {
        case "avatarlegends":
            return "dice-roll-history";
        case "daggerheart":
            return "dice-history-main-container";
        case "pathfinder2e":
            return "dice-roll-history";
        default:
            return "dice-roll-history";
    }
    // TODO Check other systems
};
const addRollsExpectedNotification = (rollRequest) => {
    const { gameSystem } = (0, integration_utils_1.characterSheetInfo)();
    const notificationParents = unsafeWindow.document.getElementsByClassName(getRollDiceHistoryCssClass());
    if (notificationParents.length === 0) {
        if ((0, integration_utils_1.isDebugEnabled)()) {
            console.log("No dice roll history found to which a notification can be added.");
        }
        return undefined;
    }
    switch (gameSystem) {
        case "avatarlegends":
        case "pathfinder2e": {
            (() => {
                var _a;
                const notificationTemplate = notificationParents[0].firstChild;
                if (!notificationTemplate) {
                    if ((0, integration_utils_1.isDebugEnabled)()) {
                        console.log("The dice roll history is empty, no element can be cloned.", notificationParents[0]);
                    }
                    return undefined;
                }
                rollsExpectedNotification = notificationTemplate.cloneNode(true);
                const titleRow = rollsExpectedNotification.firstChild;
                // Change the title of the new element
                const titleElement = titleRow.firstChild;
                const titleText = (0, translations_1.getTranslation)("ui.notification.awaitingPixelsRoll", "en");
                titleElement.innerHTML = titleText;
                // Remove the "Result" title from the titleRow
                const resultTitleElement = titleRow.lastChild;
                if (resultTitleElement) {
                    titleRow.removeChild(resultTitleElement);
                }
                // Set the expected rolls
                const textRow = rollsExpectedNotification.children[1];
                const mainText = textRow.firstChild;
                mainText.innerHTML = rollRequest.stringify(false, ", ");
                // Remove the "Result" element from the textRow
                const resultElement = textRow.lastChild;
                if (resultElement) {
                    textRow.removeChild(resultElement);
                }
                // Set the remaining rolls
                const diceRollRow = rollsExpectedNotification.lastChild;
                const diceRollParent = diceRollRow.getElementsByClassName("dice-roll-details__dice")[0];
                const newDiceRollIndicators = [];
                for (const key in rollRequest) {
                    if (!key.startsWith("_d")) {
                        continue;
                    }
                    const getter = Object.getOwnPropertyDescriptor(rollRequest, key);
                    if (getter === null || getter === void 0 ? void 0 : getter.value) {
                        const diceIndicator = diceRollParent.firstChild.cloneNode(true);
                        let svg;
                        switch (key) {
                            case "_d4": {
                                svg = getD4Svg();
                                break;
                            }
                            case "_d6": {
                                svg = getD6Svg();
                                break;
                            }
                            case "_d8": {
                                svg = getD8Svg();
                                break;
                            }
                            case "_d10": {
                                svg = getD10Svg();
                                break;
                            }
                            // We don't have a case where d00s are expected
                            case "_d12": {
                                svg = getD12Svg();
                                break;
                            }
                            case "_d20": {
                                svg = getD20Svg();
                                break;
                            }
                            // We don't have a case where dFs are expected
                            default: {
                                console.error(`No svg for dice value ${key.substring(1)} known.`);
                            }
                        }
                        if (svg) {
                            const diceRollDetails = diceIndicator.firstChild;
                            diceRollDetails.removeChild(diceRollDetails.firstChild);
                            diceRollDetails.setAttribute("data-cy", `dice-roll-details-${key.substring(1)}-icon`);
                            ((_a = diceRollDetails.lastChild) === null || _a === void 0 ? void 0 : _a.lastChild).innerHTML =
                                `${getter.value} x`;
                            diceRollDetails.append(svg);
                            newDiceRollIndicators.push(diceIndicator);
                        }
                    }
                }
                diceRollParent.replaceChildren(...newDiceRollIndicators);
                // Show the notification
                notificationParents[0].insertBefore(rollsExpectedNotification, notificationTemplate);
            })();
            break;
        }
        case "daggerheart": {
            (() => {
                var _a, _b, _c;
                const notificationTemplate = notificationParents[0].lastChild;
                if (!notificationTemplate) {
                    if ((0, integration_utils_1.isDebugEnabled)()) {
                        console.log("The dice roll history is empty, no element can be cloned.", notificationParents[0]);
                    }
                    return undefined;
                }
                rollsExpectedNotification = notificationTemplate.cloneNode(true);
                // Remove the "With Hope" label if it's there
                rollsExpectedNotification.classList.remove("dice-roller-history--roll-with-hope");
                rollsExpectedNotification.classList.add("dice-roller-history--awaiting-pixels-roll");
                rollsExpectedNotification.setAttribute("style", `
					background: linear-gradient(180deg, rgb(62, 172, 194) 0%, rgb(121, 62, 194) 25%, rgb(245, 58, 37) 50%, rgb(245, 241, 27) 75%, rgb(124, 207, 128));
					padding: 12px !important;
					position: relative;
					border-radius: 8px;
					border: 1px solid #888888;
					text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
				`);
                // Now find and modify the inner container
                const diceHistoryExpandedContainer = rollsExpectedNotification.getElementsByClassName("dice-history-expanded-container");
                if (diceHistoryExpandedContainer.length === 0) {
                    if ((0, integration_utils_1.isDebugEnabled)()) {
                        console.log("There is no dice roll history expanced container, so the element cannot be edited.", notificationParents[0]);
                    }
                    return undefined;
                }
                const titleRow = (_a = diceHistoryExpandedContainer[0].firstChild) === null || _a === void 0 ? void 0 : _a.firstChild;
                // Change the title of the new element
                const historyItemCalculatedSource = titleRow.getElementsByClassName("history-item-calculated__value dice-history-item-name--source");
                if (historyItemCalculatedSource.length > 0) {
                    const titleText = (0, translations_1.getTranslation)("ui.notification.awaitingPixelsRoll", "en");
                    historyItemCalculatedSource[0].innerHTML = titleText;
                }
                const historyItemCalculatedValue = titleRow.getElementsByClassName("history-item-calculated__value dice-history-item-name");
                if (historyItemCalculatedValue.length) {
                    historyItemCalculatedValue[0].innerHTML = rollRequest.stringify(false, ", ");
                }
                // Remove the reroll and result elements
                const diceRollerButton = diceHistoryExpandedContainer[0].getElementsByClassName("dice-roller-button");
                if (diceRollerButton.length > 0) {
                    (_b = diceRollerButton[0].parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(diceRollerButton[0]);
                }
                const totalResultContainer = diceHistoryExpandedContainer[0].getElementsByClassName("dice-history-item-total-result-container");
                if (totalResultContainer.length > 0) {
                    (_c = totalResultContainer[0].parentElement) === null || _c === void 0 ? void 0 : _c.removeChild(totalResultContainer[0]);
                }
                // Display the dice to be rolled
                const historyItemResult = rollsExpectedNotification.getElementsByClassName("history-item-result");
                if (historyItemResult) {
                    const createDieSymbolFigure = (dieSize) => {
                        const dieFigure = unsafeWindow.document.createElement("div");
                        dieFigure.classList.add("MuiGrid-root", "MuiGrid-item", "history-item-result__die", `history-item-result__die--${dieSize}`, "history-item-result__die--7", "dice-history-result-dice");
                        dieFigure.setAttribute("style", `
							box-sizing: border-box;
							margin: 0px;
							-webkit-box-align: center;
							align-items: center;
						`);
                        const figure = unsafeWindow.document.createElement("figure");
                        figure.classList.add("history-item-result__image-container", "MuiBox-root");
                        figure.setAttribute("style", `
							background: url(https://content.demiplane.com/nexus/daggerheart/character/dice/dh-${dieSize}-die.png);
							background-size: auto 100%;
							background-position: center;
							background-repeat: no-repeat;
						`);
                        dieFigure.appendChild(figure);
                        // This is left empty for the time being, though it could in future be filled with the actually rolled result as a kind of live update.
                        const resultNumber = unsafeWindow.document.createElement("p");
                        resultNumber.classList.add("MuiTypography-root", "MuiTypography-body1", "history-item-result__label", `expected-pixels-roll-${dieSize}`);
                        resultNumber.setAttribute("style", `
							position: absolute;
							padding-top: 4.5px !important;
							font-weight: 400;
						`);
                        dieFigure.appendChild(resultNumber);
                        return dieFigure;
                    };
                    const createDieSymbolFigures = (count, dieSize) => new Array(count)
                        // We have to create mock elements to be able to use the map function
                        .fill(null)
                        .map(() => createDieSymbolFigure(dieSize));
                    const expectedD4s = createDieSymbolFigures(rollRequest.d4, "d4");
                    const expectedD6s = createDieSymbolFigures(rollRequest.d6, "d6");
                    const expectedD8s = createDieSymbolFigures(rollRequest.d8, "d8");
                    const expectedD10s = createDieSymbolFigures(rollRequest.d10, "d10");
                    const expectedD12s = createDieSymbolFigures(rollRequest.d12, "d12");
                    const expectedD20s = createDieSymbolFigures(rollRequest.d20, "d20");
                    historyItemResult[0].replaceChildren(...expectedD4s, ...expectedD6s, ...expectedD8s, ...expectedD10s, ...expectedD12s, ...expectedD20s);
                }
                // Remove the static modifier
                const staticModifier = rollsExpectedNotification.getElementsByClassName("dice-history-item-static-modifier");
                if (staticModifier.length > 0) {
                    if (rollRequest.unusedParts) {
                        staticModifier[0].innerHTML = `+${rollRequest.unusedParts}`.replace(/%2B/g, "+");
                    }
                    else {
                        staticModifier[0].innerHTML = "";
                    }
                }
            })();
            // Show the notification
            if (rollsExpectedNotification) {
                notificationParents[0].appendChild(rollsExpectedNotification);
            }
            break;
        }
    }
    return rollsExpectedNotification;
};
exports.addRollsExpectedNotification = addRollsExpectedNotification;
const removeRollsExpectedNotification = (element = rollsExpectedNotification) => {
    if (!element) {
        if ((0, integration_utils_1.isDebugEnabled)()) {
            console.log("There is no rolls expected notification to be removed.");
        }
        return;
    }
    const notificationParents = unsafeWindow.document.getElementsByClassName(getRollDiceHistoryCssClass());
    if (notificationParents.length === 0) {
        if ((0, integration_utils_1.isDebugEnabled)()) {
            console.log("No dice roll history found from which a notification can be removed.");
        }
    }
    else {
        if ((0, integration_utils_1.isDebugEnabled)()) {
            console.log("About to remove the rolls expected notification...");
        }
        notificationParents[0].removeChild(element);
    }
};
exports.removeRollsExpectedNotification = removeRollsExpectedNotification;


/***/ }),

/***/ 426:
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
exports.setupPixelsMenu = void 0;
const integration_utils_1 = __webpack_require__(530);
const roll_handler_1 = __webpack_require__(952);
const translations_1 = __webpack_require__(414);
const setupPixelsMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const pixelsTooltipCss = `
        /* Pixels tooltip menu */
        @media (max-width: 1366px) {
            .nexus-pixels-dice-menu {
                top: 10px !important;
            }
        }

        .jss-pixels-menu {
			top: 14px !important;
            width: 100dvw;
            cursor: default;
            min-height: 169px;
            max-height: 369px;
            max-width: 1920px;
            background-size: 110% 110%;
            background-color: #343434;
            background-repeat: no-repeat;
            background-position: center;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }

        .jss-pixels-menu-grid-container {
            width: 100%;
            cursor: default;
            height: 100%;
            margin: 0;
            display: flex;
            padding: 0;
            position: relative;
            box-sizing: border-box;
            flex-flow: wrap;
        }

        /* Pixels settings */

        .css-pixels-settings {
            box-sizing: border-box;
            margin: 0px;
            flex-direction: row;
            flex-basis: 20%;
            -webkit-box-flex: 0;
            flex-grow: 0;
            max-width: 20%;
        }

        @media (min-width: 768px) {
            .css-pixels-settings {
                flex-basis: 20%;
                -webkit-box-flex: 0;
                flex-grow: 0;
                max-width: 25%;
            }
        }

        @media (min-width: 1024px) {
            .css-pixels-settings {
                flex-basis: 15%;
                -webkit-box-flex: 0;
                flex-grow: 0;
                max-width: 25%;
            }
        }

        .css-pixels-settings-body {
            box-sizing: border-box;
            display: flex;
            flex-flow: wrap;
            width: 100%;
        }

        .css-pixels-settings-body-column {
            box-sizing: border-box;
            margin: 0px;
            flex-basis: 100%;
            -webkit-box-flex: 0;
            flex-grow: 0;
            max-width: 100%;
        }

        @media (min-width: 768px) {
            .css-pixels-settings-body-column {
                flex-basis: 100%;
                -webkit-box-flex: 0;
                flex-grow: 0;
                max-width: 100%;
            }
        }

        @media (min-width: 1024px) {
            .css-pixels-settings-body-column {
                flex-basis: 100%;
                -webkit-box-flex: 0;
                flex-grow: 0;
                max-width: 100%;
            }
        }

        /* Pixels connect button */
        .css-pixels-connect-button {
            display: -webkit-inline-box;
            display: -webkit-inline-flex;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            position: relative;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
            background-color: transparent;
            outline: 0;
            border: 0;
            margin: 0;
            border-radius: 0;
            padding: 0;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            vertical-align: middle;
            -moz-appearance: none;
            -webkit-appearance: none;
            -webkit-text-decoration: none;
            text-decoration: none;
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.75;
            letter-spacing: 0.02857em;
            text-transform: uppercase;
            min-width: 64px;
            padding: 6px 8px;
            border-radius: 4px;
            -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            background: linear-gradient(60deg, rgba(62, 172, 194, 0.5) 0%, rgba(121, 62, 194, 0.5) 25%, rgba(245, 58, 37, 0.5) 50%, rgba(245, 241, 27, 0.5) 75%, rgba(124, 207, 128, 0.5));
            height: 38px;
            border-width: 1px !important;
            border-style: solid !important;
            border-color: rgba(255, 255, 255, 0.4) !important;
			margin-bottom: 10px;
        }

        @media (min-width: 1366px) {
            .css-pixels-connect-button {
                display: block;
            }
        }

        .css-pixels-connect-button-text {
            color: white;
			text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
            margin: 0;
            font-family: Barlow;
            font-weight: 700;
            font-size: 14px;
            line-height: 1.2;
            letter-spacing: -0.00833em;
            text-transform: none;
            text-align: left;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 600;
            text-transform: none;
        }

        .css-pixels-connect-button-ripple {
            overflow: hidden;
            pointer-events: none;
            position: absolute;
            z-index: 0;
            inset: 0px;
            border-radius: inherit;
        }

		.css-pixels-integration-enabled-checkbox {
			min-width: 20px;
			height: 20px !important;
			width: 20px !important;
			outline: 2px solid white;
			outline-offset: -3.5px;
			background: white;
			border: 1px solid rgba(255, 255, 255, 0.4) !important;
			color: rgba(255, 255, 255, 0.4) !important;
			display: inline-block;
			-webkit-box-align: center;
			align-items: center;
			-webkit-box-pack: center;
			box-sizing: border-box;
			-webkit-tap-highlight-color: transparent;
			outline: 0px;
			margin: 0px;
			cursor: pointer;
			user-select: none;
			vertical-align: middle;
			appearance: none;
			text-decoration: none;
			letter-spacing: 0.02857em;
			padding: 6px 8px;
			transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		}
		
		.css-pixels-integration-enabled-checkbox.active {
			background: linear-gradient(60deg, rgba(62, 172, 194, 0.5) 0%, rgba(121, 62, 194, 0.5) 25%, rgba(245, 58, 37, 0.5) 50%, rgba(245, 241, 27, 0.5) 75%, rgba(124, 207, 128, 0.5));
		}

		.css-pixels-integration-enabled-text {
			font-family: GoodOTCondBold !important;
			text-transform: uppercase;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-weight: 400;
			color: #fff;
			cursor: pointer;
			font-size: 14px;
			font-style: normal;
			text-align: center;
			margin-left: 8px;
			display: inline-block;
			height: 20px;
			line-height: 20px;
			padding-top: 6px;
		}

        /* Dice Overview */

        .css-pixels-dice-overview {
            box-sizing: border-box;
            margin: 0px;
            flex-direction: row;
            flex-basis: 70%;
            -webkit-box-flex: 0;
            flex-grow: 0;
            max-width: 70%;
            display: flex;
            flex-flow: wrap;
        }

        @media (min-width: 768px) {
            .css-pixels-dice-overview {
                flex-basis: 70%;
                -webkit-box-flex: 0;
                flex-grow: 0;
                max-width: 70%;
            }
        }

        @media (min-width: 1024px) {
            .css-pixels-dice-overview {
                flex-basis: 70%;
                -webkit-box-flex: 0;
                flex-grow: 0;
                max-width: 70%;
            }
        }

		.css-pixels-dice-overview-body {
			box-sizing: border-box;
			display: flex;
			flex-flow: wrap;
			width: 100%;
		}

		.css-pixels-dice-overview-column {
			box-sizing: border-box;
			margin: 0px;
			flex-direction: row;
			flex-basis: 25%;
			-webkit-box-flex: 0;
			flex-grow: 0;
			max-width: 25%;
		}

		@media (min-width: 768px) {
			.css-pixels-dice-overview-column {
				flex-basis: 25%;
				-webkit-box-flex: 0;
				flex-grow: 0;
				max-width: 25%;
			}
		}

		@media (min-width: 1024px) {
			.css-pixels-dice-overview-column {
				flex-basis: 25%;
				-webkit-box-flex: 0;
				flex-grow: 0;
				max-width: 25%;
			}
		}

		.css-pixels-dice-overview-last-column {
			box-sizing: border-box;
			margin: 0px;
			flex-direction: row;
			flex-basis: 20%;
			-webkit-box-flex: 0;
			flex-grow: 0;
			max-width: 20%;
		}

		@media (min-width: 768px) {
			.css-pixels-dice-overview-last-column {
				flex-basis: 20%;
				-webkit-box-flex: 0;
				flex-grow: 0;
				max-width: 20%;
			}
		}

		@media (min-width: 1024px) {
			.css-pixels-dice-overview-last-column {
				flex-basis: 20%;
				-webkit-box-flex: 0;
				flex-grow: 0;
				max-width: 20%;
			}
		}

		.css-pixels-dice-overview-dice-box {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			padding-bottom: 10px;
		}

		.css-pixels-dice-overview-dice-box button {
			display: flex;
			margin-left: auto;
			margin-right: auto;
			background: transparent;
			border-radius: 10px;
			padding: 6px;
			margin-bottom: 6px;
			border-style: solid;
			cursor: pointer;
			height: 60px;
		}

		.css-pixels-dice-overview-dice-box button img {
			margin-top: auto;
			margin-bottom: auto;
		}

		.css-pixels-dice-overview-die-info {
			flex-grow: 0;
			flex-shrink: 0;
			flex-basis: 100%;
			text-align: center;
			font-family: GoodOTCondBold !important;
			font-size: 14px;
			text-transform: uppercase;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

        /* Titles in the menu */

        .jss-pixels-in-menu-title {
            top: 0;
            left: 0;
            width: 5rem;
            height: 4rem;
            display: flex;
            align-items: center;
            width: 100%;
        }

        .jss-pixels-in-menu-title-p {
            color: #fff;
            margin: 0;
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-family: Gin;
            font-weight: normal;
            line-height: 24px;
            align-content: center;
            letter-spacing: 0.00938em;
        }
        `;
    const closedArrowSvg = (cssClasses) => `
    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium ${cssClasses.join(" ")}"
         focusable="false"
         aria-hidden="true"
         viewBox="0 0 24 24"
         data-testid="ArrowDropDownIcon">
        <path d="m7 10 5 5 5-5z"></path>
    </svg>`;
    const openArrowSvg = (cssClasses) => `
    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium ${cssClasses.join(" ")}"
         focusable="false"
         aria-hidden="true"
         viewBox="0 0 24 24"
         data-testid="ArrowDropUpIcon">
        <path d="m7 14 5-5 5 5z"></path>
    </svg>`;
    const gameRulesButton = yield new Promise((resolve, reject) => {
        const maxAttempts = 100;
        let attemptCounter = 0;
        const interval = setInterval(() => {
            if (++attemptCounter < maxAttempts) {
                const gameRulesButtons = unsafeWindow.document.getElementsByClassName("top-nav-nexus-game-rules-btn");
                if (gameRulesButtons.length > 0) {
                    clearInterval(interval);
                    resolve(gameRulesButtons[0]);
                }
            }
            else {
                reject(`Could not find the "game rules" button after ${attemptCounter} attempts.`);
            }
        }, 5000);
    });
    const pixelsMenuButton = gameRulesButton.cloneNode(true);
    // Set the classes to be individually stylable (if we want to do that)
    pixelsMenuButton.classList.remove("top-nav-nexus-game-rules-btn");
    pixelsMenuButton.classList.add("top-nav-nexus-pixels-menu-btn");
    // Change the wording on the button
    const buttonTitle = (0, translations_1.getTranslation)("ui.pixelsMenu.button.title");
    pixelsMenuButton.firstChild.innerHTML = buttonTitle;
    const buttonAriaLabel = (0, translations_1.getTranslation)("ui.pixelsMenu.button.ariaLabel");
    pixelsMenuButton.setAttribute("aria-label", buttonAriaLabel);
    pixelsMenuButton.setAttribute("data-cy", "top-nav-nexus-pixels-menu-btn");
    // Add an onClick handler to the button. This will refer to a global function.
    pixelsMenuButton.setAttribute("onclick", "pixelsIntegrationTogglePixelsMenu(event)");
    let pixelsMenuTooltip;
    const pixelsMenuButtonClickHandler = (e) => {
        var _a, _b;
        e === null || e === void 0 ? void 0 : e.stopPropagation();
        if ((0, integration_utils_1.isDebugEnabled)()) {
            console.log("Pixels dice menu toggled");
        }
        // Set the "aria-expanded" attribute
        const expandedBefore = pixelsMenuButton.getAttribute("aria-expanded") === "true";
        pixelsMenuButton.setAttribute("aria-expanded", `${!expandedBefore}`);
        // Set the button menu class
        if (expandedBefore) {
            pixelsMenuButton.classList.remove("top-nav-nexus-pixels-menu-btn-active");
            pixelsMenuButton.classList.add("top-nav-nexus-pixels-menu-btn");
        }
        else {
            pixelsMenuButton.classList.remove("top-nav-nexus-pixels-menu-btn");
            pixelsMenuButton.classList.add("top-nav-nexus-pixels-menu-btn-active");
        }
        // Change the open/closed symbol
        const originalSvgs = pixelsMenuButton.getElementsByClassName("MuiSvgIcon-root");
        const originalSvgAdditionalCssClasses = [];
        if (originalSvgs.length > 0) {
            const svgClasses = originalSvgs[0].classList;
            for (const svgClass of svgClasses) {
                if (!svgClass.startsWith("MuiSvgIcon")) {
                    originalSvgAdditionalCssClasses.push(svgClass);
                }
            }
        }
        const svgSpans = pixelsMenuButton.getElementsByClassName("MuiButton-endIcon");
        if (svgSpans.length > 0) {
            const svgSpan = svgSpans[0];
            if (expandedBefore) {
                svgSpan.innerHTML = closedArrowSvg(originalSvgAdditionalCssClasses);
            }
            else {
                svgSpan.innerHTML = openArrowSvg(originalSvgAdditionalCssClasses);
            }
        }
        if (expandedBefore) {
            if (pixelsMenuTooltip) {
                // Remove the tooltip
                (_a = gameRulesButton.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(pixelsMenuTooltip);
            }
        }
        else {
            // Create and open the tooltip
            pixelsMenuTooltip = unsafeWindow.document.createElement("div");
            pixelsMenuTooltip.setAttribute("role", "tooltip");
            pixelsMenuTooltip.classList.add("jss-pixels-menu", "nexus-pixels-dice-menu", "pixels-dice-menu", "css-0", "MuiPopperUnstyled-root");
            pixelsMenuTooltip.setAttribute("style", "position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 62px);");
            const menuContainer = unsafeWindow.document.createElement("div");
            menuContainer.classList.add("MuiBox-root", "css-0");
            menuContainer.setAttribute("style", "padding: 0px; margin: 0px;");
            pixelsMenuTooltip.appendChild(menuContainer);
            const gridContainer = unsafeWindow.document.createElement("div");
            gridContainer.classList.add("MuiGrid-root", "MuiGrid-container", "jss-pixels-menu-grid-container");
            gridContainer.setAttribute("style", "flex-wrap: nowrap; padding-left: 24px;");
            menuContainer.appendChild(gridContainer);
            // Menu part for setting up Pixels dice
            (() => {
                const pixelsSettingsContainer = unsafeWindow.document.createElement("div");
                pixelsSettingsContainer.classList.add("MuiGrid-root", "MuiGrid-item", "MuiGrid-grid-xs-8", "MuiGrid-grid-sm-9", "MuiGrid-grid-lg-12", "css-pixels-settings");
                gridContainer.appendChild(pixelsSettingsContainer);
                const pixelsSettingsTitle = unsafeWindow.document.createElement("div");
                pixelsSettingsTitle.classList.add("jss-pixels-in-menu-title", "pixels-dice-class-header", "MuiBox-root", "css-0");
                pixelsSettingsContainer.appendChild(pixelsSettingsTitle);
                const pixelsSettingsTitleParagraph = unsafeWindow.document.createElement("p");
                pixelsSettingsTitleParagraph.classList.add("MuiTypography-root", "MuiTypography-body1", "jss-pixels-in-menu-title-p");
                pixelsSettingsTitleParagraph.innerHTML = (0, translations_1.getTranslation)("ui.pixelsMenu.settings.title");
                pixelsSettingsTitle.appendChild(pixelsSettingsTitleParagraph);
                // Add a settings body
                const pixelsSettingsBody = unsafeWindow.document.createElement("div");
                pixelsSettingsBody.classList.add("MuiGrid-root", "MuiGrid-container", "css-pixels-settings-body");
                pixelsSettingsContainer.appendChild(pixelsSettingsBody);
                const pixelsSettingsBodyColumn = unsafeWindow.document.createElement("div");
                pixelsSettingsBodyColumn.classList.add("MuiGrid-root", "MuiGrid-item", "MuiGrid-grid-md-4", "MuiGrid-grid-lg-3", "css-pixels-settings-body-column");
                pixelsSettingsBody.appendChild(pixelsSettingsBodyColumn);
                // Add the "Connect pixel die" button
                const connectPixelDieButton = unsafeWindow.document.createElement("button");
                connectPixelDieButton.classList.add("MuiButtonBase-root", "MuiButton-root", "MuiButton-text", "MuiButton-textPrimary", "MuiButton-sizeMedium", "MuiButton-textSizeMedium", "MuiButton-root", "MuiButton-text", "MuiButton-textPrimary", "MuiButton-sizeMedium", "MuiButton-textSizeMedium", "css-pixels-connect-button");
                connectPixelDieButton.setAttribute("tabindex", "0"); // TODO Probably we do want a tab index here
                connectPixelDieButton.setAttribute("type", "button");
                connectPixelDieButton.setAttribute("aria-label", (0, translations_1.getTranslation)("ui.pixelsMenu.settings.connectDieButton.ariaLabel"));
                connectPixelDieButton.setAttribute("onclick", "pixelsIntegrationConnectToPixelsDie()");
                pixelsSettingsBodyColumn.appendChild(connectPixelDieButton);
                const connectPixelDieButtonText = unsafeWindow.document.createElement("h2");
                connectPixelDieButtonText.classList.add("MuiTypography-root", "MuiTypography-h2", "MuiTypography-noWrap", "css-pixels-connect-button-text");
                connectPixelDieButtonText.innerHTML = (0, translations_1.getTranslation)("ui.pixelsMenu.settings.connectDieButton.text");
                connectPixelDieButton.appendChild(connectPixelDieButtonText);
                const connectPixelDieButtonRipple = unsafeWindow.document.createElement("span");
                connectPixelDieButtonRipple.classList.add("MuiTouchRipple-root", "css-pixels-connect-button-ripple");
                connectPixelDieButton.appendChild(connectPixelDieButtonRipple);
                // Add a "use pixels for this character" button
                const usePixelsCheckboxHolder = unsafeWindow.document.createElement("div");
                usePixelsCheckboxHolder.classList.add("MuiGrid-root", "MuiGrid-item", "button-component");
                pixelsSettingsBodyColumn.appendChild(usePixelsCheckboxHolder);
                const usePixelsCheckboxButton = unsafeWindow.document.createElement("button");
                usePixelsCheckboxButton.classList.add("MuiButtonBase-root", "MuiButton-root", "MuiButton-text", "MuiButton-textPrimary", "MuiButton-sizeMedium", "MuiButton-textSizeMedium", "MuiButton-root", "MuiButton-text", "MuiButton-textPrimary", "MuiButton-sizeMedium", "MuiButton-textSizeMedium", "button-component__button", "css-pixels-integration-enabled-checkbox");
                if ((0, integration_utils_1.isEnabledForCharacter)()) {
                    usePixelsCheckboxButton.classList.add("active");
                }
                (0, integration_utils_1.registerEnabledForCharacterListener)({
                    callback: (enabled) => {
                        if (enabled) {
                            if (!usePixelsCheckboxButton.classList.contains("active")) {
                                usePixelsCheckboxButton.classList.add("active");
                            }
                        }
                        else {
                            usePixelsCheckboxButton.classList.remove("active");
                        }
                    },
                });
                usePixelsCheckboxButton.setAttribute("type", "button");
                usePixelsCheckboxButton.setAttribute("onclick", "togglePixelsItegrationEnabled()");
                usePixelsCheckboxButton.id = "toggle-pixel-integration-enabled";
                usePixelsCheckboxHolder.appendChild(usePixelsCheckboxButton);
                const usePixelsCheckboxButtonSpan = unsafeWindow.document.createElement("span");
                usePixelsCheckboxButtonSpan.classList.add("MuiTouchRipple-root", "css-pixels-integration-enabled-text");
                usePixelsCheckboxButton.appendChild(usePixelsCheckboxButtonSpan);
                const usePixelsCheckboxText = unsafeWindow.document.createElement("label");
                usePixelsCheckboxText.setAttribute("for", "toggle-pixel-integration-enabled");
                usePixelsCheckboxText.classList.add("css-pixels-integration-enabled-text");
                usePixelsCheckboxText.innerHTML = (0, translations_1.getTranslation)("ui.pixelsMenu.settings.enableForCharacter.text");
                usePixelsCheckboxHolder.appendChild(usePixelsCheckboxText);
            })();
            // Menu part for showing the already connected Pixels dice
            (() => {
                const pixelsDiceOverviewContainer = unsafeWindow.document.createElement("div");
                pixelsDiceOverviewContainer.classList.add("MuiGrid-root", "MuiGrid-item", "MuiGrid-grid-xs-6", "css-pixels-dice-overview");
                gridContainer.appendChild(pixelsDiceOverviewContainer);
                const pixelsOverviewTitle = unsafeWindow.document.createElement("div");
                pixelsOverviewTitle.classList.add("jss-pixels-in-menu-title", "pixels-dice-class-header", "MuiBox-root", "css-0");
                pixelsDiceOverviewContainer.appendChild(pixelsOverviewTitle);
                const pixelsOverviewTitleParagraph = unsafeWindow.document.createElement("p");
                pixelsOverviewTitleParagraph.classList.add("MuiTypography-root", "MuiTypography-body1", "jss-pixels-in-menu-title-p");
                pixelsOverviewTitleParagraph.innerHTML = (0, translations_1.getTranslation)("ui.pixelsMenu.overview.title");
                pixelsOverviewTitle.appendChild(pixelsOverviewTitleParagraph);
                // Overview body and columns
                const pixelsDiceOverviewBody = unsafeWindow.document.createElement("div");
                pixelsDiceOverviewBody.classList.add("MuiGrid-root", "MuiGrid-container", "css-pixels-dice-overview-body");
                pixelsDiceOverviewContainer.appendChild(pixelsDiceOverviewBody);
                const createDieImageButton = (cssClass, imageDieType) => {
                    const dieImageButton = unsafeWindow.document.createElement("button");
                    dieImageButton.setAttribute("onclick", `togglePixelsIntegrationForDieType("${imageDieType}")`);
                    const determineColorVariant = (integrationEnabledForDice) => {
                        let isEnabledForDieType = false;
                        switch (imageDieType) {
                            case "d4": {
                                isEnabledForDieType = integrationEnabledForDice.d4;
                                break;
                            }
                            case "d6": {
                                isEnabledForDieType = integrationEnabledForDice.d6;
                                break;
                            }
                            case "d8": {
                                isEnabledForDieType = integrationEnabledForDice.d8;
                                break;
                            }
                            case "d10": {
                                isEnabledForDieType = integrationEnabledForDice.d10;
                                break;
                            }
                            case "d00": {
                                isEnabledForDieType = integrationEnabledForDice.d00;
                                break;
                            }
                            case "d12": {
                                isEnabledForDieType = integrationEnabledForDice.d12;
                                break;
                            }
                            case "d20": {
                                isEnabledForDieType = integrationEnabledForDice.d20;
                                break;
                            }
                            case "dF": {
                                isEnabledForDieType = integrationEnabledForDice.dF;
                                break;
                            }
                        }
                        return isEnabledForDieType ? "rainbow" : "white";
                    };
                    const dieImage = unsafeWindow.document.createElement("img");
                    dieImage.classList.add(cssClass);
                    const integrationEnabledForDice = (0, integration_utils_1.getIntegrationEnabledForDice)();
                    const colorVariant = determineColorVariant(integrationEnabledForDice);
                    dieImage.setAttribute("src", `https://github.com/blalasaadri/pixels-demiplane-nexus-integration/raw/main/assets/${imageDieType}_${colorVariant}.svg`);
                    dieImage.setAttribute("alt", `pixels ${imageDieType}`);
                    (0, integration_utils_1.registerIntegrationForDiceEnabledListener)({
                        predicate: (dieSizes) => {
                            switch (imageDieType) {
                                case "d4":
                                    return !!dieSizes.find((size) => size === "d4");
                                case "d6":
                                    return !!dieSizes.find((size) => size === "d6" || size === "d6pipped");
                                case "d8":
                                    return !!dieSizes.find((size) => size === "d8");
                                case "d10":
                                    return !!dieSizes.find((size) => size === "d10");
                                case "d00":
                                    return !!dieSizes.find((size) => size === "d00");
                                case "d12":
                                    return !!dieSizes.find((size) => size === "d12");
                                case "d20":
                                    return !!dieSizes.find((size) => size === "d20");
                                case "dF":
                                    return !!dieSizes.find((size) => size === "d6fudge");
                            }
                        },
                        callback: (integrationEnabledForDice) => __awaiter(void 0, void 0, void 0, function* () {
                            const color = determineColorVariant(integrationEnabledForDice);
                            dieImage.setAttribute("src", `https://github.com/blalasaadri/pixels-demiplane-nexus-integration/raw/main/assets/${imageDieType}_${color}.svg`);
                        }),
                    });
                    dieImageButton.appendChild(dieImage);
                    return dieImageButton;
                };
                const createDieInfoTags = (connectedDiceOfType) => {
                    const infoTags = [];
                    for (const connectedDie of connectedDiceOfType) {
                        const dieInfo = unsafeWindow.document.createElement("div");
                        dieInfo.classList.add("css-pixels-dice-overview-die-info");
                        dieInfo.innerHTML = connectedDie.name;
                        dieInfo.setAttribute("pixelId", `${connectedDie.id}`);
                        infoTags.push({
                            die: connectedDie,
                            tag: dieInfo,
                        });
                    }
                    return infoTags;
                };
                const currentlyConnectedDice = (0, roll_handler_1.getCurrentlyConnectedDice)();
                const addDiceInfoTags = (parent, diePredicate, diceSelector) => {
                    const addDieInfo = (die, tag) => {
                        parent.appendChild(tag);
                        (0, roll_handler_1.registerDiceConnectionListener)({
                            predicate: diePredicate,
                            callback: (connectedDice) => __awaiter(void 0, void 0, void 0, function* () {
                                // Remove dice that are no longer connected from the list
                                const dieIsNotConnected = diceSelector(connectedDice).find(({ id }) => die.id === id) === undefined;
                                if (dieIsNotConnected) {
                                    parent.removeChild(tag);
                                }
                            }),
                        });
                    };
                    for (const { die, tag } of createDieInfoTags(diceSelector(currentlyConnectedDice))) {
                        addDieInfo(die, tag);
                    }
                    (0, roll_handler_1.registerDiceConnectionListener)({
                        predicate: diePredicate,
                        callback: (connectedDice) => __awaiter(void 0, void 0, void 0, function* () {
                            // Whenever a new die is connected, check whether all dice of this type are already listed.
                            const matchingDice = diceSelector(connectedDice);
                            const listedDiceIds = [];
                            for (const child of parent.getElementsByClassName("css-pixels-dice-overview-die-info")) {
                                const pixelIdOfChild = child.getAttribute("pixelId");
                                if (!pixelIdOfChild) {
                                    continue;
                                }
                                listedDiceIds.push(Number.parseInt(pixelIdOfChild));
                            }
                            const unlistedDiceIds = new Set(matchingDice.map(({ id }) => id));
                            for (const listedDiceId of listedDiceIds) {
                                unlistedDiceIds.delete(listedDiceId);
                            }
                            // Add the unlisted dice
                            const unlistedDice = [...unlistedDiceIds]
                                .map((pixelId) => matchingDice.find(({ id }) => id === pixelId))
                                .filter((unlistedDie) => unlistedDie !== undefined);
                            if ((0, integration_utils_1.isDebugEnabled)()) {
                                console.log({
                                    description: "Found new die, adding listing",
                                    connectedDice,
                                    matchingDice,
                                    unlistedDiceIds,
                                    unlistedDice,
                                    children: parent.children,
                                });
                            }
                            for (const { die, tag } of createDieInfoTags(unlistedDice)) {
                                addDieInfo(die, tag);
                            }
                        }),
                    });
                };
                (() => {
                    const pixelsDiceOverviewColumn1 = unsafeWindow.document.createElement("div");
                    pixelsDiceOverviewColumn1.classList.add("MuiGrid-root", "MuiGrid-item", "MuiGrid-grid-xs-4", "MuiGrid-grid-sm-4", "MuiGrid-grid-md-4", "MuiGrid-grid-lg-3", "css-pixels-dice-overview-column");
                    pixelsDiceOverviewBody.appendChild(pixelsDiceOverviewColumn1);
                    // d4
                    const pixelsDiceOverviewD4Box = unsafeWindow.document.createElement("div");
                    pixelsDiceOverviewD4Box.classList.add("css-pixels-dice-overview-dice-box", "pixels-dice-overview-d4-box", "MuiBox-root", "css-0");
                    pixelsDiceOverviewColumn1.appendChild(pixelsDiceOverviewD4Box);
                    pixelsDiceOverviewD4Box.appendChild(createDieImageButton("dice-d4", "d4"));
                    addDiceInfoTags(pixelsDiceOverviewD4Box, ({ dieType }) => dieType === "d4", ({ d4 }) => d4);
                    // D00
                    const pixelsDiceOverviewD00Box = unsafeWindow.document.createElement("div");
                    pixelsDiceOverviewD00Box.classList.add("css-pixels-dice-overview-dice-box", "pixels-dice-overview-d00-box", "MuiBox-root", "css-0");
                    pixelsDiceOverviewColumn1.appendChild(pixelsDiceOverviewD00Box);
                    pixelsDiceOverviewD00Box.appendChild(createDieImageButton("dice-fab-d10", "d00"));
                    addDiceInfoTags(pixelsDiceOverviewD00Box, ({ dieType }) => dieType === "d00", ({ d00 }) => d00);
                })();
                (() => {
                    const pixelsDiceOverviewColumn2 = unsafeWindow.document.createElement("div");
                    pixelsDiceOverviewColumn2.classList.add("MuiGrid-root", "MuiGrid-item", "MuiGrid-grid-xs-4", "MuiGrid-grid-sm-4", "MuiGrid-grid-md-4", "MuiGrid-grid-lg-3", "css-pixels-dice-overview-column");
                    pixelsDiceOverviewBody.appendChild(pixelsDiceOverviewColumn2);
                    // d6
                    const pixelsDiceOverviewD6Box = unsafeWindow.document.createElement("div");
                    pixelsDiceOverviewD6Box.classList.add("css-pixels-dice-overview-dice-box", "pixels-dice-overview-d6-box", "MuiBox-root", "css-0");
                    pixelsDiceOverviewColumn2.appendChild(pixelsDiceOverviewD6Box);
                    pixelsDiceOverviewD6Box.appendChild(createDieImageButton("dice-fab-d6", "d6"));
                    addDiceInfoTags(pixelsDiceOverviewD6Box, ({ dieType }) => dieType === "d6" || dieType === "d6pipped", ({ d6 }) => d6);
                    // d12
                    const pixelsDiceOverviewD12Box = unsafeWindow.document.createElement("div");
                    pixelsDiceOverviewD12Box.classList.add("css-pixels-dice-overview-dice-box", "pixels-dice-overview-d12-box", "MuiBox-root", "css-0");
                    pixelsDiceOverviewColumn2.appendChild(pixelsDiceOverviewD12Box);
                    pixelsDiceOverviewD12Box.appendChild(createDieImageButton("dice-fab-d12", "d12"));
                    addDiceInfoTags(pixelsDiceOverviewD12Box, ({ dieType }) => dieType === "d12", ({ d12 }) => d12);
                })();
                (() => {
                    const pixelsDiceOverviewColumn3 = unsafeWindow.document.createElement("div");
                    pixelsDiceOverviewColumn3.classList.add("MuiGrid-root", "MuiGrid-item", "MuiGrid-grid-xs-4", "MuiGrid-grid-sm-4", "MuiGrid-grid-md-4", "MuiGrid-grid-lg-3", "css-pixels-dice-overview-column");
                    pixelsDiceOverviewBody.appendChild(pixelsDiceOverviewColumn3);
                    // d8
                    const pixelsDiceOverviewD8Box = unsafeWindow.document.createElement("div");
                    pixelsDiceOverviewD8Box.classList.add("css-pixels-dice-overview-dice-box", "pixels-dice-overview-d8-box", "MuiBox-root", "css-0");
                    pixelsDiceOverviewColumn3.appendChild(pixelsDiceOverviewD8Box);
                    pixelsDiceOverviewD8Box.appendChild(createDieImageButton("dice-fab-d8", "d8"));
                    addDiceInfoTags(pixelsDiceOverviewD8Box, ({ dieType }) => dieType === "d8", ({ d8 }) => d8);
                    // d20
                    const pixelsDiceOverviewD20Box = unsafeWindow.document.createElement("div");
                    pixelsDiceOverviewD20Box.classList.add("css-pixels-dice-overview-dice-box", "pixels-dice-overview-d20-box", "MuiBox-root", "css-0");
                    pixelsDiceOverviewColumn3.appendChild(pixelsDiceOverviewD20Box);
                    pixelsDiceOverviewD20Box.appendChild(createDieImageButton("dice-fab-20", "d20"));
                    addDiceInfoTags(pixelsDiceOverviewD20Box, ({ dieType }) => dieType === "d20", ({ d20 }) => d20);
                })();
                (() => {
                    const pixelsDiceOverviewColumn4 = unsafeWindow.document.createElement("div");
                    pixelsDiceOverviewColumn4.classList.add("MuiGrid-root", "MuiGrid-item", "MuiGrid-grid-xs-4", "MuiGrid-grid-sm-4", "MuiGrid-grid-md-4", "MuiGrid-grid-lg-3", "css-pixels-dice-overview-column");
                    pixelsDiceOverviewBody.appendChild(pixelsDiceOverviewColumn4);
                    // D10
                    const pixelsDiceOverviewD10Box = unsafeWindow.document.createElement("div");
                    pixelsDiceOverviewD10Box.classList.add("css-pixels-dice-overview-dice-box", "pixels-dice-overview-d10-box", "MuiBox-root", "css-0");
                    pixelsDiceOverviewColumn4.appendChild(pixelsDiceOverviewD10Box);
                    pixelsDiceOverviewD10Box.appendChild(createDieImageButton("dice-fab-d10", "d10"));
                    addDiceInfoTags(pixelsDiceOverviewD10Box, ({ dieType }) => dieType === "d10", ({ d10 }) => d10);
                    // dF
                    const pixelsDiceOverviewDFBox = unsafeWindow.document.createElement("div");
                    pixelsDiceOverviewDFBox.classList.add("css-pixels-dice-overview-dice-box", "pixels-dice-overview-dF-box", "MuiBox-root", "css-0");
                    pixelsDiceOverviewColumn4.appendChild(pixelsDiceOverviewDFBox);
                    pixelsDiceOverviewDFBox.appendChild(createDieImageButton("dice-fab-d6", "dF"));
                    addDiceInfoTags(pixelsDiceOverviewDFBox, ({ dieType }) => dieType === "d6fudge", ({ dF }) => dF);
                })();
            })();
            (_b = gameRulesButton.parentElement) === null || _b === void 0 ? void 0 : _b.insertBefore(pixelsMenuTooltip, gameRulesButton.parentElement.lastChild);
        }
    };
    // @ts-ignore
    unsafeWindow.pixelsIntegrationTogglePixelsMenu = pixelsMenuButtonClickHandler;
    // @ts-ignore
    unsafeWindow.pixelsIntegrationConnectToPixelsDie = roll_handler_1.connectToDie;
    // Insert our new element as the last menu item
    (_a = gameRulesButton.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(pixelsMenuButton, (_b = gameRulesButton.parentElement) === null || _b === void 0 ? void 0 : _b.lastChild);
    // Insert the style element for styling the pixels menu
    const pixelsMenuStyleTag = unsafeWindow.document.createElement("style");
    pixelsMenuStyleTag.innerHTML = pixelsTooltipCss;
    unsafeWindow.document
        .getElementsByTagName("head")[0]
        .appendChild(pixelsMenuStyleTag);
    // Add a listener to close the menu if anything is clicked outside of the menu
    unsafeWindow.document.addEventListener("click", (e) => {
        const pixelMenu = unsafeWindow.document.getElementsByClassName("nexus-pixels-dice-menu");
        // If the menu isn't visible, it won't proceed from here on.
        if (pixelMenu.length > 0) {
            // Check whether we're clicking directly in the pixels menu or on a child element of the pixels menu
            const targetIsPixelsMenu = (target) => {
                if (target.classList.contains("nexus-pixels-dice-menu") ||
                    target.classList.contains("top-nav-nexus-pixels-menu-btn")) {
                    return true;
                }
                if (target.tagName === "body") {
                    return false;
                }
                const parent = target.parentElement;
                if (!parent) {
                    return false;
                }
                return targetIsPixelsMenu(target.parentElement);
            };
            if (!targetIsPixelsMenu(e.target)) {
                pixelsMenuButtonClickHandler();
            }
        }
    });
});
exports.setupPixelsMenu = setupPixelsMenu;


/***/ }),

/***/ 198:
/***/ ((module) => {

module.exports = pixelsWebConnect;

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