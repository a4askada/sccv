import {theme} from "./../styles/Theme";
import styled from "styled-components";

export const Button = styled.button`
	color: ${theme.colors.font};

	font-size: 14px;

	font-weight: 400;

	letter-spacing: 1px;
	text-transform: uppercase;

	width: 170px;
	height: 32px;
	position: relative;
	z-index: 1;

	&::before {
		content: "";
		display: inline-block;
		width: 50%;
		height: 10px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0;
		background-color: ${theme.colors.accent};
		z-index: -1;
	}

	&:hover {
		&::before {
			width: 100%;
			height: 100%;
		}
	}
`;
