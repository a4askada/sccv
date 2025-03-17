import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
	return (
		<StyledContact>
			<Container>
				<SectionTitle>Contact</SectionTitle>
				<StyledForm>
					<Field placeholder="Name" />
					<Field placeholder="Subject" />
					<Field as="textarea" placeholder="Message" />
					<Button type="submit">Send message</Button>
				</StyledForm>
			</Container>
		</StyledContact>
	);
};

const StyledContact = styled.section`
	min-height: 40vh;
	background-color: #a69fad;
`;

const StyledForm = styled.form`
	max-width: 540px;
	margin: 0 auto;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: center;

	textarea {
		resize: none;
		height: 155px;
	}
`;
const Field = styled.input`
	width: 100%;
	border: 1px solid ${theme.colors.borderColor};
	background-color: ${theme.colors.secondaryBg};
	padding: 7px 15px;
	color: ${theme.colors.font};

	font-family: "Poppins", sans-serif;
	font-size: 12px;

	font-weight: 400;

	letter-spacing: 0.6px;

	outline: none;

	&::placeholder {
		color: ${theme.colors.placeholderColor};
		text-transform: capitalize;
	}
`;
