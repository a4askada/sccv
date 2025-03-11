import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";

export const Contacts = () => {
	return (
		<StyledContact>
			<SectionTitle>Contact</SectionTitle>
			<StyledForm>
				<Field placeholder="Name" />
				<Field placeholder="Subject" />
				<Field as="textarea" placeholder="Message" />
				<Button type="submit">Send message</Button>
			</StyledForm>
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
	gap: 10px;
`;
const Field = styled.input``;
