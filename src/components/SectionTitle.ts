import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
	${font({weight: 600, Fmax: 36, Fmin: 30, family: "'Josefin Sans','sans-serif'"})}

	text-align: center;
	color: ${theme.colors.font};
	letter-spacing: 5px;
	position: relative;
	margin-bottom: 90px;

	&::before {
		content: "";
		display: inline-block;

		width: 55px;
		height: 1px;
		background-color: ${theme.colors.accent};

		position: absolute;
		left: 50%;
		bottom: -30px;
		transform: translate(-50%, 50%);

		@media ${theme.media.mobile} {
			bottom: -24px;
		}
	}
`;
