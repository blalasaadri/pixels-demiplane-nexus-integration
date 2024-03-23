// ==UserScript==
// @name pixels-demiplane-nexus-integration
// @version 0.1.1
// @namespace http://tampermonkey.net/
// @description An unofficial integration for rolling Pixels dice for your Demiplane Nexus charater sheets.
// @author blalasaadri
// @homepage https://github.com/blalasaadri/pixels-demiplane-nexus-userscript#readme
// @icon https://github.com/blalasaadri/pixels-demiplane-nexus-integration/raw/main/assets/integration_logo.svg
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
/******/ 	var __webpack_modules__ = ({

/***/ 571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ActionMakeWebRequest: () => (/* reexport */ ActionMakeWebRequest),
  ActionPlayAnimation: () => (/* reexport */ ActionPlayAnimation),
  ActionPlayAudioClip: () => (/* reexport */ ActionPlayAudioClip),
  ActionSpeakText: () => (/* reexport */ ActionSpeakText),
  ActionTypeValues: () => (/* reexport */ ActionTypeValues),
  AnimConstants: () => (/* reexport */ AnimConstants),
  AnimationBits: () => (/* reexport */ AnimationBits),
  AnimationCategoryValues: () => (/* reexport */ AnimationCategoryValues),
  AnimationCycle: () => (/* reexport */ AnimationCycle),
  AnimationFlagsValues: () => (/* reexport */ AnimationFlagsValues),
  AnimationGradient: () => (/* reexport */ AnimationGradient),
  AnimationGradientPattern: () => (/* reexport */ AnimationGradientPattern),
  AnimationInstance: () => (/* reexport */ AnimationInstance),
  AnimationInstanceGradient: () => (/* reexport */ AnimationInstanceGradient),
  AnimationInstanceGradientPattern: () => (/* reexport */ AnimationInstanceGradientPattern),
  AnimationInstanceKeyframed: () => (/* reexport */ AnimationInstanceKeyframed),
  AnimationInstanceNoise: () => (/* reexport */ AnimationInstanceNoise),
  AnimationInstanceNormals: () => (/* reexport */ AnimationInstanceNormals),
  AnimationInstanceRainbow: () => (/* reexport */ AnimationInstanceRainbow),
  AnimationInstanceSequence: () => (/* reexport */ AnimationInstanceSequence),
  AnimationInstanceSimple: () => (/* reexport */ AnimationInstanceSimple),
  AnimationKeyframed: () => (/* reexport */ AnimationKeyframed),
  AnimationNoise: () => (/* reexport */ AnimationNoise),
  AnimationNormals: () => (/* reexport */ AnimationNormals),
  AnimationRainbow: () => (/* reexport */ AnimationRainbow),
  AnimationSequence: () => (/* reexport */ AnimationSequence),
  AnimationSimple: () => (/* reexport */ AnimationSimple),
  AnimationTypeValues: () => (/* reexport */ AnimationTypeValues),
  BatteryLevel: () => (/* reexport */ BatteryLevel),
  BatteryStateFlagsValues: () => (/* reexport */ BatteryStateFlagsValues),
  Blink: () => (/* reexport */ Blink),
  BlinkId: () => (/* reexport */ BlinkId),
  BulkData: () => (/* reexport */ BulkData),
  BulkDataAck: () => (/* reexport */ BulkDataAck),
  BulkSetup: () => (/* reexport */ BulkSetup),
  Color: () => (/* reexport */ color_Color),
  Color32Utils: () => (/* reexport */ color32Utils_namespaceObject),
  ColorUtils: () => (/* reexport */ colorUtils_namespaceObject),
  ConditionBatteryState: () => (/* reexport */ ConditionBatteryState),
  ConditionConnectionState: () => (/* reexport */ ConditionConnectionState),
  ConditionCrooked: () => (/* reexport */ ConditionCrooked),
  ConditionFaceCompare: () => (/* reexport */ ConditionFaceCompare),
  ConditionHandling: () => (/* reexport */ ConditionHandling),
  ConditionHelloGoodbye: () => (/* reexport */ ConditionHelloGoodbye),
  ConditionIdle: () => (/* reexport */ ConditionIdle),
  ConditionRolled: () => (/* reexport */ ConditionRolled),
  ConditionRolling: () => (/* reexport */ ConditionRolling),
  ConditionTypeValues: () => (/* reexport */ ConditionTypeValues),
  ConnectionStateFlagsValues: () => (/* reexport */ ConnectionStateFlagsValues),
  Constants: () => (/* reexport */ Constants),
  CustomDesignAndColorNameChunk: () => (/* reexport */ CustomDesignAndColorNameChunk),
  DataSet: () => (/* reexport */ DataSet),
  DebugLog: () => (/* reexport */ DebugLog),
  DiceUtils: () => (/* reexport */ DiceUtils),
  DieInfoChunk: () => (/* reexport */ DieInfoChunk),
  DieNameChunk: () => (/* reexport */ DieNameChunk),
  Discharge: () => (/* reexport */ Discharge),
  FaceCompareFlagsValues: () => (/* reexport */ FaceCompareFlagsValues),
  GammaUtils: () => (/* reexport */ gammaUtils_namespaceObject),
  GenericPixelMessage: () => (/* reexport */ GenericPixelMessage),
  HelloGoodbyeFlagsValues: () => (/* reexport */ HelloGoodbyeFlagsValues),
  IAmADie: () => (/* reexport */ IAmADie),
  LegacyIAmADie: () => (/* reexport */ LegacyIAmADie),
  MessageTypeValues: () => (/* reexport */ MessageTypeValues),
  NoiseColorOverrideTypeValues: () => (/* reexport */ NoiseColorOverrideTypeValues),
  NormalsColorOverrideTypeValues: () => (/* reexport */ NormalsColorOverrideTypeValues),
  NotifyUser: () => (/* reexport */ NotifyUser),
  NotifyUserAck: () => (/* reexport */ NotifyUserAck),
  Pixel: () => (/* reexport */ Pixel),
  PixelBatteryControllerModeValues: () => (/* reexport */ PixelBatteryControllerModeValues),
  PixelBatteryControllerStateValues: () => (/* reexport */ PixelBatteryControllerStateValues),
  PixelBatteryStateValues: () => (/* reexport */ PixelBatteryStateValues),
  PixelBleUuids: () => (/* reexport */ PixelBleUuids),
  PixelChipModelValues: () => (/* reexport */ PixelChipModelValues),
  PixelColorwayValues: () => (/* reexport */ PixelColorwayValues),
  PixelConnectCancelledError: () => (/* reexport */ PixelConnectCancelledError),
  PixelConnectError: () => (/* reexport */ PixelConnectError),
  PixelConnectIdMismatchError: () => (/* reexport */ PixelConnectIdMismatchError),
  PixelConnectTimeoutError: () => (/* reexport */ PixelConnectTimeoutError),
  PixelDieTypeValues: () => (/* reexport */ PixelDieTypeValues),
  PixelEmptyNameError: () => (/* reexport */ PixelEmptyNameError),
  PixelError: () => (/* reexport */ PixelError),
  PixelIncompatibleMessageError: () => (/* reexport */ PixelIncompatibleMessageError),
  PixelInfoNotifier: () => (/* reexport */ PixelInfoNotifier),
  PixelPowerOperationValues: () => (/* reexport */ PixelPowerOperationValues),
  PixelRollStateValues: () => (/* reexport */ PixelRollStateValues),
  PixelSession: () => (/* reexport */ PixelSession),
  PixelWaitForMessageDisconnectError: () => (/* reexport */ PixelWaitForMessageDisconnectError),
  PixelWaitForMessageTimeoutError: () => (/* reexport */ PixelWaitForMessageTimeoutError),
  PlayInstantAnimation: () => (/* reexport */ PlayInstantAnimation),
  PlayProfileAnimation: () => (/* reexport */ PlayProfileAnimation),
  PowerOperation: () => (/* reexport */ PowerOperation),
  Profile: () => (/* reexport */ Profile),
  RemoteAction: () => (/* reexport */ RemoteAction),
  RequestRssi: () => (/* reexport */ RequestRssi),
  RequestTelemetry: () => (/* reexport */ RequestTelemetry),
  RgbKeyframe: () => (/* reexport */ RgbKeyframe),
  RgbTrack: () => (/* reexport */ RgbTrack),
  RollState: () => (/* reexport */ RollState),
  Rssi: () => (/* reexport */ Rssi),
  Rule: () => (/* reexport */ Rule),
  SetBatteryControllerMode: () => (/* reexport */ SetBatteryControllerMode),
  SetDesignAndColor: () => (/* reexport */ SetDesignAndColor),
  SetName: () => (/* reexport */ SetName),
  SettingsInfoChunk: () => (/* reexport */ SettingsInfoChunk),
  SimpleKeyframe: () => (/* reexport */ SimpleKeyframe),
  StatusInfoChunk: () => (/* reexport */ StatusInfoChunk),
  StoreValue: () => (/* reexport */ StoreValue),
  StoreValueAck: () => (/* reexport */ StoreValueAck),
  StoreValueResultValues: () => (/* reexport */ StoreValueResultValues),
  Telemetry: () => (/* reexport */ Telemetry),
  TelemetryRequestModeValues: () => (/* reexport */ TelemetryRequestModeValues),
  Temperature: () => (/* reexport */ Temperature),
  Track: () => (/* reexport */ Track),
  TransferAnimationSet: () => (/* reexport */ TransferAnimationSet),
  TransferAnimationSetAck: () => (/* reexport */ TransferAnimationSetAck),
  TransferInstantAnimationSet: () => (/* reexport */ TransferInstantAnimationSet),
  TransferInstantAnimationSetAck: () => (/* reexport */ TransferInstantAnimationSetAck),
  TransferInstantAnimationsSetAckTypeValues: () => (/* reexport */ TransferInstantAnimationsSetAckTypeValues),
  TransferTest: () => (/* reexport */ TransferTest),
  TransferTestAnimationSet: () => (/* reexport */ TransferTestAnimationSet),
  TransferTestAnimationSetAck: () => (/* reexport */ TransferTestAnimationSetAck),
  VersionInfoChunk: () => (/* reexport */ VersionInfoChunk),
  VirtualDie: () => (/* reexport */ VirtualDie),
  deserializeMessage: () => (/* reexport */ deserializeMessage),
  facesMaskToValues: () => (/* reexport */ facesMaskToValues),
  getActionTypeDisplayName: () => (/* reexport */ getActionTypeDisplayName),
  getAnimationTypeDisplayName: () => (/* reexport */ getAnimationTypeDisplayName),
  getBluetoothCapabilities: () => (/* reexport */ getBluetoothCapabilities),
  getConditionTypeDisplayName: () => (/* reexport */ getConditionTypeDisplayName),
  getFaceCount: () => (/* reexport */ getFaceCount),
  getFaceForLEDIndex: () => (/* reexport */ getFaceForLEDIndex),
  getFaceMask: () => (/* reexport */ getFaceMask),
  getLEDCount: () => (/* reexport */ getLEDCount),
  getMessageType: () => (/* reexport */ getMessageType),
  getMessageTypeValue: () => (/* reexport */ getMessageTypeValue),
  getPixel: () => (/* reexport */ getPixel),
  getTopFace: () => (/* reexport */ getTopFace),
  instantiateMessage: () => (/* reexport */ instantiateMessage),
  repeatConnect: () => (/* reexport */ repeatConnect),
  requestPixel: () => (/* reexport */ requestPixel),
  serializeMessage: () => (/* reexport */ serializeMessage),
  toFullUuid: () => (/* reexport */ toFullUuid)
});

// NAMESPACE OBJECT: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/color/color32Utils.js
var color32Utils_namespaceObject = {};
__webpack_require__.r(color32Utils_namespaceObject);
__webpack_require__.d(color32Utils_namespaceObject, {
  combineColors: () => (combineColors),
  faceWheel: () => (faceWheel),
  getBlue: () => (getBlue),
  getGreen: () => (getGreen),
  getRed: () => (getRed),
  interpolateColors: () => (interpolateColors),
  interpolateIntensity: () => (interpolateIntensity),
  modulateColor: () => (modulateColor),
  mulColors: () => (mulColors),
  rainbowWheel: () => (rainbowWheel),
  toColor32: () => (toColor32)
});

// NAMESPACE OBJECT: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/color/colorUtils.js
var colorUtils_namespaceObject = {};
__webpack_require__.r(colorUtils_namespaceObject);
__webpack_require__.d(colorUtils_namespaceObject, {
  colorBytesToString: () => (colorBytesToString),
  colorComponentToByte: () => (colorComponentToByte),
  colorToString: () => (colorToString),
  desaturate: () => (desaturate),
  hsvToRgb: () => (hsvToRgb),
  lerp: () => (lerp),
  rgbToHsv: () => (rgbToHsv),
  shiftHue: () => (shiftHue),
  sqrDistance: () => (sqrDistance)
});

// NAMESPACE OBJECT: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/color/gammaUtils.js
var gammaUtils_namespaceObject = {};
__webpack_require__.r(gammaUtils_namespaceObject);
__webpack_require__.d(gammaUtils_namespaceObject, {
  gamma: () => (gamma),
  gamma32: () => (gamma32),
  gamma8: () => (gamma8),
  reverseGamma: () => (reverseGamma),
  reverseGamma8: () => (reverseGamma8)
});

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-connect/dist/esm/Constants.js
/** Constants used across the pixels-core-connect package. */
const Constants = {
    /** The lowest Maximum Transmission Unit (MTU) value allowed by the BLE standard. */
    minMtu: 23,
    /** The highest Maximum Transmission Unit (MTU) value allowed by the BLE standard. */
    maxMtu: 517,
    /** The default timeout value (in milliseconds) when connecting to a Pixel. */
    connectionTimeout: 10000,
    /** The default timeout value (in milliseconds) for requests made to a Pixel. */
    defaultRequestTimeout: 10000,
    /** The default timeout value (in milliseconds) for waiting on a Pixel to reply. */
    ackMessageTimeout: 5000,
    /** The maximum size of messages send to a Pixel. */
    maxMessageSize: 100,
    /** The maximum byte size for the name of a Pixel. */
    maxNameByteSize: 31,
    /** The maximum byte size for the name of a Pixel in the advertisement data. */
    maxAdvertisedNameByteSize: 13,
    /** Messages and related data structures version number. */
    apiVersion: 256,
    /** Minimum compatible version for the messages and related data structures. */
    compatApiVersion: 256,
};

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-connect/dist/esm/errors.js
/**
 * Base class for errors thrown by the {@link Pixel} class.
 * @category Pixels
 */
class PixelError extends Error {
    constructor(pixel, message, cause) {
        // We get a code from native errors
        const code = cause && cause.code;
        if (code) {
            message += ` (${code})`;
        }
        // Initialize instance
        super(`Pixel ${pixel.name}: ${message}`);
        this.name = "PixelError";
        this.pixel = pixel;
        this.description = message;
        this.cause = cause;
    }
}
/**
 * Base class for errors thrown by the {@link Pixel.connect} instance method.
 * @category Pixels
 */
class PixelConnectError extends PixelError {
    constructor(pixel, msgOrError) {
        const isError = msgOrError instanceof Error;
        const isPixelError = isError && msgOrError instanceof PixelError;
        const msg = typeof msgOrError === "string"
            ? msgOrError
            : isPixelError
                ? `Connection error, ${msgOrError.description}`
                : isError
                    ? `Connection error, ${msgOrError.message}`
                    : `Unknown connection error, ${JSON.stringify(msgOrError)}`;
        const cause = isError ? msgOrError : undefined;
        super(pixel, msg, cause);
        this.name = "PixelConnectError";
    }
}
/**
 * Thrown by {@link Pixel.connect} on connection timeout.
 * @category Pixels
 */
class PixelConnectTimeoutError extends PixelConnectError {
    constructor(pixel, timeoutMs) {
        super(pixel, `Connection timeout after ${timeoutMs} ms`);
        this.name = "PixelConnectTimeoutError";
    }
}
/**
 * Thrown by {@link Pixel.connect} on connection error caused by a cancellation
 * (such as a call to {@link Pixel.disconnect} during the connection sequence).
 * @category Pixels
 */
class PixelConnectCancelledError extends PixelConnectError {
    constructor(pixel) {
        super(pixel, `Connection cancelled (current state is ${pixel.status})`);
        this.name = "PixelConnectCancelledError";
    }
}
/**
 * Thrown by {@link Pixel.connect} on connection error caused by a Pixel id
 * mismatch between the one given to the instance's constructor and the one
 * received during identification.
 * @category Pixels
 */
class PixelConnectIdMismatchError extends PixelConnectError {
    constructor(pixel, pixelId) {
        super(pixel, "Identification mismatch, expecting " +
            pixel.pixelId.toString(16).padStart(8, "0") +
            " but got " +
            pixelId.toString(16).padStart(8, "0"));
        this.name = "PixelIdMismatchError";
    }
}
/**
 * Thrown by methods of the {@link Pixel} class on errors caused by a timeout
 * while waiting for a message from the die.
 * @category Pixels
 */
class PixelWaitForMessageTimeoutError extends PixelError {
    constructor(pixel, timeoutMs, messageType) {
        super(pixel, `Timeout of ${timeoutMs}ms waiting for message ${messageType}`);
        this.name = "PixelMessageTimeoutError";
    }
}
/**
 * Thrown by methods of the {@link Pixel} class on errors caused by a disconnection
 * while waiting for a message from the die.
 * @category Pixels
 */
class PixelWaitForMessageDisconnectError extends PixelError {
    constructor(pixel, messageType) {
        super(pixel, `Disconnected while waiting for message ${messageType}`);
        this.name = "PixelMessageConnectStatusError";
    }
}
/**
 * Thrown by methods of the {@link Pixel} class when trying to send a message which
 * is incompatible with the current firmware running on the die.
 * @category Pixels
 */
class PixelIncompatibleMessageError extends PixelConnectError {
    constructor(pixel, name, libApiVersion, fwApiVersion, compat) {
        super(pixel, `Message ${name} cannot be send, firmware ${compat === "firmware" ? "compat. " : ""} API version is ${fwApiVersion} but library ${compat === "library" ? "compat. " : ""} API version is ${libApiVersion}`);
        this.name = "PixelConnectIncompatibleFirmwareError";
    }
}
/**
 * Thrown by {@link Pixel.rename} method when an empty name is passed.
 * @category Pixels
 */
