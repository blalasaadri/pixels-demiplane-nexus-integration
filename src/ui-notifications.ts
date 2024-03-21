import { isDebugEnabled } from "./integration-utils";
import { getTranslation } from "./translations";
import type { RollRequest } from "./types";

let rollsExpectedNotification: Element | undefined;

const getDiceSvg = (
	svgClass: string,
	width: number,
	height: number,
): Element | undefined => {
	const diceRollerGrids = unsafeWindow.document.getElementsByClassName(
		"dice-roller__dice-grid",
	);
	if (diceRollerGrids.length === 0) {
		if (isDebugEnabled()) {
			console.log(
				`No dice roller grid found, so no svg with class ${svgClass} could be found.`,
			);
		}
		return undefined;
	}

	const svgs = diceRollerGrids[0].getElementsByClassName(svgClass);
	if (svgs.length === 0) {
		if (isDebugEnabled()) {
			console.log(`No svg with class ${svgClass} could be found.`);
		}
		return undefined;
	}

	const svg = svgs[0].cloneNode(true) as Element;
	svg.setAttribute("width", `${width}`);
	svg.setAttribute("height", `${height}`);
	return svg;
};

const getD4Svg = (): Element | undefined => getDiceSvg("dice-d4", 28, 18);

const getD6Svg = (): Element | undefined => getDiceSvg("dice-fab-d6", 26, 18);

const getD8Svg = (): Element | undefined => getDiceSvg("dice-fab-d8", 22, 18);

const getD10Svg = (): Element | undefined => getDiceSvg("dice-fab-d10", 28, 18);

const getD12Svg = (): Element | undefined => getDiceSvg("dice-fab-d12", 28, 18);

const getD20Svg = (): Element | undefined => getDiceSvg("dice-fab-20", 26, 18);

export const addRollsExpectedNotification = (
	rollRequest: RollRequest,
): Element | undefined => {
	const notificationParents =
		unsafeWindow.document.getElementsByClassName("dice-roll-history");
	if (notificationParents.length === 0) {
		if (isDebugEnabled()) {
			console.log(
				"No dice roll history found to which a notification can be added.",
			);
		}
		return undefined;
	}
	const notificationTemplate = notificationParents[0].firstChild;
	if (!notificationTemplate) {
		if (isDebugEnabled()) {
			console.log(
				"The dice roll history is empty, no element can be cloned.",
				notificationParents[0],
			);
		}
		return undefined;
	}

	rollsExpectedNotification = notificationTemplate.cloneNode(true) as Element;

	const titleRow = rollsExpectedNotification.firstChild as Element;
	// Change the title of the new element
	const titleElement: Element = titleRow.firstChild as Element;
	const titleText = getTranslation("ui.awaitingPixelsRoll", "en");
	titleElement.innerHTML = titleText;

	// Remove the "Result" title from the titleRow
	const resultTitleElement = titleRow.lastChild;
	if (resultTitleElement) {
		titleRow.removeChild(resultTitleElement);
	}

	// Set the expected rolls
	const textRow = rollsExpectedNotification.children[1] as Element;
	const mainText = textRow.firstChild as Element;
	mainText.innerHTML = rollRequest.stringify(false, ", ");

	// Remove the "Result" element from the textRow
	const resultElement = textRow.lastChild;
	if (resultElement) {
		textRow.removeChild(resultElement);
	}

	// Set the remaining rolls
	const diceRollRow = rollsExpectedNotification.lastChild as Element;
	const diceRollParent = diceRollRow.getElementsByClassName(
		"dice-roll-details__dice",
	)[0];
	const newDiceRollIndicators: Node[] = [];
	for (const key in rollRequest) {
		if (!key.startsWith("_d")) {
			continue;
		}
		const getter = Object.getOwnPropertyDescriptor(rollRequest, key);
		if (getter?.value) {
			const diceIndicator = (diceRollParent.firstChild as Element).cloneNode(
				true,
			);
			let svg: Element | undefined;
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
				// TODO We don't yet have a case where d00s are expected
				case "_d12": {
					svg = getD12Svg();
					break;
				}
				case "_d20": {
					svg = getD20Svg();
					break;
				}
				// TODO We don't yet have a case where dFs are expected
				default: {
					console.error(`No svg for dice value ${key.substring(1)} known.`);
				}
			}
			if (svg) {
				const diceRollDetails = diceIndicator.firstChild as Element;
				diceRollDetails.removeChild(diceRollDetails.firstChild as ChildNode);

				diceRollDetails.setAttribute(
					"data-cy",
					`dice-roll-details-${key.substring(1)}-icon`,
				);
				(diceRollDetails.lastChild?.lastChild as Element).innerHTML =
					`${getter.value} x`;
				diceRollDetails.append(svg);
				newDiceRollIndicators.push(diceIndicator);
			}
		}
	}
	diceRollParent.replaceChildren(...newDiceRollIndicators);

	notificationParents[0].insertBefore(
		rollsExpectedNotification,
		notificationTemplate,
	);

	return rollsExpectedNotification;
};

export const removeRollsExpectedNotification = (
	element = rollsExpectedNotification,
): void => {
	if (!element) {
		if (isDebugEnabled()) {
			console.log("There is no rolls expected notification to be removed.");
		}
		return;
	}
	const notificationParents =
		unsafeWindow.document.getElementsByClassName("dice-roll-history");
	if (notificationParents.length === 0) {
		if (isDebugEnabled()) {
			console.log(
				"No dice roll history found from which a notification can be removed.",
			);
		}
	} else {
		if (isDebugEnabled()) {
			console.log("About to remove the rolls expected notification...");
		}
		notificationParents[0].removeChild(element);
	}
};
