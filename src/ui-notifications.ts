import { characterSheetInfo, isDebugEnabled } from "./integration-utils";
import { getTranslation } from "./translations";
import type { RollRequest } from "./types";

let rollsExpectedNotification: Element | undefined;

const getDiceSvg = (
	svgClass: string,
	width: number,
	height: number,
): Element | undefined => {
	const diceRollerGrids = document.getElementsByClassName(
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
		case "pathfinder2e":
			return "dice-roll-history";
		case "alienrpg":
			return "dice-history-main-container";
		case "daggerheart":
			return "dice-history-main-container";
		default:
			return "dice-roll-history";
	}
	// TODO Check other systems
};

export const addRollsExpectedNotification = (
	rollRequest: RollRequest,
): Element | undefined => {
	const { gameSystem } = characterSheetInfo();

	const notificationParents = document.getElementsByClassName(
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

	const removeElementFromAncestor = (
		ancestorElement: Element,
		className: string,
	): void => {
		const element = ancestorElement.getElementsByClassName(className);
		if (element.length > 0) {
			element[0].parentElement?.removeChild(element[0]);
		}
	};

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

				// TODO This is too bright, it's difficult to read the content.
				// rollsExpectedNotification.setAttribute(
				// 	"style",
				// 	`
				// 	background: linear-gradient(180deg, rgba(62, 172, 1940.8) 0%, rgba(121, 62, 194, 0.8) 25%, rgba(245, 58, 37, 0.8) 50%, rgba(245, 241, 27, 0.8) 75%, rgba(124, 207, 128, 0.8));
				// 	padding: 12px !important;
				// 	position: relative;
				// 	border-radius: 8px;
				// 	border: 1px solid #888888;
				// 	text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
				// `,
				// );

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
							const counter = diceRollDetails.lastChild?.lastChild as Element;
							counter.innerHTML = `${getter.value} x`;
							counter.setAttribute("style", "font-size: 20px;");

							diceRollDetails.append(svg);
							newDiceRollIndicators.push(diceIndicator);
						}
					}
				}
				diceRollParent.replaceChildren(...newDiceRollIndicators);

				// Show the notification
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
				removeElementFromAncestor(
					diceHistoryExpandedContainer[0],
					"dice-roller-button",
				);
				removeElementFromAncestor(
					diceHistoryExpandedContainer[0],
					"dice-history-item-total-result-container",
				);

				// Display the dice to be rolled
				const historyItemResult =
					rollsExpectedNotification.getElementsByClassName(
						"history-item-result",
					);
				if (historyItemResult) {
					const createDieSymbolFigure = (
						dieSize: "d4" | "d6" | "d8" | "d10" | "d12" | "d20",
					): HTMLDivElement => {
						const dieFigure = document.createElement("div");
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

						const figure = document.createElement("figure");
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
						const resultNumber = document.createElement("p");
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

			// Show the notification
			if (rollsExpectedNotification) {
				notificationParents[0].appendChild(rollsExpectedNotification);
			}
			break;
		}
		case "alienrpg": {
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

				rollsExpectedNotification.classList.remove(
					"dice-roller-history--success",
					"dice-roller-history--success-with-panic",
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
						"history-item-container dice-history-expanded-container",
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

				const titleRow = diceHistoryExpandedContainer[0].getElementsByClassName(
					"history-item-container dice-history-expanded-top-container",
				);
				if (titleRow.length === 0) {
					if (isDebugEnabled()) {
						console.log(
							"There is no history item top container, so the element cannot be edited.",
							diceHistoryExpandedContainer[0],
						);
					}
					return undefined;
				}

				// Change the title of the new element
				(() => {
					const historyItemCalculatedValue = titleRow[0].getElementsByClassName(
						"history-item-calculated",
					);
					if (historyItemCalculatedValue.length === 0) {
						if (isDebugEnabled()) {
							console.log(
								"There is no history item calculated container, so the element cannot be edited.",
								diceHistoryExpandedContainer[0],
							);
						}
						return undefined;
					}
					const titleText = getTranslation(
						"ui.notification.awaitingPixelsRoll",
						"en",
					);
					historyItemCalculatedValue[0].innerHTML = titleText;
				})();

				// Remove additional elements in the title bar
				(() => {
					const diceRollerButton =
						titleRow[0].getElementsByClassName("dice-roller-button");
					if (diceRollerButton.length > 0) {
						diceRollerButton[0].parentElement?.removeChild(diceRollerButton[0]);
					} else if (isDebugEnabled()) {
						console.log(
							"There is no dice roller button, so the element cannot be edited.",
							titleRow[0],
						);
					}
				})();

				(() => {
					const historyItemContainer = titleRow[0].getElementsByClassName(
						"history-item-container",
					);
					if (historyItemContainer.length > 1) {
						historyItemContainer[
							historyItemContainer.length - 1
						].parentElement?.removeChild(
							historyItemContainer[historyItemContainer.length - 1],
						);
					} else if (isDebugEnabled()) {
						console.log(
							"There is no history item container, so the element cannot be edited.",
							titleRow[0],
						);
					}
				})();

				(() => {
					const diceHistoryResultSummaryContainer =
						titleRow[0].getElementsByClassName(
							"dice-history-result-summary-container",
						);
					if (diceHistoryResultSummaryContainer.length === 0) {
						if (isDebugEnabled()) {
							console.log(
								"There is no dice history result summary container, so the element cannot be edited.",
								titleRow[0],
							);
							return undefined;
						}
					}
					diceHistoryResultSummaryContainer[0].parentElement?.removeChild(
						diceHistoryResultSummaryContainer[0],
					);
				})();

				// Set expected dice as words
				const expandedBottomContainer =
					diceHistoryExpandedContainer[0].getElementsByClassName(
						"history-item-container dice-history-expanded-bottom-container",
					);
				if (expandedBottomContainer.length === 0) {
					if (isDebugEnabled()) {
						console.log(
							"There is no dice history bottom expanded container, so the element cannot be edited.",
							expandedBottomContainer[0],
						);
					}
					return undefined;
				}

				(() => {
					const topBodyContainer =
						expandedBottomContainer[0].getElementsByClassName(
							"history-item-static",
						);
					if (topBodyContainer.length === 0) {
						if (isDebugEnabled()) {
							console.log(
								"There is no historiy item static, so the element cannot be edited.",
								expandedBottomContainer[0],
							);
						}
						return undefined;
					}
					topBodyContainer[0].innerHTML = rollRequest.stringify(false, ", ");
				})();

				// Display the dice to be rolled
				(() => {
					let dieContainer = expandedBottomContainer[0].getElementsByClassName(
						"history-item-static__value panic-table-result-description",
					);
					if (dieContainer.length === 0) {
						dieContainer = expandedBottomContainer[0].getElementsByClassName(
							"history-item-result",
						);
					}
					if (dieContainer.length === 0) {
						if (isDebugEnabled()) {
							console.log(
								"There is no panic table result or history item result container, so the element cannot be edited.",
								expandedBottomContainer[0],
							);
						}
						return undefined;
					}
					dieContainer[0].setAttribute(
						"style",
						`
						display: flex;
					`,
					);
					dieContainer[0].parentElement?.setAttribute(
						"style",
						`
						display: flex;
						width: 100%;
						margin: 0px;
					`,
					);

					/*
					.dice-roller-pool__pool > div:first-child {
							gap: 4px;
							padding-bottom: 12px;
							border-bottom: 1px solid var(--alien-color-5);
							justify-content: center;
					}

					<style>
					.css-1j3gjs0 {
							box-sizing: border-box;
							display: flex;
							flex-flow: wrap;
							width: 100%;
							margin: 0px;
							column-gap: 8px;
					}
					*/

					const createDieSymbolFigure = (
						dieSize: "d4" | "d6" | "d8" | "d10" | "d12" | "d20",
					): HTMLDivElement => {
						const dieFigure = document.createElement("div");
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

						const figure = document.createElement("figure");
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
						const resultNumber = document.createElement("p");
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

					dieContainer[0].replaceChildren(
						...expectedD4s,
						...expectedD6s,
						...expectedD8s,
						...expectedD10s,
						...expectedD12s,
						...expectedD20s,
					);
				})();
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

export const removeRollsExpectedNotification = (
	element = rollsExpectedNotification,
): void => {
	if (!element) {
		if (isDebugEnabled()) {
			console.log("There is no rolls expected notification to be removed.");
		}
		return;
	}
	const notificationParents = document.getElementsByClassName(
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