class PixelEmptyNameError extends PixelConnectError {
    constructor(pixel) {
        super(pixel, "New Pixel name must have at least one character");
        this.name = "PixelEmptyNameError";
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-utils/dist/esm/assert.js
/**
 * Base class for throwing assertion errors.
 */
class AssertionError extends Error {
    constructor(message) {
        super(message);
        this.name = "AssertionError";
    }
}
/**
 * A typical assert function for Typescript with an optional message.
 */
function assert(value, msg) {
    if (!value) {
        throw new AssertionError(msg !== null && msg !== void 0 ? msg : `Assertion failed with value ${value}`);
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-utils/dist/esm/assertNever.js

/**
 * Use this function to raise an error when running a branch of code
 * that is not reachable according to typescript.
 * Typically you may call this function in the default statement of a
 * switch() that has case statements for all possible values.
 * @param x A value of type never.
 * @param message The error message if this function is called.
 */
function assertNever(x, message) {
    assert(false, message !== null && message !== void 0 ? message : "assertNever() called");
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-utils/dist/esm/bernsteinHash.js
/**
 * Applies D. J. Bernstein hash function on the data.
 * @param data The data to hash stored in a Uint8Array array.
 * @returns The hash for the given data.
 */
function bernsteinHash(data) {
    let hash = 5381;
    for (let i = 0; i < data.length; ++i) {
        hash = (33 * hash) ^ data[i];
    }
    return hash;
}

// EXTERNAL MODULE: ./node_modules/events/events.js
var events = __webpack_require__(7);
;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-utils/dist/esm/createTypedEventEmitter.js

/**
 * Returns a typed event emitter that works both for Web and React Native.
 * @see https://rjzaworski.com/2019/10/event-emitters-in-typescript
 * @returns A typed event emitter.
 */
function createTypedEventEmitter() {
    return new events.EventEmitter();
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-utils/dist/esm/decodeUtf8.js
/** Thrown by {@link decodeUtf8} function. */
class DecodeUtf8Error extends Error {
    constructor(message, decodedString) {
        // Initialize instance
        super(message);
        this.name = "DecodeUtf8Error";
        this.decodedString = decodedString;
    }
}
/**
 * Takes a byte array and interpret it as a UTF8 string.
 * Copied from https://gist.github.com/pascaldekloe/62546103a1576803dade9269ccf76330
 * @param bytes Byte array with UTF8 string data.
 * @returns The decoded string.
 */
function decodeUtf8(bytes) {
    let i = 0, s = "";
    while (i < bytes.length) {
        let c = bytes[i++];
        if (!c) {
            break;
        }
        else if (c > 127) {
            if (c > 191 && c < 224) {
                if (i >= bytes.length)
                    throw new DecodeUtf8Error("Incomplete 2-bytes sequence", s);
                c = ((c & 31) << 6) | (bytes[i++] & 63);
            }
            else if (c > 223 && c < 240) {
                if (i + 1 >= bytes.length)
                    throw new DecodeUtf8Error("Incomplete 3-bytes sequence", s);
                c = ((c & 15) << 12) | ((bytes[i++] & 63) << 6) | (bytes[i++] & 63);
            }
            else if (c > 239 && c < 248) {
                if (i + 2 >= bytes.length)
                    throw new DecodeUtf8Error("Incomplete 4-bytes sequence", s);
                c =
                    ((c & 7) << 18) |
                        ((bytes[i++] & 63) << 12) |
                        ((bytes[i++] & 63) << 6) |
                        (bytes[i++] & 63);
            }
            else
                throw new DecodeUtf8Error(`Unknown multibyte start 0x${c.toString(16)} at index ${i - 1}`, s);
        }
        if (c <= 0xffff)
            s += String.fromCharCode(c);
        else if (c <= 0x10ffff) {
            c -= 0x10000;
            s += String.fromCharCode((c >> 10) | 0xd800);
            s += String.fromCharCode((c & 0x3ff) | 0xdc00);
        }
        else
            throw new DecodeUtf8Error(`Code point 0x${c.toString(16)} exceeds UTF-16 reach`, s);
    }
    return s;
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-utils/dist/esm/delay.js
/**
 * Async delay.
 * @param ms Number of milliseconds to wait.
 * @param abortSignal Optional AbortSignal to interrupt the wait.
 * @returns A promise.
 */
async function delay(ms, abortSignal) {
    return new Promise((resolve, reject) => {
        if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
            reject(new Error(`Call to delay(${ms}) aborted on start`));
        }
        else {
            const abort = () => {
                clearTimeout(timeoutId);
                reject(new Error(`Call to delay(${ms}) aborted before timeout`));
            };
            abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.addEventListener("abort", abort);
            const timeoutId = setTimeout(() => {
                abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.removeEventListener("abort", abort);
                resolve();
            }, ms);
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-utils/dist/esm/enum.js
let _enumValue = 0;
/**
 * Number generator for enums.
 *
 * A note about enums:
 * Typescript documentation recommends using "as const" over "enum".
 * See https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums
 */
function enumValue(initialValue) {
    if (initialValue !== undefined) {
        _enumValue = initialValue;
    }
    return _enumValue++;
}
let _enumFlag = 0;
/**
 * Number generator for enum flags.
 *
 * A note about enums:
 * Typescript documentation recommends using "as const" over "enum".
 * See https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums
 */
function enumFlag(initialValue) {
    if (initialValue !== undefined) {
        _enumFlag = initialValue;
    }
    const flag = 1 << _enumFlag;
    _enumFlag += 1;
    return flag;
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-utils/dist/esm/safeAssign.js
// Remove undefined properties from given object
function prune(obj) {
    for (const key of Object.keys(obj)) {
        if (obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
}
/**
 * Initializes the members of a object with a set of values, in a type safe way.
 * Properties that are undefined in "values" are skipped.
 */
function safeAssign(obj, values) {
    return Object.assign(obj, prune(values));
}

// EXTERNAL MODULE: ./node_modules/reflect-metadata/Reflect.js
var reflect_metadata_Reflect = __webpack_require__(741);
;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-utils/dist/esm/encodeUtf8.js
// https://www.basedash.com/blog/javascript-string-to-bytes
function toBytes(str) {
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
        const codePoint = str.codePointAt(i);
        if (codePoint < 0x80) {
            bytes.push(codePoint);
        }
        else if (codePoint < 0x800) {
            bytes.push(0xc0 | (codePoint >> 6), 0x80 | (codePoint & 0x3f));
        }
        else if (codePoint < 0x10000) {
            bytes.push(0xe0 | (codePoint >> 12), 0x80 | ((codePoint >> 6) & 0x3f), 0x80 | (codePoint & 0x3f));
        }
        else {
            i++; // skip one iteration since we have a surrogate pair
            bytes.push(0xf0 | (codePoint >> 18), 0x80 | ((codePoint >> 12) & 0x3f), 0x80 | ((codePoint >> 6) & 0x3f), 0x80 | (codePoint & 0x3f));
        }
    }
    return bytes;
}
function encodeUtf8(str) {
    return new Uint8Array(toBytes(str));
}
// Async native alternative
// import { toByteArray } from "base64-js";
// new Promise((resolve, reject) => {
//   const reader = new FileReader();
//   reader.onloadend = () => {
//     const uri = reader.result?.toString();
//     if (uri) {
//       const data = uri.substring(
//         "data:application/octet-stream;base64,".length
//       );
//       resolve(toByteArray(data));
//     } else {
//       reject(new Error("Failed to encode string"));
//     }
//   };
//   reader.readAsDataURL(new Blob(["some string"]));
// });

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-utils/dist/esm/serializable.js
/* eslint-disable @typescript-eslint/no-explicit-any */




const serializableKey = Symbol("pixelAnimationSerializable");
/** Error thrown during (de)serialization. */
class SerializationError extends Error {
    constructor(message) {
        super(message);
        this.name = "SerializationError";
    }
}
/**
 * Decorator factory for tagging properties to (de)serialization.
 * @param size Number of bytes for the binary data.
 * @param options Options, see {@link SerializableOptions}.
 * @returns The function decorator.
 */
function serializable(size, options) {
    return function registerProperty(target, propertyKey) {
        const properties = Reflect.getMetadata(serializableKey, target);
        const metaData = { propertyKey, size, options };
        if (properties) {
            properties.push(metaData);
        }
        else {
            Reflect.defineMetadata(serializableKey, [metaData], target);
        }
    };
}
/**
 *
 * @param target
 * @returns
 */
function getSerializableProperties(target) {
    return Reflect.getMetadata(serializableKey, target);
}
/**
 *
 * @param target
 * @param propertyKey
 * @returns
 */
function byteSizeOfProp(target, propertyKey) {
    var _a, _b, _c, _d;
    const prop = (_a = getSerializableProperties(target)) === null || _a === void 0 ? void 0 : _a.find((sp) => sp.propertyKey === propertyKey);
    return !!((_b = prop === null || prop === void 0 ? void 0 : prop.options) === null || _b === void 0 ? void 0 : _b.nullTerminated) || !!((_c = prop === null || prop === void 0 ? void 0 : prop.options) === null || _c === void 0 ? void 0 : _c.terminator)
        ? "dynamic"
        : (_d = prop === null || prop === void 0 ? void 0 : prop.size) !== null && _d !== void 0 ? _d : 0;
}
/**
 *
 * @param target
 * @param propertyKey
 * @returns
 */
function byteSizeOfPropWithPadding(target, propertyKey) {
    var _a, _b, _c, _d, _e;
    const prop = (_a = getSerializableProperties(target)) === null || _a === void 0 ? void 0 : _a.find((sp) => sp.propertyKey === propertyKey);
    if (!!((_b = prop === null || prop === void 0 ? void 0 : prop.options) === null || _b === void 0 ? void 0 : _b.nullTerminated) || !!((_c = prop === null || prop === void 0 ? void 0 : prop.options) === null || _c === void 0 ? void 0 : _c.terminator)) {
        return "dynamic";
    }
    else {
        return prop ? prop.size + ((_e = (_d = prop.options) === null || _d === void 0 ? void 0 : _d.padding) !== null && _e !== void 0 ? _e : 0) : 0;
    }
}
/**
 *
 * @param objOrArray
 * @returns
 */
function byteSizeOf(objOrArray) {
    var _a, _b;
    if (Array.isArray(objOrArray)) {
        return objOrArray.reduce((acc, obj) => acc + byteSizeOf(obj), 0);
    }
    else {
        return ((_b = (_a = getSerializableProperties(objOrArray)) === null || _a === void 0 ? void 0 : _a.reduce((acc, prop) => {
            var _a, _b, _c, _d;
            if (!!((_a = prop.options) === null || _a === void 0 ? void 0 : _a.nullTerminated) || !!((_b = prop === null || prop === void 0 ? void 0 : prop.options) === null || _b === void 0 ? void 0 : _b.terminator)) {
                throw new SerializationError("Dynamic size");
            }
            return acc + prop.size + ((_d = (_c = prop.options) === null || _c === void 0 ? void 0 : _c.padding) !== null && _d !== void 0 ? _d : 0);
        }, 0)) !== null && _b !== void 0 ? _b : 0);
    }
}
function forEachSerializableProp(obj, callback) {
    const props = getSerializableProperties(obj);
    if (!(props === null || props === void 0 ? void 0 : props.length)) {
        throw new SerializationError("Object has no serializable property");
    }
    for (const prop of props) {
        const value = obj[prop.propertyKey];
        const isBuffer = value instanceof ArrayBuffer ||
            (value && value.buffer instanceof ArrayBuffer);
        if (typeof value !== "number" &&
            typeof value !== "bigint" &&
            typeof value !== "boolean" &&
            typeof value !== "string" &&
            !isBuffer) {
            throw new SerializationError(Array.isArray(value)
                ? "Invalid property type, got an array, use an 'ArrayBuffer' instead"
                : `Invalid property type, got ${typeof value} for ${prop.propertyKey} but expected number or bigint`);
        }
        if (!callback(prop, value)) {
            break;
        }
    }
}
function getNumber(value, type) {
    const n = Number(value);
    let min, max;
    switch (type) {
        case "int8":
            min = -128;
            max = 127;
            break;
        case "uint8":
            min = 0;
            max = 255;
            break;
        case "int16":
            min = -32768;
            max = 32767;
            break;
        case "uint16":
            min = 0;
            max = 65535;
            break;
        case "int32":
            min = -2147483648;
            max = 2147483647;
            break;
        case "uint32":
            min = 0;
            max = 4294967295;
            break;
        case "float32":
            break;
        case "float64":
            break;
    }
    if (min && max) {
        if (n < min) {
            throw new SerializationError(`Value ${n} too small to fit in a ${type}`);
        }
        if (n > max) {
            throw new SerializationError(`Value ${n} too big to fit in a ${type}`);
        }
    }
    return n;
}
function writeNumber(dataView, byteOffset, value, size, isSigned, isFloat) {
    switch (size) {
        case 1:
            if (isSigned) {
                dataView.setInt8(byteOffset, getNumber(value, "int8"));
            }
            else {
                dataView.setUint8(byteOffset, getNumber(value, "uint8"));
            }
            break;
        case 2:
            if (isSigned) {
                dataView.setInt16(byteOffset, getNumber(value, "int16"), true);
            }
            else {
                dataView.setUint16(byteOffset, getNumber(value, "uint16"), true);
            }
            break;
        case 4:
            if (isFloat) {
                dataView.setFloat32(byteOffset, getNumber(value, "float32"), true);
            }
            else if (isSigned) {
                dataView.setInt32(byteOffset, getNumber(value, "int32"), true);
            }
            else {
                dataView.setInt32(byteOffset, getNumber(value, "uint32"), true);
            }
            break;
        case 8:
            if (isFloat) {
                dataView.setFloat64(byteOffset, getNumber(value, "float64"), true);
            }
            else
                throw new SerializationError("BigInt not supported");
            break;
        default:
            throw new SerializationError(`Invalid property size, got ${size} but expected 1, 2, 4, or 8`);
    }
}
function internalSerialize(objOrArray, dataView, byteOffset = 0) {
    if (Array.isArray(objOrArray)) {
        const options = { dataView, byteOffset };
        // Serialize array
        for (const obj of objOrArray) {
            const [dataView, byteOffset] = serialize(obj, options);
            options.dataView = dataView;
            options.byteOffset = byteOffset;
        }
        return [options.dataView, options.byteOffset];
    }
    else {
        // Serialize object
        forEachSerializableProp(objOrArray, (prop, value) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            let buffer;
            // Check if our value is a string
            if (typeof value === "string") {
                buffer = encodeUtf8(value).buffer;
            }
            // Or a buffer
            else if (value instanceof ArrayBuffer) {
                buffer = value;
            }
            else if (value.buffer && value.buffer instanceof ArrayBuffer) {
                buffer = value.buffer;
            }
            if (buffer) {
                // Check size
                const serializedSize = buffer.byteLength + (typeof value === "string" ? 1 : 0);
                if (!((_a = prop.options) === null || _a === void 0 ? void 0 : _a.nullTerminated) &&
                    !((_b = prop.options) === null || _b === void 0 ? void 0 : _b.terminator) &&
                    prop.size < serializedSize) {
                    throw new SerializationError(`Serialized value for \`${prop.propertyKey}\` takes ${serializedSize} bytes but prop size is ${prop.size}`);
                }
                // Copy data
                const arr = new Uint8Array(buffer);
                const size = ((_c = prop.options) === null || _c === void 0 ? void 0 : _c.nullTerminated)
                    ? arr.byteLength
                    : ((_d = prop.options) === null || _d === void 0 ? void 0 : _d.terminator)
                        ? arr.byteLength
                        : Math.min(arr.byteLength, prop.size);
                for (let i = 0; i < size; ++i) {
                    dataView.setUint8(byteOffset, arr[i]);
                    ++byteOffset;
                }
                if (!((_e = prop.options) === null || _e === void 0 ? void 0 : _e.nullTerminated) && !((_f = prop.options) === null || _f === void 0 ? void 0 : _f.terminator)) {
                    // Fill left over with zeroes
                    for (let i = size; i < prop.size; ++i) {
                        dataView.setUint8(byteOffset, 0);
                        ++byteOffset;
                    }
                }
            }
            else {
                // Value must be a numeric type then
                const isFloat = ((_g = prop.options) === null || _g === void 0 ? void 0 : _g.numberFormat) === "float";
                const isSigned = ((_h = prop.options) === null || _h === void 0 ? void 0 : _h.numberFormat) === "signed";
                writeNumber(dataView, byteOffset, value, prop.size, isSigned, isFloat);
                byteOffset += prop.size + ((_k = (_j = prop.options) === null || _j === void 0 ? void 0 : _j.padding) !== null && _k !== void 0 ? _k : 0);
            }
            return true; // Continue
        });
        return [dataView, byteOffset];
    }
}
function readNumber(dataView, byteOffset, size, isSigned, isFloat) {
    switch (size) {
        case 1:
            return isSigned
                ? dataView.getInt8(byteOffset)
                : dataView.getUint8(byteOffset);
        case 2:
            return isSigned
                ? dataView.getInt16(byteOffset, true)
                : dataView.getUint16(byteOffset, true);
        case 4:
            return isFloat
                ? dataView.getFloat32(byteOffset, true)
                : isSigned
                    ? dataView.getInt32(byteOffset, true)
                    : dataView.getUint32(byteOffset, true);
        case 8:
            if (isFloat) {
                return dataView.getFloat64(byteOffset, true);
            }
            else
                throw new SerializationError("BigInt not supported");
        // : isSigned
        // ? dataView.getBigInt64(byteOffset, true)
        // : dataView.getBigUint64(byteOffset, true);
        default:
            throw new SerializationError(`Invalid property size, got ${size} but expected 1, 2, 4, or 8`);
    }
}
function findNullIndex(dataView, byteOffset) {
    for (let i = byteOffset; i < dataView.byteLength; ++i) {
        if (!dataView.getUint8(i)) {
            return i;
        }
    }
    throw new SerializationError("Data is not null terminated");
}
function internalDeserialize(objOrArray, dataView, opt) {
    function setProp(obj, prop, value, prevValue) {
        if (typeof prevValue === "boolean" &&
            (typeof value === "number" || typeof value === "bigint")) {
            // Convert number to boolean
            value = Boolean(value);
        }
        else if (typeof value !== typeof prevValue) {
            throw new SerializationError(`Type mismatch, deserialized a ${typeof value} but but expected a ${typeof prevValue}`);
        }
        obj[prop.propertyKey] = value;
    }
    let byteOffset = 0;
    forEachSerializableProp(objOrArray, (prop, value) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if ((opt === null || opt === void 0 ? void 0 : opt.allowSkipLastProps) && byteOffset === dataView.byteLength) {
            // Stop if we exactly reached the end of the buffer
            return false; // Stop iterating props
        }
        else if (!((_a = prop.options) === null || _a === void 0 ? void 0 : _a.nullTerminated) &&
            !((_b = prop.options) === null || _b === void 0 ? void 0 : _b.terminator) &&
            byteOffset + prop.size > dataView.byteLength) {
            // Not enough data left
            throw new SerializationError(`Not enough bytes for deserializing \`${prop.propertyKey}\` of size ${prop.size}`);
        }
        // Check type
        if (Array.isArray(objOrArray)) {
            // Arrays not supported
            throw new SerializationError("Array type not supported for deserialization");
        }
        else if (typeof value === "string") {
            // Read string
            const begin = dataView.byteOffset + byteOffset;
            if (!((_c = prop.options) === null || _c === void 0 ? void 0 : _c.nullTerminated) &&
                !((_d = prop.options) === null || _d === void 0 ? void 0 : _d.terminator) &&
                begin + prop.size > dataView.buffer.byteLength) {
                throw new SerializationError(`Unexpected property size, got ${prop.size} but there are only ${dataView.buffer.byteLength - begin} left`);
            }
            const strArr = dataView.buffer.slice(begin, ((_e = prop.options) === null || _e === void 0 ? void 0 : _e.nullTerminated)
                ? findNullIndex(dataView, byteOffset) - 1
                : ((_f = prop.options) === null || _f === void 0 ? void 0 : _f.terminator)
                    ? dataView.byteOffset + dataView.byteLength
                    : begin + prop.size);
            try {
                setProp(objOrArray, prop, decodeUtf8(new Uint8Array(strArr)), value);
            }
            catch (error) {
                if (error instanceof DecodeUtf8Error) {
                    // Go on with what we have
                    setProp(objOrArray, prop, error.decodedString, value);
                    console.warn(`Error decoding string for \`${prop.propertyKey}\`: ${error}`);
                }
                else {
                    throw new SerializationError((_g = error === null || error === void 0 ? void 0 : error.message) !== null && _g !== void 0 ? _g : String(error));
                }
            }
            byteOffset += strArr.byteLength;
        }
        else {
            // Read number
            const isFloat = ((_h = prop.options) === null || _h === void 0 ? void 0 : _h.numberFormat) === "float";
            const isSigned = ((_j = prop.options) === null || _j === void 0 ? void 0 : _j.numberFormat) === "signed";
            const newValue = readNumber(dataView, byteOffset, prop.size, isSigned, isFloat);
            setProp(objOrArray, prop, newValue, value);
            byteOffset += prop.size;
        }
        byteOffset += (_l = (_k = prop.options) === null || _k === void 0 ? void 0 : _k.padding) !== null && _l !== void 0 ? _l : 0;
        return true; // Continue
    });
    return byteOffset;
}
/**
 * Serialize the given object or array of objects into a DataView.
 * @param objOrArray The object or array of objects to serialize.
 * @param opt.dataView If provided, the data view to use for serialization.
 * @param opt.byteOffset If provided, the byte offset to use for serialization.
 * @returns A tuple with the DataView and the byte offset after serialization.
 */
function serialize(objOrArray, opt) {
    var _a;
    if (!(opt === null || opt === void 0 ? void 0 : opt.dataView)) {
        const size = byteSizeOf(objOrArray);
        // Create buffer and serialize
        const [dataView, byteOffset] = internalSerialize(objOrArray, new DataView(new ArrayBuffer(size)));
        assert(byteOffset === dataView.buffer.byteLength, `Incorrect offset after serialization, got ${byteOffset} but expected ${dataView.buffer.byteLength}`);
        return [dataView, byteOffset];
    }
    else {
        // Serialize using give data view
        return internalSerialize(objOrArray, opt.dataView, (_a = opt.byteOffset) !== null && _a !== void 0 ? _a : 0);
    }
}
/**
 * Deserialize the given DataView into the provided object.
 * @param obj The object to deserialize into.
 * @param dataView The DataView to use for deserialization.
 * @param opt.allowSkipLastProps If true, will allow the last properties to be skipped if there is not enough data left.
 * @returns The number of bytes read from the DataView.
 */
function deserialize(obj, dataView, opt) {
    return internalDeserialize(obj, dataView, opt);
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-utils/dist/esm/bitMasksUtils.js

/**
 * Returns the indices of the "on" bits of the given value.
 * @param value  The value to use.
 * @returns The indices of the "on" bits.
 */
function bitsToIndices(value) {
    const indices = [];
    value = Math.floor(value !== null && value !== void 0 ? value : 0);
    if (value > 0) {
        // Convert value to binary format: we use a string because of the limitations
        // with JS bits operators (ex: 0x80000000 >> 1 => -1073741824 )
        let bits = value.toString(2);
        let index = 0;
        while (bits.length) {
            if (bits.at(-1) === "1") {
                indices.push(index);
            }
            bits = bits.substring(0, bits.length - 1);
            ++index;
        }
    }
    return indices;
}
/**
 * Decompose the given value into the corresponding list of flags.
 * @remarks In this context, a flag is a 2^n value.
 * @param value The value to use.
 * @returns The flags corresponding to the "on" bits.
 */
function bitsToFlags(value) {
    return bitsToIndices(value).map(bitIndexToFlag);
}
/**
 * Combines the given values into a single one by OR-ing them.
 * This is most useful when combining flags.
 * @remarks
 * In this context, a flag is a 2^n value.
 * Because of the limitations of the OR operator, the given flags must be less than 2^31.
 * @param flags List of numbers (flags) to combine.
 * @returns The combined value.
 */
function combineFlags(flags) {
    return flags.reduce((mask, f) => {
        assert(f < 0x80000000, `combineFlags: Flag value greater or equal to 2^31, can't combine using OR operator, got ${f}`);
        return mask | f;
    }, 0);
}
/**
 * Converts a given bit index to the corresponding flag value.
 * @remarks
 * In this context, a flag is a 2^n value.
 * Because the value is returned as a 64 bits floating point number with a 52 bits mantissa,
 * the given bit index must be less than 53.
 * @param bitIndex A bit index.
 * @returns The flag value for the given bit index.
 */
function bitIndexToFlag(bitIndex) {
    assert(bitIndex < 53, `bitIndexToFlag: Bit index greater than maximum precision of 64 bits floating-point numbers (52 bits mantissa), got ${bitIndex}`);
    return Math.pow(2, bitIndex);
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-utils/dist/esm/keyValuesUtils.js
/**
 * Map a list of keys to the corresponding list of values
 * according the passed object mapping keys to values.
 * @param keys Keys to map to values.
 * @param keyValues Object mapping keys to values.
 * @param onMissingKey Called when no value was found for a given key.
 * @returns List of corresponding values.
 */
function keysToValues(keys, keyValues, onMissingKey) {
    return keys.map((key) => {
        const v = keyValues[key];
        if (v !== undefined) {
            return v;
        }
        else if (onMissingKey) {
            return onMissingKey(key);
        }
        else {
            throw new Error(`keysToValues: Missing key ${key}`);
        }
    });
}
/**
 * Map a list of values to the corresponding list of keys
 * according the passed object mapping keys to values.
 * @param values Values to map to keys.
 * @param keyValues Object mapping keys to values.
 * @param onMissingKey Called when no key was found for a given value.
 * @returns List of corresponding keys.
 */
function valuesToKeys(values, keyValues, onMissingKey) {
    const valueToKey = new Map();
    for (const e of Object.entries(keyValues)) {
        valueToKey.set(e[1], e[0]);
    }
    return values.map((value) => {
        const k = valueToKey.get(value);
        if (k !== undefined) {
            return k;
        }
        else if (onMissingKey) {
            return onMissingKey(value);
        }
        else {
            throw new Error(`valuesToKeys: Missing key for value ${value}`);
        }
    });
}
/**
 * Returns the key name corresponding to a given value
 * according the passed object mapping keys to values.
 * @param value The value.
 * @param keyValues Object mapping keys to values.
 * @returns A string with the name for the value.
 */
function getValueKeyName(value, keyValues) {
    for (const [key, val] of Object.entries(keyValues)) {
        if (val === value) {
            return key;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-utils/dist/esm/range.js
/**
 * Creates a sequence of numbers.
 * @param startOrStop An integer number specifying at which position to start,
 *                    or if `stop` is undefined, at which position to stop (starting at 0).
 * @param stop Optional. An integer number specifying at which position to stop (not included).
 * @param step Optional. An integer number specifying the incrementation. Default is 1.
 * @returns A sequence of numbers.
 */
function range(startOrStop, stop, step) {
    // Check parameters
    let start = startOrStop;
    if (stop === undefined) {
        stop = startOrStop;
        start = 0;
    }
    if (!step) {
        // Step can't be 0 or undefined
        step = 1;
    }
    let length = (stop - start) / step;
    if (length < 0) {
        length = -length;
        step = -step;
    }
    // Create array
    const arr = Array(Math.floor(length));
    // And initialize its values
    let v = start, i = 0;
    while (i < length) {
        arr[i] = v;
        v += step;
        i += 1;
    }
    return arr;
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-utils/dist/esm/index.js














// Unused at the moment:
// export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
// export function hasProperty<T extends object, PropName extends keyof T>(
//   obj: T,
//   prop: PropName
// ): obj is T & Record<PropName, NonNullable<T[PropName]>> {
//   return prop in obj;
// }

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationType.js

/**
 * @category Animation
 * @enum
 */
const AnimationTypeValues = {
    none: enumValue(0), // 0
    simple: enumValue(), // 1
    rainbow: enumValue(), // 2
    keyframed: enumValue(), // 3
    gradientPattern: enumValue(), // 4
    gradient: enumValue(), // 5
    noise: enumValue(), // 6
    cycle: enumValue(), // 7
    name: enumValue(), // 8
    normals: enumValue(), // 9
    sequence: enumValue(), // 10
};

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationFlags.js

/**
 * @category Animation
 * @enum
 */
const AnimationFlagsValues = {
    none: 0,
    traveling: enumFlag(0),
    useLedIndices: enumFlag(),
};

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationCategory.js

/**
 * @category Animation
 * @enum
 */
const AnimationCategoryValues = {
    system: enumValue(0),
    uniform: enumValue(),
    colorful: enumValue(),
    flashy: enumValue(),
    animated: enumValue(),
};

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/NoiseColorOverrideType.js

/**
 * @category Animation Runtime Color Override type
 * @enum
 */
const NoiseColorOverrideTypeValues = {
    none: enumValue(0),
    randomFromGradient: enumValue(),
    faceToGradient: enumValue(),
    faceToRainbowWheel: enumValue(),
};

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/NormalsColorOverrideType.js

/**
 * @category Animation Runtime Color Override type
 * @enum
 */
const NormalsColorOverrideTypeValues = {
    none: enumValue(0),
    faceToGradient: enumValue(),
    faceToRainbowWheel: enumValue(),
};

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/Constants.js
/**
 * @category Animation
 */
const AnimConstants = {
    /** Maximum number of LED on a die. */
    maxLEDsCount: 22,
    /** Magic number for picking a color based on the current face. */
    paletteColorFromFace: 127,
    /** Magic number for randomly picking a color. */
    paletteColorFromRandom: 126,
    /** Mask value for turning all LEDs on. */
    faceMaskAll: 0xffffffff,
    /** Time resolution of 1 animation keyframe. */
    keyframeTimeResolutionMs: 2,
    /** Magic number for the current face index. */
    currentFaceIndex: -1,
};

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/align32bits.js
function align32bits(size) {
    const extra = size % 4;
    return size + (extra ? 4 - extra : 0);
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/color/color32Utils.js
/// <summary>
/// Helper static class that implements various color operations with the color information
/// being stored as an unsigned 32 bits value.
/// In related methods, the intensity is a byte value between 0 (black) and 255 (white).
/// </summary>
/// <summary>
/// Converts a (red, green, blue) bytes triplets to a 32 bits color value.
/// </summary>
/// <param name="red">The red component as a byte value.</param>
/// <param name="green">The green component as a byte value.</param>
/// <param name="blue">The blue component as a byte value.</param>
/// <returns>A 32 bits color value.</returns>
/**
 * @category Color32
 */
function toColor32(redOrColor, green = 0, blue = 0) {
    if (typeof redOrColor !== "number") {
        green = redOrColor.g * 255;
        blue = redOrColor.b * 255;
        redOrColor = redOrColor.r * 255;
    }
    return (redOrColor << 16) | (green << 8) | (blue & 0xff);
}
/// <summary>
/// Extracts the red component of a 32 bits color value.
/// </summary>
/// <param name="color32">The 32 bits color value.</param>
/// <returns>The red component of the color.</returns>
/**
 * @category Color32
 */
function getRed(color32) {
    return (color32 >> 16) & 0xff;
}
/// <summary>
/// Extracts the green component of a 32 bits color value.
/// </summary>
/// <param name="color32">The 32 bits color value.</param>
/// <returns>The green component of the color.</returns>
/**
 * @category Color32
 */
function getGreen(color32) {
    return (color32 >> 8) & 0xff;
}
/// <summary>
/// Extracts the blue component of a 32 bits color value.
/// </summary>
/// <param name="color32">The 32 bits color value.</param>
/// <returns>The blue component of the color.</returns>
/**
 * @category Color32
 */
function getBlue(color32) {
    return color32 & 0xff;
}
function mulColors(a, b) {
    const red = (getRed(a) * getRed(b)) / 255;
    const green = (getGreen(a) * getGreen(b)) / 255;
    const blue = (getBlue(a) * getBlue(b)) / 255;
    return toColor32(red, green, blue);
}
/// <summary>
/// Combines the two colors by selecting the highest value for each component.
/// </summary>
/// <param name="color32">The first color to combine.</param>
/// <param name="otherColor32">The second color to combine.</param>
/// <returns></returns>
/**
 * @category Color32
 */
function combineColors(color32, secondColor32) {
    const red = Math.max(getRed(color32), getRed(secondColor32));
    const green = Math.max(getGreen(color32), getGreen(secondColor32));
    const blue = Math.max(getBlue(color32), getBlue(secondColor32));
    return toColor32(red, green, blue);
}
/// <summary>
/// Interpolates linearly between two colors each given for a specific timestamp.
/// </summary>
/// <param name="color32">The first color.</param>
/// <param name="timestamp">The timestamp for the first color.</param>
/// <param name="secondColor32">The second color.</param>
/// <param name="secondTimestamp">The timestamp for the second color.</param>
/// <param name="time">The time for which to calculate the color.</param>
/// <returns>The color for the given time.</returns>
/**
 * @category Color32
 */
function interpolateColors(color32, timestamp, secondColor32, secondTimestamp, time) {
    // To stick to integer math, we'll scale the values
    const scaler = 1024;
    const scaledPercent = ((time - timestamp) * scaler) / (secondTimestamp - timestamp);
    const scaledRed = getRed(color32) * (scaler - scaledPercent) +
        getRed(secondColor32) * scaledPercent;
    const scaledGreen = getGreen(color32) * (scaler - scaledPercent) +
        getGreen(secondColor32) * scaledPercent;
    const scaledBlue = getBlue(color32) * (scaler - scaledPercent) +
        getBlue(secondColor32) * scaledPercent;
    return toColor32(scaledRed / scaler, scaledGreen / scaler, scaledBlue / scaler);
}
/// <summary>
/// Interpolates linearly the two intensities each given for a specific timestamp.
/// </summary>
/// <param name="intensity1">The first intensity value.</param>
/// <param name="timestamp1">The timestamp for the first intensity.</param>
/// <param name="intensity2">The second intensity value.</param>
/// <param name="timestamp2">The timestamp for the second intensity.</param>
/// <param name="time">The time for which to calculate the intensity.</param>
/// <returns>The intensity for the given time.</returns>
/**
 * @category Color32
 */
function interpolateIntensity(intensity1, timestamp1, intensity2, timestamp2, time) {
    const scaler = 1024;
    const scaledPercent = ((time - timestamp1) * scaler) / (timestamp2 - timestamp1);
    return Math.floor((intensity1 * (scaler - scaledPercent) + intensity2 * scaledPercent) /
        scaler);
}
/// <summary>
/// Modulates the color with the given intensity. The later is a value
/// between 0 (black) and (white).
/// </summary>
/// <param name="color">The color to modulate.</param>
/// <param name="intensity">The intensity to apply.</param>
/// <returns></returns>
/**
 * @category Color32
 */
function modulateColor(color32, intensity) {
    const red = (getRed(color32) * intensity) / 255;
    const green = (getGreen(color32) * intensity) / 255;
    const blue = (getBlue(color32) * intensity) / 255;
    return toColor32(red, green, blue);
}
/// <summary>
/// Returns a color along the following looped color blending:
/// [position = 0] red -> green -> blue -> red [position = 255].
/// </summary>
/// <param name="position">Position on the rainbow wheel.</param>
/// <param name="intensity">Intensity of the returned color.</param>
/// <returns>A color.</returns>
/**
 * @category Color32
 */
function rainbowWheel(position, intensity = 255) {
    if (position < 85) {
        return toColor32((position * 3 * intensity) / 255, ((255 - position * 3) * intensity) / 255, 0);
    }
    else if (position < 170) {
        position -= 85;
        return toColor32(((255 - position * 3) * intensity) / 255, 0, (position * 3 * intensity) / 255);
    }
    else {
        position -= 170;
        return toColor32(0, (position * 3 * intensity) / 255, ((255 - position * 3) * intensity) / 255);
    }
}
function faceWheel(face, count) {
    return rainbowWheel((face * 256) / count);
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/color/colorUtils.js
/**
 * @category Color
 */
function hsvToRgb({ h, s, v }) {
    // Adapted from https://gist.github.com/mjackson/5311256
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            return { r: v, g: t, b: p };
        case 1:
            return { r: q, g: v, b: p };
        case 2:
            return { r: p, g: v, b: t };
        case 3:
            return { r: p, g: q, b: v };
        case 4:
            return { r: t, g: p, b: v };
        case 5:
            return { r: v, g: p, b: q };
        default:
            return { r: 0, g: 0, b: 0 };
    }
}
/**
 * @category Color
 */
function rgbToHsv({ r, g, b }) {
    // Adapted from https://gist.github.com/mjackson/5311256
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    if (d === 0) {
        // achromatic
        return { h: 0, s: 0, v: 0 };
    }
    else {
        let h = 0;
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        return { h: h / 6, s: d / max, v: max };
    }
}
function shiftHue({ r, g, b }, shift) {
    const hsv = rgbToHsv({ r, g, b });
    hsv.h = (hsv.h + shift) % 1;
    const out = hsvToRgb(hsv);
    return out;
}
function colorByteToHex(byte) {
    return byte.toString(16).padStart(2, "0");
}
/**
 * @category Color
 */
function colorBytesToString(rByte, gByte, bByte) {
    return ("#" + colorByteToHex(rByte) + colorByteToHex(gByte) + colorByteToHex(bByte));
}
/**
 * @category Color
 */
function colorComponentToByte(c) {
    return Math.round(255 * Math.min(1, Math.max(0, c)));
}
/**
 * @category Color
 */
function colorToString({ r, g, b }) {
    return colorBytesToString(colorComponentToByte(r), colorComponentToByte(g), colorComponentToByte(b));
}
function desaturate(color) {
    return ((Math.min(color.r, Math.min(color.g, color.b)) +
        Math.max(color.r, Math.max(color.g, color.b))) *
        0.5);
}
function sqrDistance(color1, color2) {
    const dr = color1.r - color2.r;
    const dg = color1.g - color2.g;
    const db = color1.b - color2.b;
    return dr * dr + dg * dg + db * db;
}
function lerp(color1, color2, t) {
    t = Math.min(1, Math.max(0, t));
    return {
        r: color1.r + (color2.r - color1.r) * t,
        g: color1.g + (color2.g - color1.g) * t,
        b: color1.b + (color2.b - color1.b) * t,
    };
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/color/Color.js


/**
 * Represents an RGB color using values ranging from O and 1
 * for each color component.
 * @category Color
 */
class Color {
    get rByte() {
        return colorComponentToByte(this.r);
    }
    get gByte() {
        return colorComponentToByte(this.g);
    }
    get bByte() {
        return colorComponentToByte(this.b);
    }
    constructor(rOrHexColor, g, b) {
        this.r = 0; // Normalized floating point value
        this.g = 0; // Normalized floating point value
        this.b = 0; // Normalized floating point value
        if (rOrHexColor !== undefined) {
            if (typeof rOrHexColor === "string") {
                this.setWithHex(rOrHexColor);
            }
            else if (typeof rOrHexColor === "object") {
                this.set(rOrHexColor.r, rOrHexColor.g, rOrHexColor.b);
            }
            else if (g === undefined) {
                this.setWithValue(rOrHexColor);
            }
            else {
                this.set(rOrHexColor, g, b !== null && b !== void 0 ? b : 0);
            }
        }
    }
    equals(other) {
        return this.r === other.r && this.g === other.g && this.b === other.b;
    }
    assign(other) {
        this.r = other.r;
        this.g = other.g;
        this.b = other.b;
        return this;
    }
    duplicate() {
        return new Color(this.r, this.g, this.b);
    }
    desaturate() {
        return desaturate(this);
    }
    serialize(dataView, byteOffset = 0) {
        dataView.setUint8(byteOffset++, this.rByte);
        dataView.setUint8(byteOffset++, this.gByte);
        dataView.setUint8(byteOffset++, this.bByte);
        return [dataView, byteOffset];
    }
    toString() {
        return colorToString(this);
    }
    toColor32() {
        return toColor32(this);
    }
    set(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        return this;
    }
    setWithBytes(rByte, gByte, bByte) {
        this.r = rByte / 255;
        this.g = gByte / 255;
        this.b = bByte / 255;
        return this;
    }
    setWithValue(color24) {
        this.setWithBytes(getRed(color24), getGreen(color24), getBlue(color24));
        return this;
    }
    setWithHex(hexColor) {
        if (hexColor.length) {
            const i = hexColor[0] === "#" ? 1 : 0;
            if (hexColor.length === 3 + i) {
                this.set(parseInt(hexColor[i], 16) / 255, parseInt(hexColor[i + 1], 16) / 255, parseInt(hexColor[i + 2], 16) / 255);
            }
            else if (hexColor.length === 6 + i) {
                this.setWithValue(parseInt(i ? hexColor.slice(i) : hexColor, 16));
            }
            else {
                throw new Error(`Invalid hexadecimal color: ${hexColor}`);
            }
        }
        return this;
    }
    static fromBytes(rByte, gByte, bByte) {
        return new Color().setWithBytes(rByte, gByte, bByte);
    }
    static fromString(hexColor) {
        return new Color().setWithHex(hexColor);
    }
    static lerp(color1, color2, t) {
        return new Color(lerp(color1, color2, t));
    }
}
// Black is LED off
Color.black = Object.freeze(new Color(0, 0, 0));
// Bright colors
Color.brightRed = Object.freeze(new Color(1, 0, 0));
Color.brightGreen = Object.freeze(new Color(0, 1, 0));
Color.brightBlue = Object.freeze(new Color(0, 0, 1));
Color.brightWhite = Object.freeze(new Color(1, 1, 1));
Color.brightCyan = Object.freeze(new Color(0, 1, 1));
Color.brightMagenta = Object.freeze(new Color(1, 0, 1));
Color.brightYellow = Object.freeze(new Color(1, 1, 0));
Color.brightOrange = Object.freeze(new Color(1, 0.647, 0));
Color.brightPurple = Object.freeze(new Color(0.5, 0, 1));
Color.red = Object.freeze(new Color(0.7, 0, 0));
Color.green = Object.freeze(new Color(0, 0.7, 0));
Color.blue = Object.freeze(new Color(0, 0, 0.7));
Color.white = Object.freeze(new Color(0.7, 0.7, 0.7));
Color.cyan = Object.freeze(new Color(0, 0.7, 0.7));
Color.magenta = Object.freeze(new Color(0.7, 0, 0.7));
Color.yellow = Object.freeze(new Color(0.7, 0.6, 0.01));
Color.orange = Object.freeze(new Color(0.7, 0.453, 0));
Color.mediumWhite = Object.freeze(new Color(0.5, 0.5, 0.5));
Color.faintWhite = Object.freeze(new Color(0.1, 0.1, 0.1));
// Dimmed colors
Color.dimRed = Object.freeze(new Color(0.35, 0, 0));
Color.dimGreen = Object.freeze(new Color(0, 0.35, 0));
Color.dimBlue = Object.freeze(new Color(0, 0, 0.35));
Color.dimWhite = Object.freeze(new Color(0.35, 0.35, 0.35));
Color.dimCyan = Object.freeze(new Color(0, 0.35, 0.35));
Color.dimMagenta = Object.freeze(new Color(0.35, 0, 0.35));
Color.dimYellow = Object.freeze(new Color(0.35, 0.3, 0.005));
Color.dimOrange = Object.freeze(new Color(0.35, 0.226, 0));
/* harmony default export */ const color_Color = (Color);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/color/gammaUtils.js
/// <summary>
/// Helper static class that implements various gamma operations on colors.
/// </summary>


function toByte(n) {
    return n < 0 ? 0 : n > 255 ? 255 : Math.floor(n);
}
/// <summary>
/// Returns the gamma of the given intensity.
/// </summary>
/// <param name="intensity"></param>
/// <returns>The gamma value.</returns>
/**
 * @category Color Gamma
 */
function gamma8(intensity) {
    return _gammaTable[toByte(intensity)]; // 0-255 in, 0-255 out
}
/// <summary>
/// Returns the gamma transformation of the given color.
/// </summary>
/// <param name="color32">The color to transform.</param>
/// <returns>The gamma transformed color.</returns>
/**
 * @category Color Gamma
 */
function gamma32(color32) {
    const r = gamma8(getRed(color32));
    const g = gamma8(getGreen(color32));
    const b = gamma8(getBlue(color32));
    return toColor32(r, g, b);
}
/// <summary>
/// Returns the gamma transformation of the given color.
/// </summary>
/// <param name="color">The color to transform.</param>
/// <returns>The gamma transformed color.</returns>
/**
 * @category Color Gamma
 */
function gamma(color) {
    const r = gamma8(color.rByte);
    const g = gamma8(color.gByte);
    const b = gamma8(color.bByte);
    return color_Color.fromBytes(r, g, b);
}
/// <summary>
/// Returns the intensity corresponding to the given gamma value.
/// </summary>
/// <param name="gamma">A gamma value.</param>
/// <returns>The intensity for the gamma value.</returns>
/**
 * @category Color Gamma
 */
function reverseGamma8(gamma) {
    return _reverseGammaTable[toByte(gamma)]; // 0-255 in, 0-255 out
}
/// <summary>
/// Returns the reverse gamma transformation of the given color.
/// </summary>
/// <param name="color">The color to transform.</param>
/// <returns>The reverse gamma transformed color.</returns>
/**
 * @category Color Gamma
 */
function reverseGamma(color) {
    const r = reverseGamma8(color.rByte);
    const g = reverseGamma8(color.gByte);
    const b = reverseGamma8(color.bByte);
    return color_Color.fromBytes(r, g, b);
}
const _gammaTable = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2,
    2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7,
    7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 12, 12, 12, 13, 13, 14, 14, 14,
    15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 22, 22, 23, 23, 24, 25,
    25, 26, 27, 27, 28, 29, 29, 30, 31, 32, 32, 33, 34, 35, 35, 36, 37, 38, 39,
    40, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
    58, 60, 61, 62, 63, 64, 65, 67, 68, 69, 70, 72, 73, 74, 76, 77, 78, 80, 81,
    82, 84, 85, 87, 88, 90, 91, 93, 94, 96, 97, 99, 101, 102, 104, 105, 107, 109,
    111, 112, 114, 116, 118, 119, 121, 123, 125, 127, 129, 131, 132, 134, 136,
    138, 140, 142, 144, 147, 149, 151, 153, 155, 157, 159, 162, 164, 166, 168,
    171, 173, 175, 178, 180, 182, 185, 187, 190, 192, 195, 197, 200, 202, 205,
    207, 210, 213, 215, 218, 221, 223, 226, 229, 232, 235, 237, 240, 243, 246,
    249, 252, 255,
];
const _reverseGammaTable = [
    0, 70, 80, 87, 92, 97, 101, 105, 108, 112, 114, 117, 119, 122, 124, 126, 128,
    130, 132, 134, 135, 137, 138, 140, 141, 143, 144, 146, 147, 148, 149, 151,
    152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166,
    167, 168, 169, 170, 170, 171, 172, 173, 174, 174, 175, 176, 177, 177, 178,
    179, 180, 180, 181, 182, 182, 183, 184, 184, 185, 186, 186, 187, 188, 188,
    189, 189, 190, 191, 191, 192, 192, 193, 194, 194, 195, 195, 196, 196, 197,
    197, 198, 198, 199, 200, 200, 201, 201, 202, 202, 203, 203, 204, 204, 204,
    205, 205, 206, 206, 207, 207, 208, 208, 209, 209, 210, 210, 210, 211, 211,
    212, 212, 213, 213, 214, 214, 214, 215, 215, 216, 216, 216, 217, 217, 218,
    218, 218, 219, 219, 220, 220, 220, 221, 221, 222, 222, 222, 223, 223, 223,
    224, 224, 224, 225, 225, 226, 226, 226, 227, 227, 227, 228, 228, 228, 229,
    229, 229, 230, 230, 230, 231, 231, 231, 232, 232, 232, 233, 233, 233, 234,
    234, 234, 235, 235, 235, 236, 236, 236, 237, 237, 237, 237, 238, 238, 238,
    239, 239, 239, 240, 240, 240, 241, 241, 241, 241, 242, 242, 242, 243, 243,
    243, 243, 244, 244, 244, 245, 245, 245, 245, 246, 246, 246, 247, 247, 247,
    247, 248, 248, 248, 248, 249, 249, 249, 249, 250, 250, 250, 251, 251, 251,
    251, 252, 252, 252, 252, 253, 253, 253, 253, 254, 254, 254, 254, 255,
];

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/color/index.js






;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationBits.js




/**
 * @category Animation
 */
class AnimationBits {
    constructor() {
        // TODO should be private
        this.palette = [];
        this.rgbKeyframes = [];
        this.rgbTracks = [];
        this.keyframes = [];
        this.tracks = [];
        this.animations = [];
    }
    getColor32(colorIndex, die) {
        return toColor32(this.getColor(colorIndex, die));
    }
    getColor(colorIndex, die) {
        if (colorIndex === AnimConstants.paletteColorFromFace) {
            return new color_Color(faceWheel(die.currentFace, die.ledCount));
        }
        else if (colorIndex === AnimConstants.paletteColorFromRandom) {
            return color_Color.black; // Not implemented
        }
        else {
            return this.getArrayItem(this.palette, colorIndex, "color");
        }
    }
    getPaletteSize() {
        return this.palette.length * 3;
    }
    getRgbKeyframe(keyframeIndex) {
        return this.getArrayItem(this.rgbKeyframes, keyframeIndex, "rgb keyframe");
    }
    getRgbKeyframeCount() {
        return this.rgbKeyframes.length;
    }
    getKeyframe(keyframeIndex) {
        return this.getArrayItem(this.keyframes, keyframeIndex, "keyframe");
    }
    getKeyframeCount() {
        return this.keyframes.length;
    }
    getRgbTrack(trackIndex) {
        return this.getArrayItem(this.rgbTracks, trackIndex, "rgb track");
    }
    getRgbTrackCount() {
        return this.rgbTracks.length;
    }
    getTrack(trackIndex) {
        return this.getArrayItem(this.tracks, trackIndex, "track");
    }
    getTrackCount() {
        return this.tracks.length;
    }
    getAnimation(animIndex) {
        return this.getArrayItem(this.animations, animIndex, "animation");
    }
    getAnimationCount() {
        return this.animations.length;
    }
    computeDataSize() {
        return (align32bits(this.palette.length * 3) + // 3 bytes per color
            byteSizeOf(this.rgbKeyframes) +
            byteSizeOf(this.rgbTracks) +
            byteSizeOf(this.keyframes) +
            byteSizeOf(this.tracks));
    }
    serialize(dataView, byteOffset = 0) {
        // Copy palette
        for (const color of this.palette) {
            [dataView, byteOffset] = color.serialize(dataView, byteOffset);
        }
        // Round up to nearest multiple of 4
        byteOffset = align32bits(byteOffset);
        // Copy keyframes
        [dataView, byteOffset] = serialize(this.rgbKeyframes, {
            dataView,
            byteOffset,
        });
        // Copy rgb tracks
        [dataView, byteOffset] = serialize(this.rgbTracks, {
            dataView,
            byteOffset,
        });
        // Copy keyframes
        [dataView, byteOffset] = serialize(this.keyframes, {
            dataView,
            byteOffset,
        });
        // Copy tracks
        [dataView, byteOffset] = serialize(this.tracks, { dataView, byteOffset });
        return [dataView, byteOffset];
    }
    getArrayItem(array, index, name) {
        const item = array[index];
        if (item === undefined) {
            // Throw an exception if index is out of bounds, invalid (negative or not an integer)
            // or if the item at the given index is not set or undefined (which is just as bad in our case)
            if (index < 0 || index >= array.length) {
                throw new Error(`Out of bound index for AnimationBits.${name}, got ${index} but array has ${array.length} item(s)`);
            }
            else {
                throw new Error(`No item for AnimationBits.${name} at index ${index}`);
            }
        }
        return item;
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationInstance.js
/**
 * @category Animation Instance
 */
class AnimationInstance {
    get startTime() {
        return this._startTime;
    }
    get duration() {
        return this._animationPreset.duration;
    }
    get animationPreset() {
        return this._animationPreset;
    }
    get bits() {
        return this._animationBits;
    }
    get die() {
        return this._virtualDie;
    }
    // TODO add readonly to constructor parameters
    constructor(preset, bits, die) {
        this._startTime = 0;
        this._animationPreset = preset;
        this._animationBits = bits;
        this._virtualDie = die;
    }
    start(startTime) {
        this._startTime = startTime;
    }
    setIndices(faceMask, retIndices) {
        const ledCount = this._virtualDie.ledCount;
        let retCount = 0;
        for (let i = 0; i < ledCount; ++i) {
            if ((faceMask & (1 << i)) !== 0) {
                retIndices[retCount] = i;
                retCount++;
            }
        }
        return retCount;
    }
    setColor(color, faceMask, retIndices, retColors) {
        const ledCount = this._virtualDie.ledCount;
        let retCount = 0;
        for (let i = 0; i < ledCount; ++i) {
            if ((faceMask & (1 << i)) !== 0) {
                retIndices[retCount] = i;
                retColors[retCount] = color;
                retCount++;
            }
        }
        return retCount;
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationInstanceCycle.js


/**
 * @category Animation Instance
 */
class AnimationInstanceCycle extends AnimationInstance {
    get preset() {
        return this.animationPreset;
    }
    updateLEDs(ms, retIndices, retColors32) {
        const preset = this.preset;
        const ledCount = this.die.ledCount;
        const time = ms - this.startTime;
        const fadeTime = (preset.duration * preset.fade) / (255 * 2);
        let intensity = preset.intensity;
        if (time <= fadeTime) {
            // Ramp up
            intensity = (time * preset.intensity) / fadeTime;
        }
        else if (time >= preset.duration - fadeTime) {
            // Ramp down
            intensity = ((preset.duration - time) * preset.intensity) / fadeTime;
        }
        // Figure out the color from the gradient
        const gradient = this.bits.getRgbTrack(preset.gradientTrackOffset);
        const gradientTime = (time * preset.count * 1000) / preset.duration;
        // Fill the indices and colors for the anim controller to know how to update leds
        let retCount = 0;
        for (let i = 0; i < ledCount; ++i) {
            if ((preset.faceMask & (1 << i)) !== 0) {
                retIndices[retCount] = i;
                const faceTime = (gradientTime + (i * 1000 * preset.cyclesTimes10) / (ledCount * 10)) %
                    1000;
                retColors32[retCount] = modulateColor(gradient.evaluateColor(faceTime, this.bits, this.die), intensity);
                retCount++;
            }
        }
        return retCount;
    }
    stop(retIndices) {
        const ledCount = this.die.ledCount;
        const preset = this.preset;
        let retCount = 0;
        for (let i = 0; i < ledCount; ++i) {
            if ((preset.faceMask & (1 << i)) !== 0) {
                retIndices[retCount] = i;
                retCount++;
            }
        }
        return retCount;
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationCycle.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * @category Animation
 */
class AnimationCycle {
    constructor() {
        this.type = AnimationTypeValues.cycle;
        this.animFlags = 0;
        this.duration = 0; // In milliseconds
        this.faceMask = 0;
        this.count = 0;
        this.fade = 0;
        this.intensity = 128;
        this.cyclesTimes10 = 10;
        this.gradientTrackOffset = 0;
    }
    createInstance(bits, die) {
        return new AnimationInstanceCycle(this, bits, die);
    }
}
__decorate([
    serializable(1)
], AnimationCycle.prototype, "type", void 0);
__decorate([
    serializable(1)
], AnimationCycle.prototype, "animFlags", void 0);
__decorate([
    serializable(2)
], AnimationCycle.prototype, "duration", void 0);
__decorate([
    serializable(4)
], AnimationCycle.prototype, "faceMask", void 0);
__decorate([
    serializable(1)
], AnimationCycle.prototype, "count", void 0);
__decorate([
    serializable(1)
], AnimationCycle.prototype, "fade", void 0);
__decorate([
    serializable(1)
], AnimationCycle.prototype, "intensity", void 0);
__decorate([
    serializable(1)
], AnimationCycle.prototype, "cyclesTimes10", void 0);
__decorate([
    serializable(2)
], AnimationCycle.prototype, "gradientTrackOffset", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationInstanceGradient.js

/**
 * @category Animation Instance
 */
class AnimationInstanceGradient extends AnimationInstance {
    get preset() {
        return this.animationPreset;
    }
    updateLEDs(ms, retIndices, retColors32) {
        const preset = this.preset;
        const time = ms - this.startTime;
        // Figure out the color from the gradient
        const gradient = this.bits.getRgbTrack(preset.gradientTrackOffset);
        const gradientTime = (time * 1000) / preset.duration;
        const color = gradient.evaluateColor(gradientTime, this.bits, this.die);
        // Fill the indices and colors for the anim controller to know how to update LEDs
        return this.setColor(color, preset.faceMask, retIndices, retColors32);
    }
    stop(retIndices) {
        return this.setIndices(this.preset.faceMask, retIndices);
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationGradient.js
var AnimationGradient_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * @category Animation
 */
class AnimationGradient {
    constructor() {
        this.type = AnimationTypeValues.gradient;
        this.animFlags = 0;
        this.duration = 0; // In milliseconds
        this.faceMask = 0;
        this.gradientTrackOffset = 0;
    }
    createInstance(bits, die) {
        return new AnimationInstanceGradient(this, bits, die);
    }
}
AnimationGradient_decorate([
    serializable(1)
], AnimationGradient.prototype, "type", void 0);
AnimationGradient_decorate([
    serializable(1)
], AnimationGradient.prototype, "animFlags", void 0);
AnimationGradient_decorate([
    serializable(2)
], AnimationGradient.prototype, "duration", void 0);
AnimationGradient_decorate([
    serializable(4)
], AnimationGradient.prototype, "faceMask", void 0);
AnimationGradient_decorate([
    serializable(2, { padding: 2 })
], AnimationGradient.prototype, "gradientTrackOffset", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationInstanceGradientPattern.js


/**
 * @category Animation Instance
 */
class AnimationInstanceGradientPattern extends AnimationInstance {
    constructor() {
        super(...arguments);
        this._rgb = 0;
    }
    get preset() {
        return this.animationPreset;
    }
    start(startTime) {
        super.start(startTime);
        if (this.preset.overrideWithFace) {
            this._rgb = this.bits.getColor32(AnimConstants.paletteColorFromFace, this.die);
        }
    }
    /// <summary>
    /// Computes the list of LEDs that need to be on, and what their intensities should be
    /// based on the different tracks of this animation.
    /// </summary>
    updateLEDs(ms, retIndices, retColors32) {
        const preset = this.preset;
        const ledCount = this.die.ledCount;
        const time = ms - this.startTime;
        const trackTime = (time * 1000) / preset.duration;
        // Figure out the color from the gradient
        const gradient = this.bits.getRgbTrack(preset.gradientTrackOffset);
        let gradientColor = 0;
        if (preset.overrideWithFace) {
            gradientColor = this._rgb;
        }
        else {
            gradientColor = gradient.evaluateColor(trackTime, this.bits, this.die);
        }
        // Each track will append its led indices and colors into the return array
        // The assumption is that led indices don't overlap between tracks of a single animation,
        // so there will always be enough room in the return arrays.
        let totalCount = 0;
        const indices = [];
        const colors32 = [];
        for (let i = 0; i < preset.trackCount; ++i) {
            const track = this.bits.getTrack(preset.tracksOffset + i);
            const count = track.evaluate(this.bits, gradientColor, trackTime, ledCount, indices, colors32);
            for (let j = 0; j < count; ++j) {
                retIndices[totalCount + j] = indices[j];
                retColors32[totalCount + j] = colors32[j];
            }
            totalCount += count;
        }
        return totalCount;
    }
    stop(retIndices) {
        const preset = this.preset;
        // Each track will append its led indices and colors into the return array
        // The assumption is that led indices don't overlap between tracks of a single animation,
        // so there will always be enough room in the return arrays.
        let totalCount = 0;
        const indices = [];
        for (let i = 0; i < preset.trackCount; ++i) {
            const track = this.bits.getRgbTrack(preset.tracksOffset + i);
            const count = track.extractLEDIndices(indices);
            for (let j = 0; j < count; ++j) {
                retIndices[totalCount + j] = indices[j];
            }
            totalCount += count;
        }
        return totalCount;
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationGradientPattern.js
var AnimationGradientPattern_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * @category Animation
 */
class AnimationGradientPattern {
    constructor() {
        this.type = AnimationTypeValues.gradientPattern;
        this.animFlags = 0;
        this.duration = 0; // In milliseconds
        this.tracksOffset = 0; // Offset into a global buffer of tracks
        this.trackCount = 0;
        this.gradientTrackOffset = 0;
        this.overrideWithFace = false;
    }
    createInstance(bits, die) {
        return new AnimationInstanceGradientPattern(this, bits, die);
    }
}
AnimationGradientPattern_decorate([
    serializable(1)
], AnimationGradientPattern.prototype, "type", void 0);
AnimationGradientPattern_decorate([
    serializable(1)
], AnimationGradientPattern.prototype, "animFlags", void 0);
AnimationGradientPattern_decorate([
    serializable(2)
], AnimationGradientPattern.prototype, "duration", void 0);
AnimationGradientPattern_decorate([
    serializable(2)
], AnimationGradientPattern.prototype, "tracksOffset", void 0);
AnimationGradientPattern_decorate([
    serializable(2)
], AnimationGradientPattern.prototype, "trackCount", void 0);
AnimationGradientPattern_decorate([
    serializable(2)
], AnimationGradientPattern.prototype, "gradientTrackOffset", void 0);
AnimationGradientPattern_decorate([
    serializable(1, { padding: 1 })
], AnimationGradientPattern.prototype, "overrideWithFace", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationInstanceKeyframed.js

/**
 * @category Animation Instance
 */
class AnimationInstanceKeyframed extends AnimationInstance {
    get preset() {
        return this.animationPreset;
    }
    /// <summary>
    /// Computes the list of LEDs that need to be on, and what their intensities should be
    /// based on the different tracks of this animation.
    /// </summary>
    updateLEDs(ms, retIndices, retColors32) {
        const preset = this.preset;
        const time = ms - this.startTime;
        const trackTime = (time * 1000) / preset.duration;
        // Each track will append its led indices and colors into the return array
        // The assumption is that led indices don't overlap between tracks of a single animation,
        // so there will always be enough room in the return arrays.
        let totalCount = 0;
        const indices = [];
        const colors32 = [];
        for (let i = 0; i < preset.trackCount; ++i) {
            const track = this.bits.getRgbTrack(preset.tracksOffset + i);
            const count = track.evaluate(trackTime, this.bits, this.die, indices, colors32);
            for (let j = 0; j < count; ++j) {
                retIndices[totalCount + j] = indices[j];
                retColors32[totalCount + j] = colors32[j];
            }
            totalCount += count;
        }
        return totalCount;
    }
    stop(retIndices) {
        const preset = this.preset;
        // Each track will append its led indices and colors into the return array
        // The assumption is that led indices don't overlap between tracks of a single animation,
        // so there will always be enough room in the return arrays.
        let totalCount = 0;
        const indices = [];
        for (let i = 0; i < preset.trackCount; ++i) {
            const track = this.bits.getRgbTrack(preset.tracksOffset + i);
            const count = track.extractLEDIndices(indices);
            for (let j = 0; j < count; ++j) {
                retIndices[totalCount + j] = indices[j];
            }
            totalCount += count;
        }
        return totalCount;
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationKeyframed.js
var AnimationKeyframed_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * @category Animation
 */
class AnimationKeyframed {
    constructor() {
        this.type = AnimationTypeValues.keyframed;
        this.animFlags = 0;
        this.duration = 0; // In milliseconds
        this.tracksOffset = 0; // Offset into a global buffer of tracks
        this.trackCount = 0;
    }
    createInstance(bits, die) {
        return new AnimationInstanceKeyframed(this, bits, die);
    }
}
AnimationKeyframed_decorate([
    serializable(1)
], AnimationKeyframed.prototype, "type", void 0);
AnimationKeyframed_decorate([
    serializable(1)
], AnimationKeyframed.prototype, "animFlags", void 0);
AnimationKeyframed_decorate([
    serializable(2)
], AnimationKeyframed.prototype, "duration", void 0);
AnimationKeyframed_decorate([
    serializable(2)
], AnimationKeyframed.prototype, "tracksOffset", void 0);
AnimationKeyframed_decorate([
    serializable(2)
], AnimationKeyframed.prototype, "trackCount", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/randomUInt32.js
function randomUInt32() {
    return Math.floor(Math.random() * 0xffffffff);
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationInstanceNoise.js





const MAX_RETRIES = 5;
function computeBaseParam(type, virtualDie) {
    switch (type) {
        case NoiseColorOverrideTypeValues.faceToGradient:
            return (virtualDie.currentFace * 1000) / virtualDie.faceCount;
        case NoiseColorOverrideTypeValues.faceToRainbowWheel:
            return (virtualDie.currentFace * 256) / virtualDie.faceCount;
        case NoiseColorOverrideTypeValues.randomFromGradient:
        case NoiseColorOverrideTypeValues.none:
        default:
            return 0;
    }
}
/**
 * @category Animation Instance
 */
class AnimationInstanceNoise extends AnimationInstance {
    constructor() {
        super(...arguments);
        this.nextBlinkTime = 0;
        this.blinkStartTimes = []; // state that keeps track of the start of every individual blink so as to know how to fade it based on the time
        this.blinkDurations = []; // keeps track of the duration of each individual blink, so as to add a bit of variation
        this.blinkColors = [];
        this.blinkInterValMinMs = 0;
        this.blinkInterValDeltaMs = 0;
        this.baseColorParam = 0;
    }
    get preset() {
        return this.animationPreset;
    }
    start(startTime) {
        super.start(startTime);
        const preset = this.preset;
        this.blinkInterValMinMs =
            1000000 /
                (preset.blinkFrequencyTimes1000 + preset.blinkFrequencyVarTimes1000);
        const blinkInterValMaxMs = 1000000 /
            (preset.blinkFrequencyTimes1000 - preset.blinkFrequencyVarTimes1000);
        this.blinkInterValDeltaMs = Math.max(blinkInterValMaxMs - this.blinkInterValMinMs, 1);
        // initializing the durations and times of each blink
        for (let i = 0; i < AnimConstants.maxLEDsCount; i++) {
            this.blinkStartTimes[i] = 0;
            this.blinkDurations[i] = 0;
        }
        this.nextBlinkTime =
            startTime +
                this.blinkInterValMinMs +
                (randomUInt32() % this.blinkInterValDeltaMs);
        this.baseColorParam = computeBaseParam(preset.gradientColorType, this.die);
    }
    updateLEDs(ms, retIndices, retColors32) {
        const preset = this.preset;
        const ledCount = this.die.ledCount;
        const time = ms - this.startTime;
        const fadeTime = (preset.duration * preset.fade) / (255 * 2);
        // LEDs will pick an initial color from the overall gradient (generally black to white)
        const gradientOverall = this.bits.getRgbTrack(preset.gradientTrackOffset);
        // they will then fade according to the individual gradient
        const gradientIndividual = this.bits.getRgbTrack(preset.blinkTrackOffset);
        let intensity = 255;
        if (time <= fadeTime) {
            // Ramp up
            intensity = (time * 255) / fadeTime;
        }
        else if (time >= preset.duration - fadeTime) {
            // Ramp down
            intensity = ((preset.duration - time) * 255) / fadeTime;
        }
        // Should we start a new blink instance?
        if (ms >= this.nextBlinkTime) {
            // Yes, pick an led!
            let newLed = randomUInt32() % ledCount;
            for (let retries = 0; this.blinkDurations[newLed] !== 0 && retries < MAX_RETRIES; ++retries) {
                newLed = randomUInt32() % ledCount;
            }
            // Setup next blink
            this.blinkDurations[newLed] = preset.blinkDuration;
            this.blinkStartTimes[newLed] = ms;
            let gradientColor = 0;
            switch (preset.gradientColorType) {
                case NoiseColorOverrideTypeValues.randomFromGradient:
                    // Ignore instance gradient parameter, each blink gets a random value
                    gradientColor = gradientOverall.evaluateColor(randomUInt32() % 1000, this.bits, this.die);
                    break;
                case NoiseColorOverrideTypeValues.faceToGradient:
                    {
                        // use the current face (set at start()) + variance
                        const variance = Math.floor(randomUInt32() % Math.max(1, 2 * preset.gradientColorVar)) - preset.gradientColorVar;
                        let param = this.baseColorParam + variance;
                        if (param < 0) {
                            param = 0;
                        }
                        else if (param > 1000) {
                            param = 1000;
                        }
                        gradientColor = gradientOverall.evaluateColor(param, this.bits, this.die);
                    }
                    break;
                case NoiseColorOverrideTypeValues.faceToRainbowWheel:
                    {
                        // use the current face (set at start()) + variance
                        const variance = Math.floor(randomUInt32() % Math.max(1, 2 * preset.gradientColorVar)) - preset.gradientColorVar;
                        const param = this.baseColorParam + (variance * 255) / 1000;
                        gradientColor = rainbowWheel(param);
                    }
                    break;
                case NoiseColorOverrideTypeValues.none:
                default:
                    {
                        const gradientTime = (time * 1000) / preset.duration;
                        gradientColor = gradientOverall.evaluateColor(gradientTime, this.bits, this.die);
                    }
                    break;
            }
            this.blinkColors[newLed] = gradientColor;
            this.nextBlinkTime =
                ms +
                    this.blinkInterValMinMs +
                    (randomUInt32() % this.blinkInterValDeltaMs);
        }
        let retCount = 0; // number that indicates how many LEDs to light up in their current cycle
        for (let i = 0; i < ledCount; ++i) {
            if (this.blinkDurations[i] > 0) {
                // Update this blink
                const blinkTime = ms - this.blinkStartTimes[i];
                if (blinkTime > this.blinkDurations[i]) {
                    // This blink is over, return black this one time
                    retIndices[retCount] = i;
                    retColors32[retCount] = 0;
                    retCount++;
                    // and clear the array entry
                    this.blinkDurations[i] = 0;
                    this.blinkStartTimes[i] = 0;
                }
                else {
                    // Process this blink
                    const blinkGradientTime = (blinkTime * 1000) / this.blinkDurations[i];
                    const blinkColor = gradientIndividual.evaluateColor(blinkGradientTime, this.bits, this.die);
                    retIndices[retCount] = i;
                    retColors32[retCount] = modulateColor(mulColors(this.blinkColors[i], blinkColor), intensity);
                    retCount++;
                }
            }
            // Else skip
        }
        return retCount;
    }
    stop(retIndices) {
        return this.setIndices(AnimConstants.faceMaskAll, retIndices);
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationNoise.js
var AnimationNoise_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * @category Animation
 */
class AnimationNoise {
    constructor() {
        this.type = AnimationTypeValues.noise;
        this.animFlags = 0;
        this.duration = 0; // In milliseconds
        this.gradientTrackOffset = 0; // Offset into a global buffer of tracks
        this.blinkTrackOffset = 0; // Offset into a global buffer of tracks
        this.blinkFrequencyTimes1000 = 0; // per seconds, i.e. 1000 == 1 Hz
        this.blinkFrequencyVarTimes1000 = 0;
        this.blinkDuration = 0;
        this.fade = 0; // 0 - 255
        this.gradientColorType = NoiseColorOverrideTypeValues.none;
        this.gradientColorVar = 0; // 0 - 1000
    }
    createInstance(bits, die) {
        return new AnimationInstanceNoise(this, bits, die);
    }
}
AnimationNoise_decorate([
    serializable(1)
], AnimationNoise.prototype, "type", void 0);
AnimationNoise_decorate([
    serializable(1)
], AnimationNoise.prototype, "animFlags", void 0);
AnimationNoise_decorate([
    serializable(2)
], AnimationNoise.prototype, "duration", void 0);
AnimationNoise_decorate([
    serializable(2)
], AnimationNoise.prototype, "gradientTrackOffset", void 0);
AnimationNoise_decorate([
    serializable(2)
], AnimationNoise.prototype, "blinkTrackOffset", void 0);
AnimationNoise_decorate([
    serializable(2)
], AnimationNoise.prototype, "blinkFrequencyTimes1000", void 0);
AnimationNoise_decorate([
    serializable(2)
], AnimationNoise.prototype, "blinkFrequencyVarTimes1000", void 0);
AnimationNoise_decorate([
    serializable(2)
], AnimationNoise.prototype, "blinkDuration", void 0);
AnimationNoise_decorate([
    serializable(1)
], AnimationNoise.prototype, "fade", void 0);
AnimationNoise_decorate([
    serializable(1)
], AnimationNoise.prototype, "gradientColorType", void 0);
AnimationNoise_decorate([
    serializable(2)
], AnimationNoise.prototype, "gradientColorVar", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationInstanceRainbow.js



/**
 * @category Animation Instance
 */
class AnimationInstanceRainbow extends AnimationInstance {
    get preset() {
        return this.animationPreset;
    }
    updateLEDs(ms, retIndices, retColors32) {
        const preset = this.preset;
        const ledCount = this.die.ledCount;
        // Compute color
        let color = 0;
        const fadeTime = (preset.duration * preset.fade) / (255 * 2);
        const time = ms - this.startTime;
        const wheelPos = ((time * preset.count * 255) / preset.duration) % 256;
        let intensity = preset.intensity;
        if (time <= fadeTime) {
            // Ramp up
            intensity = (time * preset.intensity) / fadeTime;
        }
        else if (time >= preset.duration - fadeTime) {
            // Ramp down
            intensity = ((preset.duration - time) * preset.intensity) / fadeTime;
        }
        // Fill the indices and colors for the anim controller to know how to update LEDs
        let retCount = 0;
        if (preset.animFlags & AnimationFlagsValues.traveling) {
            for (let i = 0; i < ledCount; ++i) {
                if ((preset.faceMask & (1 << i)) !== 0) {
                    retIndices[retCount] = i;
                    retColors32[retCount] = rainbowWheel((wheelPos + (i * 256 * preset.cyclesTimes10) / (ledCount * 10)) %
                        256, intensity);
                    retCount++;
                }
            }
        }
        else {
            // All LEDs same color
            color = rainbowWheel(wheelPos, intensity);
            retCount = this.setColor(color, preset.faceMask, retIndices, retColors32);
        }
        return retCount;
    }
    stop(retIndices) {
        return this.setIndices(this.preset.faceMask, retIndices);
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationRainbow.js
var AnimationRainbow_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * @category Animation
 */
class AnimationRainbow {
    constructor() {
        this.type = AnimationTypeValues.rainbow;
        this.animFlags = 0;
        this.duration = 0; // In milliseconds
        this.faceMask = 0;
        this.count = 0;
        this.fade = 0;
        this.intensity = 128;
        this.cyclesTimes10 = 10;
    }
    createInstance(bits, die) {
        return new AnimationInstanceRainbow(this, bits, die);
    }
}
AnimationRainbow_decorate([
    serializable(1)
], AnimationRainbow.prototype, "type", void 0);
AnimationRainbow_decorate([
    serializable(1)
], AnimationRainbow.prototype, "animFlags", void 0);
AnimationRainbow_decorate([
    serializable(2)
], AnimationRainbow.prototype, "duration", void 0);
AnimationRainbow_decorate([
    serializable(4)
], AnimationRainbow.prototype, "faceMask", void 0);
AnimationRainbow_decorate([
    serializable(1)
], AnimationRainbow.prototype, "count", void 0);
AnimationRainbow_decorate([
    serializable(1)
], AnimationRainbow.prototype, "fade", void 0);
AnimationRainbow_decorate([
    serializable(1)
], AnimationRainbow.prototype, "intensity", void 0);
AnimationRainbow_decorate([
    serializable(1)
], AnimationRainbow.prototype, "cyclesTimes10", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationInstanceSimple.js


/**
 * @category Animation Instance
 */
class AnimationInstanceSimple extends AnimationInstance {
    constructor() {
        super(...arguments);
        this._rgb = 0;
    }
    get preset() {
        return this.animationPreset;
    }
    start(startTime) {
        super.start(startTime);
        this._rgb = this.bits.getColor32(this.preset.colorIndex, this.die);
    }
    updateLEDs(ms, retIndices, retColors32) {
        const preset = this.preset;
        // Compute color
        const black = 0;
        let color = 0;
        const period = preset.duration / preset.count;
        const fadeTime = (period * preset.fade) / (255 * 2);
        const onOffTime = (period - fadeTime * 2) / 2;
        const time = (ms - this.startTime) % period;
        if (time <= fadeTime) {
            // Ramp up
            color = interpolateColors(black, 0, this._rgb, fadeTime, time);
        }
        else if (time <= fadeTime + onOffTime) {
            color = this._rgb;
        }
        else if (time <= fadeTime * 2 + onOffTime) {
            // Ramp down
            color = interpolateColors(this._rgb, fadeTime + onOffTime, black, fadeTime * 2 + onOffTime, time);
        }
        else {
            color = black;
        }
        // Fill the indices and colors for the anim controller to know how to update LEDs
        return this.setColor(color, preset.faceMask, retIndices, retColors32);
    }
    stop(retIndices) {
        return this.setIndices(this.preset.faceMask, retIndices);
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationSimple.js
var AnimationSimple_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * @category Animation
 */
class AnimationSimple {
    constructor() {
        this.type = AnimationTypeValues.simple;
        this.animFlags = 0; // If 1 indices are led indices, not face indices
        this.duration = 0; // In milliseconds
        this.faceMask = 0;
        this.colorIndex = 0;
        this.count = 0;
        this.fade = 0;
    }
    createInstance(bits, die) {
        return new AnimationInstanceSimple(this, bits, die);
    }
}
AnimationSimple_decorate([
    serializable(1)
], AnimationSimple.prototype, "type", void 0);
AnimationSimple_decorate([
    serializable(1)
], AnimationSimple.prototype, "animFlags", void 0);
AnimationSimple_decorate([
    serializable(2)
], AnimationSimple.prototype, "duration", void 0);
AnimationSimple_decorate([
    serializable(4)
], AnimationSimple.prototype, "faceMask", void 0);
AnimationSimple_decorate([
    serializable(2)
], AnimationSimple.prototype, "colorIndex", void 0);
AnimationSimple_decorate([
    serializable(1)
], AnimationSimple.prototype, "count", void 0);
AnimationSimple_decorate([
    serializable(1)
], AnimationSimple.prototype, "fade", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/Vec3.js
function vec3(x = 0, y = 0, z = 0) {
    return {
        xTimes1000: x * 1000,
        yTimes1000: y * 1000,
        zTimes1000: z * 1000,
    };
}
function sqrMagnitudeTimes1000(v) {
    return ((v.xTimes1000 * v.xTimes1000 +
        v.yTimes1000 * v.yTimes1000 +
        v.zTimes1000 * v.zTimes1000) /
        1000);
}
function magnitudeTimes1000(v) {
    return Math.sqrt(sqrMagnitudeTimes1000(v) * 1000);
}
function normalize(v) {
    const magTimes1000 = magnitudeTimes1000(v);
    v.xTimes1000 = (v.xTimes1000 * 1000) / magTimes1000;
    v.yTimes1000 = (v.yTimes1000 * 1000) / magTimes1000;
    v.zTimes1000 = (v.zTimes1000 * 1000) / magTimes1000;
}
function dotTimes1000(left, right) {
    return ((left.xTimes1000 * right.xTimes1000 +
        left.yTimes1000 * right.yTimes1000 +
        left.zTimes1000 * right.zTimes1000) /
        1000);
}
function cross(left, right) {
    return {
        xTimes1000: (left.yTimes1000 * right.zTimes1000 -
            left.zTimes1000 * right.yTimes1000) /
            1000,
        yTimes1000: (left.zTimes1000 * right.xTimes1000 -
            left.xTimes1000 * right.zTimes1000) /
            1000,
        zTimes1000: (left.xTimes1000 * right.yTimes1000 -
            left.yTimes1000 * right.xTimes1000) /
            1000,
    };
}
function sub(v, right) {
    return {
        xTimes1000: v.xTimes1000 - right.xTimes1000,
        yTimes1000: v.yTimes1000 - right.yTimes1000,
        zTimes1000: v.zTimes1000 - right.zTimes1000,
    };
}
function mul(left, right) {
    return {
        xTimes1000: (left.xTimes1000 * right.xTimes1000) / 1000,
        yTimes1000: (left.yTimes1000 * right.yTimes1000) / 1000,
        zTimes1000: (left.zTimes1000 * right.zTimes1000) / 1000,
    };
}
function mulScalar(v, rightTimes1000) {
    return {
        xTimes1000: (v.xTimes1000 * rightTimes1000) / 1000,
        yTimes1000: (v.yTimes1000 * rightTimes1000) / 1000,
        zTimes1000: (v.zTimes1000 * rightTimes1000) / 1000,
    };
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/faceUtils.js

function getFaceForLEDIndex(dieType, ledIndex) {
    switch (dieType) {
        case "d6pipped":
            //  0   --1--   ----2----   ------3------   ---------4--------  ----------5----------- // Face index
            //  0   0   1   0   1   2   0   1   2   3    0   1   2   3   4   0   1   2   3   4   5 // Led index in face
            //  0,	5,	6,	7,	8,	9,	1,	2,	3,	4,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19, 20,
            if (ledIndex === 0) {
                return 0;
            }
            else if (ledIndex <= 4) {
                return 3;
            }
            else if (ledIndex <= 6) {
                return 1;
            }
            else if (ledIndex <= 9) {
                return 2;
            }
            else if (ledIndex <= 14) {
                return 4;
            }
            else {
                return 5;
            }
        default:
            return ledIndex;
    }
}
function getTopFace(dieType) {
    switch (dieType) {
        case "unknown":
            return 0;
        case "d20":
            return 19;
        case "d12":
            return 11;
        case "d10":
        case "d00":
            return 0;
        case "d8":
            return 7;
        default:
            return 5;
    }
}
function getFaceCount(dieType) {
    switch (dieType) {
        case "unknown":
            return 0;
        case "d20":
            return 20;
        case "d12":
            return 12;
        case "d10":
        case "d00":
            return 10;
        case "d8":
            return 8;
        default:
            return 6;
    }
}
function getLEDCount(dieType) {
    switch (dieType) {
        case "unknown":
            return 0;
        case "d20":
            return 20;
        case "d12":
            return 12;
        case "d10":
        case "d00":
            return 10;
        case "d8":
            return 8;
        case "d6pipped":
            return 21;
        default:
            return 6;
    }
}
function getFaceMaskPd6(faceValue) {
    let start = 0;
    for (let i = 1; i < faceValue; ++i) {
        start += i;
    }
    const ledsMasks = Array(faceValue);
    for (let i = start; i < start + faceValue; ++i) {
        ledsMasks[i - start] = bitIndexToFlag(i);
    }
    return combineFlags(ledsMasks);
}
/**
 * Convert a die face value or a list of face values to a face mask
 * for use with the animation classes.
 * @param faceValueOrFaceList A die face value or  list of face values.
 * @returns A face (bit) mask.
 * @category Face Utils
 */
function getFaceMask(faceValueOrFaceList, dieType) {
    if (typeof faceValueOrFaceList === "number") {
        switch (dieType) {
            case "d4":
                // TODO fix for D4 rolling as D6
                switch (faceValueOrFaceList) {
                    case 1:
                        break;
                    case 2:
                    case 3:
                        ++faceValueOrFaceList;
                        break;
                    default:
                    case 4:
                        faceValueOrFaceList = 6;
                        break;
                }
                break;
            case "d6pipped":
                return getFaceMaskPd6(faceValueOrFaceList);
            case "d10":
            case "unknown":
                ++faceValueOrFaceList;
                break;
            case "d00":
                // TODO fix for D00 rolling as D10
                faceValueOrFaceList = 1 + Math.round(faceValueOrFaceList / 10);
                break;
        }
    }
    if (typeof faceValueOrFaceList === "number") {
        const n = faceValueOrFaceList;
        assert(n > 0 && n <= 32, `getFaceMask: Face value is out of range [1, 32], got ${n} for type ${dieType}`);
        return (1 << (n - 1)) >>> 0;
    }
    else {
        return faceValueOrFaceList.reduce((mask, n) => getFaceMask(n, dieType) | mask, 0);
    }
}
/**
 * Takes a faces mask (a bit mask) and returns the corresponding list of face values.
 * @param facesMask A faces (bits) mask.
 * @returns A list of face values.
 * @category Face Utils
 */
function facesMaskToValues(facesMask) {
    return bitsToIndices(facesMask).map((n) => n + 1);
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/normals.js
const twentySidedNormals = [
    { xTimes1000: -335, yTimes1000: 937, zTimes1000: -92 },
    { xTimes1000: -352, yTimes1000: -930, zTimes1000: -98 },
    { xTimes1000: 716, yTimes1000: 572, zTimes1000: -399 },
    { xTimes1000: -253, yTimes1000: -357, zTimes1000: 898 },
    { xTimes1000: -995, yTimes1000: 8, zTimes1000: 93 },
    { xTimes1000: 804, yTimes1000: -9, zTimes1000: 593 },
    { xTimes1000: -396, yTimes1000: 583, zTimes1000: -708 },
    { xTimes1000: 705, yTimes1000: -582, zTimes1000: -403 },
    { xTimes1000: 407, yTimes1000: 571, zTimes1000: 712 },
    { xTimes1000: 246, yTimes1000: -355, zTimes1000: -901 },
    { xTimes1000: -246, yTimes1000: 355, zTimes1000: 901 },
    { xTimes1000: -407, yTimes1000: -571, zTimes1000: -712 },
    { xTimes1000: -705, yTimes1000: 582, zTimes1000: 403 },
    { xTimes1000: 396, yTimes1000: -583, zTimes1000: 708 },
    { xTimes1000: -804, yTimes1000: 9, zTimes1000: -593 },
    { xTimes1000: 995, yTimes1000: -8, zTimes1000: -93 },
    { xTimes1000: 253, yTimes1000: 357, zTimes1000: -898 },
    { xTimes1000: -716, yTimes1000: -572, zTimes1000: 399 },
    { xTimes1000: 352, yTimes1000: 930, zTimes1000: 98 },
    { xTimes1000: 335, yTimes1000: -937, zTimes1000: 92 },
];
const twelveSidedNormals = [
    { xTimes1000: -446, yTimes1000: 850, zTimes1000: -276 }, // 1
    { xTimes1000: -447, yTimes1000: 525, zTimes1000: 723 }, // 2
    { xTimes1000: -447, yTimes1000: -850, zTimes1000: -276 }, // 3
    { xTimes1000: -1000, yTimes1000: 0, zTimes1000: -0 }, // 4
    { xTimes1000: 447, yTimes1000: 525, zTimes1000: -723 }, // 5
    { xTimes1000: -447, yTimes1000: 0, zTimes1000: -894 }, // 6
    { xTimes1000: 447, yTimes1000: -0, zTimes1000: 894 }, // 7
    { xTimes1000: -447, yTimes1000: -525, zTimes1000: 723 }, // 8
    { xTimes1000: 1000, yTimes1000: -0, zTimes1000: 0 }, // 9
    { xTimes1000: 447, yTimes1000: 850, zTimes1000: 276 }, // 10
    { xTimes1000: 447, yTimes1000: -525, zTimes1000: -723 }, // 11
    { xTimes1000: 446, yTimes1000: -850, zTimes1000: 276 }, // 12
];
const tenSidedNormals = [
    { xTimes1000: -65, yTimes1000: 996, zTimes1000: 55 }, // 00
    { xTimes1000: 165, yTimes1000: -617, zTimes1000: 768 }, // 10
    { xTimes1000: 489, yTimes1000: -8, zTimes1000: -871 }, // 20
    { xTimes1000: -993, yTimes1000: 17, zTimes1000: 111 }, // ...
    { xTimes1000: 650, yTimes1000: 603, zTimes1000: 461 },
    { xTimes1000: -650, yTimes1000: -603, zTimes1000: -461 },
    { xTimes1000: 993, yTimes1000: -17, zTimes1000: -111 },
    { xTimes1000: -489, yTimes1000: 8, zTimes1000: 871 },
    { xTimes1000: -165, yTimes1000: 617, zTimes1000: -768 },
    { xTimes1000: 65, yTimes1000: -996, zTimes1000: -55 },
];
const eightSidedNormals = [
    { xTimes1000: -921, yTimes1000: -198, zTimes1000: -333 }, // 1
    { xTimes1000: 288, yTimes1000: 897, zTimes1000: -333 }, // 2
    { xTimes1000: -0, yTimes1000: 0, zTimes1000: -1000 }, // 3
    { xTimes1000: -633, yTimes1000: 698, zTimes1000: 333 }, // ...
    { xTimes1000: 633, yTimes1000: -698, zTimes1000: -333 },
    { xTimes1000: 0, yTimes1000: -0, zTimes1000: 1000 },
    { xTimes1000: -288, yTimes1000: -897, zTimes1000: 333 },
    { xTimes1000: 921, yTimes1000: 198, zTimes1000: 333 },
];
const sixSidedNormals = [
    { xTimes1000: -1000, yTimes1000: 0, zTimes1000: 0 },
    { xTimes1000: 0, yTimes1000: 1000, zTimes1000: 0 },
    { xTimes1000: 0, yTimes1000: 0, zTimes1000: 1000 },
    { xTimes1000: 0, yTimes1000: 0, zTimes1000: -1000 },
    { xTimes1000: 0, yTimes1000: -1000, zTimes1000: 0 },
    { xTimes1000: 1000, yTimes1000: 0, zTimes1000: 0 },
];
function getBaseNormals(dieType) {
    switch (dieType) {
        case "d20":
            return twentySidedNormals;
        case "d12":
            return twelveSidedNormals;
        case "d10":
        case "d00":
            return tenSidedNormals;
        case "d8":
            return eightSidedNormals;
        default:
            return sixSidedNormals;
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationInstanceNormals.js







const _asinTable = [
    63, 68, 70, 72, 73, 75, 76, 77, 78, 79, 79, 80, 81, 82, 82, 83, 84, 84, 85,
    86, 86, 87, 87, 88, 89, 89, 90, 90, 91, 91, 92, 92, 93, 93, 94, 94, 95, 95,
    95, 96, 96, 97, 97, 98, 98, 98, 99, 99, 100, 100, 100, 101, 101, 102, 102,
    102, 103, 103, 104, 104, 104, 105, 105, 105, 106, 106, 107, 107, 107, 108,
    108, 108, 109, 109, 109, 110, 110, 110, 111, 111, 112, 112, 112, 113, 113,
    113, 114, 114, 114, 115, 115, 115, 116, 116, 116, 117, 117, 117, 118, 118,
    118, 119, 119, 119, 119, 120, 120, 120, 121, 121, 121, 122, 122, 122, 123,
    123, 123, 124, 124, 124, 125, 125, 125, 126, 126, 126, 127, 127, 127, 127,
    128, 128, 128, 129, 129, 129, 130, 130, 130, 131, 131, 131, 132, 132, 132,
    133, 133, 133, 134, 134, 134, 135, 135, 135, 135, 136, 136, 136, 137, 137,
    137, 138, 138, 138, 139, 139, 139, 140, 140, 140, 141, 141, 141, 142, 142,
    142, 143, 143, 144, 144, 144, 145, 145, 145, 146, 146, 146, 147, 147, 147,
    148, 148, 149, 149, 149, 150, 150, 150, 151, 151, 152, 152, 152, 153, 153,
    154, 154, 154, 155, 155, 156, 156, 156, 157, 157, 158, 158, 159, 159, 159,
    160, 160, 161, 161, 162, 162, 163, 163, 164, 164, 165, 165, 166, 167, 167,
    168, 168, 169, 170, 170, 171, 172, 172, 173, 174, 175, 175, 176, 177, 178,
    179, 181, 182, 184, 186, 191,
];
// in: 0 => -1, 255 => +1
// out: 0 => -pi, 255 => pi
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function asin8(x) {
    return _asinTable[x & 0xff]; // 0-255 in, 0-255 out
}
// in: 0 => -1, 255 => +1
// out: 0 => -pi, 255 => pi
function acos8(x) {
    return 64 + _asinTable[x & 0xff]; // 0-255 in, 0-255 out
}
/**
 * @category Animation Instance
 */
class AnimationInstanceNormals extends AnimationInstance {
    constructor() {
        super(...arguments);
        this.normals = [];
        this.faceNormal = vec3();
        this.backVector = vec3();
        this.baseColorParam = 0;
    }
    get preset() {
        return this.animationPreset;
    }
    start(startTime) {
        super.start(startTime);
        const preset = this.preset;
        const faceCount = this.die.faceCount;
        // Grab the die normals
        this.normals = getBaseNormals(this.die.dieType);
        // Grab the orientation normal, based on the current face
        const face = this.die.topFace;
        this.faceNormal = this.normals[face];
        let backFaceOffset = 1;
        let backVectorNormal = this.normals[(face + backFaceOffset) % faceCount];
        while (Math.abs(dotTimes1000(this.faceNormal, backVectorNormal)) > 800 &&
            backFaceOffset < faceCount) {
            backFaceOffset += 1;
            backVectorNormal = Object.assign({}, this.normals[(face + backFaceOffset) % faceCount]);
        }
        // Compute our base vectors, up is aligned with current face, and
        // a back is at 90 degrees from that.
        const cross_ = cross(this.faceNormal, backVectorNormal);
        normalize(cross_);
        this.backVector = cross(cross_, this.faceNormal);
        // For color override, precompute parameter
        switch (preset.mainGradientColorType) {
            case NormalsColorOverrideTypeValues.faceToGradient:
                this.baseColorParam = (this.die.currentFace * 1000) / faceCount;
                break;
            case NormalsColorOverrideTypeValues.faceToRainbowWheel:
                this.baseColorParam = (this.die.currentFace * 256) / faceCount;
                break;
            case NormalsColorOverrideTypeValues.none:
            default:
                this.baseColorParam = 0;
                break;
        }
    }
    updateLEDs(ms, retIndices, retColors32) {
        const preset = this.preset;
        const ledCount = this.die.ledCount;
        const time = ms - this.startTime;
        const fadeTime = (preset.duration * preset.fade) / (255 * 2);
        let intensity = 255;
        if (time <= fadeTime) {
            // Ramp up
            intensity = (time * 255) / fadeTime;
        }
        else if (time >= preset.duration - fadeTime) {
            // Ramp down
            intensity = ((preset.duration - time) * 255) / fadeTime;
        }
        const axisScrollTime = (time * preset.axisScrollSpeedTimes1000) / preset.duration;
        const angleScrollTime = (time * preset.angleScrollSpeedTimes1000) / preset.duration;
        const gradientTime = (time * 1000) / preset.duration;
        // Figure out the color from the gradient
        const gradient = this.bits.getRgbTrack(preset.gradientTrackOffset);
        const axisGradient = this.bits.getRgbTrack(preset.axisGradientTrackOffset);
        const angleGradient = this.bits.getRgbTrack(preset.angleGradientTrackOffset);
        for (let i = 0; i < ledCount; ++i) {
            const face = getFaceForLEDIndex(this.die.dieType, i);
            // Compute color relative to up/down angle (based on the angle to axis)
            // We'll extract the angle from the dot product of the face's normal and the axis
            const dotAxisTimes1000 = dotTimes1000(this.faceNormal, this.normals[face]);
            // remap the [-1000, 1000] range to an 8 bit value usable by acos8
            const dotAxis8 = (dotAxisTimes1000 * 1275 + 1275000) / 10000;
            // Use lookup acos table
            const angleToAxis8 = acos8(dotAxis8);
            // remap 8 bit value to [-1000, 1000] range
            const angleToAxisNormalized = ((angleToAxis8 - 128) * 1000) / 128;
            // Scale / Offset the value so we can use a smaller subset of the gradient
            const axisGradientBaseTime = (angleToAxisNormalized * 1000) / preset.axisScaleTimes1000 +
                preset.axisOffsetTimes1000;
            // Add motion
            const axisGradientTime = axisGradientBaseTime + axisScrollTime;
            // Compute color along axis
            const axisColor = axisGradient.evaluateColor(axisGradientTime, this.bits, this.die);
            // Compute color relative to up/down angle (angle to axis), we'll use the dot product to the back vector
            // Start by getting a properly normalized in-plane direction vector
            const inPlaneNormal = sub(this.normals[face], mulScalar(this.faceNormal, dotAxisTimes1000));
            normalize(inPlaneNormal);
            // Compute dot product and extract angle
            const dotBackTimes1000 = dotTimes1000(this.backVector, inPlaneNormal);
            const dotBack8 = (dotBackTimes1000 * 1275 + 1275000) / 10000;
            let angleToBack8 = acos8(dotBack8);
            // Oops, we need full range so check cross product with axis to swap the sign as needed
            if (dotTimes1000(cross(this.backVector, this.normals[face]), this.faceNormal) < 0) {
                // Negate the angle
                angleToBack8 = 255 - angleToBack8;
            }
            // Remap to proper range
            const angleToBackTimes1000 = ((angleToBack8 - 128) * 1000) / 128;
            const angleGradientNormalized = (angleToBackTimes1000 + 1000) / 2;
            // Angle is animated and wrapped around
            const angleGradientTime = (angleGradientNormalized + angleScrollTime) % 1000;
            // Compute color along angle
            const angleColor = angleGradient.evaluateColor(angleGradientTime, this.bits, this.die);
            // Compute color over time
            let gradientColor = 0;
            switch (preset.mainGradientColorType) {
                case NormalsColorOverrideTypeValues.faceToGradient:
                    {
                        // use the current face (set at start()) + variance
                        const gradientParam = this.baseColorParam +
                            (angleToAxisNormalized * preset.mainGradientColorVar) / 1000;
                        gradientColor = gradient.evaluateColor(gradientParam, this.bits, this.die);
                    }
                    break;
                case NormalsColorOverrideTypeValues.faceToRainbowWheel:
                    {
                        // use the current face (set at start()) + variance
                        const rainbowParam = (this.baseColorParam +
                            (angleToAxisNormalized * preset.mainGradientColorVar * 256) /
                                1000000) %
                            256;
                        gradientColor = rainbowWheel(rainbowParam);
                    }
                    break;
                case NormalsColorOverrideTypeValues.none:
                default:
                    gradientColor = gradient.evaluateColor(gradientTime, this.bits, this.die);
                    break;
            }
            retIndices[i] = i;
            retColors32[i] = modulateColor(mulColors(gradientColor, mulColors(axisColor, angleColor)), intensity);
        }
        return ledCount;
    }
    stop(retIndices) {
        return this.setIndices(AnimConstants.faceMaskAll, retIndices);
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationNormals.js
var AnimationNormals_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * @category Animation
 */
class AnimationNormals {
    constructor() {
        this.type = AnimationTypeValues.normals;
        this.animFlags = 0;
        this.duration = 0; // In milliseconds
        this.gradientTrackOffset = 0; // 0 - 1, over duration of the animation
        this.axisGradientTrackOffset = 0; // 0 = top, 1 = bottom
        this.angleGradientTrackOffset = 0; // 0 = -pi, 1 = pi
        this.axisScaleTimes1000 = 0;
        this.axisOffsetTimes1000 = 0;
        this.axisScrollSpeedTimes1000 = 0; // in cycles, can be negative
        this.angleScrollSpeedTimes1000 = 0; // in cycles, can be negative
        this.fade = 0; // 0 - 255
        this.mainGradientColorType = NormalsColorOverrideTypeValues.none;
        this.mainGradientColorVar = 0; // 0 - 1000
    }
    createInstance(bits, die) {
        return new AnimationInstanceNormals(this, bits, die);
    }
}
AnimationNormals_decorate([
    serializable(1)
], AnimationNormals.prototype, "type", void 0);
AnimationNormals_decorate([
    serializable(1)
], AnimationNormals.prototype, "animFlags", void 0);
AnimationNormals_decorate([
    serializable(2)
], AnimationNormals.prototype, "duration", void 0);
AnimationNormals_decorate([
    serializable(2)
], AnimationNormals.prototype, "gradientTrackOffset", void 0);
AnimationNormals_decorate([
    serializable(2)
], AnimationNormals.prototype, "axisGradientTrackOffset", void 0);
AnimationNormals_decorate([
    serializable(2)
], AnimationNormals.prototype, "angleGradientTrackOffset", void 0);
AnimationNormals_decorate([
    serializable(2, { numberFormat: "signed" })
], AnimationNormals.prototype, "axisScaleTimes1000", void 0);
AnimationNormals_decorate([
    serializable(2, { numberFormat: "signed" })
], AnimationNormals.prototype, "axisOffsetTimes1000", void 0);
AnimationNormals_decorate([
    serializable(2, { numberFormat: "signed" })
], AnimationNormals.prototype, "axisScrollSpeedTimes1000", void 0);
AnimationNormals_decorate([
    serializable(2, { numberFormat: "signed" })
], AnimationNormals.prototype, "angleScrollSpeedTimes1000", void 0);
AnimationNormals_decorate([
    serializable(1)
], AnimationNormals.prototype, "fade", void 0);
AnimationNormals_decorate([
    serializable(1)
], AnimationNormals.prototype, "mainGradientColorType", void 0);
AnimationNormals_decorate([
    serializable(2)
], AnimationNormals.prototype, "mainGradientColorVar", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationInstanceSequence.js



/**
 * @category Animation Instance
 */
class AnimationInstanceSequence extends AnimationInstance {
    constructor() {
        super(...arguments);
        this._lastMillis = -1;
        this._animInstances = [];
    }
    get preset() {
        return this.animationPreset;
    }
    start(startTime) {
        super.start(startTime);
        this._lastMillis = -1;
        const preset = this.preset;
        const offsets = [
            preset.animation0Offset,
            preset.animation1Offset,
            preset.animation2Offset,
            preset.animation3Offset,
        ];
        const delays = [
            preset.animation0Delay,
            preset.animation1Delay,
            preset.animation2Delay,
            preset.animation3Delay,
        ];
        this._animInstances.length = 0;
        for (let i = 0; i < preset.animationCount; i++) {
            const offset = offsets[i];
            const delay = delays[i];
            this._animInstances.push({
                anim: this.bits
                    .getAnimation(offset)
                    .createInstance(this.bits, this.die),
                delay,
                started: false,
            });
        }
    }
    updateLEDs(ms, retIndices, retColors32) {
        const preset = this.preset;
        const lastMs = this._lastMillis - this.startTime;
        const thisMs = ms - this.startTime;
        this._lastMillis = ms;
        let retCount = 0;
        const animIndices = Array(AnimConstants.maxLEDsCount);
        const animColors = Array(AnimConstants.maxLEDsCount);
        for (let i = 0; i < preset.animationCount; i++) {
            const delay = this._animInstances[i].delay;
            if (!this._animInstances[i].started &&
                delay > lastMs &&
                delay <= thisMs) {
                this._animInstances[i].anim.start(ms);
                this._animInstances[i].started = true;
            }
            if (this._animInstances[i].started) {
                animIndices.fill(0);
                animColors.fill(0);
                const count = this._animInstances[i].anim.updateLEDs(ms, animIndices, animColors);
                for (let j = 0; j < count; j++) {
                    const k = retIndices.indexOf(animIndices[j]);
                    if (k >= 0 && k < retCount) {
                        retColors32[k] = combineColors(retColors32[k], animColors[j]);
                    }
                    else {
                        retIndices[retCount] = animIndices[j];
                        retColors32[retCount] = animColors[j];
                        ++retCount;
                    }
                }
            }
        }
        return retCount;
    }
    stop() {
        return 0;
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/AnimationSequence.js
var AnimationSequence_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * @category Animation
 */
class AnimationSequence {
    constructor() {
        this.type = AnimationTypeValues.sequence;
        this.animFlags = 0; // If 1 indices are led indices, not face indices
        this.duration = 0; // In milliseconds
        // TODO: This is a hack to get around the fact that I don't know how to serialize arrays
        this.animation0Offset = 0;
        this.animation0Delay = 0;
        this.animation1Offset = 0;
        this.animation1Delay = 0;
        this.animation2Offset = 0;
        this.animation2Delay = 0;
        this.animation3Offset = 0;
        this.animation3Delay = 0;
        this.animationCount = 0;
    }
    createInstance(bits, die) {
        return new AnimationInstanceSequence(this, bits, die);
    }
}
AnimationSequence_decorate([
    serializable(1)
], AnimationSequence.prototype, "type", void 0);
AnimationSequence_decorate([
    serializable(1)
], AnimationSequence.prototype, "animFlags", void 0);
AnimationSequence_decorate([
    serializable(2)
], AnimationSequence.prototype, "duration", void 0);
AnimationSequence_decorate([
    serializable(2)
], AnimationSequence.prototype, "animation0Offset", void 0);
AnimationSequence_decorate([
    serializable(2)
], AnimationSequence.prototype, "animation0Delay", void 0);
AnimationSequence_decorate([
    serializable(2)
], AnimationSequence.prototype, "animation1Offset", void 0);
AnimationSequence_decorate([
    serializable(2)
], AnimationSequence.prototype, "animation1Delay", void 0);
AnimationSequence_decorate([
    serializable(2)
], AnimationSequence.prototype, "animation2Offset", void 0);
AnimationSequence_decorate([
    serializable(2)
], AnimationSequence.prototype, "animation2Delay", void 0);
AnimationSequence_decorate([
    serializable(2)
], AnimationSequence.prototype, "animation3Offset", void 0);
AnimationSequence_decorate([
    serializable(2)
], AnimationSequence.prototype, "animation3Delay", void 0);
AnimationSequence_decorate([
    serializable(2)
], AnimationSequence.prototype, "animationCount", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/RgbKeyframe.js
var RgbKeyframe_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Stores a single keyframe of an LED animation.
 * The keyframe is made of a time and a color index.
 * @category Animation
 */
class RgbKeyframe {
    constructor() {
        this.timeAndColor = 0; /** The time and color index combined in one value for serialization. */
    }
    /**
     * Gets the color index, from to 0 to 128 excluded.
     */
    get time() {
        // Take the upper 9 bits and multiply by 2 (scale it to 0 -> 1024)
        return ((this.timeAndColor & 0xffff) >> 7) * 2;
    }
    /**
     * Gets the color index, from to 0 to 128 excluded.
     */
    get colorIndex() {
        // Take the lower 7 bits for the index
        return this.timeAndColor & 0b1111111;
    }
    /**
     * Gets the 32 bits color for the color index of this instance.
     * @param bits The animation bits with the color palette.
     * @returns The 32 bits color for the instance color index.
     */
    getColor(bits, die) {
        return bits.getColor32(this.colorIndex, die);
    }
    /**
     * Updates the instance timeAndColor member with the given time and color index.
     * @param time The time in milliseconds, from to 0 to 1024 excluded.
     * @param colorIndex The color index, from to 0 to 128 excluded.
     */
    setTimeAndColorIndex(time, colorIndex) {
        // TODO check colorIndex < 128
        const timeMs = Math.round(Math.max(0, time) * 1000);
        const scaledTime = (timeMs / 2) & 0b111111111;
        this.timeAndColor = (scaledTime << 7) | (colorIndex & 0b1111111);
    }
    /**
     * Compares two RgbKeyframe instances.
     * @param other The RgbKeyframe instance to compare with.
     * @returns Whether the two RgbKeyframe instances have the same data.
     */
    equals(other) {
        return this.timeAndColor === other.timeAndColor;
    }
}
RgbKeyframe_decorate([
    serializable(2)
], RgbKeyframe.prototype, "timeAndColor", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/RgbTrack.js
var RgbTrack_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * Represents of a series of RGB keyframes which together make
 * an animation curve for an RGB color.
 * @category Animation
 */
class RgbTrack {
    constructor() {
        this.keyframesOffset = 0; /** Offset into a global keyframe buffer. */
        this.keyFrameCount = 0; /** Keyframe count. */
        this.ledMask = 0; /** Each bit indicates whether the led is included in the animation track. */
    }
    /**
     * Gets the track duration.
     * @param bits The animation bits with the RGB keyframes data.
     * @returns The track duration.
     */
    getDuration(bits) {
        const kf = bits.getRgbKeyframe(this.keyframesOffset + this.keyFrameCount - 1);
        return kf.time;
    }
    /**
     * Gets the data of the RGB keyframe at the given index.
     * @param bits The animation bits with the RGB keyframes data.
     * @param keyframeIndex The index of the keyframe.
     * @returns The RGB keyframe data.
     */
    getKeyframe(bits, keyframeIndex) {
        assert(keyframeIndex >= 0 && keyframeIndex < this.keyFrameCount, `Invalid key frame index: ${keyframeIndex} (count: ${this.keyFrameCount})`);
        return bits.getRgbKeyframe(this.keyframesOffset + keyframeIndex);
    }
    /**
     * Evaluate an animation track's for a given time, in milliseconds,
     * and fills returns arrays of led indices and colors.
     * The returned colors are the color of the track for the given time.
     * Values outside the track's range are clamped to first or last keyframe
     * value.
     * @param time The time at which to evaluate the track.
     * @param bits The animation bits with the RGB keyframes data and color palette.
     * @param die The virtual die on which the animation is running.
     * @param retIndices Array of LED indices to be updated.
     * @param retColors32 Array of 32 bits colors to be updated.
     * @returns The number of LED indices that have been set in the returned arrays.
     */
    evaluate(time, bits, die, retIndices, retColors32) {
        if (this.keyFrameCount === 0) {
            return 0;
        }
        const color = this.evaluateColor(time, bits, die);
        // Fill the return arrays
        let currentCount = 0;
        for (let i = 0; i < AnimConstants.maxLEDsCount; ++i) {
            if ((this.ledMask & (1 << i)) !== 0) {
                retIndices[currentCount] = i;
                retColors32[currentCount] = color;
                currentCount++;
            }
        }
        return currentCount;
    }
    /**
     * Evaluate an animation track's color for a given time, in milliseconds.
     * Values outside the track's range are clamped to first or last keyframe
     * value.
     * @param time The time at which to evaluate the track.
     * @param bits The animation bits with the RGB keyframes data and color palette.
     * @param die The virtual die on which the animation is running.
     * @returns The modulated color.
     */
    evaluateColor(time, bits, die) {
        if (this.keyFrameCount === 0) {
            return 0;
        }
        // Find the first keyframe
        let nextIndex = 0;
        while (nextIndex < this.keyFrameCount &&
            this.getKeyframe(bits, nextIndex).time < time) {
            nextIndex++;
        }
        let color = 0;
        if (nextIndex === 0) {
            // The first keyframe is already after the requested time, clamp to first value
            color = this.getKeyframe(bits, nextIndex).getColor(bits, die);
        }
        else if (nextIndex === this.keyFrameCount) {
            // The last keyframe is still before the requested time, clamp to the last value
            color = this.getKeyframe(bits, nextIndex - 1).getColor(bits, die);
        }
        else {
            // Grab the prev and next keyframes
            const nextKeyframe = this.getKeyframe(bits, nextIndex);
            const nextKeyframeTime = nextKeyframe.time;
            const nextKeyframeColor = nextKeyframe.getColor(bits, die);
            const prevKeyframe = this.getKeyframe(bits, nextIndex - 1);
            const prevKeyframeTime = prevKeyframe.time;
            const prevKeyframeColor = prevKeyframe.getColor(bits, die);
            // Compute the interpolation parameter
            color = interpolateColors(prevKeyframeColor, prevKeyframeTime, nextKeyframeColor, nextKeyframeTime, time);
        }
        return color;
    }
    /**
     * Extracts the LED indices from the LED bit mask.
     * @param retIndices Array of LED indices to be updated.
     * @returns he number of LED indices that have been set in the returned arrays.
     */
    extractLEDIndices(retIndices) {
        // Fill the return arrays
        let currentCount = 0;
        for (let i = 0; i < AnimConstants.maxLEDsCount; ++i) {
            if ((this.ledMask & (1 << i)) !== 0) {
                retIndices[currentCount] = i;
                currentCount++;
            }
        }
        return currentCount;
    }
    /**
     * Compares two RgbTrack instances.
     * @param other The RgbTrack instance to compare with.
     * @returns Whether the two RgbTrack instances have the same data.
     */
    equals(other) {
        return (this.keyframesOffset === other.keyframesOffset &&
            this.keyFrameCount === other.keyFrameCount &&
            this.ledMask === other.ledMask);
    }
}
RgbTrack_decorate([
    serializable(2)
], RgbTrack.prototype, "keyframesOffset", void 0);
RgbTrack_decorate([
    serializable(1, { padding: 1 })
], RgbTrack.prototype, "keyFrameCount", void 0);
RgbTrack_decorate([
    serializable(4)
], RgbTrack.prototype, "ledMask", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/SimpleKeyframe.js
var SimpleKeyframe_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Stores a single keyframe of an LED animation,
 * The keyframe is made of a time and an intensity.
 * @category Animation
 */
class SimpleKeyframe {
    constructor() {
        this.timeAndIntensity = 0; /** The time and intensity combined in one value for serialization. */
    }
    /**
     * Gets the time in milliseconds, from to 0 to 1024 excluded.
     */
    get time() {
        // Take the upper 9 bits and multiply by 2 (scale it to 0 -> 1024)
        return ((this.timeAndIntensity & 0xffff) >> 7) * 2;
    }
    /**
     * Gets the light intensity, from to 0 to 255 excluded.
     */
    get intensity() {
        // Take the lower 7 bits and multiply by 2 (scale it to 0 -> 255)
        return (this.timeAndIntensity & 0b1111111) * 2;
    }
    /**
     * Updates the instance timeAndIntensity member with the given time
     * and intensity.
     * @param time The time in milliseconds, from to 0 to 1024 excluded.
     * @param intensity The light intensity, from to 0 to 255 excluded.
     */
    setTimeAndIntensity(time, intensity) {
        const timeMs = Math.round(Math.max(0, time) * 1000);
        const scaledTime = (timeMs / 2) & 0b111111111;
        const scaledIntensity = Math.floor(intensity / 2) & 0b1111111;
        this.timeAndIntensity = (scaledTime << 7) | scaledIntensity;
    }
    /**
     * Compares two SimpleKeyframe instances.
     * @param other The SimpleKeyframe instance to compare with.
     * @returns Whether the two SimpleKeyframe instances have the same data.
     */
    equals(other) {
        return this.timeAndIntensity === other.timeAndIntensity;
    }
}
SimpleKeyframe_decorate([
    serializable(2)
], SimpleKeyframe.prototype, "timeAndIntensity", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/Track.js
var Track_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * Represents of a series of RGB keyframes which together make
 * an animation curve for a light intensity.
 * @category Animation
 */
class Track {
    constructor() {
        this.keyframesOffset = 0; /** Offset into a global keyframe buffer. */
        this.keyFrameCount = 0; /** Keyframe count. */
        this.ledMask = 0; /** Each bit indicates whether the led is included in the animation track. */
    }
    /**
     * Gets the track duration.
     * @param bits The animation bits with the keyframes data.
     * @returns The track duration.
     */
    getDuration(bits) {
        const kf = bits.getRgbKeyframe(this.keyframesOffset + this.keyFrameCount - 1);
        return kf.time;
    }
    /**
     * Gets the data of the keyframe at the given index.
     * @param bits The animation bits with the keyframes data.
     * @param keyframeIndex The index of the keyframe.
     * @returns The keyframe data.
     */
    getKeyframe(bits, keyframeIndex) {
        assert(keyframeIndex >= 0 && keyframeIndex < this.keyFrameCount, `Invalid key frame index: ${keyframeIndex} (count: ${this.keyFrameCount})`);
        return bits.getKeyframe(this.keyframesOffset + keyframeIndex);
    }
    /**
     * Evaluates an animation track's for a given time, in milliseconds,
     * and fills returns arrays of led indices and colors.
     * The returned colors are the given color modulated with the light intensity
     * of the track for the given time.
     * Values outside the track's range are clamped to first or last keyframe
     * value.
     * @param bits The animation bits with the keyframes data and color palette.
     * @param color The color for which to modulate the intensity.
     * @param time The time at which to evaluate the track.
     * @param retIndices Array of LED indices to be updated.
     * @param retColors32 Array of 32 bits colors to be updated.
     * @returns The number of LED indices that have been set in the returned arrays.
     */
    evaluate(bits, color, time, ledCount, retIndices, retColors32) {
        if (this.keyFrameCount === 0) {
            return 0;
        }
        const modColor = modulateColor(color, this.evaluateIntensity(bits, time));
        // Fill the return arrays
        let currentCount = 0;
        for (let i = 0; i < ledCount; ++i) {
            if ((this.ledMask & (1 << i)) !== 0) {
                retIndices[currentCount] = i;
                retColors32[currentCount] = modColor;
                currentCount++;
            }
        }
        return currentCount;
    }
    /**
     * Evaluates an animation track's for a given time, in milliseconds.
     * Values outside the track's range are clamped to first or last keyframe
     * value.
     * @param bits The animation bits with the keyframes data and color palette.
     * @param time The time at which to evaluate the track.
     * @returns The modulated color.
     */
    evaluateIntensity(bits, time) {
        // Find the first keyframe
        let nextIndex = 0;
        while (nextIndex < this.keyFrameCount &&
            this.getKeyframe(bits, nextIndex).time < time) {
            nextIndex++;
        }
        if (nextIndex === 0) {
            // The first keyframe is already after the requested time, clamp to first value
            return this.getKeyframe(bits, nextIndex).intensity;
        }
        else if (nextIndex === this.keyFrameCount) {
            // The last keyframe is still before the requested time, clamp to the last value
            return this.getKeyframe(bits, nextIndex - 1).intensity;
        }
        else {
            // Grab the prev and next keyframes
            const nextKeyframe = this.getKeyframe(bits, nextIndex);
            const nextKeyframeTime = nextKeyframe.time;
            const nextKeyframeIntensity = nextKeyframe.intensity;
            const prevKeyframe = this.getKeyframe(bits, nextIndex - 1);
            const prevKeyframeTime = prevKeyframe.time;
            const prevKeyframeIntensity = prevKeyframe.intensity;
            // Compute the interpolation parameter
            return interpolateIntensity(prevKeyframeIntensity, prevKeyframeTime, nextKeyframeIntensity, nextKeyframeTime, time);
        }
    }
    /**
     * Extracts the LED indices from the LED bit mask.
     * @param retIndices Array of LED indices to be updated.
     * @returns The number of LED indices that have been set in the returned arrays.
     */
    extractLEDIndices(retIndices) {
        // Fill the return arrays
        let currentCount = 0;
        for (let i = 0; i < AnimConstants.maxLEDsCount; ++i) {
            if ((this.ledMask & (1 << i)) !== 0) {
                retIndices[currentCount] = i;
                currentCount++;
            }
        }
        return currentCount;
    }
    /**
     * Compares two Track instances.
     * @param other The Track instance to compare with.
     * @returns Whether the two Track instances have the same data.
     */
    equals(other) {
        return (this.keyframesOffset === other.keyframesOffset &&
            this.keyFrameCount === other.keyFrameCount &&
            this.ledMask === other.ledMask);
    }
}
Track_decorate([
    serializable(2)
], Track.prototype, "keyframesOffset", void 0);
Track_decorate([
    serializable(1, { padding: 1 })
], Track.prototype, "keyFrameCount", void 0);
Track_decorate([
    serializable(4)
], Track.prototype, "ledMask", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/VirtualDie.js

class VirtualDie {
    get currentFace() {
        this.tryRoll();
        return this._currentFace;
    }
    constructor(dieType = "d20") {
        this._currentFace = 0;
        this._lastRoll = 0;
        this.dieType = dieType;
        this.ledCount = getLEDCount(dieType);
        this.faceCount = getFaceCount(dieType);
        this.topFace = getTopFace(dieType);
        this.tryRoll();
    }
    tryRoll() {
        const now = Date.now();
        if (now - this._lastRoll > 5000) {
            this._lastRoll = now;
            this._currentFace = Math.floor(Math.random() * this.faceCount);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/animations/index.js
// Animations



















// Animation instances









// Die


;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/DiceUtils.js

const DiceUtils = {
    getLEDCount(dieType) {
        switch (dieType) {
            case "unknown":
                return 0;
            case "d4":
            case "d6":
            case "d6fudge":
                return 6;
            case "d6pipped":
                return 21;
            case "d8":
                return 8;
            case "d10":
            case "d00":
                return 10;
            case "d12":
                return 12;
            case "d20":
                return 20;
            default:
                assertNever(dieType);
        }
    },
    getFaceCount(dieType) {
        switch (dieType) {
            case "unknown":
                return 0;
            case "d4":
                return 4;
            case "d6":
            case "d6fudge":
            case "d6pipped":
                return 6;
            case "d8":
                return 8;
            case "d10":
            case "d00":
                return 10;
            case "d12":
                return 12;
            case "d20":
                return 20;
            default:
                assertNever(dieType);
        }
    },
    getTopFace(dieType) {
        return dieType === "d00" || dieType === "d10"
            ? 0
            : DiceUtils.getFaceCount(dieType);
    },
    // Try to get die type from number of LEDs
    estimateDieType(ledCount) {
        // For now we infer the die type from the number of LEDs, but eventually
        // that value will be part of identification data.
        switch (ledCount) {
            case 4:
                return "d4";
            case 6:
                return "d6";
            case 8:
                return "d8";
            case 10:
                return "d10";
            case 12:
                return "d12";
            case 20:
                return "d20";
            case 21:
                return "d6pipped";
            default:
                return "unknown";
        }
    },
    // TODO fix for D4 rolling as D6 and D00 rolling as D10
    faceFromIndex(faceIndex, dieType) {
        switch (dieType) {
            case "d4":
                if (faceIndex === 2)
                    return 2;
                if (faceIndex === 3)
                    return 3;
                if (faceIndex === 5)
                    return 4;
                return 1;
            case "d10":
                return faceIndex;
            case "d00":
                return faceIndex * 10;
            case "unknown":
                return faceIndex;
            default:
                return faceIndex + 1;
        }
    },
    // TODO fix for D4 rolling as D6 and D00 rolling as D10
    indexFromFace(face, dieType) {
        switch (dieType) {
            case "d4":
                if (face === 2)
                    return 2;
                if (face === 3)
                    return 3;
                if (face === 4)
                    return 5;
                return 0;
            case "d10":
                return face;
            case "d00":
                return Math.floor(face / 10);
            case "unknown":
                return face;
            default:
                return face - 1;
        }
    },
    getDieFaces(dieType) {
        switch (dieType) {
            case "unknown":
                return [];
            case "d4":
                return range(1, 5);
            case "d6":
            case "d6pipped":
            case "d6fudge":
                return range(1, 7);
            case "d8":
                return range(1, 9);
            case "d10":
                return range(0, 10);
            case "d00":
                return range(0, 100, 10);
            case "d12":
                return range(1, 13);
            case "d20":
                return range(1, 21);
            default:
                assertNever(dieType);
        }
    },
    // TODO fix for edit animations taking a face value instead of an index
    mapFaceForAnimation(face, dieType) {
        return 1 + DiceUtils.indexFromFace(face, dieType);
    },
};

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/PixelDieType.js

/**
 * The different types of dice.
 * @enum
 * @category Message
 */
const PixelDieTypeValues = {
    unknown: enumValue(0),
    d4: enumValue(),
    d6: enumValue(),
    d8: enumValue(),
    d10: enumValue(),
    d00: enumValue(),
    d12: enumValue(),
    d20: enumValue(),
    d6pipped: enumValue(),
    d6fudge: enumValue(),
};

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/Profile.js
var Profile_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @category Profile
 */
class Profile {
    constructor() {
        this.rulesOffset = 0;
        this.rulesCount = 0;
    }
}
Profile_decorate([
    serializable(2)
], Profile.prototype, "rulesOffset", void 0);
Profile_decorate([
    serializable(2)
], Profile.prototype, "rulesCount", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/Rule.js
var Rule_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @category Profile
 */
class Rule {
    constructor() {
        this.condition = 0;
        this.actionOffset = 0;
        this.actionCount = 0;
        this.actionCountPadding = 0;
    }
}
Rule_decorate([
    serializable(2)
], Rule.prototype, "condition", void 0);
Rule_decorate([
    serializable(2)
], Rule.prototype, "actionOffset", void 0);
Rule_decorate([
    serializable(2)
], Rule.prototype, "actionCount", void 0);
Rule_decorate([
    serializable(2)
], Rule.prototype, "actionCountPadding", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ActionType.js

/**
 * Defines the supported types of actions.
 * @category Profile Action
 * @enum
 */
const ActionTypeValues = {
    none: enumValue(0),
    playAnimation: enumValue(),
    playAudioClip: enumValue(),
    makeWebRequest: enumValue(),
    speakText: enumValue(),
};

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ActionPlayAnimation.js
var ActionPlayAnimation_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Action to play an animation.
 * @category Profile Action
 */
class ActionPlayAnimation {
    constructor() {
        this.type = ActionTypeValues.playAnimation;
        this.animIndex = 0;
        this.faceIndex = 0;
        this.loopCount = 0;
    }
}
ActionPlayAnimation_decorate([
    serializable(1)
], ActionPlayAnimation.prototype, "type", void 0);
ActionPlayAnimation_decorate([
    serializable(1)
], ActionPlayAnimation.prototype, "animIndex", void 0);
ActionPlayAnimation_decorate([
    serializable(1, { numberFormat: "signed" })
], ActionPlayAnimation.prototype, "faceIndex", void 0);
ActionPlayAnimation_decorate([
    serializable(1)
], ActionPlayAnimation.prototype, "loopCount", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ActionPlayAudioClip.js
var ActionPlayAudioClip_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Action to play a sound on the connected device.
 * @category Profile Action
 */
class ActionPlayAudioClip {
    constructor() {
        this.type = ActionTypeValues.playAudioClip;
        this._unused = 0;
        this.actionId = 0;
    }
}
ActionPlayAudioClip_decorate([
    serializable(1)
], ActionPlayAudioClip.prototype, "type", void 0);
ActionPlayAudioClip_decorate([
    serializable(1)
], ActionPlayAudioClip.prototype, "_unused", void 0);
ActionPlayAudioClip_decorate([
    serializable(2)
], ActionPlayAudioClip.prototype, "actionId", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ActionMakeWebRequest.js
var ActionMakeWebRequest_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Action to play a sound on the connected device.
 * @category Profile Action
 */
class ActionMakeWebRequest {
    constructor() {
        this.type = ActionTypeValues.makeWebRequest;
        this._unused = 0;
        this.actionId = 0;
    }
}
ActionMakeWebRequest_decorate([
    serializable(1)
], ActionMakeWebRequest.prototype, "type", void 0);
ActionMakeWebRequest_decorate([
    serializable(1)
], ActionMakeWebRequest.prototype, "_unused", void 0);
ActionMakeWebRequest_decorate([
    serializable(2)
], ActionMakeWebRequest.prototype, "actionId", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ActionSpeakText.js
var ActionSpeakText_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Action to play a sound on the connected device.
 * @category Profile Action
 */
class ActionSpeakText {
    constructor() {
        this.type = ActionTypeValues.speakText;
        this._unused = 0;
        this.actionId = 0;
    }
}
ActionSpeakText_decorate([
    serializable(1)
], ActionSpeakText.prototype, "type", void 0);
ActionSpeakText_decorate([
    serializable(1)
], ActionSpeakText.prototype, "_unused", void 0);
ActionSpeakText_decorate([
    serializable(2)
], ActionSpeakText.prototype, "actionId", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ConditionType.js

/**
 * @category Profile Condition
 * @enum
 */
const ConditionTypeValues = {
    none: enumValue(0),
    helloGoodbye: enumValue(),
    handling: enumValue(),
    rolling: enumValue(),
    faceCompare: enumValue(),
    crooked: enumValue(),
    connection: enumValue(),
    battery: enumValue(),
    idle: enumValue(),
    rolled: enumValue(),
};

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ConditionBatteryState.js
var ConditionBatteryState_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Indicates which battery event the condition should trigger on.
 * @category Profile Condition
 * @enum
 */
const BatteryStateFlagsValues = {
    ok: enumFlag(0),
    low: enumFlag(),
    charging: enumFlag(),
    done: enumFlag(),
    badCharging: enumFlag(),
    error: enumFlag(),
};
/**
 * Condition that triggers on battery state events.
 * @category Profile Condition
 */
class ConditionBatteryState {
    constructor() {
        this.type = ConditionTypeValues.battery;
        this.flags = 0;
        this.repeatPeriodMs = 0;
    }
}
ConditionBatteryState_decorate([
    serializable(1)
], ConditionBatteryState.prototype, "type", void 0);
ConditionBatteryState_decorate([
    serializable(1)
], ConditionBatteryState.prototype, "flags", void 0);
ConditionBatteryState_decorate([
    serializable(2)
], ConditionBatteryState.prototype, "repeatPeriodMs", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ConditionConnectionState.js
var ConditionConnectionState_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Indicates when the condition should trigger connected, disconnected, or both.
 * @category Profile Condition
 * @enum
 */
const ConnectionStateFlagsValues = {
    connected: enumFlag(0),
    disconnected: enumFlag(),
};
/**
 * Condition that triggers on connection events.
 * @category Profile Condition
 */
class ConditionConnectionState {
    constructor() {
        this.type = ConditionTypeValues.connection;
        this.flags = 0;
    }
}
ConditionConnectionState_decorate([
    serializable(1)
], ConditionConnectionState.prototype, "type", void 0);
ConditionConnectionState_decorate([
    serializable(1, { padding: 2 })
], ConditionConnectionState.prototype, "flags", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ConditionFaceCompare.js
var ConditionFaceCompare_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Flags used to indicate how we treat the face,
 * whether we want to trigger if the  value is greater than the parameter,
 * less, or equal, or any combination.
 * @category Profile Condition
 * @enum
 */
const FaceCompareFlagsValues = {
    less: enumFlag(0),
    equal: enumFlag(),
    greater: enumFlag(),
};
/**
 * Condition that triggers when the Pixel has landed on a face.
 * @category Profile Condition
 */
class ConditionFaceCompare {
    constructor() {
        this.type = ConditionTypeValues.faceCompare;
        this.faceIndex = 0;
        this.flags = 0;
    }
}
ConditionFaceCompare_decorate([
    serializable(1)
], ConditionFaceCompare.prototype, "type", void 0);
ConditionFaceCompare_decorate([
    serializable(1)
], ConditionFaceCompare.prototype, "faceIndex", void 0);
ConditionFaceCompare_decorate([
    serializable(1, { padding: 1 })
], ConditionFaceCompare.prototype, "flags", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ConditionHelloGoodbye.js
var ConditionHelloGoodbye_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Indicates whether the condition should trigger on Hello,
 * Goodbye or both.
 * @category Profile Condition
 * @enum
 */
const HelloGoodbyeFlagsValues = {
    hello: enumFlag(0),
    goodbye: enumFlag(),
};
/**
 * Condition that triggers on a life state event
 * @category Profile Condition
 */
class ConditionHelloGoodbye {
    constructor() {
        this.type = ConditionTypeValues.helloGoodbye;
        this.flags = 0;
    }
}
ConditionHelloGoodbye_decorate([
    serializable(1)
], ConditionHelloGoodbye.prototype, "type", void 0);
ConditionHelloGoodbye_decorate([
    serializable(1, { padding: 2 })
], ConditionHelloGoodbye.prototype, "flags", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ConditionCrooked.js
var ConditionCrooked_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Condition that triggers when the Pixel has landed by is crooked.
 * @category Profile Condition
 */
class ConditionCrooked {
    constructor() {
        this.type = ConditionTypeValues.crooked;
    }
}
ConditionCrooked_decorate([
    serializable(1, { padding: 3 })
], ConditionCrooked.prototype, "type", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ConditionHandling.js
var ConditionHandling_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Condition that triggers when the Pixel is being handled.
 * @category Profile Condition
 */
class ConditionHandling {
    constructor() {
        this.type = ConditionTypeValues.handling;
    }
}
ConditionHandling_decorate([
    serializable(1, { padding: 3 })
], ConditionHandling.prototype, "type", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ConditionIdle.js
var ConditionIdle_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Condition that triggers when the Pixel is being handled.
 * @category Profile Condition
 */
class ConditionIdle {
    constructor() {
        this.type = ConditionTypeValues.idle;
        this.repeatPeriodMs = 0;
    }
}
ConditionIdle_decorate([
    serializable(1, { padding: 1 })
], ConditionIdle.prototype, "type", void 0);
ConditionIdle_decorate([
    serializable(2)
], ConditionIdle.prototype, "repeatPeriodMs", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ConditionRolling.js
var ConditionRolling_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Condition that triggers when the Pixel is being rolled.
 * @category Profile Condition
 */
class ConditionRolling {
    constructor() {
        this.type = ConditionTypeValues.rolling;
        this.repeatPeriodMs = 0; // 0 means do NOT repeat
    }
}
ConditionRolling_decorate([
    serializable(1, { padding: 1 })
], ConditionRolling.prototype, "type", void 0);
ConditionRolling_decorate([
    serializable(2)
], ConditionRolling.prototype, "repeatPeriodMs", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/ConditionRolled.js
var ConditionRolled_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Condition that triggers when the Pixel has landed on a face.
 * @category Profile Condition
 */
class ConditionRolled {
    constructor() {
        this.type = ConditionTypeValues.rolled;
        this.faceMask = 0;
    }
}
ConditionRolled_decorate([
    serializable(1, { padding: 3 })
], ConditionRolled.prototype, "type", void 0);
ConditionRolled_decorate([
    serializable(4)
], ConditionRolled.prototype, "faceMask", void 0);

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/getDisplayName.js

/**
 * @category Profile
 */
function getAnimationTypeDisplayName(animType) {
    switch (animType) {
        case "none":
            return;
        case "simple":
            return { name: "Simple Flashes", order: 0 };
        case "rainbow":
            return { name: "Colorful Rainbow", order: 1 };
        case "keyframed":
            return { name: "Colored Design", order: 3 };
        case "gradientPattern":
            return { name: "Mixed Design", order: 4 };
        case "gradient":
            return { name: "Simple Gradient", order: 2 };
        case "noise":
            return { name: "Noise", order: 5 };
        case "normals":
            return { name: "Normals", order: 6 };
        case "sequence":
            return { name: "Sequence", order: 7 };
        case "cycle":
        case "name":
            throw new Error(`getAnimationTypeDisplayName: unsupported animation type: ${animType}`);
        default:
            assertNever(animType, `Unknown animation type: ${animType}`);
    }
}
/**
 * @category Profile
 */
function getActionTypeDisplayName(actionType) {
    switch (actionType) {
        case "none":
            return;
        case "playAnimation":
            return { name: "Trigger Pattern", order: 0 };
        case "playAudioClip":
            return { name: "Play Audio Clip", order: 1 };
        case "makeWebRequest":
            return { name: "Make Web Request", order: 2 };
        case "speakText":
            return { name: "Speak Text", order: 3 };
        default:
            assertNever(actionType, `Unknown action type: ${actionType}`);
    }
}
/**
 * @category Profile
 */
function getConditionTypeDisplayName(conditionType) {
    switch (conditionType) {
        case "none":
            return;
        case "helloGoodbye":
            return { name: "Pixel wakes up / sleeps", order: 0 };
        case "handling":
            return { name: "Pixel is picked up", order: 1 };
        case "rolling":
            return { name: "Pixel is rolling", order: 2 };
        case "faceCompare":
            return { name: "Pixel roll is...", order: 3 };
        case "crooked":
            return { name: "Pixel is crooked", order: 4 };
        case "connection":
            return { name: "Bluetooth Event...", order: 5 };
        case "battery":
            return { name: "Battery Event...", order: 6 };
        case "idle":
            return { name: "Pixel is idle for...", order: 7 };
        case "rolled":
            return { name: "Pixel roll is one of...", order: 8 };
        default:
            assertNever(conditionType, `Unknown condition type: ${conditionType}`);
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/profiles/index.js
// Profiles























;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/DataSet.js




/**
 * Data Set is the set of a profile, conditions, rules, animations and colors
 * stored in the memory of a Pixels die. This data gets transferred straight to the dice.
 * For that purpose, the data is essentially 'exploded' into flat buffers. i.e. all
 * the key-frames of all the animations are stored in a single key-frame array, and
 * individual tracks reference 'their' key-frames using an offset and count into that array.
 * @category Profile
 */
class DataSet {
    get animationBits() {
        return this._animationBits;
    }
    get animations() {
        return this._animationBits.animations;
    }
    get conditions() {
        return this._conditions;
    }
    get actions() {
        return this._actions;
    }
    get rules() {
        return this._rules;
    }
    get profile() {
        return this._profile;
    }
    set profile(value) {
        this._profile = value;
    }
    constructor(bits) {
        this._conditions = [];
        this._actions = [];
        this._rules = [];
        this._profile = new Profile();
        this._animationBits = bits !== null && bits !== void 0 ? bits : new AnimationBits();
    }
    computeDataSetByteSize() {
        // TODO what if some array of size 0?
        return (this._animationBits.computeDataSize() +
            align32bits(this.animations.length * 2) + // offsets are 16 bits
            byteSizeOf(this.animations) + // animations data
            align32bits(this._conditions.length * 2) + // offsets are 16 bits
            byteSizeOf(this._conditions) + // conditions data
            align32bits(this._actions.length * 2) + // offsets are 16 bits
            byteSizeOf(this._actions) + // actions data
            byteSizeOf(this._rules) +
            (this._profile ? byteSizeOf(this._profile) : 0));
    }
    toSingleAnimationByteArray() {
        assert(this.animations.length === 1, "Need exactly one animation");
        assert(this._animationBits.palette.length < 128, "Palette has more than 127 colors: " + this._animationBits.palette.length);
        // Compute size of animation bits + animation
        const size = this._animationBits.computeDataSize() + byteSizeOf(this.animations[0]);
        // Copy animation bits
        const [dataView, byteOffset] = this._animationBits.serialize(new DataView(new ArrayBuffer(size)));
        // Copy animation
        serialize(this.animations[0], { dataView, byteOffset });
        return new Uint8Array(dataView.buffer);
    }
    toAnimationsByteArray() {
        assert(this.animations.length > 0, "No animations");
        assert(this._animationBits.palette.length < 128, "Palette has more than 127 colors: " + this._animationBits.palette.length);
        // Compute size of animation bits + animations
        const size = this._animationBits.computeDataSize() +
            align32bits(this.animations.length * 2) + // offsets are 16 bits
            byteSizeOf(this.animations); // animations data
        // Copy animation bits
        let [dataView, byteOffset] = this._animationBits.serialize(new DataView(new ArrayBuffer(size)));
        // Copy animations, offsets first
        let animOffset = 0;
        this.animations.forEach((anim, i) => {
            dataView.setUint16(byteOffset + 2 * i, animOffset, true);
            animOffset += byteSizeOf(anim);
        });
        // Round up to nearest multiple of 4
        byteOffset += align32bits(this.animations.length * 2);
        // Then animations
        [dataView, byteOffset] = serialize(this.animations, {
            dataView,
            byteOffset,
        });
        return new Uint8Array(dataView.buffer);
    }
    toByteArray() {
        const size = this.computeDataSetByteSize();
        const [dataView] = this.serialize(new DataView(new ArrayBuffer(size)));
        return new Uint8Array(dataView.buffer);
    }
    serialize(dataView, byteOffset = 0) {
        assert(this._animationBits.palette.length < 128, "Palette has more than 127 colors: " + this._animationBits.palette.length);
        // Copy animation bits
        [dataView, byteOffset] = this._animationBits.serialize(dataView);
        // Copy animations, offsets first
        let animOffset = 0;
        // TODO what if there are 0 animation?
        this.animations.forEach((anim, i) => {
            // TODO first index is always 0!
            dataView.setUint16(byteOffset + 2 * i, animOffset, true);
            animOffset += byteSizeOf(anim);
        });
        // Round up to nearest multiple of 4
        byteOffset += align32bits(this.animations.length * 2);
        // Then animations
        [dataView, byteOffset] = serialize(this.animations, {
            dataView,
            byteOffset,
        });
        // Copy conditions, offsets first
        let condOffset = 0;
        this._conditions.forEach((cond, i) => {
            dataView.setUint16(byteOffset + 2 * i, condOffset, true);
            condOffset += byteSizeOf(cond);
        });
        // TODO Alignment is not needed (and no alignment is done
        // in toSingleAnimationByteArray())
        // Round up to nearest multiple of 4
        byteOffset += align32bits(this._conditions.length * 2);
        // Then conditions
        [dataView, byteOffset] = serialize(this._conditions, {
            dataView,
            byteOffset,
        });
        // Copy actions, offsets first
        let actOffset = 0;
        this._actions.forEach((act, i) => {
            dataView.setUint16(byteOffset + 2 * i, actOffset, true);
            actOffset += byteSizeOf(act);
        });
        // Round up to nearest multiple of 4
        byteOffset += align32bits(this._actions.length * 2);
        // Then actions
        [dataView, byteOffset] = serialize(this._actions, { dataView, byteOffset });
        // Rules
        [dataView, byteOffset] = serialize(this._rules, { dataView, byteOffset });
        // Profile
        if (this._profile) {
            // TODO what if no profile?
            [dataView, byteOffset] = serialize(this._profile, {
                dataView,
                byteOffset,
            });
        }
        return [dataView, byteOffset];
    }
    static computeHash(bytes) {
        return bernsteinHash(bytes);
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-animation/dist/esm/index.js









;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-connect/dist/esm/Messages.js
var Messages_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * Lists all the Pixel dice message types.
 * The value is used for the first byte of data in a Pixel message to identify it's type.
 * These message identifiers have to match up with the ones on the firmware.
 * @enum
 * @category Message
 */
const MessageTypeValues = {
    none: enumValue(0),
    whoAreYou: enumValue(),
    iAmADie: enumValue(),
    rollState: enumValue(),
    telemetry: enumValue(),
    bulkSetup: enumValue(),
    bulkSetupAck: enumValue(),
    bulkData: enumValue(),
    bulkDataAck: enumValue(),
    transferAnimationSet: enumValue(),
    transferAnimationSetAck: enumValue(),
    transferAnimationSetFinished: enumValue(),
    transferSettings: enumValue(),
    transferSettingsAck: enumValue(),
    transferSettingsFinished: enumValue(),
    transferTestAnimationSet: enumValue(),
    transferTestAnimationSetAck: enumValue(),
    transferTestAnimationSetFinished: enumValue(),
    debugLog: enumValue(),
    playAnimation: enumValue(),
    playAnimationEvent: enumValue(),
    stopAnimation: enumValue(),
    remoteAction: enumValue(),
    requestRollState: enumValue(),
    requestAnimationSet: enumValue(),
    requestSettings: enumValue(),
    requestTelemetry: enumValue(),
    programDefaultAnimationSet: enumValue(),
    programDefaultAnimationSetFinished: enumValue(),
    blink: enumValue(),
    blinkAck: enumValue(),
    requestDefaultAnimationSetColor: enumValue(),
    defaultAnimationSetColor: enumValue(),
    requestBatteryLevel: enumValue(),
    batteryLevel: enumValue(),
    requestRssi: enumValue(),
    rssi: enumValue(),
    calibrate: enumValue(),
    calibrateFace: enumValue(),
    notifyUser: enumValue(),
    notifyUserAck: enumValue(),
    testHardware: enumValue(),
    storeValue: enumValue(),
    storeValueAck: enumValue(),
    setTopLevelState: enumValue(),
    programDefaultParameters: enumValue(),
    programDefaultParametersFinished: enumValue(),
    setDesignAndColor: enumValue(),
    setDesignAndColorAck: enumValue(),
    setCurrentBehavior: enumValue(),
    setCurrentBehaviorAck: enumValue(),
    setName: enumValue(),
    setNameAck: enumValue(),
    powerOperation: enumValue(),
    exitValidation: enumValue(),
    transferInstantAnimationSet: enumValue(),
    transferInstantAnimationSetAck: enumValue(),
    transferInstantAnimationSetFinished: enumValue(),
    playInstantAnimation: enumValue(),
    stopAllAnimations: enumValue(),
    requestTemperature: enumValue(),
    temperature: enumValue(),
    setBatteryControllerMode: enumValue(),
    _unused: enumValue(),
    discharge: enumValue(),
    blinkId: enumValue(),
    blinkIdAck: enumValue(),
    transferTest: enumValue(),
    transferTestAck: enumValue(),
    transferTestFinished: enumValue(),
    clearSettings: enumValue(),
    clearSettingsAck: enumValue(),
    // Testing
    testBulkSend: enumValue(),
    testBulkReceive: enumValue(),
    setAllLEDsToColor: enumValue(),
    attractMode: enumValue(),
    printNormals: enumValue(),
    printA2DReadings: enumValue(),
    lightUpFace: enumValue(),
    setLEDToColor: enumValue(),
    debugAnimationController: enumValue(),
};
// Lookup table from message type value to message name
const _messageNamesLookup = [];
function _getMessageNameFromValue(typeValue) {
    if (!_messageNamesLookup.length) {
        const lookup = _messageNamesLookup;
        for (const [key, value] of Object.entries(MessageTypeValues)) {
            lookup[value] = key;
        }
    }
    return _messageNamesLookup[typeValue];
}
// Lookup table from MessageClass to MessageType
const _reverseMsgClassesLookup = new Map();
function _getMessageTypeValue(msgClass) {
    var _a;
    if (!_reverseMsgClassesLookup) {
        const lookup = _reverseMsgClassesLookup;
        for (const ctor of _getMessageClasses()) {
            lookup.set(ctor, new ctor().type);
        }
    }
    return (_a = _reverseMsgClassesLookup.get(msgClass)) !== null && _a !== void 0 ? _a : MessageTypeValues.none;
}
// Lookup table from message type value to MessageClass
const _messageClassesLookup = new Map();
function _getMessageClass(msgTypeValue) {
    if (!_messageClassesLookup.size) {
        const lookup = _messageClassesLookup;
        for (const ctor of _getMessageClasses()) {
            lookup.set(new ctor().type, ctor);
        }
    }
    return _messageClassesLookup.get(msgTypeValue);
}
// Get message type value from message type
function _checkGetMessageTypeValue(msgType) {
    const typeValue = MessageTypeValues[msgType];
    assert(typeValue, `No Pixel message type value for ${msgType}`);
    return typeValue;
}
/**
 * Gets the type of the given message or message type value.
 * @param msgOrTypeOrClass A message or a message type value.
 * @returns The message type.
 * @category Message
 */
function getMessageTypeValue(msgOrTypeOrClass) {
    return typeof msgOrTypeOrClass === "function"
        ? _getMessageTypeValue(msgOrTypeOrClass)
        : typeof msgOrTypeOrClass === "string"
            ? _checkGetMessageTypeValue(msgOrTypeOrClass)
            : msgOrTypeOrClass.type;
}
/**
 * Get the message name (as listed in {@link MessageTypeValues}).
 * @param msgOrTypeOrTypeValue A message or a message type value
 *                             or the numerical value of a message type.
 * @returns The message name.
 * @category Message
 */
function getMessageType(msgOrTypeOrTypeValue) {
    if (typeof msgOrTypeOrTypeValue === "string") {
        return msgOrTypeOrTypeValue;
    }
    else {
        const typeValue = typeof msgOrTypeOrTypeValue === "number"
            ? msgOrTypeOrTypeValue
            : msgOrTypeOrTypeValue.type;
        const type = _getMessageNameFromValue(typeValue);
        if (type) {
            return type;
        }
        throw Error(`getMessageName: ${typeValue} is not a value in MessageTypeValues`);
    }
}
/**
 * Creates a message object for the given message type.
 * @param type Type of message.
 * @returns A PixelMessage object with the given message type.
 * @category Message
 */
function instantiateMessage(type) {
    const typeValue = _checkGetMessageTypeValue(type);
    const ctor = _getMessageClass(typeValue);
    if (ctor) {
        return new ctor();
    }
    else {
        return new GenericPixelMessage(typeValue);
    }
}
/**
 * Serialize the given Pixel message.
 * @param msgOrTypeOrTypeValue A message or a message type value
 *                             or the numerical value of a message type.
 * @returns The serialized data.
 * @category Message
 */
function serializeMessage(msgOrTypeOrTypeValue) {
    if (typeof msgOrTypeOrTypeValue === "object") {
        const msg = msgOrTypeOrTypeValue;
        const [dataView] = serialize(msg);
        assert(dataView.byteLength > 0, "Got empty buffer from deserialization");
        assert(dataView.getUint8(0) === getMessageTypeValue(msg), `Unexpected message type, got ${dataView.getUint8(0)} ` +
            `instead of ${getMessageTypeValue(msg)}`);
        return dataView.buffer;
    }
    else {
        const typeValue = typeof msgOrTypeOrTypeValue === "number"
            ? msgOrTypeOrTypeValue
            : MessageTypeValues[msgOrTypeOrTypeValue];
        assert(typeValue, `No Pixel message value for ${msgOrTypeOrTypeValue}`);
        return Uint8Array.of(typeValue);
    }
}
/**
 * Attempts to deserialize the data of the given buffer into a Pixel message.
 * @param dataView The data to deserialize the message from.
 * @returns The deserialized message or just its type value (for messages with no class).
 * @category Message
 */
function deserializeMessage(dataView) {
    if (!dataView.byteLength) {
        throw new SerializationError("Can't deserialize an empty buffer");
    }
    const msgTypeValue = dataView.getUint8(0);
    if (dataView.byteLength === 1) {
        return getMessageType(msgTypeValue);
    }
    else {
        const msg = instantiateMessage(getMessageType(msgTypeValue));
        const bytesRead = deserialize(msg, dataView);
        if (bytesRead !== dataView.byteLength) {
            console.warn(`The last ${dataView.byteLength - bytesRead} bytes were not read while deserializing message of type ${msg.type}`);
        }
        assert(msg.type === msgTypeValue, `Incorrect message type after deserializing ${msg.type} but expecting ${msgTypeValue}`);
        return msg;
    }
}
/**
 * Generic class representing any message without any data.
 * @category Message
 */
class GenericPixelMessage {
    constructor(type) {
        this.type = type;
    }
}
Messages_decorate([
    serializable(1)
], GenericPixelMessage.prototype, "type", void 0);
/**
 * The possible chip models used for Pixels dice.
 * @enum
 * @category Message
 */
const PixelChipModelValues = {
    unknown: enumValue(0),
    nRF52810: enumValue(),
};
/**
 * Available Pixels dice colorways.
 * @enum
 * @category Message
 */
const PixelColorwayValues = {
    unknown: enumValue(0),
    onyxBlack: enumValue(),
    hematiteGrey: enumValue(),
    midnightGalaxy: enumValue(),
    auroraSky: enumValue(),
    clear: enumValue(),
    custom: 0xff,
};
class VersionInfoChunk {
    constructor() {
        /** Size in bytes of the version info data chunk. */
        this.chunkSize = byteSizeOf(this);
        this.firmwareVersion = 0;
        this.buildTimestamp = 0;
        this.settingsVersion = 0;
        this.compatStandardApiVersion = 0;
        this.compatExtendedApiVersion = 0;
        this.compatManagementApiVersion = 0;
    }
}
Messages_decorate([
    serializable(1)
], VersionInfoChunk.prototype, "chunkSize", void 0);
Messages_decorate([
    serializable(2)
], VersionInfoChunk.prototype, "firmwareVersion", void 0);
Messages_decorate([
    serializable(4)
], VersionInfoChunk.prototype, "buildTimestamp", void 0);
Messages_decorate([
    serializable(2)
], VersionInfoChunk.prototype, "settingsVersion", void 0);
Messages_decorate([
    serializable(2)
], VersionInfoChunk.prototype, "compatStandardApiVersion", void 0);
Messages_decorate([
    serializable(2)
], VersionInfoChunk.prototype, "compatExtendedApiVersion", void 0);
Messages_decorate([
    serializable(2)
], VersionInfoChunk.prototype, "compatManagementApiVersion", void 0);
class DieInfoChunk {
    constructor() {
        /** Size in bytes of the die info data chunk. */
        this.chunkSize = byteSizeOf(this);
        /** The Pixel id. */
        this.pixelId = 0;
        this.chipModel = PixelChipModelValues.unknown;
        this.dieType = PixelDieTypeValues.unknown;
        /** Number of LEDs. */
        this.ledCount = 0;
        /** Die look. */
        this.colorway = PixelColorwayValues.unknown;
    }
}
Messages_decorate([
    serializable(1)
], DieInfoChunk.prototype, "chunkSize", void 0);
Messages_decorate([
    serializable(4)
], DieInfoChunk.prototype, "pixelId", void 0);
Messages_decorate([
    serializable(1)
], DieInfoChunk.prototype, "chipModel", void 0);
Messages_decorate([
    serializable(1)
], DieInfoChunk.prototype, "dieType", void 0);
Messages_decorate([
    serializable(1)
], DieInfoChunk.prototype, "ledCount", void 0);
Messages_decorate([
    serializable(1)
], DieInfoChunk.prototype, "colorway", void 0);
class CustomDesignAndColorNameChunk {
    constructor() {
        this.chunkSize = 0;
        this.name = "";
    }
}
Messages_decorate([
    serializable(1)
], CustomDesignAndColorNameChunk.prototype, "chunkSize", void 0);
Messages_decorate([
    serializable(0, { terminator: true })
], CustomDesignAndColorNameChunk.prototype, "name", void 0);
class DieNameChunk {
    constructor() {
        this.chunkSize = 0;
        this.name = "";
    }
}
Messages_decorate([
    serializable(1)
], DieNameChunk.prototype, "chunkSize", void 0);
Messages_decorate([
    serializable(0, { terminator: true })
], DieNameChunk.prototype, "name", void 0);
class SettingsInfoChunk {
    constructor() {
        /** Size in bytes of the settings info data chunk. */
        this.chunkSize = byteSizeOf(this);
        /** Hash of the uploaded profile. */
        this.profileDataHash = 0;
        /** Amount of available flash to store data. */
        this.availableFlash = 0;
        /** Total amount of flash that can be used to store data */
        this.totalUsableFlash = 0;
    }
}
Messages_decorate([
    serializable(1)
], SettingsInfoChunk.prototype, "chunkSize", void 0);
Messages_decorate([
    serializable(4)
], SettingsInfoChunk.prototype, "profileDataHash", void 0);
Messages_decorate([
    serializable(4)
], SettingsInfoChunk.prototype, "availableFlash", void 0);
Messages_decorate([
    serializable(4)
], SettingsInfoChunk.prototype, "totalUsableFlash", void 0);
class StatusInfoChunk {
    constructor() {
        /** Size in bytes of the battery info data chunk. */
        this.chunkSize = byteSizeOf(this);
        // Battery
        /** The battery charge level in percent. */
        this.batteryLevelPercent = 0;
        /** The charging state of the battery. */
        this.batteryState = PixelBatteryStateValues.ok;
        // Rolls
        /** Current roll state. */
        this.rollState = PixelRollStateValues.unknown;
        /** Face index, starts at 0. */
        this.currentFaceIndex = 0;
    }
}
Messages_decorate([
    serializable(1)
], StatusInfoChunk.prototype, "chunkSize", void 0);
Messages_decorate([
    serializable(1)
], StatusInfoChunk.prototype, "batteryLevelPercent", void 0);
Messages_decorate([
    serializable(1)
], StatusInfoChunk.prototype, "batteryState", void 0);
Messages_decorate([
    serializable(1)
], StatusInfoChunk.prototype, "rollState", void 0);
Messages_decorate([
    serializable(1)
], StatusInfoChunk.prototype, "currentFaceIndex", void 0);
/**
 * Message send by a Pixel after receiving a "WhoAmI" message.
 * @category Message
 */
class IAmADie {
    constructor() {
        this.type = MessageTypeValues.iAmADie;
        this.versionInfo = new VersionInfoChunk();
        this.dieInfo = new DieInfoChunk();
        this.customDesignAndColorName = new CustomDesignAndColorNameChunk();
        this.dieName = new DieNameChunk();
        this.settingsInfo = new SettingsInfoChunk();
        this.statusInfo = new StatusInfoChunk();
    }
}
Messages_decorate([
    serializable(1)
], IAmADie.prototype, "type", void 0);
/**
 * Message send by a Pixel running a legacy firmware,
 * after receiving a "WhoAmI" message.
 * @category Message
 */
class LegacyIAmADie {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.iAmADie;
        /** Number of LEDs. */
        this.ledCount = 0;
        /** Die look. */
        this.colorway = PixelColorwayValues.unknown;
        /** Type of die. */
        this.dieType = PixelDieTypeValues.unknown;
        /** Hash of the uploaded profile. */
        this.dataSetHash = 0;
        /** The Pixel id. */
        this.pixelId = 0;
        /** Amount of available flash. */
        this.availableFlashSize = 0;
        /** UNIX timestamp in seconds for the date of the firmware. */
        this.buildTimestamp = 0;
        // Roll state
        /** Current roll state. */
        this.rollState = PixelRollStateValues.unknown;
        /** Face index, starts at 0. */
        this.currentFaceIndex = 0;
        // Battery level
        /** The battery charge level in percent. */
        this.batteryLevelPercent = 0;
        /** The charging state of the battery. */
        this.batteryState = PixelBatteryStateValues.ok;
    }
}
LegacyIAmADie.expectedSize = 22;
Messages_decorate([
    serializable(1)
], LegacyIAmADie.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], LegacyIAmADie.prototype, "ledCount", void 0);
Messages_decorate([
    serializable(1)
], LegacyIAmADie.prototype, "colorway", void 0);
Messages_decorate([
    serializable(1)
], LegacyIAmADie.prototype, "dieType", void 0);
Messages_decorate([
    serializable(4)
], LegacyIAmADie.prototype, "dataSetHash", void 0);
Messages_decorate([
    serializable(4)
], LegacyIAmADie.prototype, "pixelId", void 0);
Messages_decorate([
    serializable(2)
], LegacyIAmADie.prototype, "availableFlashSize", void 0);
Messages_decorate([
    serializable(4)
], LegacyIAmADie.prototype, "buildTimestamp", void 0);
Messages_decorate([
    serializable(1)
], LegacyIAmADie.prototype, "rollState", void 0);
Messages_decorate([
    serializable(1)
], LegacyIAmADie.prototype, "currentFaceIndex", void 0);
Messages_decorate([
    serializable(1)
], LegacyIAmADie.prototype, "batteryLevelPercent", void 0);
Messages_decorate([
    serializable(1)
], LegacyIAmADie.prototype, "batteryState", void 0);
/**
 * Pixel roll states.
 * @enum
 * @category Message
 */
const PixelRollStateValues = {
    /** The Pixel roll state could not be determined. */
    unknown: enumValue(0),
    /** The Pixel is resting in a position with a face up. */
    onFace: enumValue(),
    /** The Pixel is being handled. */
    handling: enumValue(),
    /** The Pixel is rolling. */
    rolling: enumValue(),
    /** The Pixel is resting in a crooked position. */
    crooked: enumValue(),
};
/**
 * Message send by a Pixel to notify of its rolling state.
 * @category Message
 */
class RollState {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.rollState;
        /** Current roll state. */
        this.state = PixelRollStateValues.unknown;
        /** Index of the face facing up (if applicable). */
        this.faceIndex = 0;
    }
}
Messages_decorate([
    serializable(1)
], RollState.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], RollState.prototype, "state", void 0);
Messages_decorate([
    serializable(1)
], RollState.prototype, "faceIndex", void 0);
/**
 * Available Pixel battery controller modes.
 * @enum
 * @category Message
 */
const PixelBatteryControllerModeValues = {
    /** Charging allowed. */
    default: enumValue(0),
    /** Disable charging. */
    forceDisableCharging: enumValue(),
    /** Ignore battery temperature. */
    forceEnableCharging: enumValue(),
};
/**
 * Message send by a Pixel to notify of its telemetry data.
 * @category Message
 */
class Telemetry {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.telemetry;
        // Accelerometer
        this.accXTimes1000 = 0;
        this.accYTimes1000 = 0;
        this.accZTimes1000 = 0;
        this.faceConfidenceTimes1000 = 0;
        /** Firmware time in ms for when the data was gathered. */
        this.timeMs = 0;
        /** Current roll state. */
        this.rollState = PixelRollStateValues.unknown;
        /** Index of the face facing up (if applicable). */
        this.faceIndex = 0;
        // Battery & power
        /** The battery charge level in percent. */
        this.batteryLevelPercent = 0;
        /** The charging state of the battery. */
        this.batteryState = PixelBatteryStateValues.ok;
        /** The internal state of the battery controller itself. */
        this.batteryControllerState = PixelBatteryControllerStateValues.ok;
        /** The measured battery voltage multiplied by 50. */
        this.voltageTimes50 = 0;
        /** The measured coil voltage multiplied by 50. */
        this.vCoilTimes50 = 0;
        // RSSI
        /** The RSSI value, in dBm. */
        this.rssi = 0;
        /** The data channel index of which the RSSI is measured. */
        this.channelIndex = 0;
        // Temperature
        /**
         * The microcontroller temperature, in celsius, times 100 (i.e. 500 == 5 degrees C).
         * If the die was unable to read the temperature, value will be 0xffff.
         */
        this.mcuTemperatureTimes100 = 0;
        /**
         * The battery temperature, in celsius, times 100 (i.e. 500 == 5 degrees C).
         */
        this.batteryTemperatureTimes100 = 0;
        /** Internal charge state */
        this.internalChargeState = false;
        /** Internal disabling of charging (because of temperature for instance) */
        this.batteryControllerMode = PixelBatteryControllerModeValues.default;
        /** led power draw in mA */
        this.ledCurrent = 0;
    }
}
Messages_decorate([
    serializable(1)
], Telemetry.prototype, "type", void 0);
Messages_decorate([
    serializable(2, { numberFormat: "signed" })
], Telemetry.prototype, "accXTimes1000", void 0);
Messages_decorate([
    serializable(2, { numberFormat: "signed" })
], Telemetry.prototype, "accYTimes1000", void 0);
Messages_decorate([
    serializable(2, { numberFormat: "signed" })
], Telemetry.prototype, "accZTimes1000", void 0);
Messages_decorate([
    serializable(4, { numberFormat: "signed" })
], Telemetry.prototype, "faceConfidenceTimes1000", void 0);
Messages_decorate([
    serializable(4)
], Telemetry.prototype, "timeMs", void 0);
Messages_decorate([
    serializable(1)
], Telemetry.prototype, "rollState", void 0);
Messages_decorate([
    serializable(1)
], Telemetry.prototype, "faceIndex", void 0);
Messages_decorate([
    serializable(1)
], Telemetry.prototype, "batteryLevelPercent", void 0);
Messages_decorate([
    serializable(1)
], Telemetry.prototype, "batteryState", void 0);
Messages_decorate([
    serializable(1)
], Telemetry.prototype, "batteryControllerState", void 0);
Messages_decorate([
    serializable(1)
], Telemetry.prototype, "voltageTimes50", void 0);
Messages_decorate([
    serializable(1)
], Telemetry.prototype, "vCoilTimes50", void 0);
Messages_decorate([
    serializable(1, { numberFormat: "signed" })
], Telemetry.prototype, "rssi", void 0);
Messages_decorate([
    serializable(1)
], Telemetry.prototype, "channelIndex", void 0);
Messages_decorate([
    serializable(2)
], Telemetry.prototype, "mcuTemperatureTimes100", void 0);
Messages_decorate([
    serializable(2)
], Telemetry.prototype, "batteryTemperatureTimes100", void 0);
Messages_decorate([
    serializable(1)
], Telemetry.prototype, "internalChargeState", void 0);
Messages_decorate([
    serializable(1)
], Telemetry.prototype, "batteryControllerMode", void 0);
Messages_decorate([
    serializable(1)
], Telemetry.prototype, "ledCurrent", void 0);
/**
 * Message send to a Pixel to request a transfer of data.
 * This is usually done after initiating an animation transfer request
 * and followed by BulkData messages with the actual data.
 * @category Message
 */
class BulkSetup {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.bulkSetup;
        this.size = 0;
    }
}
Messages_decorate([
    serializable(1)
], BulkSetup.prototype, "type", void 0);
Messages_decorate([
    serializable(2)
], BulkSetup.prototype, "size", void 0);
/**
 * Message send to a Pixel to request to transfer a piece of data.
 * A BulkSetup message must be send first.
 * @category Message
 */
class BulkData {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.bulkData;
        this.size = 0;
        this.offset = 0;
    }
}
Messages_decorate([
    serializable(1)
], BulkData.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], BulkData.prototype, "size", void 0);
Messages_decorate([
    serializable(2)
], BulkData.prototype, "offset", void 0);
Messages_decorate([
    serializable(Constants.maxMessageSize)
], BulkData.prototype, "data", void 0);
/**
 * Message send by a Pixel after receiving a BulkData request.
 * @category Message
 */
class BulkDataAck {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.bulkDataAck;
        this.offset = 0;
    }
}
Messages_decorate([
    serializable(1)
], BulkDataAck.prototype, "type", void 0);
Messages_decorate([
    serializable(2)
], BulkDataAck.prototype, "offset", void 0);
/**
 * Message send to a Pixel to request a transfer of a
 * full animation data set (stored in flash memory).
 * @category Message
 */
class TransferAnimationSet {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.transferAnimationSet;
        this.paletteSize = 0;
        this.rgbKeyFrameCount = 0;
        this.rgbTrackCount = 0;
        this.keyFrameCount = 0;
        this.trackCount = 0;
        this.animationCount = 0;
        this.animationSize = 0;
        this.conditionCount = 0;
        this.conditionSize = 0;
        this.actionCount = 0;
        this.actionSize = 0;
        this.ruleCount = 0;
    }
}
Messages_decorate([
    serializable(1)
], TransferAnimationSet.prototype, "type", void 0);
Messages_decorate([
    serializable(2)
], TransferAnimationSet.prototype, "paletteSize", void 0);
Messages_decorate([
    serializable(2)
], TransferAnimationSet.prototype, "rgbKeyFrameCount", void 0);
Messages_decorate([
    serializable(2)
], TransferAnimationSet.prototype, "rgbTrackCount", void 0);
Messages_decorate([
    serializable(2)
], TransferAnimationSet.prototype, "keyFrameCount", void 0);
Messages_decorate([
    serializable(2)
], TransferAnimationSet.prototype, "trackCount", void 0);
Messages_decorate([
    serializable(2)
], TransferAnimationSet.prototype, "animationCount", void 0);
Messages_decorate([
    serializable(2)
], TransferAnimationSet.prototype, "animationSize", void 0);
Messages_decorate([
    serializable(2)
], TransferAnimationSet.prototype, "conditionCount", void 0);
Messages_decorate([
    serializable(2)
], TransferAnimationSet.prototype, "conditionSize", void 0);
Messages_decorate([
    serializable(2)
], TransferAnimationSet.prototype, "actionCount", void 0);
Messages_decorate([
    serializable(2)
], TransferAnimationSet.prototype, "actionSize", void 0);
Messages_decorate([
    serializable(2)
], TransferAnimationSet.prototype, "ruleCount", void 0);
/**
 * Message send by a Pixel after receiving a TransferAnimationSet request.
 * @category Message
 */
class TransferAnimationSetAck {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.transferAnimationSetAck;
        this.result = 0;
    }
}
Messages_decorate([
    serializable(1)
], TransferAnimationSetAck.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], TransferAnimationSetAck.prototype, "result", void 0);
/**
 * Message send to a Pixel to request a transfer of a
 * test animation (stored in RAM memory).
 * @category Message
 */
class TransferTestAnimationSet {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.transferTestAnimationSet;
        this.paletteSize = 0;
        this.rgbKeyFrameCount = 0;
        this.rgbTrackCount = 0;
        this.keyFrameCount = 0;
        this.trackCount = 0;
        this.animationCount = 0;
        this.animationSize = 0;
        this.hash = 0;
    }
}
Messages_decorate([
    serializable(1)
], TransferTestAnimationSet.prototype, "type", void 0);
Messages_decorate([
    serializable(2)
], TransferTestAnimationSet.prototype, "paletteSize", void 0);
Messages_decorate([
    serializable(2)
], TransferTestAnimationSet.prototype, "rgbKeyFrameCount", void 0);
Messages_decorate([
    serializable(2)
], TransferTestAnimationSet.prototype, "rgbTrackCount", void 0);
Messages_decorate([
    serializable(2)
], TransferTestAnimationSet.prototype, "keyFrameCount", void 0);
Messages_decorate([
    serializable(2)
], TransferTestAnimationSet.prototype, "trackCount", void 0);
Messages_decorate([
    serializable(2)
], TransferTestAnimationSet.prototype, "animationCount", void 0);
Messages_decorate([
    serializable(2)
], TransferTestAnimationSet.prototype, "animationSize", void 0);
Messages_decorate([
    serializable(4)
], TransferTestAnimationSet.prototype, "hash", void 0);
/**
 * Transfer animation ack values.
 * @enum
 * @category Message
 */
const TransferInstantAnimationsSetAckTypeValues = {
    /** Die is ready to download animation set. */
    download: enumValue(0),
    /** Die already has the contents of the animation set. */
    upToDate: enumValue(),
    /** Die doesn't have enough memory to store animation set. */
    noMemory: enumValue(),
};
/**
 * Message send by a Pixel after receiving a TransferTestAnimationSet request.
 * @category Message
 */
class TransferTestAnimationSetAck {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.transferTestAnimationSetAck;
        /** The expected action to be taken upon receiving this message. */
        this.ackType = TransferInstantAnimationsSetAckTypeValues.download;
    }
}
Messages_decorate([
    serializable(1)
], TransferTestAnimationSetAck.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], TransferTestAnimationSetAck.prototype, "ackType", void 0);
/**
 * Message send by a Pixel to report a log message to the application.
 * @category Message
 */
class DebugLog {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.debugLog;
        /** The message to log. */
        this.message = "";
    }
}
Messages_decorate([
    serializable(1)
], DebugLog.prototype, "type", void 0);
Messages_decorate([
    serializable(0, { terminator: true })
], DebugLog.prototype, "message", void 0);
/**
 * Message send by a Pixel to request running a specific remote action.
 * @category Message
 */
class RemoteAction {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.remoteAction;
        /** Type of remote action. */
        // @serializable(1)
        // readonly remoteActionType: RemoteActionType = 0;
        /** The action id to run. */
        this.actionId = 0;
    }
}
Messages_decorate([
    serializable(1)
], RemoteAction.prototype, "type", void 0);
Messages_decorate([
    serializable(2)
], RemoteAction.prototype, "actionId", void 0);
/**
 * Available modes for telemetry requests.
 * @enum
 * @category Message
 */
const TelemetryRequestModeValues = {
    /* Request Pixel to stop automatically sending telemetry updates. */
    off: enumValue(0),
    /* Request Pixel to immediately send a single telemetry update. */
    once: enumValue(),
    /* Request Pixel to automatically send telemetry updates. */
    automatic: enumValue(),
};
/**
 * Message send to a Pixel to have it start or stop sending telemetry messages.
 * @category Message
 */
class RequestTelemetry {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.requestTelemetry;
        this.requestMode = TelemetryRequestModeValues.off;
        this.minInterval = 0; // Milliseconds, 0 for no cap on rate
    }
}
Messages_decorate([
    serializable(1)
], RequestTelemetry.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], RequestTelemetry.prototype, "requestMode", void 0);
Messages_decorate([
    serializable(2)
], RequestTelemetry.prototype, "minInterval", void 0);
/**
 * Message send to a Pixel to have it blink its LEDs.
 * @category Message
 */
class Blink {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.blink;
        /** Number of flashes. */
        this.count = 0;
        /** Total duration in milliseconds. */
        this.duration = 0;
        /** Color to blink. */
        this.color = 0;
        /** Select which faces to light up. */
        this.faceMask = AnimConstants.faceMaskAll;
        /** Amount of in and out fading, 0: sharp transition, 255: max fading. */
        this.fade = 0;
        /** How many time to loop the animation. */
        this.loopCount = 1;
    }
}
Messages_decorate([
    serializable(1)
], Blink.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], Blink.prototype, "count", void 0);
Messages_decorate([
    serializable(2)
], Blink.prototype, "duration", void 0);
Messages_decorate([
    serializable(4)
], Blink.prototype, "color", void 0);
Messages_decorate([
    serializable(4)
], Blink.prototype, "faceMask", void 0);
Messages_decorate([
    serializable(1)
], Blink.prototype, "fade", void 0);
Messages_decorate([
    serializable(1)
], Blink.prototype, "loopCount", void 0);
/**
 * The different possible battery charging states.
 * @enum
 * @category Message
 */
const PixelBatteryStateValues = {
    /** Battery looks fine, nothing is happening. */
    ok: enumValue(0),
    /** Battery level is low, notify user they should recharge. */
    low: enumValue(),
    /** Battery is currently recharging. */
    charging: enumValue(),
    /** Battery is full and finished charging. */
    done: enumValue(),
    /**
     * Coil voltage is bad, die is probably positioned incorrectly.
     * Note that currently this state is triggered during transition between charging and not charging...
     */
    badCharging: enumValue(),
    /** Charge state doesn't make sense (charging but no coil voltage detected for instance). */
    error: enumValue(),
};
/**
 * The different possible battery charging states.
 * @enum
 * @category Message
 */
const PixelBatteryControllerStateValues = {
    unknown: enumValue(0),
    // Battery looks fine, nothing is happening
    ok: enumValue(),
    // Battery voltage is so low the die might turn off at any time
    empty: enumValue(),
    // Battery level is low, notify user they should recharge
    low: enumValue(),
    // Coil voltage is bad, but we don't know yet if that's because we just put the die
    // on the coil, or if indeed the die is incorrectly positioned
    transitionOn: enumValue(),
    // Coil voltage is bad, but we don't know yet if that's because we removed the die and
    // the coil cap is still discharging, or if indeed the die is incorrectly positioned
    transitionOff: enumValue(),
    // Coil voltage is bad, die is probably positioned incorrectly
    // Note that currently this state is triggered during transition between charging and not charging...
    badCharging: enumValue(),
    // Charge state doesn't make sense (charging but no coil voltage detected for instance)
    error: enumValue(),
    // Battery is currently recharging, but still really low
    chargingLow: enumValue(),
    // Battery is currently recharging
    charging: enumValue(),
    // Battery is currently cooling down
    cooldown: enumValue(),
    // Battery is currently recharging, but at 99%
    trickle: enumValue(),
    // Battery is full and finished charging
    done: enumValue(),
    // Battery is too cold
    lowTemp: enumValue(),
    // Battery is too hot
    highTemp: enumValue(),
};
/**
 * Message send by a Pixel to notify of its battery level and state.
 * @category Message
 */
class BatteryLevel {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.batteryLevel;
        /** The battery charge level in percent. */
        this.levelPercent = 0;
        /** The charging state of the battery. */
        this.state = PixelBatteryStateValues.ok;
    }
}
Messages_decorate([
    serializable(1)
], BatteryLevel.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], BatteryLevel.prototype, "levelPercent", void 0);
Messages_decorate([
    serializable(1)
], BatteryLevel.prototype, "state", void 0);
/**
 * Message send to a Pixel to configure RSSI reporting.
 * @category Message
 */
class RequestRssi {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.requestRssi;
        /** Telemetry mode used for sending the RSSI update(s). */
        this.requestMode = TelemetryRequestModeValues.off;
        /**
         * Minimum interval in milliseconds between two updates.
         * (0 for no cap on rate)
         */
        this.minInterval = 0;
    }
}
Messages_decorate([
    serializable(1)
], RequestRssi.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], RequestRssi.prototype, "requestMode", void 0);
Messages_decorate([
    serializable(2)
], RequestRssi.prototype, "minInterval", void 0);
/**
 * Message send by a Pixel to notify of its measured RSSI.
 * @category Message
 */
class Rssi {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.rssi;
        /** The RSSI value, in dBm. */
        this.value = 0;
    }
}
Messages_decorate([
    serializable(1)
], Rssi.prototype, "type", void 0);
Messages_decorate([
    serializable(1, { numberFormat: "signed" })
], Rssi.prototype, "value", void 0);
/**
 * Message send by a Pixel to request the application to show
 * a message to the user, and with optionally a required action.
 * @category Message
 */
class NotifyUser {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.notifyUser;
        /** Timeout after which the die won't listen for an answer. */
        this.timeoutSec = 0;
        /** Whether to display the OK button. */
        this.ok = false;
        /** Whether to display the Cancel button. */
        this.cancel = false;
        /** Message to show to the user. */
        this.message = "";
    }
}
Messages_decorate([
    serializable(1)
], NotifyUser.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], NotifyUser.prototype, "timeoutSec", void 0);
Messages_decorate([
    serializable(1)
], NotifyUser.prototype, "ok", void 0);
Messages_decorate([
    serializable(1)
], NotifyUser.prototype, "cancel", void 0);
Messages_decorate([
    serializable(Constants.maxMessageSize - 4)
], NotifyUser.prototype, "message", void 0);
/**
 * Message send to a Pixel in response to getting a NotifyUser request.
 * @category Message
 */
class NotifyUserAck {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.notifyUserAck;
        /** Whether the use selected OK or Cancel. */
        this.okCancel = false;
    }
}
Messages_decorate([
    serializable(1)
], NotifyUserAck.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], NotifyUserAck.prototype, "okCancel", void 0);
/**
 * Message send to a Pixel to store a 32 bits value.
 * @category Message
 */
class StoreValue {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.storeValue;
        /** Value to write. */
        this.value = 0;
    }
}
Messages_decorate([
    serializable(1)
], StoreValue.prototype, "type", void 0);
Messages_decorate([
    serializable(4)
], StoreValue.prototype, "value", void 0);
/**
 * The different possible result of requesting to store a value.
 * @enum
 * @category Message
 */
const StoreValueResultValues = {
    /** Value stored successfully. */
    success: enumValue(0),
    /** Some error occurred. */
    unknownError: enumValue(),
    /** Store is full, value wasn't saved. */
    storeFull: enumValue(),
    /**
     * Store request was discarded because the value is outside of the
     * valid range (value can't be 0).
     */
    invalidRange: enumValue(),
    /* Operation not permitted in the current die state. */
    notPermitted: enumValue(),
};
/**
 * Message send by a Pixel is response to receiving a
 * {@link StoreValue} message.
 * @category Message
 */
class StoreValueAck {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.storeValueAck;
        /** Store operation result. */
        this.result = 0;
        /** Index at which the value was written. */
        this.index = StoreValueResultValues.success;
    }
}
Messages_decorate([
    serializable(1)
], StoreValueAck.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], StoreValueAck.prototype, "result", void 0);
Messages_decorate([
    serializable(1)
], StoreValueAck.prototype, "index", void 0);
/**
 * Message send to a Pixel to configure the die type and color.
 * @category Message
 */
class SetDesignAndColor {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.setDesignAndColor;
        /** A value from the {@link PixelDieType} enumeration.*/
        this.dieType = 0;
        /** A value from the {@link PixelColorwayValues} enumeration.*/
        this.colorway = 0;
    }
}
Messages_decorate([
    serializable(1)
], SetDesignAndColor.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], SetDesignAndColor.prototype, "dieType", void 0);
Messages_decorate([
    serializable(1)
], SetDesignAndColor.prototype, "colorway", void 0);
/**
 * Message send to a Pixel to change its Bluetooth name.
 * @category Message
 */
class SetName {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.setName;
        /** The name to set. */
        this.name = "";
    }
}
Messages_decorate([
    serializable(1)
], SetName.prototype, "type", void 0);
Messages_decorate([
    serializable(Constants.maxNameByteSize + 1) // +1 for null terminator
], SetName.prototype, "name", void 0);
/**
 * The different power operations available on a Pixel.
 * @enum
 * @category Message
 */
const PixelPowerOperationValues = {
    // Turn off all systems.
    turnOff: enumValue(0),
    // Reset die chip.
    reset: enumValue(),
    // Put die in low power mode, will be "awaken" when moved.
    sleep: enumValue(),
};
/**
 * Message send to a Pixel to modify it's power state.
 * @category Message
 */
class PowerOperation {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.powerOperation;
        /** The name to set. */
        this.operation = PixelPowerOperationValues.sleep;
    }
}
Messages_decorate([
    serializable(1)
], PowerOperation.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], PowerOperation.prototype, "operation", void 0);
/**
 * Message send to a Pixel to request a transfer of a set of
 * instant animations (stored in RAM memory)
 * @category Message
 */
class TransferInstantAnimationSet {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.transferInstantAnimationSet;
        this.paletteSize = 0;
        this.rgbKeyFrameCount = 0;
        this.rgbTrackCount = 0;
        this.keyFrameCount = 0;
        this.trackCount = 0;
        this.animationCount = 0;
        this.animationSize = 0;
        this.hash = 0;
    }
}
Messages_decorate([
    serializable(1)
], TransferInstantAnimationSet.prototype, "type", void 0);
Messages_decorate([
    serializable(2)
], TransferInstantAnimationSet.prototype, "paletteSize", void 0);
Messages_decorate([
    serializable(2)
], TransferInstantAnimationSet.prototype, "rgbKeyFrameCount", void 0);
Messages_decorate([
    serializable(2)
], TransferInstantAnimationSet.prototype, "rgbTrackCount", void 0);
Messages_decorate([
    serializable(2)
], TransferInstantAnimationSet.prototype, "keyFrameCount", void 0);
Messages_decorate([
    serializable(2)
], TransferInstantAnimationSet.prototype, "trackCount", void 0);
Messages_decorate([
    serializable(2)
], TransferInstantAnimationSet.prototype, "animationCount", void 0);
Messages_decorate([
    serializable(2)
], TransferInstantAnimationSet.prototype, "animationSize", void 0);
Messages_decorate([
    serializable(4)
], TransferInstantAnimationSet.prototype, "hash", void 0);
/**
 * Message send by a Pixel after receiving a TransferInstantAnimationSet request.
 * @category Message
 */
class TransferInstantAnimationSetAck {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.transferInstantAnimationSetAck;
        /** The expected action to be taken upon receiving this message. */
        this.ackType = TransferInstantAnimationsSetAckTypeValues.download;
    }
}
Messages_decorate([
    serializable(1)
], TransferInstantAnimationSetAck.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], TransferInstantAnimationSetAck.prototype, "ackType", void 0);
/**
 * Message send to a Pixel to have it play an already uploaded instant animation.
 * @category Message
 */
class PlayInstantAnimation {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.playInstantAnimation;
        /** Animation index to play. */
        this.animation = 0;
        /** Face index on which to play the animation. */
        this.faceIndex = 0;
        /** How many time to loop the animation. */
        this.loopCount = 1;
    }
}
Messages_decorate([
    serializable(1)
], PlayInstantAnimation.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], PlayInstantAnimation.prototype, "animation", void 0);
Messages_decorate([
    serializable(1)
], PlayInstantAnimation.prototype, "faceIndex", void 0);
Messages_decorate([
    serializable(1)
], PlayInstantAnimation.prototype, "loopCount", void 0);
/**
 * Message send by a Pixel to notify of its internal temperature.
 * @category Message
 */
class Temperature {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.temperature;
        /**
         * The microcontroller temperature, in celsius, times 100 (i.e. 500 == 5 degrees C).
         * If the die was unable to read the temperature, value will be 0xffff.
         */
        this.mcuTemperatureTimes100 = 0;
        /**
         * The battery temperature, in celsius, times 100 (i.e. 500 == 5 degrees C).
         */
        this.batteryTemperatureTimes100 = 0;
    }
}
Messages_decorate([
    serializable(1)
], Temperature.prototype, "type", void 0);
Messages_decorate([
    serializable(2)
], Temperature.prototype, "mcuTemperatureTimes100", void 0);
Messages_decorate([
    serializable(2)
], Temperature.prototype, "batteryTemperatureTimes100", void 0);
/**
 * Message send to a Pixel to set its battery controller mode.
 * @category Message
 */
class SetBatteryControllerMode {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.setBatteryControllerMode;
        /**
         * The battery controller mode to set.
         */
        this.mode = PixelBatteryControllerModeValues.default;
    }
}
Messages_decorate([
    serializable(1)
], SetBatteryControllerMode.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], SetBatteryControllerMode.prototype, "mode", void 0);
/**
 * Message send to a Pixel to make it light up its LEDs to quickly discharge the battery.
 * @category Message
 */
class Discharge {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.discharge;
        /**
         * The current draw, in mA, or 0 to reset.
         */
        this.currentMA = 0;
    }
}
Messages_decorate([
    serializable(1)
], Discharge.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], Discharge.prototype, "currentMA", void 0);
/**
 * Message send to a Pixel to make it blink it Pixel Id.
 * @category Message
 */
class BlinkId {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.blinkId;
        /**
         * The brightness of the blinking LEDs.
         */
        this.brightness = 0;
        /** How many time to loop the animation. */
        this.loopCount = 1;
    }
}
Messages_decorate([
    serializable(1)
], BlinkId.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], BlinkId.prototype, "brightness", void 0);
Messages_decorate([
    serializable(1)
], BlinkId.prototype, "loopCount", void 0);
/**
 * Message send to a Pixel to test transfer rates.
 * @category Message
 */
class TransferTest {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.transferTest;
        /**
         * The amount of data to be send.
         */
        this.size = 0;
    }
}
Messages_decorate([
    serializable(1)
], TransferTest.prototype, "type", void 0);
Messages_decorate([
    serializable(2, { padding: 1 })
], TransferTest.prototype, "size", void 0);
/**
 * Message send to a Pixel to play an animation from the stored profile.
 * @category Message
 */
class PlayProfileAnimation {
    constructor() {
        /** Type of the message. */
        this.type = MessageTypeValues.playAnimation;
        /** Index of the animation in the profile's animation list. */
        this.animationIndex = 0;
        /** Face on which to play the animation (the animations are designed assuming that the higher face value is up). */
        this.remapToFace = 0;
        /** How many time to loop the animation. */
        this.loopCount = 1;
    }
}
Messages_decorate([
    serializable(1)
], PlayProfileAnimation.prototype, "type", void 0);
Messages_decorate([
    serializable(1)
], PlayProfileAnimation.prototype, "animationIndex", void 0);
Messages_decorate([
    serializable(1)
], PlayProfileAnimation.prototype, "remapToFace", void 0);
Messages_decorate([
    serializable(1)
], PlayProfileAnimation.prototype, "loopCount", void 0);
// Returns the list of message classes defined in this file.
function _getMessageClasses() {
    return [
        LegacyIAmADie,
        RollState,
        Telemetry,
        BulkSetup,
        BulkData,
        BulkDataAck,
        TransferAnimationSet,
        TransferAnimationSetAck,
        TransferTestAnimationSet,
        TransferTestAnimationSetAck,
        DebugLog,
        RemoteAction,
        Blink,
        BatteryLevel,
        RequestRssi,
        Rssi,
        NotifyUser,
        NotifyUserAck,
        StoreValue,
        StoreValueAck,
        SetDesignAndColor,
        SetName,
        PowerOperation,
        TransferInstantAnimationSet,
        TransferInstantAnimationSetAck,
        PlayInstantAnimation,
        Temperature,
        SetBatteryControllerMode,
        Discharge,
        BlinkId,
        TransferTest,
    ];
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-connect/dist/esm/PixelInfoNotifier.js

/**
 * Abstract implementation of {@link PixelInfo} type with the addition
 * of events that are emitted when mutable properties change.
 * The concrete implementation is responsible of calling the
 * {@link PixelInfoNotifier.emitPropertyEvent} function when a property is mutated.
 * @category Pixels
 */
class PixelInfoNotifier {
    constructor() {
        this._infoEvEmitter = createTypedEventEmitter();
    }
    /**
     * Adds the given listener function for the specified property.
     * @param propertyName The name of the property.
     * @param listener The callback function.
     */
    addPropertyListener(propertyName, listener) {
        this._infoEvEmitter.addListener(propertyName, listener);
    }
    /**
     * Removes the given listener function for the specified property.
     * @param propertyName The name of the property.
     * @param listener The callback function to unregister.
     */
    removePropertyListener(propertyName, listener) {
        this._infoEvEmitter.removeListener(propertyName, listener);
    }
    /**
     * Emit a Pixel event for the specified property.
     * This function should be called by the concrete type whenever
     * the a property's value changes.
     * @param propertyName Event name.
     */
    emitPropertyEvent(propertyName) {
        this._infoEvEmitter.emit(propertyName, 
        //@ts-ignore 'this' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint 'PixelInfo'.ts(2345)
        this);
    }
}
PixelInfoNotifier.MutablePropsList = [
    "name",
    "ledCount",
    "colorway",
    "dieType",
    "firmwareDate",
    "rssi",
    "batteryLevel",
    "isCharging",
    "rollState",
    "currentFace",
    "currentFaceIndex",
];

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-connect/dist/esm/isPixelChargingOrDone.js

/**
 * Returns whether the given battery controller state means that the pixel
 * is currently charging or is still on charger but done charging.
 * @param value The Pixel battery state.
 * @returns Whether the Pixel is charging.
 */
function isPixelChargingOrDone(value) {
    return (value === PixelBatteryStateValues.charging ||
        value === PixelBatteryStateValues.done);
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-connect/dist/esm/Pixel.js








// Returns a string with the current time with a millisecond precision
function _getTime() {
    const to2 = (n) => n.toString().padStart(2, "0");
    const to3 = (n) => n.toString().padStart(3, "0");
    const d = new Date();
    return (to2(d.getHours()) +
        ":" +
        to2(d.getMinutes()) +
        ":" +
        to2(d.getSeconds()) +
        "." +
        to3(d.getMilliseconds()));
}
/**
 * Represents a Pixels die.
 * Most of its methods require the instance to be connected to the Pixel device.
 * Call the {@link connect()} method to initiate a connection.
 *
 * Call {@link addEventListener} to get notified for rolls, connection and
 * disconnection events and more.
 *
 * Call {@link addPropertyListener} to get notified on property changes.
 *
 * @category Pixels
 */
class Pixel extends PixelInfoNotifier {
    /** Toggle logging information about each send and received message. */
    get logMessages() {
        return this._logMessages;
    }
    set logMessages(enabled) {
        this._logMessages = enabled;
    }
    /** Toggle logging the serialized (binary) data for each send and received message. */
    get logMessagesSerializedData() {
        return this._logData;
    }
    set logMessagesSerializedData(enabled) {
        this._logData = enabled;
    }
    /** Set logger to use by this instance. */
    get logger() {
        return this._logFunc;
    }
    set logger(logger) {
        this._logFunc = logger;
    }
    /** Get the Pixel last known connection status. */
    get status() {
        return this._status;
    }
    /** Shorthand property that indicates if the Pixel status is "ready". */
    get isReady() {
        return this._status === "ready";
    }
    /** Gets the unique id assigned by the system to the Pixel Bluetooth peripheral. */
    get systemId() {
        return this._info.systemId;
    }
    /** Gets the unique Pixel id of the device, may be 0 until connected. */
    get pixelId() {
        return this._info.pixelId;
    }
    /** Get the Pixel name, may be empty until connected to device. */
    get name() {
        var _a;
        // The name from the session may be outdated
        return this._info.name.length
            ? this._info.name
            : (_a = this._session.pixelName) !== null && _a !== void 0 ? _a : "";
    }
    /** Gets the number of LEDs for the Pixel, may be 0 until connected to device. */
    get ledCount() {
        return this._info.ledCount;
    }
    /** Gets the color of the Pixel. */
    get colorway() {
        return this._info.colorway;
    }
    /** Gets the die type of the Pixel. */
    get dieType() {
        return this._info.dieType;
    }
    /** Gets the number of faces of the Pixel. */
    get dieFaceCount() {
        return DiceUtils.getFaceCount(this.dieType);
    }
    /** Get the Pixel firmware build date. */
    get firmwareDate() {
        return this._info.firmwareDate;
    }
    /**
     * Gets the last RSSI value notified by the Pixel.
     * @remarks Call {@link reportRssi()} to automatically update the RSSI value.
     */
    get rssi() {
        return this._info.rssi;
    }
    /**
     * Get the Pixel battery level (percentage).
     * @remarks This value is automatically updated when the die is connected.
     */
    get batteryLevel() {
        return this._info.batteryLevel;
    }
    /**
     * Gets whether the Pixel battery is charging or not.
     * Returns 'true' if fully charged but still on charger.
     * @remarks This value is automatically updated when the die is connected.
     */
    get isCharging() {
        return this._info.isCharging;
    }
    /**
     * Get the Pixel roll state.
     * @remarks This value is automatically updated when the die is connected.
     */
    get rollState() {
        return this._info.rollState;
    }
    /**
     * Get the Pixel face value that is currently facing up.
     * @remarks
     * Fudge die returns +1, 0 and -1.
     * This value is automatically updated when the die is connected.
     */
    get currentFace() {
        return this._info.currentFace;
    }
    /**
     * Get the 0-based index of the Pixel face that is currently facing up.
     * @remarks
     * This value is automatically updated when the die is connected.
     * @see {@link PixelInfo.currentFaceIndex} for more details.
     */
    get currentFaceIndex() {
        return this._info.currentFaceIndex;
    }
    /**
     * Instantiates a Pixel.
     * @param session The session used to communicate with the Pixel.
     */
    constructor(session, 
    // Static values
    info) {
        var _a, _b, _c, _d, _e;
        super();
        // Our events emitter
        this._evEmitter = createTypedEventEmitter();
        this._msgEvEmitter = new events.EventEmitter();
        // Log function
        this._logFunc = console.log;
        this._logMessages = false;
        this._logData = false;
        this._session = session;
        this._status = "disconnected"; // TODO use the getLastConnectionStatus()
        this._info = {
            systemId: session.systemId,
            pixelId: (_a = info === null || info === void 0 ? void 0 : info.pixelId) !== null && _a !== void 0 ? _a : 0,
            name: "",
            ledCount: (_b = info === null || info === void 0 ? void 0 : info.ledCount) !== null && _b !== void 0 ? _b : 0,
            colorway: (_c = info === null || info === void 0 ? void 0 : info.colorway) !== null && _c !== void 0 ? _c : "unknown",
            dieType: (_d = info === null || info === void 0 ? void 0 : info.dieType) !== null && _d !== void 0 ? _d : "unknown",
            firmwareDate: (_e = info === null || info === void 0 ? void 0 : info.firmwareDate) !== null && _e !== void 0 ? _e : new Date(0),
            rssi: 0,
            batteryLevel: 0,
            isCharging: false,
            rollState: "unknown",
            currentFace: 0,
            currentFaceIndex: 0,
        };
        if (this._info.ledCount && this._info.dieType === "unknown") {
            // Try to guess the die type if we got "unknown" from the info
            this._info.dieType = DiceUtils.estimateDieType(this._info.ledCount);
        }
        this._versions = {
            firmwareVersion: 0,
            settingsVersion: 0,
            compatStandardApiVersion: 0,
            compatExtendedApiVersion: 0,
            compatManagementApiVersion: 0,
        };
        // Listen to session connection status changes
        session.setConnectionEventListener(({ connectionStatus }) => {
            if (connectionStatus === "connected" || connectionStatus === "ready") {
                // It's possible that we skip some steps and get a "ready" without
                // getting a "connecting" before that if the device was already connected
                this._updateStatus("connecting");
            }
            else {
                this._updateStatus(connectionStatus === "failedToConnect"
                    ? "disconnected"
                    : connectionStatus);
            }
        });
        // Subscribe to rssi messages and emit event
        const rssiListener = (msgOrType) => {
            this._updateRssi(msgOrType.value);
        };
        this.addMessageListener("rssi", rssiListener);
        // Subscribe to battery messages and emit battery event
        const batteryLevelListener = (msgOrType) => {
            const msg = msgOrType;
            this._updateBattery(msg.levelPercent, isPixelChargingOrDone(msg.state));
        };
        this.addMessageListener("batteryLevel", batteryLevelListener);
        // Subscribe to roll messages and emit roll event
        const rollStateListener = (msgOrType) => {
            var _a;
            const msg = msgOrType;
            this._updateRoll((_a = getValueKeyName(msg.state, PixelRollStateValues)) !== null && _a !== void 0 ? _a : "unknown", msg.faceIndex);
        };
        this.addMessageListener("rollState", rollStateListener);
        // Subscribe to user message requests
        const notifyUserListener = (msgOrType) => {
            const msg = msgOrType;
            this._evEmitter.emit("userMessage", {
                message: msg.message,
                withCancel: msg.cancel,
                response: (okCancel) => {
                    return this.sendMessage(safeAssign(new NotifyUserAck(), {
                        okCancel,
                    }));
                },
            });
        };
        this.addMessageListener("notifyUser", notifyUserListener);
        // Subscribe to remote action requests
        const remoteActionListener = (msgOrType) => {
            const msg = msgOrType;
            this._evEmitter.emit("remoteAction", msg.actionId);
        };
        this.addMessageListener("remoteAction", remoteActionListener);
        // Unmount function
        this._disposeFunc = () => {
            session.setConnectionEventListener(undefined);
            this.removeMessageListener("rssi", rssiListener);
            this.removeMessageListener("batteryLevel", batteryLevelListener);
            this.removeMessageListener("rollState", rollStateListener);
            this.removeMessageListener("notifyUser", notifyUserListener);
            this.removeMessageListener("remoteAction", remoteActionListener);
        };
    }
    /**
     * /!\ Internal, don't call this function ;)
     */
    _dispose() {
        // TODO unused at the moment!
        // Unhook from events
        this._disposeFunc();
    }
    /**
     * Update Pixel info from an external source such as scanning data.
     * @param info The updated info.
     * @remarks
     * The info will be updated only if the die is disconnected.
     * Roll state and face index are updated only if both are provided.
     */
    updateInfo(info) {
        if (this.status === "disconnected" && this.pixelId === info.pixelId) {
            // Name
            if (info.name) {
                this._updateName(info.name);
            }
            // LED count
            if (info.ledCount && info.ledCount > 0 && !this.ledCount) {
                this._updateLedCount(info.ledCount);
            }
            // Colorway
            if (info.colorway &&
                info.colorway !== "unknown" &&
                this.colorway === "unknown") {
                this._updateColorway(info.colorway);
            }
            // Die type
            if (info.dieType &&
                info.dieType !== "unknown" &&
                this.dieType === "unknown") {
                this._updateDieType(info.dieType);
            }
            // Firmware data
            if (info.firmwareDate && info.firmwareDate.getTime() > 0) {
                this._updateFirmwareDate(info.firmwareDate.getTime());
            }
            // RSSI
            if (info.rssi !== undefined && info.rssi < 0) {
                this._updateRssi(info.rssi);
            }
            // Battery
            if (info.batteryLevel === undefined ||
                (info.batteryLevel >= 0 && info.batteryLevel <= 100)) {
                this._updateBattery(info.batteryLevel, info.isCharging);
            }
            // Roll
            if (info.rollState !== undefined &&
                info.currentFaceIndex !== undefined &&
                info.currentFaceIndex >= 0 &&
                info.currentFaceIndex < this.dieFaceCount) {
                this._updateRoll(info.rollState, info.currentFaceIndex);
            }
        }
    }
    /**
     * Asynchronously tries to connect to the die. Throws on connection error.
     * @param timeoutMs Delay before giving up (may be ignored when having concurrent
     *                  calls to connect()). It may take longer than the given timeout
     *                  for the function to return.
     * @returns A promise that resoles to this instance once the connection process
     *          has completed (whether successfully or not).
     * @throws Will throw a {@link PixelConnectError} if it fails to connect in time.
     */
    async connect(timeoutMs = 0) {
        // Timeout
        let hasTimedOut = false;
        const timeoutId = timeoutMs > 0 &&
            setTimeout(() => {
                // Disconnect on timeout
                hasTimedOut = true;
                this._session.disconnect().catch(() => { });
            }, timeoutMs);
        try {
            // Connect to the peripheral
            await this._session.connect();
            // And prepare our instance for communications with the Pixels dies die
            if (this.status === "connecting") {
                // Notify we're connected and proceeding with die identification
                this._updateStatus("identifying");
                try {
                    // Setup our instance
                    await this._internalSetup();
                    // We're ready!
                    //@ts-expect-error the status could have changed during the above async call
                    if (this.status === "identifying") {
                        this._updateStatus("ready");
                        // Notify battery state
                        this._evEmitter.emit("battery", {
                            level: this._info.batteryLevel,
                            isCharging: this._info.isCharging,
                        });
                        // We don't raise roll and roll state events as those should occur
                        // only when the die is actually moved
                    }
                }
                catch (error) {
                    // Note: the error may be cause by a call to disconnect
                    try {
                        console.log(this._tagLogString(`Disconnecting after getting error: ${error}`));
                        await this._session.disconnect();
                    }
                    catch (_a) { }
                    // Ignore any disconnection error and throw the error
                    // that got us there in the first place
                    throw error;
                }
            }
            else if (this.status === "identifying") {
                // Another call to connect has put us in identifying state,
                // just wait for status change (in this case we ignore the timeout)
                // since the connection process is driven from another call to connect)
                await new Promise((resolve) => {
                    const onStatusChange = (status) => {
                        if (status !== "identifying") {
                            this.removeEventListener("status", onStatusChange);
                            resolve();
                        }
                    };
                    this.addEventListener("status", onStatusChange);
                });
            }
            // Check if a status changed occurred during the connection process
            if (this.status !== "ready") {
                throw new PixelConnectCancelledError(this);
            }
        }
        catch (error) {
            // Check if the error was caused by the connection timeout
            if (hasTimedOut) {
                throw new PixelConnectTimeoutError(this, timeoutMs);
            }
            else if (error instanceof PixelConnectError) {
                // Forward other connection errors
                throw error;
            }
            else {
                // Wrap any other type of error in a connection error
                throw new PixelConnectError(this, error);
            }
        }
        finally {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        }
        return this;
    }
    /**
     * Immediately disconnects from the die.
     * @returns A promise that resolves once the disconnect request has been processed.
     **/
    async disconnect() {
        await this._session.disconnect();
        return this;
    }
    /**
     * Register a listener function to be invoked on raising the event
     * identified by the given event name.
     * See {@link PixelEventMap} for the list of events and their
     * associated data.
     * @param eventName The name of the event.
     * @param listener The callback function.
     */
    addEventListener(eventName, listener) {
        this._evEmitter.addListener(eventName, listener);
    }
    /**
     * Unregister a listener from receiving events identified by
     * the given event name.
     * See {@link PixelEventMap} for the list of events and their
     * associated data.
     * @param eventName The name of the event.
     * @param listener The callback function to unregister.
     */
    removeEventListener(eventName, listener) {
        this._evEmitter.removeListener(eventName, listener);
    }
    /**
     * Register a listener function to be invoked on receiving raw messages
     * of a given type from the Pixel.
     * @param msgType The type of message to watch for.
     * @param listener The callback function.
     */
    addMessageListener(msgType, listener) {
        this._msgEvEmitter.addListener(`${msgType}Message`, listener);
    }
    /**
     * Unregister a listener from receiving raw messages of a given type.
     * @param msgType The type of message to watch for.
     * @param listener The callback function to unregister.
     */
    removeMessageListener(msgType, listener) {
        this._msgEvEmitter.removeListener(`${msgType}Message`, listener);
    }
    /**
     * Waits for a message from the Pixel.
     * @param expectedMsgType Type of the message to expect.
     * @param timeoutMs Timeout before aborting the wait.
     * @returns A promise with the received message of the expected type.
     */
    waitForMessage(expectedMsgType, timeoutMs = Constants.ackMessageTimeout) {
        return new Promise((resolve, reject) => {
            let cleanup;
            // 1. Hook message listener
            const messageListener = (msg) => {
                cleanup();
                resolve(msg);
            };
            this.addMessageListener(expectedMsgType, messageListener);
            // 2. Hook connection status listener
            // Note: We don't check for the initial status so this method
            // may be called before completing the connection sequence.
            const statusListener = (status) => {
                if (status === "disconnecting" || status === "disconnected") {
                    // We got disconnected, stop waiting for message
                    cleanup();
                    reject(new PixelWaitForMessageDisconnectError(this, expectedMsgType));
                }
            };
            this.addEventListener("status", statusListener);
            // 3. Setup timeout
            let timeoutId;
            timeoutId = setTimeout(() => {
                timeoutId = undefined;
                cleanup();
                reject(new PixelWaitForMessageTimeoutError(this, timeoutMs, expectedMsgType));
            }, timeoutMs);
            cleanup = () => {
                // Cancel timeout and unhook listeners
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                this.removeMessageListener(expectedMsgType, messageListener);
                this.removeEventListener("status", statusListener);
            };
        });
    }
    /**
     * Sends a message to the Pixel.
     * @param msgOrType Message with the data to send or just a message type.
     * @param withoutAck Whether to request a confirmation that the message was received.
     * @returns A promise that resolves once the message has been send.
     */
    async sendMessage(msgOrType, withoutAck = false) {
        if (this._logMessages) {
            const msgName = getMessageType(msgOrType);
            this._log(`Sending message ${msgName} (${MessageTypeValues[msgName]})`);
        }
        // Check API version
        const fwVer = this._versions.firmwareVersion;
        if (fwVer > 0 && Constants.compatApiVersion > fwVer) {
            throw new PixelIncompatibleMessageError(this, getMessageType(msgOrType), Constants.compatApiVersion, fwVer, "library");
        }
        const fwCompatVer = this._versions.compatStandardApiVersion;
        if (fwCompatVer > 0 && Constants.apiVersion < fwCompatVer) {
            throw new PixelIncompatibleMessageError(this, getMessageType(msgOrType), Constants.apiVersion, fwCompatVer, "firmware");
        }
        // Deserialize message
        const data = serializeMessage(msgOrType);
        if (this._logData) {
            this._logArray(data);
        }
        // And send it
        await this._session.writeValue(data, withoutAck);
        this._evEmitter.emit("messageSend", msgOrType);
    }
    /**
     * Sends a message to the Pixel and wait for a specific response.
     * @param msgOrTypeToSend Message with the data to send or just a message type.
     * @param responseType Expected response type.
     * @param timeoutMs Timeout in mill-seconds before aborting waiting for the response.
     * @returns A promise resolving to the response in the form of a message type or a message object.
     */
    async sendAndWaitForResponse(msgOrTypeToSend, responseType, timeoutMs = Constants.ackMessageTimeout) {
        // Get the session object, throws an error if invalid
        const result = await Promise.all([
            this.waitForMessage(responseType, timeoutMs),
            this.sendMessage(msgOrTypeToSend),
        ]);
        return result[0];
    }
    /**
     * Sends a message to the Pixel and wait for a specific response
     * which is returned casted to the expected type.
     * @param msgOrTypeToSend Message with the data to send or just a message type.
     * @param responseType Expected response class type.
     * @param responseType Expected response type.
     * @returns A promise resolving to a message object of the expected type.
     */
    async sendAndWaitForTypedResponse(msgOrTypeToSend, responseType, timeoutMs = Constants.ackMessageTimeout) {
        // Get the session object, throws an error if invalid
        return (await this.sendAndWaitForResponse(msgOrTypeToSend, getMessageType(new responseType().type), timeoutMs));
    }
    /**
     * Requests the Pixel to change its name.
     * @param name New name to assign to the Pixel. Must have at least one character.
     * @returns A promise that resolves once the die has confirmed being renamed.
     */
    async rename(name) {
        // Skip sending message if name is empty
        if (!name.length) {
            throw new PixelEmptyNameError(this);
        }
        await this.sendAndWaitForResponse(safeAssign(new SetName(), { name }), "setNameAck");
        this._updateName(name);
    }
    /**
     * Requests the Pixel to start faces calibration sequence.
     * @returns A promise that resolves once the message has been send.
     */
    async startCalibration() {
        await this.sendMessage("calibrate");
    }
    /**
     * Requests the Pixel to regularly send its measured RSSI value.
     * @param activate Whether to turn or turn off this feature.
     * @param minInterval The minimum time interval in milliseconds
     *                    between two RSSI updates.
     * @returns A promise that resolves once the message has been send.
     */
    async reportRssi(activate, minInterval = 5000) {
        await this.sendMessage(safeAssign(new RequestRssi(), {
            requestMode: activate
                ? TelemetryRequestModeValues.automatic
                : TelemetryRequestModeValues.off,
            minInterval,
        }));
    }
    /**
     * Asynchronously gets the battery state.
     * @returns A promise revolving to an object with the batter level in
     *          percentage and flag indicating whether it is charging or not.
     */
    async queryRssi() {
        const rssi = (await this.sendAndWaitForResponse(safeAssign(new RequestRssi(), {
            requestMode: TelemetryRequestModeValues.once,
        }), "rssi"));
        return rssi.value;
    }
    /**
     * Requests the Pixel to completely turn off.
     * @returns A promise that resolves once the message has been send.
     */
    async turnOff() {
        await this.sendMessage(safeAssign(new PowerOperation(), {
            operation: PixelPowerOperationValues.turnOff,
        }), true // withoutAck
        );
    }
    /**
     * Requests the Pixel to blink and wait for a confirmation.
     * @param color Blink color.
     * @param opt.count Number of blinks.
     * @param opt.duration Total duration of the animation in milliseconds.
     * @param opt.fade Amount of in and out fading, 0: sharp transition, 1: maximum fading.
     * @param opt.faceMask Select which faces to light up.
     * @param opt.loopCount How many times to loop the animation.
     * @returns A promise that resolves once the die has confirmed receiving the message.
     */
    async blink(color, opt) {
        var _a, _b, _c, _d, _e;
        const blinkMsg = safeAssign(new Blink(), {
            color: toColor32(color),
            count: (_a = opt === null || opt === void 0 ? void 0 : opt.count) !== null && _a !== void 0 ? _a : 1,
            duration: (_b = opt === null || opt === void 0 ? void 0 : opt.duration) !== null && _b !== void 0 ? _b : 1000,
            fade: 255 * ((_c = opt === null || opt === void 0 ? void 0 : opt.fade) !== null && _c !== void 0 ? _c : 0),
            faceMask: (_d = opt === null || opt === void 0 ? void 0 : opt.faceMask) !== null && _d !== void 0 ? _d : AnimConstants.faceMaskAll,
            loopCount: (_e = opt === null || opt === void 0 ? void 0 : opt.loopCount) !== null && _e !== void 0 ? _e : 1,
        });
        await this.sendAndWaitForResponse(blinkMsg, "blinkAck");
    }
    /**
     * Requests the Pixel to stop all currently playing animations.
     * @returns A promise.
     */
    async stopAllAnimations() {
        await this.sendMessage("stopAllAnimations");
    }
    /**
     * Uploads the given data set of animations to the Pixel flash memory.
     * @param dataSet The data set to upload.
     * @param progressCallback An optional callback that is called as the operation progresses
     *                         with the progress in percent..
     * @returns A promise that resolves once the transfer has completed.
     */
    async transferDataSet(dataSet, progressCallback) {
        const notifyProgress = (progress) => {
            try {
                this._evEmitter.emit("dataTransfer", { progress });
                progressCallback === null || progressCallback === void 0 ? void 0 : progressCallback(progress);
            }
            catch (error) {
                console.log(this._tagLogString(`Error in transfer progress callback: ${error}`));
            }
        };
        try {
            // Notify that we're starting
            notifyProgress(0);
            const transferMsg = safeAssign(new TransferAnimationSet(), {
                paletteSize: dataSet.animationBits.getPaletteSize(),
                rgbKeyFrameCount: dataSet.animationBits.getRgbKeyframeCount(),
                rgbTrackCount: dataSet.animationBits.getRgbTrackCount(),
                keyFrameCount: dataSet.animationBits.getKeyframeCount(),
                trackCount: dataSet.animationBits.getTrackCount(),
                animationCount: dataSet.animations.length,
                animationSize: dataSet.animations.reduce((acc, anim) => acc + byteSizeOf(anim), 0),
                conditionCount: dataSet.conditions.length,
                conditionSize: dataSet.conditions.reduce((acc, cond) => acc + byteSizeOf(cond), 0),
                actionCount: dataSet.actions.length,
                actionSize: dataSet.actions.reduce((acc, action) => acc + byteSizeOf(action), 0),
                ruleCount: dataSet.rules.length,
            });
            const transferAck = await this.sendAndWaitForTypedResponse(transferMsg, TransferAnimationSetAck);
            if (transferAck.result) {
                // Upload data
                const data = dataSet.toByteArray();
                assert(data.length === dataSet.computeDataSetByteSize(), "Incorrect computation of computeDataSetByteSize()");
                const hash = DataSet.computeHash(data);
                const hashStr = (hash >>> 0)
                    .toString(16)
                    .toUpperCase()
                    .padStart(8, "0");
                this._log("Ready to receive dataset, " +
                    `byte array should be ${data.length} bytes ` +
                    `and hash 0x${hashStr}`);
                await this.uploadBulkDataWithAck("transferAnimationSetFinished", data, notifyProgress);
                // Notify profile hash
                this._evEmitter.emit("profileHash", hash);
            }
            else {
                const dataSize = dataSet.computeDataSetByteSize();
                throw new PixelError(this, `Not enough memory to transfer ${dataSize} bytes`);
            }
        }
        catch (error) {
            notifyProgress(-1);
            throw error;
        }
    }
    /**
     * Plays the (single) LEDs animation included in the given data set.
     * @param dataSet The data set containing just one animation to play.
     * @param progressCallback An optional callback that is called as the operation progresses
     *                         with the progress in percent..
     * @returns A promise that resolves once the transfer has completed.
     */
    async playTestAnimation(dataSet, progressCallback) {
        assert(dataSet.animations.length >= 1, "No animation in DataSet");
        // Notify that we're starting
        progressCallback === null || progressCallback === void 0 ? void 0 : progressCallback(0);
        // Prepare the Pixel
        const data = dataSet.toAnimationsByteArray();
        const hash = DataSet.computeHash(data);
        const prepareDie = safeAssign(new TransferTestAnimationSet(), {
            paletteSize: dataSet.animationBits.getPaletteSize(),
            rgbKeyFrameCount: dataSet.animationBits.getRgbKeyframeCount(),
            rgbTrackCount: dataSet.animationBits.getRgbTrackCount(),
            keyFrameCount: dataSet.animationBits.getKeyframeCount(),
            trackCount: dataSet.animationBits.getTrackCount(),
            animationCount: dataSet.animations.length,
            animationSize: dataSet.animations.reduce((acc, anim) => acc + byteSizeOf(anim), 0),
            hash,
        });
        const ack = await this.sendAndWaitForTypedResponse(prepareDie, TransferTestAnimationSetAck);
        switch (ack.ackType) {
            case TransferInstantAnimationsSetAckTypeValues.download:
                {
                    // Upload data
                    const hashStr = (hash >>> 0)
                        .toString(16)
                        .toUpperCase()
                        .padStart(8, "0");
                    this._log("Ready to receive test dataset, " +
                        `byte array should be: ${data.length} bytes ` +
                        `and hash 0x${hashStr}`);
                    await this.uploadBulkDataWithAck("transferTestAnimationSetFinished", data, progressCallback);
                }
                break;
            case TransferInstantAnimationsSetAckTypeValues.upToDate:
                // Nothing to do
                this._log("Test animation is already up-to-date");
                break;
            default:
                throw new PixelError(this, `Got unknown ackType: ${ack.ackType}`);
        }
    }
    /**
     * Uploads the given data set of animations to the Pixel RAM memory.
     * Those animations are lost when the Pixel goes to sleep, is turned off or is restarted.
     * @param dataSet The data set to upload.
     * @param progressCallback An optional callback that is called as the operation progresses
     *                         with the progress in percent..
     * @returns A promise that resolves once the transfer has completed.
     */
    async transferInstantAnimations(dataSet, progressCallback) {
        assert(dataSet.animations.length >= 1, "No animation in DataSet");
        // Notify that we're starting
        progressCallback === null || progressCallback === void 0 ? void 0 : progressCallback(0);
        // Prepare the Pixel
        const data = dataSet.toAnimationsByteArray();
        const hash = DataSet.computeHash(data);
        const prepareDie = safeAssign(new TransferInstantAnimationSet(), {
            paletteSize: dataSet.animationBits.getPaletteSize(),
            rgbKeyFrameCount: dataSet.animationBits.getRgbKeyframeCount(),
            rgbTrackCount: dataSet.animationBits.getRgbTrackCount(),
            keyFrameCount: dataSet.animationBits.getKeyframeCount(),
            trackCount: dataSet.animationBits.getTrackCount(),
            animationCount: dataSet.animations.length,
            animationSize: dataSet.animations.reduce((acc, anim) => acc + byteSizeOf(anim), 0),
            hash,
        });
        const ack = await this.sendAndWaitForTypedResponse(prepareDie, TransferInstantAnimationSetAck);
        switch (ack.ackType) {
            case TransferInstantAnimationsSetAckTypeValues.download:
                {
                    // Upload data
                    const hashStr = (hash >>> 0)
                        .toString(16)
                        .toUpperCase()
                        .padStart(8, "0");
                    this._log("Ready to receive instant animations, " +
                        `byte array should be: ${data.length} bytes ` +
                        `and hash 0x${hashStr}`);
                    await this.uploadBulkDataWithAck("transferInstantAnimationSetFinished", data, progressCallback);
                }
                break;
            case TransferInstantAnimationsSetAckTypeValues.upToDate:
                // Nothing to do
                this._log("Instant animations are already up-to-date");
                break;
            default:
                throw new PixelError(this, `Got unknown ackType: ${ack.ackType}`);
        }
    }
    /**
     * Plays the instant animation at the given index.
     * See @see transferInstantAnimations().
     * @param animIndex The index of the instant animation to play.
     * @returns A promise that resolves once the message has been send.
     */
    async playInstantAnimation(animIndex) {
        await this.sendMessage(safeAssign(new PlayInstantAnimation(), { animation: animIndex }));
    }
    _tagLogString(str) {
        return `[${_getTime()} - ${this.name}] ${str}`;
    }
    // Log the given message prepended with a timestamp and the Pixel name
    _log(msg) {
        if (this._logFunc) {
            this._logFunc(this._tagLogString((msg === null || msg === void 0 ? void 0 : msg.type) ? JSON.stringify(msg) : String(msg)));
        }
    }
    _logArray(arr) {
        if (this._logFunc) {
            this._logFunc(this._tagLogString(`${[...new Uint8Array(arr)]
                .map((b) => (b >>> 0).toString(16).padStart(2, "0"))
                .join(":")}`));
        }
    }
    async _internalSetup() {
        var _a, _b, _c;
        // Reset version numbers
        let verProp;
        for (verProp in this._versions) {
            this._versions[verProp] = 0;
        }
        // Subscribe to get messages from die
        await this._session.subscribe((dv) => this._onValueChanged(dv));
        // Identify Pixel
        this._log("Waiting on identification message");
        const iAmADie = (await this.sendAndWaitForResponse("whoAreYou", "iAmADie"));
        // Check Pixel id
        const pixelId = (_a = iAmADie.pixelId) !== null && _a !== void 0 ? _a : (_b = iAmADie.dieInfo) === null || _b === void 0 ? void 0 : _b.pixelId;
        if (!pixelId) {
            // This should never happen
            throw new PixelConnectError(this, "Got an empty Pixel id");
        }
        if (!this._info.pixelId) {
            this._info.pixelId = pixelId;
            this.emitPropertyEvent("pixelId");
        }
        else if (this._info.pixelId !== pixelId) {
            throw new PixelConnectIdMismatchError(this, pixelId);
        }
        const setProperties = (info) => {
            var _a, _b, _c;
            this._updateLedCount(info.ledCount);
            this._updateColorway((_a = getValueKeyName(info.colorway, PixelColorwayValues)) !== null && _a !== void 0 ? _a : "unknown");
            const dieType = (_b = getValueKeyName(info.dieType, PixelDieTypeValues)) !== null && _b !== void 0 ? _b : "unknown";
            this._updateDieType(dieType !== "unknown"
                ? dieType
                : // Try to guess the die type if we got "unknown" from the message
                    DiceUtils.estimateDieType(this.ledCount));
            this._updateFirmwareDate(1000 * info.buildTimestamp);
            this._updateBattery(info.batteryLevelPercent, isPixelChargingOrDone(info.batteryState));
            this._updateRoll((_c = getValueKeyName(info.rollState, PixelRollStateValues)) !== null && _c !== void 0 ? _c : "unknown", info.currentFaceIndex);
        };
        if (iAmADie instanceof LegacyIAmADie) {
            // Update properties
            setProperties(iAmADie);
            // Set versions
            const legacyVersion = 0x100;
            this._versions.firmwareVersion = legacyVersion;
            this._versions.settingsVersion = legacyVersion;
            this._versions.compatStandardApiVersion = legacyVersion;
            this._versions.compatExtendedApiVersion = legacyVersion;
            this._versions.compatManagementApiVersion = legacyVersion;
        }
        else {
            // Update properties
            setProperties(Object.assign(Object.assign(Object.assign({}, iAmADie.dieInfo), iAmADie.versionInfo), iAmADie.statusInfo));
            // Store versions
            for (verProp in this._versions) {
                this._versions[verProp] = iAmADie.versionInfo[verProp];
            }
            // Update name
            this._updateName(iAmADie.dieName.name);
        }
        // Notify profile hash
        const profileDataHash = (_c = iAmADie.dataSetHash) !== null && _c !== void 0 ? _c : iAmADie.settingsInfo.profileDataHash;
        this._evEmitter.emit("profileHash", profileDataHash);
    }
    _updateStatus(status) {
        if (status !== this._status) {
            this._status = status;
            this._log(`Status changed to ${status}`);
            this._evEmitter.emit("status", status); // TODO pass this as first argument to listener
        }
    }
    _updateName(name) {
        if (name.length && name !== this._info.name) {
            this._info.name = name;
            this.emitPropertyEvent("name");
        }
    }
    _updateLedCount(ledCount) {
        if (this._info.ledCount !== ledCount) {
            this._info.ledCount = ledCount;
            this.emitPropertyEvent("ledCount");
        }
    }
    _updateColorway(colorway) {
        if (this._info.colorway !== colorway) {
            this._info.colorway = colorway;
            this.emitPropertyEvent("colorway");
        }
    }
    _updateDieType(dieType) {
        if (this._info.dieType !== dieType) {
            this._info.dieType = dieType;
            this.emitPropertyEvent("dieType");
        }
    }
    _updateFirmwareDate(firmwareTime) {
        if (firmwareTime && firmwareTime !== this._info.firmwareDate.getTime()) {
            this._info.firmwareDate = new Date(firmwareTime);
            this.emitPropertyEvent("firmwareDate");
        }
    }
    _updateRssi(rssi) {
        if (rssi && rssi !== this._info.rssi) {
            this._info.rssi = rssi;
            this.emitPropertyEvent("rssi");
            this._evEmitter.emit("rssi", rssi);
        }
    }
    _updateBattery(level, isCharging) {
        const levelChanged = level !== undefined && this._info.batteryLevel !== level;
        const chargingChanged = isCharging !== undefined && this._info.isCharging !== isCharging;
        if (levelChanged) {
            this._info.batteryLevel = level;
            this.emitPropertyEvent("batteryLevel");
        }
        if (chargingChanged) {
            this._info.isCharging = isCharging;
            this.emitPropertyEvent("isCharging");
        }
        if (levelChanged || chargingChanged) {
            this._evEmitter.emit("battery", {
                level: level !== null && level !== void 0 ? level : this.batteryLevel,
                isCharging: isCharging !== null && isCharging !== void 0 ? isCharging : this.isCharging,
            });
        }
    }
    _createRollEvent(state, faceIndex) {
        if (this.dieType === "d4") {
            // TODO fix for D4 rolling as D6
            if (faceIndex === 1 || faceIndex === 4) {
                // Those faces are not valid for a D4, reuse last valid face instead
                faceIndex = DiceUtils.indexFromFace(this.currentFace > 0 ? this.currentFace : 1, "d4");
                if (state === "onFace") {
                    state = "crooked";
                }
            }
        }
        // Convert face index to face value
        const face = DiceUtils.faceFromIndex(faceIndex, this.dieType);
        return { state, face, faceIndex };
    }
    _updateRoll(state, faceIndex) {
        const ev = this._createRollEvent(state, faceIndex);
        const stateChanged = this._info.rollState !== ev.state;
        const faceChanged = this._info.currentFaceIndex !== ev.faceIndex;
        this._info.rollState = ev.state;
        this._info.currentFace = ev.face;
        if (stateChanged) {
            this.emitPropertyEvent("rollState");
        }
        if (faceChanged) {
            this.emitPropertyEvent("currentFace");
        }
        // Notify all die roll events
        const emitRoll = ev.state === "onFace" ? ev.face : undefined;
        this._evEmitter.emit("rollState", ev);
        if (emitRoll !== undefined) {
            this._evEmitter.emit("roll", emitRoll);
        }
    }
    // Callback on notify characteristic value change
    _onValueChanged(dataView) {
        try {
            if (this._logData) {
                this._logArray(dataView.buffer);
            }
            const msgOrType = dataView.byteLength &&
                dataView.getUint8(0) === MessageTypeValues.iAmADie &&
                dataView.byteLength !== LegacyIAmADie.expectedSize
                ? this._deserializeImADie(dataView)
                : deserializeMessage(dataView);
            if (msgOrType) {
                const msgName = getMessageType(msgOrType);
                if (this._logMessages) {
                    this._log(`Received message ${msgName} (${MessageTypeValues[msgName]})`);
                    if (typeof msgOrType === "object") {
                        // Log message contents
                        this._log(msgOrType);
                    }
                }
                // Dispatch generic message event
                this._evEmitter.emit("message", msgOrType);
                // Dispatch specific message event
                this._msgEvEmitter.emit(`${msgName}Message`, msgOrType);
            }
            else {
                this._log("Received invalid message");
            }
        }
        catch (error) {
            this._log(`Message deserialization error: ${error}`);
            // TODO the error should be propagated to listeners of that message
        }
    }
    _deserializeImADie(dataView) {
        assert(dataView.getUint8(0) === MessageTypeValues.iAmADie);
        const msg = new IAmADie();
        let offset = 1;
        for (const [key, value] of Object.entries(msg)) {
            if (key !== "type") {
                assert(typeof value === "object" && "chunkSize" in value);
                const dataSize = dataView.getUint8(offset);
                if (value.chunkSize > 0 && dataSize !== value.chunkSize) {
                    console.log(this._tagLogString(`Received IAmADie '${key}' chunk of size ${dataSize} but expected ${value.chunkSize} bytes`));
                }
                deserialize(value, new DataView(dataView.buffer, dataView.byteOffset + offset, value.chunkSize === 0
                    ? dataSize
                    : Math.min(dataSize, value.chunkSize)), { allowSkipLastProps: true });
                offset += dataSize;
            }
        }
        return msg;
    }
    /**
     * Upload the given data to the Pixel.
     * @param ackType The expected confirmation message type.
     * @param data The data to send.
     * @param progressCallback An optional callback that is called as the operation progresses
     *                         with the progress in percent..
     * @param progressMode Whether to notify progress in percent or bytes.
     * @returns A promise that resolves once the transfer has completed.
     */
    async uploadBulkDataWithAck(ackType, data, progressCallback, progressMode = "percent") {
        let programmingFinished = false;
        let stopWaiting;
        const onFinished = () => {
            programmingFinished = true;
            if (stopWaiting) {
                stopWaiting();
                stopWaiting = undefined;
            }
        };
        this.addMessageListener(ackType, onFinished);
        try {
            await this._uploadBulkData(data, progressCallback, progressMode);
            this._log("Done sending dataset, waiting for Pixel to finish programming");
            const promise = new Promise((resolve, reject) => {
                if (programmingFinished) {
                    // Programming may already be finished
                    resolve();
                }
                else {
                    const timeoutId = setTimeout(() => {
                        reject(new PixelError(this, "Timeout waiting on device to confirm programming"));
                    }, Constants.ackMessageTimeout);
                    stopWaiting = () => {
                        clearTimeout(timeoutId);
                        resolve();
                    };
                }
            });
            await promise;
            this._log("Programming done");
        }
        finally {
            this.removeMessageListener(ackType, onFinished);
        }
    }
    // Upload the given data to the Pixel
    async _uploadBulkData(data, progressCallback, progressMode = "percent") {
        let remainingSize = data.byteLength;
        this._log(`Sending ${remainingSize} bytes of bulk data`);
        // Send setup message
        const setupMsg = new BulkSetup();
        setupMsg.size = remainingSize;
        await this.sendAndWaitForResponse(setupMsg, "bulkSetupAck");
        this._log("Ready for receiving data");
        // TODO update upload state => progressCallback?.("starting");
        // Then transfer data
        let lastProgress = 0;
        let offset = 0;
        const dataMsg = new BulkData();
        while (remainingSize > 0) {
            dataMsg.offset = offset;
            dataMsg.size = Math.min(remainingSize, Constants.maxMessageSize);
            dataMsg.data = data.slice(offset, offset + dataMsg.size);
            await this.sendAndWaitForResponse(dataMsg, "bulkDataAck");
            remainingSize -= dataMsg.size;
            offset += dataMsg.size;
            if (progressCallback) {
                const progress = progressMode === "percent"
                    ? Math.round((100 * offset) / data.byteLength)
                    : offset;
                if (progress > lastProgress) {
                    progressCallback(progress);
                    lastProgress = progress;
                }
            }
        }
        this._log("Finished sending bulk data");
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-connect/dist/esm/PixelBleUuids.js
/**
 * Bluetooth UUIDs related to Pixels peripherals.
 * @category Pixels
 */
const PixelBleUuids = {
    /** Pixel dice service UUID. */
    service: "6e400001-b5a3-f393-e0a9-e50e24dcca9e",
    /** Pixel dice notify characteristic UUID. */
    notifyCharacteristic: "6e400001-b5a3-f393-e0a9-e50e24dcca9e",
    /** Pixel dice write characteristic UUID. */
    writeCharacteristic: "6e400002-b5a3-f393-e0a9-e50e24dcca9e",
    /** The short UUID of the Nordic's DFU service. */
    dfuService: 0xfe59,
};

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-connect/dist/esm/PixelSession.js
/**
 * Represents a session with a Pixel die.
 * This class is used to abstract the underlying platform used to connect to Pixels.
 * @category PixelSession
 */
class PixelSession {
    /**
     * Instantiates a session with a Pixel.
     * No attempt is made to connect to the die at this point.
     * @param systemId The peripheral system id (as assigned by the OS).
     */
    constructor(systemId) {
        this._systemId = systemId;
        this._lastConnStatus = "disconnected";
    }
    /** Gets the peripheral system id (as assigned by the OS). */
    get systemId() {
        return this._systemId;
    }
    /** Gets the last known connection status. */
    get lastConnectionStatus() {
        return this._lastConnStatus;
    }
    /**
     * Sets the function to be called when the Pixel connection status changes.
     * @param connectionStatusListener The function called when the Pixel connection status changes.
     */
    setConnectionEventListener(connectionStatusListener) {
        this._connStatusCb = connectionStatusListener;
    }
    _notifyConnectionEvent(connectionStatus) {
        var _a;
        if (this._lastConnStatus !== connectionStatus) {
            this._lastConnStatus = connectionStatus;
            (_a = this._connStatusCb) === null || _a === void 0 ? void 0 : _a.call(this, {
                systemId: this._systemId,
                connectionStatus,
            });
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-connect/dist/esm/exponentialBackOff.js

/**
 * Repeatedly calls the executor until the later returns a resolved promise
 * or it has reached the maximum number or retries.
 * A retry is attempted after getting an exception from the executor and once
 * past the given delay (starting at the time of the exception).
 *
 * @param retries Maximum number of retries.
 * @param delayMs Delay in milliseconds between getting an exception and attempting a retry.
 * @param executor The function to run. It should return a promise and raise an exception
 *                 if there unsuccessful.
 * @param opt.onResolved Called with the value returned by the resolved promise.
 * @param opt.onRejected Called when all retries have failed.
 * @param opt.onWillRetry Called before scheduling a retry.
 */
async function exponentialBackOff(retries, delayMs, executor, opt) {
    var _a, _b, _c;
    try {
        const result = await executor();
        (_a = opt === null || opt === void 0 ? void 0 : opt.onResolved) === null || _a === void 0 ? void 0 : _a.call(opt, result);
    }
    catch (error) {
        if (retries !== 0) {
            (_b = opt === null || opt === void 0 ? void 0 : opt.onWillRetry) === null || _b === void 0 ? void 0 : _b.call(opt, delayMs, retries, error);
            await delay(delayMs);
            await exponentialBackOff(retries - 1, delayMs * 2, executor, opt);
        }
        else {
            (_c = opt === null || opt === void 0 ? void 0 : opt.onRejected) === null || _c === void 0 ? void 0 : _c.call(opt, error);
            throw error;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-connect/dist/esm/repeatConnect.js

/**
 * Repeatedly attempts to connect a Pixel die using an exponential back off
 * strategy. It stops trying to connect once it has reached the given number
 * of retries.
 *
 * We recommend using this function to connect to a Pixel rather than calling
 * directly the {@link Pixel.connect} function.
 *
 * @see
 * Auto-reconnect code provided by Google:
 * https://googlechrome.github.io/samples/web-bluetooth/automatic-reconnect-async-await.html
 *
 * @param pixel The Pixel to connect to.
 * @param opt.retries Number of retries before aborting.
 * @param opt.onWillRetry Called before scheduling a retry.
 *
 * @remarks By default it will attempt to connect up to 3 times.
 *
 * @category Pixels
 */
async function repeatConnect(pixel, opt) {
    var _a;
    await exponentialBackOff((_a = opt === null || opt === void 0 ? void 0 : opt.retries) !== null && _a !== void 0 ? _a : 2, 2000, pixel.connect.bind(pixel), opt);
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-connect/dist/esm/toFullUuid.js
/**
 * Converts a 16 bits Bluetooth LE UUID to a full 128 bit UUID.
 * @param shortUuid A short BLE UUID (16 bits).
 * @returns A 128 bits UUID as a string.
 */
function toFullUuid(shortUuid) {
    return ((shortUuid & 0xffffffff).toString(16).padStart(8, "0") +
        "-0000-1000-8000-00805f9b34fb");
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-core-connect/dist/esm/index.js











;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-web-connect/dist/esm/PixelsDevices.js

const _devices = new Map();
/** Singleton that manages a list of Bluetooth devices for Pixels. */
const PixelsDevices = {
    /**
     * Request the user to select a Bluetooth device among a list of
     * scanned Pixels dice.
     * @returns A promise resolving to a BluetoothDevice for a Pixel.
     */
    requestDevice: async () => {
        var _a;
        if (!((_a = navigator === null || navigator === void 0 ? void 0 : navigator.bluetooth) === null || _a === void 0 ? void 0 : _a.requestDevice)) {
            throw new Error("Bluetooth is not available, check that you're running in a secure environment" +
                " and that Web Bluetooth is enabled.");
        }
        // Request user to select a Pixel
        const device = await navigator.bluetooth.requestDevice({
            filters: [{ services: [PixelBleUuids.service] }],
        });
        _devices.set(device.id, device);
        return device;
    },
    /**
     * Returns the Bluetooth device for a Pixels die that's been previously
     * requested with {@link requestDevice}
     * @param id The unique id of the Bluetooth device as assigned by the system.
     * @returns The corresponding BluetoothDevice if found, or undefined.
     */
    getKnownDevice: (id) => {
        return _devices.get(id);
    },
    /**
     * Returns the Bluetooth device for a Pixels die that's been previously
     * authorized by the user in this or previous browser sessions.
     * @param id The unique id of the Bluetooth device as assigned by the system.
     * @returns The corresponding BluetoothDevice if found, or undefined.
     */
    getDevice: async (id) => {
        var _a;
        let device = _devices.get(id);
        if (!device && ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.bluetooth) === null || _a === void 0 ? void 0 : _a.getDevices)) {
            const authorizedDevices = await navigator.bluetooth.getDevices();
            device = authorizedDevices.find((d) => d.id === id);
            if (device) {
                _devices.set(device.id, device);
            }
        }
        return device;
    },
};

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-web-connect/dist/esm/BleSession.js


class BluetoothError extends Error {
    constructor(message) {
        super(message);
        this.name = "BluetoothError";
    }
}
class ScanTimeoutError extends Error {
    constructor(message) {
        super(message);
        this.name = "ScanTimeoutError";
    }
}
async function scanForDevice(device) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            abortController.abort();
            reject(new ScanTimeoutError());
        }, 5000);
        const abortController = new AbortController();
        device.addEventListener("advertisementreceived", () => {
            clearTimeout(timeoutId);
            abortController.abort();
            resolve();
        });
        device
            .watchAdvertisements({
            signal: abortController.signal,
        })
            .catch((error) => reject(error));
    });
}
class BleSessionError extends Error {
    constructor(message) {
        super(message);
        this.name = "BleSessionError";
    }
}
/**
 * Represents a Bluetooth session with a Pixel die,
 * using Web Bluetooth.
 */
class BleSession extends PixelSession {
    constructor(systemId) {
        super(systemId);
        const device = PixelsDevices.getKnownDevice(systemId);
        if (!device) {
            throw new BleSessionError(`No known Bluetooth device with system id: ${systemId}`);
        }
        this._device = device;
        this._name = this._device.name;
    }
    get pixelName() {
        return this._name;
    }
    async connect() {
        var _a;
        // Update name
        this._name = this._device.name;
        // Subscribe to disconnect event
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const mySession = this;
        this._device.addEventListener("gattserverdisconnected", ( /*ev: Event*/) => {
            // let reason: ConnectionEventReason = ConnectionEventReasonValues.Success;
            // if (this._connected) {
            //   // Disconnect not called by user code
            //   reason = this._reconnect
            //     ? ConnectionEventReasonValues.LinkLoss
            //     : ConnectionEventReasonValues.Timeout;
            // }
            // Notify disconnection
            mySession._notifyConnectionEvent("disconnected");
        });
        const server = this._device.gatt;
        if (!server) {
            throw new BluetoothError("Gatt server not available");
        }
        if (!server.connected) {
            try {
                // Attempt to connect
                this._notifyConnectionEvent("connecting");
                await server.connect();
            }
            catch (error) {
                let lastError = error;
                if (
                //@ts-ignore watchAdvertisements() may not exist
                this._device.watchAdvertisements &&
                    ((_a = lastError === null || lastError === void 0 ? void 0 : lastError.message) === null || _a === void 0 ? void 0 : _a.includes("no longer in range"))) {
                    // Connection possibly failed because device was never scanned
                    try {
                        await scanForDevice(this._device);
                        await server.connect();
                        lastError = undefined;
                    }
                    catch (error) {
                        if (!(error instanceof ScanTimeoutError)) {
                            lastError = error;
                        }
                    }
                }
                if (lastError) {
                    mySession._notifyConnectionEvent("disconnected");
                    throw lastError;
                }
            }
            // Get Pixel service and characteristics
            this._notifyConnectionEvent("connected");
            const service = await server.getPrimaryService(PixelBleUuids.service);
            this._notify = await service.getCharacteristic(PixelBleUuids.notifyCharacteristic);
            this._write = await service.getCharacteristic(PixelBleUuids.writeCharacteristic);
        }
        // Note: always notify the ready state so a new status listener will
        //       get the notification if even the device was already connected.
        this._notifyConnectionEvent("ready");
    }
    async disconnect() {
        var _a;
        (_a = this._device.gatt) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    async subscribe(listener) {
        if (!this._notify) {
            throw new BleSessionError("Not connected");
        }
        function internalListener() {
            var _a, _b;
            if ((_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.buffer) === null || _b === void 0 ? void 0 : _b.byteLength) {
                listener(this.value);
            }
        }
        const notifyCharac = this._notify;
        notifyCharac.addEventListener("characteristicvaluechanged", internalListener);
        await notifyCharac.startNotifications();
        return () => {
            notifyCharac.removeEventListener("characteristicvaluechanged", internalListener);
        };
    }
    async writeValue(data, withoutResponse, _timeoutMs // Default is Constants.defaultRequestTimeout
    ) {
        if (!this._write) {
            throw new BleSessionError("Not connected");
        }
        if (withoutResponse) {
            await this._write.writeValueWithoutResponse(data);
        }
        else {
            await this._write.writeValueWithResponse(data);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-web-connect/dist/esm/pixels.js



const _pixels = new Map();
function getOrCreatePixel(device) {
    // Keep Pixel instances
    let pixel = _pixels.get(device.id);
    if (!pixel) {
        const session = new BleSession(device.id);
        pixel = new Pixel(session);
        _pixels.set(device.id, pixel);
    }
    return pixel;
}
/**
 * Request the user to select a Pixels die to connect to.
 * When supported the browser will display the list of Pixels dice
 * that are currently available to be connected to.
 *
 * The same {@link Pixel} instance is returned if the a die is selected
 * again.
 *
 * @returns A promise that resolves to a {@link Pixel} instance.
 *
 * @remarks
 * - See {@link getBluetoothCapabilities} to check Bluetooth availability.
 * - See {@link getPixel} to directly get the instance of a Pixels die
 *   previously authorized the user.
 *
 * @category Pixels
 */
async function requestPixel() {
    const device = await PixelsDevices.requestDevice();
    return getOrCreatePixel(device);
}
/**
 * Returns the {@link Pixel} instance corresponding to the given system id.
 * The latter is assigned by the system to Bluetooth devices,
 * see {@link Pixel.systemId}.
 *
 * This function doesn't check the actual availability nor the connection state
 * of the die. The later might be turned off, available or already connected.
 *
 * As of Chrome 122, only Pixels dice authorized by the user during the current
 * browser session may be returned.
 *
 * With the "Use the new permissions backend for Web Bluetooth" flag enabled in
 * Chrome, Pixels dice authorized by the user in previous browser sessions (and
 * not revoked since) will also be returned.
 * To enable this flag, open the following address in Chrome:
 * `chrome://flags/#enable-web-bluetooth-new-permissions-backend` and toggle the flag
 * to `Enabled`.
 *
 * The returned promise will resolve to undefined when there is no authorized
 * Pixel with the given system id.
 *
 * @param systemId A string assigned by the system that uniquely identifies
 *                 a Pixel die.
 * @returns
 * A promise that resolves to a {@link Pixel} instance if the Bluetooth device
 * was previously authorized, or undefined.
 *
 * @remarks
 * - See {@link getBluetoothCapabilities} to check Bluetooth availability and
 *   if the new permissions backend is enabled.
 * - See {@link requestPixel} to request the user to give access to a new Pixels
 *   die.
 *
 * @category Pixels
 */
async function getPixel(systemId) {
    const pixel = _pixels.get(systemId);
    if (pixel) {
        return pixel;
    }
    else {
        const device = await PixelsDevices.getDevice(systemId);
        return device ? getOrCreatePixel(device) : undefined;
    }
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-web-connect/dist/esm/getBluetoothCapabilities.js
/**
 * Check if Web Bluetooth is available in the current context and if Bluetooth
 * devices previously authorized by the user may be directly re-connected without
 * needing to prompt the user (see {@link getPixel}).
 * @returns A {@link BluetoothCapabilities} object.
 */
function getBluetoothCapabilities() {
    var _a, _b;
    return {
        bluetooth: !!((_a = navigator === null || navigator === void 0 ? void 0 : navigator.bluetooth) === null || _a === void 0 ? void 0 : _a.requestDevice),
        persistentPermissions: !!((_b = navigator === null || navigator === void 0 ? void 0 : navigator.bluetooth) === null || _b === void 0 ? void 0 : _b.getDevices),
    };
}

;// CONCATENATED MODULE: ./node_modules/@systemic-games/pixels-web-connect/dist/esm/index.js






/***/ }),

/***/ 7:
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ 741:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof __webpack_require__.g === "object" ? __webpack_require__.g :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process["env" + ""] && process["env" + ""]["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));


/***/ }),

/***/ 156:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
                                    const mergedResponseBody = (0, roll_executor_1.mergeRollResults)(localResponseBody, remoteResponseBody);
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
(0, ui_pixels_menu_1.setupPixelsMenu)()
    .then(() => {
    if (integration.isDebugEnabled()) {
        console.log("Pixels menu has been created.");
    }
})
    .catch((e) => {
    console.error("Error while setting up pixels menu.", e);
});


/***/ }),

/***/ 530:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

"use strict";

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
const mergeRollResults = (firstRollResult, secondRollResult) => {
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
    mergedResult.raw_dice.parts = [
        ...firstRollResult.raw_dice.parts,
        ...secondRollResult.raw_dice.parts,
    ];
    if ((0, integration_utils_1.isDebugEnabled)()) {
        console.log({
            firstRollResult,
            secondRollResult,
            mergeRollResults: exports.mergeRollResults,
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

"use strict";

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
const pixels_web_connect_1 = __webpack_require__(571);
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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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
            break;
        }
    }
    // Show the notification
    if (rollsExpectedNotification) {
        notificationParents[0].appendChild(rollsExpectedNotification);
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

"use strict";

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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