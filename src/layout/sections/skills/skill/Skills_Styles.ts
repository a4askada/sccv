import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const Skills = styled.section``;

export const IconWrapper = styled.div`
	position: relative;
	margin-bottom: 70px;

	&::before {
		content: "";
		display: inline-block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		width: 80px;
		height: 80px;

		background: rgba(255, 255, 255, 0.1);
	}
`;
const Skill = styled.div`
	width: 340px;
	flex-grow: 1;
	padding: 62px 20px 40px;
	text-align: center;

	@media ${theme.media.mobile} {
		padding: 62px 0px 40px;
	}
`;
const SkillTitle = styled.h3`
	font-family: "Josefin Sans";
	font-size: 16px;
	font-weight: 700;
	letter-spacing: 1px;
	text-transform: uppercase;
	margin-bottom: 15px;
`;
const SkillText = styled.p`
	font-size: 14px;
`;

export const S = {
	Skills,
	IconWrapper,
	Skill,
	SkillTitle,
	SkillText,
};
