import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
	return (
		<StyledSkills>
			<SectionTitle>My Skills</SectionTitle>
			<FlexWrapper wrap="wrap" justify="space-between">
				<Skill
					iconId="code"
					title="html5"
					text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
				/>
				<Skill
					iconId="css"
					title="css5"
					text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
				/>
				<Skill
					iconId="figma"
					title="figma"
					text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
				/>
				<Skill
					iconId="react"
					title="react"
					text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
				/>
				<Skill
					iconId="figma"
					title="figma"
					text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
				/>
				<Skill
					iconId="react"
					title="react"
					text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
				/>
			</FlexWrapper>
		</StyledSkills>
	);
};

const StyledSkills = styled.section`
	background-color: #aeaadf;
	min-height: 50vh;
`;
