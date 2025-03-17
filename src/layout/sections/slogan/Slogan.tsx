import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";

export const Slogan = () => {
	return (
		<StyledSlogan>
			<Container>
				<SectionTitle>I Am Available For Freelance</SectionTitle>
				<Button>Hire me</Button>
			</Container>
		</StyledSlogan>
	);
};

const StyledSlogan = styled.section`
	text-align: center;
	min-height: 30vh;
	background-color: #a8a6a6;
`;
