import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

const Link = styled.a`
	color: #3d39c4;
	font-family: "Josefin Sans", sans-serif;
	font-size: 30px;

	font-weight: 400;
	line-height: 55px;
`;
const Mask = styled.span`
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
	height: 50%;
	overflow-y: hidden;
	/* outline: 1px solid red; */
	color: ${theme.colors.accent};

	& + & {
		top: 50%;
		span {
			display: inline-block;
			transform: translateY(-50%);
		}
	}
`;

const MenuItem = styled.li`
	position: relative;
	&:hover {
		${Mask} {
			transform: skew(12deg) translateX(5px);
			& + ${Mask} {
				transform: scaleX(12deg) translateX(-5px);
			}
		}
	}
`;
//DESKTOP MENU
const DesktopMenu = styled.nav`
	ul {
		display: flex;
		gap: 30px;
		justify-content: center;
	}
`;
///mobile menu

const MobileMenu = styled.nav``;

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 99999999;
	background-color: rgba(31, 31, 32, 0.9);
	display: none;

	${(props) =>
		props.isOpen &&
		css<{isOpen: boolean}>`
			display: flex;
			justify-content: center;
			align-items: center;
		`}

	ul {
		display: flex;
		gap: 30px;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
`;

const BurgerButton = styled.button<{isOpen: boolean}>`
	position: fixed;
	width: 200px;
	height: 200px;
	top: -100px;
	right: -100px;
	z-index: 9999999999999999999;
	span {
		display: inline-block;
		width: 36px;
		height: 2px;
		background-color: ${theme.colors.font};

		position: absolute;
		left: 40px;
		bottom: 50px;

		${(props) =>
			props.isOpen &&
			css<{isOpen: boolean}>`
				background-color: rgba(255, 255, 255, 0);
			`}

		&::before {
			content: "";

			width: 36px;
			height: 2px;
			background-color: ${theme.colors.font};
			position: absolute;
			display: block;

			transform: translateY(-10px);

			${(props) =>
				props.isOpen &&
				css<{isOpen: boolean}>`
					transform: rotate(-45deg) translateY(0);
				`}
		}
		&::after {
			content: "";
			width: 24px;
			height: 2px;
			background-color: ${theme.colors.font};
			display: block;
			transform: translateY(10px);

			${(props) =>
				props.isOpen &&
				css<{isOpen: boolean}>`
					transform: translateY(0) rotate(45deg);
					width: 36px;
				`}
		}
	}
`;

export const S = {
	Link,
	Mask,
	MenuItem,
	BurgerButton,
	MobileMenuPopup,
	MobileMenu,
	DesktopMenu,
};
