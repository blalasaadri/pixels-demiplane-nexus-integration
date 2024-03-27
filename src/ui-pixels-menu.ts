import { registerConsoleCommands } from "./console-commands";
import {
	type IntegrationEnabledForDice,
	getEnabledForDiceOverview,
	isDebugEnabled,
	isEnabledForCharacter,
	registerEnabledForCharacterListener,
	registerIntegrationEnabledForDiceListener,
} from "./integration-utils";
import {
	type ConnectedDice,
	type ConnectedDie,
	connectToDie,
	getCurrentlyConnectedDice,
	registerDiceConnectionListener,
} from "./roll-handler";
import { getTranslation } from "./translations";

export const setupPixelsMenu = async (): Promise<void> => {
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
			min-width: 20px !important;
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
	const closedArrowSvg = (cssClasses: string[]) => `
    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium ${cssClasses.join(
			" ",
		)}"
         focusable="false"
         aria-hidden="true"
         viewBox="0 0 24 24"
         data-testid="ArrowDropDownIcon">
        <path d="m7 10 5 5 5-5z"></path>
    </svg>`;
	const openArrowSvg = (cssClasses: string[]) => `
    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium ${cssClasses.join(
			" ",
		)}"
         focusable="false"
         aria-hidden="true"
         viewBox="0 0 24 24"
         data-testid="ArrowDropUpIcon">
        <path d="m7 14 5-5 5 5z"></path>
    </svg>`;

	const gameRulesButton = await new Promise<Element>((resolve, reject) => {
		const maxAttempts = 100;
		let attemptCounter = 0;
		const interval = setInterval(() => {
			if (++attemptCounter < maxAttempts) {
				const gameRulesButtons = document.getElementsByClassName(
					"top-nav-nexus-game-rules-btn",
				);
				if (gameRulesButtons.length > 0) {
					clearInterval(interval);
					resolve(gameRulesButtons[0] as Element);
				}
			} else {
				reject(
					`Could not find the "game rules" button after ${attemptCounter} attempts.`,
				);
			}
		}, 5000);
	});
	const pixelsMenuButton = gameRulesButton.cloneNode(true) as Element;

	// Set the classes to be individually stylable (if we want to do that)
	pixelsMenuButton.classList.remove("top-nav-nexus-game-rules-btn");
	pixelsMenuButton.classList.add("top-nav-nexus-pixels-menu-btn");

	// Change the wording on the button
	const buttonTitle = getTranslation("ui.pixelsMenu.button.title");
	(pixelsMenuButton.firstChild as Element).innerHTML = buttonTitle;
	const buttonAriaLabel = getTranslation("ui.pixelsMenu.button.ariaLabel");
	pixelsMenuButton.setAttribute("aria-label", buttonAriaLabel);
	pixelsMenuButton.setAttribute("data-cy", "top-nav-nexus-pixels-menu-btn");

	// Add an onClick handler to the button. This will refer to a global function.
	pixelsMenuButton.setAttribute(
		"onclick",
		"pixelsIntegration.togglePixelsMenu(event)",
	);

	let pixelsMenuTooltip: HTMLDivElement | undefined;
	const pixelsMenuButtonClickHandler = (e?: PointerEvent): void => {
		e?.stopPropagation();
		if (isDebugEnabled()) {
			console.log("Pixels dice menu toggled");
		}
		// Set the "aria-expanded" attribute
		const expandedBefore =
			pixelsMenuButton.getAttribute("aria-expanded") === "true";
		pixelsMenuButton.setAttribute("aria-expanded", `${!expandedBefore}`);

		// Set the button menu class
		if (expandedBefore) {
			pixelsMenuButton.classList.remove("top-nav-nexus-pixels-menu-btn-active");
			pixelsMenuButton.classList.add("top-nav-nexus-pixels-menu-btn");
		} else {
			pixelsMenuButton.classList.remove("top-nav-nexus-pixels-menu-btn");
			pixelsMenuButton.classList.add("top-nav-nexus-pixels-menu-btn-active");
		}

		// Change the open/closed symbol
		const originalSvgs =
			pixelsMenuButton.getElementsByClassName("MuiSvgIcon-root");
		const originalSvgAdditionalCssClasses: string[] = [];
		if (originalSvgs.length > 0) {
			const svgClasses = originalSvgs[0].classList;
			for (const svgClass of svgClasses) {
				if (!svgClass.startsWith("MuiSvgIcon")) {
					originalSvgAdditionalCssClasses.push(svgClass);
				}
			}
		}
		const svgSpans =
			pixelsMenuButton.getElementsByClassName("MuiButton-endIcon");
		if (svgSpans.length > 0) {
			const svgSpan = svgSpans[0];
			if (expandedBefore) {
				svgSpan.innerHTML = closedArrowSvg(originalSvgAdditionalCssClasses);
			} else {
				svgSpan.innerHTML = openArrowSvg(originalSvgAdditionalCssClasses);
			}
		}

		if (expandedBefore) {
			if (pixelsMenuTooltip) {
				// Remove the tooltip
				gameRulesButton.parentElement?.removeChild(pixelsMenuTooltip);
			}
		} else {
			// Create and open the tooltip
			pixelsMenuTooltip = document.createElement("div");
			pixelsMenuTooltip.setAttribute("role", "tooltip");
			pixelsMenuTooltip.classList.add(
				"jss-pixels-menu",
				"nexus-pixels-dice-menu",
				"pixels-dice-menu",
				"css-0",
				"MuiPopperUnstyled-root",
			);
			pixelsMenuTooltip.setAttribute(
				"style",
				"position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 62px);",
			);

			const menuContainer = document.createElement("div");
			menuContainer.classList.add("MuiBox-root", "css-0");
			menuContainer.setAttribute("style", "padding: 0px; margin: 0px;");
			pixelsMenuTooltip.appendChild(menuContainer);

			const gridContainer = document.createElement("div");
			gridContainer.classList.add(
				"MuiGrid-root",
				"MuiGrid-container",
				"jss-pixels-menu-grid-container",
			);
			gridContainer.setAttribute(
				"style",
				"flex-wrap: nowrap; padding-left: 24px;",
			);
			menuContainer.appendChild(gridContainer);

			// Menu part for setting up Pixels dice
			(() => {
				const pixelsSettingsContainer = document.createElement("div");
				pixelsSettingsContainer.classList.add(
					"MuiGrid-root",
					"MuiGrid-item",
					"MuiGrid-grid-xs-8",
					"MuiGrid-grid-sm-9",
					"MuiGrid-grid-lg-12",
					"css-pixels-settings",
				);
				gridContainer.appendChild(pixelsSettingsContainer);

				const pixelsSettingsTitle = document.createElement("div");
				pixelsSettingsTitle.classList.add(
					"jss-pixels-in-menu-title",
					"pixels-dice-class-header",
					"MuiBox-root",
					"css-0",
				);
				pixelsSettingsContainer.appendChild(pixelsSettingsTitle);

				const pixelsSettingsTitleParagraph = document.createElement("p");
				pixelsSettingsTitleParagraph.classList.add(
					"MuiTypography-root",
					"MuiTypography-body1",
					"jss-pixels-in-menu-title-p",
				);
				pixelsSettingsTitleParagraph.innerHTML = getTranslation(
					"ui.pixelsMenu.settings.title",
				);
				pixelsSettingsTitle.appendChild(pixelsSettingsTitleParagraph);

				// Add a settings body
				const pixelsSettingsBody = document.createElement("div");
				pixelsSettingsBody.classList.add(
					"MuiGrid-root",
					"MuiGrid-container",
					"css-pixels-settings-body",
				);
				pixelsSettingsContainer.appendChild(pixelsSettingsBody);

				const pixelsSettingsBodyColumn = document.createElement("div");
				pixelsSettingsBodyColumn.classList.add(
					"MuiGrid-root",
					"MuiGrid-item",
					"MuiGrid-grid-md-4",
					"MuiGrid-grid-lg-3",
					"css-pixels-settings-body-column",
				);
				pixelsSettingsBody.appendChild(pixelsSettingsBodyColumn);

				// Add the "Connect pixel die" button
				const connectPixelDieButton = document.createElement("button");
				connectPixelDieButton.classList.add(
					"MuiButtonBase-root",
					"MuiButton-root",
					"MuiButton-text",
					"MuiButton-textPrimary",
					"MuiButton-sizeMedium",
					"MuiButton-textSizeMedium",
					"MuiButton-root",
					"MuiButton-text",
					"MuiButton-textPrimary",
					"MuiButton-sizeMedium",
					"MuiButton-textSizeMedium",
					"css-pixels-connect-button",
				);
				connectPixelDieButton.setAttribute("tabindex", "0"); // TODO Probably we do want a tab index here
				connectPixelDieButton.setAttribute("type", "button");
				connectPixelDieButton.setAttribute(
					"aria-label",
					getTranslation("ui.pixelsMenu.settings.connectDieButton.ariaLabel"),
				);
				connectPixelDieButton.setAttribute(
					"onclick",
					"pixelsIntegration.connectToPixelsDie()",
				);
				pixelsSettingsBodyColumn.appendChild(connectPixelDieButton);

				const connectPixelDieButtonText = document.createElement("h2");
				connectPixelDieButtonText.classList.add(
					"MuiTypography-root",
					"MuiTypography-h2",
					"MuiTypography-noWrap",
					"css-pixels-connect-button-text",
				);
				connectPixelDieButtonText.innerHTML = getTranslation(
					"ui.pixelsMenu.settings.connectDieButton.text",
				);
				connectPixelDieButton.appendChild(connectPixelDieButtonText);

				const connectPixelDieButtonRipple = document.createElement("span");
				connectPixelDieButtonRipple.classList.add(
					"MuiTouchRipple-root",
					"css-pixels-connect-button-ripple",
				);
				connectPixelDieButton.appendChild(connectPixelDieButtonRipple);

				// Add a "use pixels for this character" button
				const usePixelsCheckboxHolder = document.createElement("div");
				usePixelsCheckboxHolder.classList.add(
					"MuiGrid-root",
					"MuiGrid-item",
					"button-component",
				);
				pixelsSettingsBodyColumn.appendChild(usePixelsCheckboxHolder);

				const usePixelsCheckboxButton = document.createElement("button");
				usePixelsCheckboxButton.classList.add(
					"MuiButtonBase-root",
					"MuiButton-root",
					"MuiButton-text",
					"MuiButton-textPrimary",
					"MuiButton-sizeMedium",
					"MuiButton-textSizeMedium",
					"MuiButton-root",
					"MuiButton-text",
					"MuiButton-textPrimary",
					"MuiButton-sizeMedium",
					"MuiButton-textSizeMedium",
					"button-component__button",
					"css-pixels-integration-enabled-checkbox",
				);
				if (isEnabledForCharacter()) {
					usePixelsCheckboxButton.classList.add("active");
				}
				registerEnabledForCharacterListener({
					callback: (enabled) => {
						if (enabled) {
							if (!usePixelsCheckboxButton.classList.contains("active")) {
								usePixelsCheckboxButton.classList.add("active");
							}
						} else {
							usePixelsCheckboxButton.classList.remove("active");
						}
					},
				});
				usePixelsCheckboxButton.setAttribute("type", "button");
				usePixelsCheckboxButton.setAttribute(
					"onclick",
					"pixelsItegration.toggleEnabled()",
				);
				usePixelsCheckboxButton.id = "toggle-pixel-integration-enabled";
				usePixelsCheckboxHolder.appendChild(usePixelsCheckboxButton);

				const usePixelsCheckboxButtonSpan = document.createElement("span");
				usePixelsCheckboxButtonSpan.classList.add(
					"MuiTouchRipple-root",
					"css-pixels-integration-enabled-text",
				);
				usePixelsCheckboxButton.appendChild(usePixelsCheckboxButtonSpan);

				const usePixelsCheckboxText = document.createElement("label");
				usePixelsCheckboxText.setAttribute(
					"for",
					"toggle-pixel-integration-enabled",
				);
				usePixelsCheckboxText.classList.add(
					"css-pixels-integration-enabled-text",
				);
				usePixelsCheckboxText.innerHTML = getTranslation(
					"ui.pixelsMenu.settings.enableForCharacter.text",
				);
				usePixelsCheckboxHolder.appendChild(usePixelsCheckboxText);
			})();

			// Menu part for showing the already connected Pixels dice
			(() => {
				const pixelsDiceOverviewContainer = document.createElement("div");
				pixelsDiceOverviewContainer.classList.add(
					"MuiGrid-root",
					"MuiGrid-item",
					"MuiGrid-grid-xs-6",
					"css-pixels-dice-overview",
				);
				gridContainer.appendChild(pixelsDiceOverviewContainer);

				const pixelsOverviewTitle = document.createElement("div");
				pixelsOverviewTitle.classList.add(
					"jss-pixels-in-menu-title",
					"pixels-dice-class-header",
					"MuiBox-root",
					"css-0",
				);
				pixelsDiceOverviewContainer.appendChild(pixelsOverviewTitle);

				const pixelsOverviewTitleParagraph = document.createElement("p");
				pixelsOverviewTitleParagraph.classList.add(
					"MuiTypography-root",
					"MuiTypography-body1",
					"jss-pixels-in-menu-title-p",
				);
				pixelsOverviewTitleParagraph.innerHTML = getTranslation(
					"ui.pixelsMenu.overview.title",
				);
				pixelsOverviewTitle.appendChild(pixelsOverviewTitleParagraph);

				// Overview body and columns
				const pixelsDiceOverviewBody = document.createElement("div");
				pixelsDiceOverviewBody.classList.add(
					"MuiGrid-root",
					"MuiGrid-container",
					"css-pixels-dice-overview-body",
				);
				pixelsDiceOverviewContainer.appendChild(pixelsDiceOverviewBody);

				const createDieImageButton = (
					cssClass: string,
					imageDieType:
						| "d4"
						| "d6"
						| "d8"
						| "d10"
						| "d00"
						| "d12"
						| "d20"
						| "dF",
				) => {
					const dieImageButton = document.createElement("button");
					dieImageButton.setAttribute(
						"onclick",
						`pixelsIntegration.toggleForDieType("${imageDieType}")`,
					);

					const determineColorVariant = (
						integrationEnabledForDice: IntegrationEnabledForDice,
					): "white" | "rainbow" => {
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
					const dieImage = document.createElement("img");
					dieImage.classList.add(cssClass);
					const integrationEnabledForDice = getEnabledForDiceOverview();
					const colorVariant = determineColorVariant(integrationEnabledForDice);
					dieImage.setAttribute(
						"src",
						`https://github.com/blalasaadri/pixels-demiplane-nexus-integration/raw/main/assets/${imageDieType}_${colorVariant}.svg`,
					);
					dieImage.setAttribute("alt", `pixels ${imageDieType}`);

					registerIntegrationEnabledForDiceListener({
						predicate: (dieSizes) => {
							switch (imageDieType) {
								case "d4":
									return !!dieSizes.find((size) => size === "d4");
								case "d6":
									return !!dieSizes.find(
										(size) => size === "d6" || size === "d6pipped",
									);
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
						callback: async (integrationEnabledForDice) => {
							const color = determineColorVariant(integrationEnabledForDice);
							dieImage.setAttribute(
								"src",
								`https://github.com/blalasaadri/pixels-demiplane-nexus-integration/raw/main/assets/${imageDieType}_${color}.svg`,
							);
						},
					});

					dieImageButton.appendChild(dieImage);
					return dieImageButton;
				};

				const createDieInfoTags = (
					connectedDiceOfType: ConnectedDie[],
				): { die: ConnectedDie; tag: HTMLDivElement }[] => {
					const infoTags: { die: ConnectedDie; tag: HTMLDivElement }[] = [];
					for (const connectedDie of connectedDiceOfType) {
						const dieInfo = document.createElement("div");
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

				const currentlyConnectedDice = getCurrentlyConnectedDice();
				const addDiceInfoTags = (
					parent: HTMLDivElement,
					diePredicate: (connectedDie: ConnectedDie) => boolean,
					diceSelector: (connectedDice: ConnectedDice) => ConnectedDie[],
				) => {
					const addDieInfo = (die: ConnectedDie, tag: HTMLDivElement) => {
						parent.appendChild(tag);
						registerDiceConnectionListener({
							predicate: diePredicate,
							callback: async (connectedDice) => {
								// Remove dice that are no longer connected from the list
								const dieIsNotConnected =
									diceSelector(connectedDice).find(
										({ id }) => die.id === id,
									) === undefined;
								if (dieIsNotConnected) {
									parent.removeChild(tag);
								}
							},
						});
					};

					for (const { die, tag } of createDieInfoTags(
						diceSelector(currentlyConnectedDice),
					)) {
						addDieInfo(die, tag);
					}

					registerDiceConnectionListener({
						predicate: diePredicate,
						callback: async (connectedDice) => {
							// Whenever a new die is connected, check whether all dice of this type are already listed.
							const matchingDice = diceSelector(connectedDice);
							const listedDiceIds: number[] = [];
							for (const child of parent.getElementsByClassName(
								"css-pixels-dice-overview-die-info",
							)) {
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
							const unlistedDice: ConnectedDie[] = [...unlistedDiceIds]
								.map((pixelId) => matchingDice.find(({ id }) => id === pixelId))
								.filter(
									(unlistedDie) => unlistedDie !== undefined,
								) as ConnectedDie[];

							if (isDebugEnabled()) {
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
						},
					});
				};

				(() => {
					const pixelsDiceOverviewColumn1 = document.createElement("div");
					pixelsDiceOverviewColumn1.classList.add(
						"MuiGrid-root",
						"MuiGrid-item",
						"MuiGrid-grid-xs-4",
						"MuiGrid-grid-sm-4",
						"MuiGrid-grid-md-4",
						"MuiGrid-grid-lg-3",
						"css-pixels-dice-overview-column",
					);
					pixelsDiceOverviewBody.appendChild(pixelsDiceOverviewColumn1);

					// d4
					const pixelsDiceOverviewD4Box = document.createElement("div");
					pixelsDiceOverviewD4Box.classList.add(
						"css-pixels-dice-overview-dice-box",
						"pixels-dice-overview-d4-box",
						"MuiBox-root",
						"css-0",
					);
					pixelsDiceOverviewColumn1.appendChild(pixelsDiceOverviewD4Box);
					pixelsDiceOverviewD4Box.appendChild(
						createDieImageButton("dice-d4", "d4"),
					);
					addDiceInfoTags(
						pixelsDiceOverviewD4Box,
						({ dieType }) => dieType === "d4",
						({ d4 }) => d4,
					);

					// D00
					const pixelsDiceOverviewD00Box = document.createElement("div");
					pixelsDiceOverviewD00Box.classList.add(
						"css-pixels-dice-overview-dice-box",
						"pixels-dice-overview-d00-box",
						"MuiBox-root",
						"css-0",
					);
					pixelsDiceOverviewColumn1.appendChild(pixelsDiceOverviewD00Box);
					pixelsDiceOverviewD00Box.appendChild(
						createDieImageButton("dice-fab-d10", "d00"),
					);
					addDiceInfoTags(
						pixelsDiceOverviewD00Box,
						({ dieType }) => dieType === "d00",
						({ d00 }) => d00,
					);
				})();

				(() => {
					const pixelsDiceOverviewColumn2 = document.createElement("div");
					pixelsDiceOverviewColumn2.classList.add(
						"MuiGrid-root",
						"MuiGrid-item",
						"MuiGrid-grid-xs-4",
						"MuiGrid-grid-sm-4",
						"MuiGrid-grid-md-4",
						"MuiGrid-grid-lg-3",
						"css-pixels-dice-overview-column",
					);
					pixelsDiceOverviewBody.appendChild(pixelsDiceOverviewColumn2);

					// d6
					const pixelsDiceOverviewD6Box = document.createElement("div");
					pixelsDiceOverviewD6Box.classList.add(
						"css-pixels-dice-overview-dice-box",
						"pixels-dice-overview-d6-box",
						"MuiBox-root",
						"css-0",
					);
					pixelsDiceOverviewColumn2.appendChild(pixelsDiceOverviewD6Box);
					pixelsDiceOverviewD6Box.appendChild(
						createDieImageButton("dice-fab-d6", "d6"),
					);
					addDiceInfoTags(
						pixelsDiceOverviewD6Box,
						({ dieType }) => dieType === "d6" || dieType === "d6pipped",
						({ d6 }) => d6,
					);

					// d12
					const pixelsDiceOverviewD12Box = document.createElement("div");
					pixelsDiceOverviewD12Box.classList.add(
						"css-pixels-dice-overview-dice-box",
						"pixels-dice-overview-d12-box",
						"MuiBox-root",
						"css-0",
					);
					pixelsDiceOverviewColumn2.appendChild(pixelsDiceOverviewD12Box);
					pixelsDiceOverviewD12Box.appendChild(
						createDieImageButton("dice-fab-d12", "d12"),
					);
					addDiceInfoTags(
						pixelsDiceOverviewD12Box,
						({ dieType }) => dieType === "d12",
						({ d12 }) => d12,
					);
				})();

				(() => {
					const pixelsDiceOverviewColumn3 = document.createElement("div");
					pixelsDiceOverviewColumn3.classList.add(
						"MuiGrid-root",
						"MuiGrid-item",
						"MuiGrid-grid-xs-4",
						"MuiGrid-grid-sm-4",
						"MuiGrid-grid-md-4",
						"MuiGrid-grid-lg-3",
						"css-pixels-dice-overview-column",
					);
					pixelsDiceOverviewBody.appendChild(pixelsDiceOverviewColumn3);

					// d8
					const pixelsDiceOverviewD8Box = document.createElement("div");
					pixelsDiceOverviewD8Box.classList.add(
						"css-pixels-dice-overview-dice-box",
						"pixels-dice-overview-d8-box",
						"MuiBox-root",
						"css-0",
					);
					pixelsDiceOverviewColumn3.appendChild(pixelsDiceOverviewD8Box);
					pixelsDiceOverviewD8Box.appendChild(
						createDieImageButton("dice-fab-d8", "d8"),
					);
					addDiceInfoTags(
						pixelsDiceOverviewD8Box,
						({ dieType }) => dieType === "d8",
						({ d8 }) => d8,
					);

					// d20
					const pixelsDiceOverviewD20Box = document.createElement("div");
					pixelsDiceOverviewD20Box.classList.add(
						"css-pixels-dice-overview-dice-box",
						"pixels-dice-overview-d20-box",
						"MuiBox-root",
						"css-0",
					);
					pixelsDiceOverviewColumn3.appendChild(pixelsDiceOverviewD20Box);
					pixelsDiceOverviewD20Box.appendChild(
						createDieImageButton("dice-fab-20", "d20"),
					);
					addDiceInfoTags(
						pixelsDiceOverviewD20Box,
						({ dieType }) => dieType === "d20",
						({ d20 }) => d20,
					);
				})();

				(() => {
					const pixelsDiceOverviewColumn4 = document.createElement("div");
					pixelsDiceOverviewColumn4.classList.add(
						"MuiGrid-root",
						"MuiGrid-item",
						"MuiGrid-grid-xs-4",
						"MuiGrid-grid-sm-4",
						"MuiGrid-grid-md-4",
						"MuiGrid-grid-lg-3",
						"css-pixels-dice-overview-column",
					);
					pixelsDiceOverviewBody.appendChild(pixelsDiceOverviewColumn4);

					// D10
					const pixelsDiceOverviewD10Box = document.createElement("div");
					pixelsDiceOverviewD10Box.classList.add(
						"css-pixels-dice-overview-dice-box",
						"pixels-dice-overview-d10-box",
						"MuiBox-root",
						"css-0",
					);
					pixelsDiceOverviewColumn4.appendChild(pixelsDiceOverviewD10Box);
					pixelsDiceOverviewD10Box.appendChild(
						createDieImageButton("dice-fab-d10", "d10"),
					);
					addDiceInfoTags(
						pixelsDiceOverviewD10Box,
						({ dieType }) => dieType === "d10",
						({ d10 }) => d10,
					);

					// dF
					const pixelsDiceOverviewDFBox = document.createElement("div");
					pixelsDiceOverviewDFBox.classList.add(
						"css-pixels-dice-overview-dice-box",
						"pixels-dice-overview-dF-box",
						"MuiBox-root",
						"css-0",
					);
					pixelsDiceOverviewColumn4.appendChild(pixelsDiceOverviewDFBox);
					pixelsDiceOverviewDFBox.appendChild(
						createDieImageButton("dice-fab-d6", "dF"),
					);
					addDiceInfoTags(
						pixelsDiceOverviewDFBox,
						({ dieType }) => dieType === "d6fudge",
						({ dF }) => dF,
					);
				})();
			})();

			gameRulesButton.parentElement?.insertBefore(
				pixelsMenuTooltip,
				gameRulesButton.parentElement.lastChild,
			);
		}
	};
	registerConsoleCommands({
		togglePixelsMenu: pixelsMenuButtonClickHandler,
		connectToPixelsDie: connectToDie,
	});

	// Insert our new element as the last menu item
	gameRulesButton.parentElement?.insertBefore(
		pixelsMenuButton,
		gameRulesButton.parentElement?.lastChild,
	);

	// Insert the style element for styling the pixels menu
	const pixelsMenuStyleTag = document.createElement("style");
	pixelsMenuStyleTag.innerHTML = pixelsTooltipCss;
	document.getElementsByTagName("head")[0].appendChild(pixelsMenuStyleTag);

	// Add a listener to close the menu if anything is clicked outside of the menu
	document.addEventListener("click", (e: MouseEvent) => {
		const pixelMenu = document.getElementsByClassName("nexus-pixels-dice-menu");
		// If the menu isn't visible, it won't proceed from here on.
		if (pixelMenu.length > 0) {
			// Check whether we're clicking directly in the pixels menu or on a child element of the pixels menu
			const targetIsPixelsMenu = (target: Element): boolean => {
				if (
					target.classList.contains("nexus-pixels-dice-menu") ||
					target.classList.contains("top-nav-nexus-pixels-menu-btn")
				) {
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
			if (!targetIsPixelsMenu(e.target as Element)) {
				pixelsMenuButtonClickHandler();
			}
		}
	});
};
