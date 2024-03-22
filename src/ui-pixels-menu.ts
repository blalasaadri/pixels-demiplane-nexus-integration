import { isDebugEnabled } from "./integration-utils";
import { connectToDie } from "./roll-handler";
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
            background: linear-gradient(60deg, #3eacc2 0%, #793ec2 25%, #f53a25 50%, #f5f11b 75%, #7ccf80);
            height: 38px;
            border-width: 1px !important;
            border-style: solid !important;
            border-color: rgba(255, 255, 255, 0.4) !important;
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
				const gameRulesButtons = unsafeWindow.document.getElementsByClassName(
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
	pixelsMenuButton.setAttribute("onclick", "pixelsIntegrationOpenPixelsMenu()");

	let pixelsMenuTooltip: HTMLDivElement | undefined;
	const clickHandler = (): void => {
		if (isDebugEnabled()) {
			console.log("Pixels dice button clicked");
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
			pixelsMenuTooltip = unsafeWindow.document.createElement("div");
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

			const menuContainer = unsafeWindow.document.createElement("div");
			menuContainer.classList.add("MuiBox-root", "css-0");
			menuContainer.setAttribute("style", "padding: 0px; margin: 0px;");
			pixelsMenuTooltip.appendChild(menuContainer);

			const gridContainer = unsafeWindow.document.createElement("div");
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
				const pixelsSettingsContainer =
					unsafeWindow.document.createElement("div");
				pixelsSettingsContainer.classList.add(
					"MuiGrid-root",
					"MuiGrid-item",
					"MuiGrid-grid-xs-8",
					"MuiGrid-grid-sm-9",
					"MuiGrid-grid-lg-12",
					"css-pixels-settings",
				);
				gridContainer.appendChild(pixelsSettingsContainer);

				const pixelsSettingsTitle = unsafeWindow.document.createElement("div");
				pixelsSettingsTitle.classList.add(
					"jss-pixels-in-menu-title",
					"pixels-dice-class-header",
					"MuiBox-root",
					"css-0",
				);
				pixelsSettingsContainer.appendChild(pixelsSettingsTitle);

				const pixelsSettingsTitleParagraph =
					unsafeWindow.document.createElement("p");
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
				const pixelsSettingsBody = unsafeWindow.document.createElement("div");
				pixelsSettingsBody.classList.add(
					"MuiGrid-root",
					"MuiGrid-container",
					"css-pixels-settings-body",
				);
				pixelsSettingsContainer.appendChild(pixelsSettingsBody);

				const pixelsSettingsBodyColumn =
					unsafeWindow.document.createElement("div");
				pixelsSettingsBodyColumn.classList.add(
					"MuiGrid-root",
					"MuiGrid-item",
					"MuiGrid-grid-md-4",
					"MuiGrid-grid-lg-3",
					"css-pixels-settings-body-column",
				);
				pixelsSettingsBody.appendChild(pixelsSettingsBodyColumn);

				// Add the "Connect pixel die" button
				const connectPixelDieButton =
					unsafeWindow.document.createElement("button");
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
					"pixelsIntegrationConnectToPixelsDie()",
				);
				pixelsSettingsBodyColumn.appendChild(connectPixelDieButton);

				const connectPixelDieButtonText =
					unsafeWindow.document.createElement("h2");
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

				const connectPixelDieButtonRipple =
					unsafeWindow.document.createElement("span");
				connectPixelDieButtonRipple.classList.add(
					"MuiTouchRipple-root",
					"css-pixels-connect-button-ripple",
				);
				connectPixelDieButton.appendChild(connectPixelDieButtonRipple);
			})();

			// Menu part for showing the already connected Pixels dice
			(() => {
				const pixelsDiceOverviewContainer =
					unsafeWindow.document.createElement("div");
				pixelsDiceOverviewContainer.classList.add(
					"MuiGrid-root",
					"MuiGrid-item",
					"MuiGrid-grid-xs-6",
					"css-pixels-dice-overview",
				);
				gridContainer.appendChild(pixelsDiceOverviewContainer);

				const pixelsOverviewTitle = unsafeWindow.document.createElement("div");
				pixelsOverviewTitle.classList.add(
					"jss-pixels-in-menu-title",
					"pixels-dice-class-header",
					"MuiBox-root",
					"css-0",
				);
				pixelsDiceOverviewContainer.appendChild(pixelsOverviewTitle);

				const pixelsOverviewTitleParagraph =
					unsafeWindow.document.createElement("p");
				pixelsOverviewTitleParagraph.classList.add(
					"MuiTypography-root",
					"MuiTypography-body1",
					"jss-pixels-in-menu-title-p",
				);
				pixelsOverviewTitleParagraph.innerHTML = getTranslation(
					"ui.pixelsMenu.overview.title",
				);
				pixelsOverviewTitle.appendChild(pixelsOverviewTitleParagraph);
			})();

			gameRulesButton.parentElement?.insertBefore(
				pixelsMenuTooltip,
				gameRulesButton.parentElement.lastChild,
			);
		}
	};
	// @ts-ignore
	unsafeWindow.pixelsIntegrationOpenPixelsMenu = clickHandler;
	// @ts-ignore
	unsafeWindow.pixelsIntegrationConnectToPixelsDie = connectToDie;

	// Insert our new element as the last menu item
	gameRulesButton.parentElement?.insertBefore(
		pixelsMenuButton,
		gameRulesButton.parentElement?.lastChild,
	);

	// Insert the style element for styling the pixels menu
	const pixelsMenuStyleTag = unsafeWindow.document.createElement("style");
	pixelsMenuStyleTag.innerHTML = pixelsTooltipCss;
	unsafeWindow.document
		.getElementsByTagName("head")[0]
		.appendChild(pixelsMenuStyleTag);
};
