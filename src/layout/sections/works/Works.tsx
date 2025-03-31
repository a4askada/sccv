import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";

import socialImg from "../../../assets/images/socialnetwork-1.webp";
import timerImg from "../../../assets/images/timer.webp";
import {Container} from "../../../components/Container";
import {TabMenu} from "./tabMenu/TabMenu";
import {Link} from "../../../components/icon/Link";

const worksItems = ["all", "landing page", "React", "spa"];

const workData = [
	{
		title: "Social Network",
		src: socialImg,
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
	{
		title: "Timer",
		src: timerImg,
		text: "ddddddddddddddddddddddddddddddddddLorem ipsum dolor sit  lorem lorem amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
];

export const Works: React.FC = () => {
	return (
		<StyledWorks>
			<Container>
				<SectionTitle>My Works</SectionTitle>
				<TabMenu menuItems={worksItems} />
				<FlexWrapper justify="space-between" align=" " wrap="wrap">
					{workData.map((w, index) => {
						return <Work key={index} src={w.src} title={w.title} text={w.text} />;
					})}
				</FlexWrapper>
			</Container>
		</StyledWorks>
	);
};

const StyledWorks = styled.section`
	min-height: 100vh;

	${FlexWrapper} {
		gap: 30px;
	}
`;
