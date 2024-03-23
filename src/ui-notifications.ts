import { characterSheetInfo, isDebugEnabled } from "./integration-utils";
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

const getRollDiceHistoryCssClass = (): string => {
	const { gameSystem } = characterSheetInfo();
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

export const addRollsExpectedNotification = (
	rollRequest: RollRequest,
): Element | undefined => {
	const { gameSystem } = characterSheetInfo();

	const notificationParents = unsafeWindow.document.getElementsByClassName(
		getRollDiceHistoryCssClass(),
	);
	if (notificationParents.length === 0) {
		if (isDebugEnabled()) {
			console.log(
				"No dice roll history found to which a notification can be added.",
			);
		}
		return undefined;
	}

	switch (gameSystem) {
		case "avatarlegends":
		case "pathfinder2e": {
			(() => {
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

				rollsExpectedNotification = notificationTemplate.cloneNode(
					true,
				) as Element;

				const titleRow = rollsExpectedNotification.firstChild as Element;
				// Change the title of the new element
				const titleElement: Element = titleRow.firstChild as Element;
				const titleText = getTranslation(
					"ui.notification.awaitingPixelsRoll",
					"en",
				);
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
						const diceIndicator = (
							diceRollParent.firstChild as Element
						).cloneNode(true);
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
								console.error(
									`No svg for dice value ${key.substring(1)} known.`,
								);
							}
						}
						if (svg) {
							const diceRollDetails = diceIndicator.firstChild as Element;
							diceRollDetails.removeChild(
								diceRollDetails.firstChild as ChildNode,
							);

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
			})();
			break;
		}
		case "daggerheart": {
			(() => {
				const notificationTemplate = notificationParents[0].lastChild;
				if (!notificationTemplate) {
					if (isDebugEnabled()) {
						console.log(
							"The dice roll history is empty, no element can be cloned.",
							notificationParents[0],
						);
					}
					return undefined;
				}

				rollsExpectedNotification = notificationTemplate.cloneNode(
					true,
				) as Element;

				// Remove the "With Hope" label if it's there
				rollsExpectedNotification.classList.remove(
					"dice-roller-history--roll-with-hope",
				);
				rollsExpectedNotification.classList.add(
					"dice-roller-history--awaiting-pixels-roll",
				);
				rollsExpectedNotification.setAttribute(
					"style",
					`
					background: linear-gradient(180deg, rgb(62, 172, 194) 0%, rgb(121, 62, 194) 25%, rgb(245, 58, 37) 50%, rgb(245, 241, 27) 75%, rgb(124, 207, 128));
					padding: 12px !important;
					position: relative;
					border-radius: 8px;
					border: 1px solid #888888;
					text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
				`,
				);

				// Now find and modify the inner container
				const diceHistoryExpandedContainer =
					rollsExpectedNotification.getElementsByClassName(
						"dice-history-expanded-container",
					);
				if (diceHistoryExpandedContainer.length === 0) {
					if (isDebugEnabled()) {
						console.log(
							"There is no dice roll history expanced container, so the element cannot be edited.",
							notificationParents[0],
						);
					}
					return undefined;
				}

				const titleRow = diceHistoryExpandedContainer[0].firstChild
					?.firstChild as Element;

				// Change the title of the new element
				const historyItemCalculatedSource = titleRow.getElementsByClassName(
					"history-item-calculated__value dice-history-item-name--source",
				);
				if (historyItemCalculatedSource.length > 0) {
					const titleText = getTranslation(
						"ui.notification.awaitingPixelsRoll",
						"en",
					);
					historyItemCalculatedSource[0].innerHTML = titleText;
				}

				const historyItemCalculatedValue = titleRow.getElementsByClassName(
					"history-item-calculated__value dice-history-item-name",
				);
				if (historyItemCalculatedValue.length) {
					historyItemCalculatedValue[0].innerHTML = rollRequest.stringify(
						false,
						", ",
					);
				}

				// Remove the reroll and result elements
				const diceRollerButton =
					diceHistoryExpandedContainer[0].getElementsByClassName(
						"dice-roller-button",
					);
				if (diceRollerButton.length > 0) {
					diceRollerButton[0].parentElement?.removeChild(diceRollerButton[0]);
				}
				const totalResultContainer =
					diceHistoryExpandedContainer[0].getElementsByClassName(
						"dice-history-item-total-result-container",
					);
				if (totalResultContainer.length > 0) {
					totalResultContainer[0].parentElement?.removeChild(
						totalResultContainer[0],
					);
				}

				// Display the dice to be rolled
				const historyItemResult =
					rollsExpectedNotification.getElementsByClassName(
						"history-item-result",
					);
				if (historyItemResult) {
					const createDieSymbolFigure = (
						dieSize: "d4" | "d6" | "d8" | "d10" | "d12" | "d20",
					): HTMLDivElement => {
						const dieFigure = unsafeWindow.document.createElement("div");
						dieFigure.classList.add(
							"MuiGrid-root",
							"MuiGrid-item",
							"history-item-result__die",
							`history-item-result__die--${dieSize}`,
							"history-item-result__die--7",
							"dice-history-result-dice",
						);
						dieFigure.setAttribute(
							"style",
							`
							box-sizing: border-box;
							margin: 0px;
							-webkit-box-align: center;
							align-items: center;
						`,
						);

						const figure = unsafeWindow.document.createElement("figure");
						figure.classList.add(
							"history-item-result__image-container",
							"MuiBox-root",
						);
						figure.setAttribute(
							"style",
							`
							background: url(https://content.demiplane.com/nexus/daggerheart/character/dice/dh-${dieSize}-die.png);
							background-size: auto 100%;
							background-position: center;
							background-repeat: no-repeat;
						`,
						);
						dieFigure.appendChild(figure);

						// This is left empty for the time being, though it could in future be filled with the actually rolled result as a kind of live update.
						const resultNumber = unsafeWindow.document.createElement("p");
						resultNumber.classList.add(
							"MuiTypography-root",
							"MuiTypography-body1",
							"history-item-result__label",
							`expected-pixels-roll-${dieSize}`,
						);
						resultNumber.setAttribute(
							"style",
							`
							position: absolute;
							padding-top: 4.5px !important;
							font-weight: 400;
						`,
						);
						dieFigure.appendChild(resultNumber);

						return dieFigure;
					};

					const createDieSymbolFigures = (
						count: number,
						dieSize: "d4" | "d6" | "d8" | "d10" | "d12" | "d20",
					) =>
						new Array<HTMLDivElement>(count)
							// We have to create mock elements to be able to use the map function
							.fill(null as unknown as HTMLDivElement)
							.map(() => createDieSymbolFigure(dieSize));

					const expectedD4s = createDieSymbolFigures(rollRequest.d4, "d4");
					const expectedD6s = createDieSymbolFigures(rollRequest.d6, "d6");
					const expectedD8s = createDieSymbolFigures(rollRequest.d8, "d8");
					const expectedD10s = createDieSymbolFigures(rollRequest.d10, "d10");
					const expectedD12s = createDieSymbolFigures(rollRequest.d12, "d12");
					const expectedD20s = createDieSymbolFigures(rollRequest.d20, "d20");

					historyItemResult[0].replaceChildren(
						...expectedD4s,
						...expectedD6s,
						...expectedD8s,
						...expectedD10s,
						...expectedD12s,
						...expectedD20s,
					);
				}

				// Remove the static modifier
				const staticModifier = rollsExpectedNotification.getElementsByClassName(
					"dice-history-item-static-modifier",
				);
				if (staticModifier.length > 0) {
					if (rollRequest.unusedParts) {
						staticModifier[0].innerHTML = `+${rollRequest.unusedParts}`.replace(
							/%2B/g,
							"+",
						);
					} else {
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

export const removeRollsExpectedNotification = (
	element = rollsExpectedNotification,
): void => {
	if (!element) {
		if (isDebugEnabled()) {
			console.log("There is no rolls expected notification to be removed.");
		}
		return;
	}
	const notificationParents = unsafeWindow.document.getElementsByClassName(
		getRollDiceHistoryCssClass(),
	);
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
