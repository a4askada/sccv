import React from "react";

import photo from "../../../assets/images/sveta.webp";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper align="center" justify="space-around" wrap="wrap">
					<div>
						<SmallText>Hi There</SmallText>

						<Name>
							I am <span>Svetlana Dyablo</span>
						</Name>
						<MainTitle>A Web Developer. </MainTitle>
					</div>
					<PhotoWrapper>
						<Photo src={photo} />
					</PhotoWrapper>
				</FlexWrapper>
			</Container>
		</StyledMain>
	);
};

const StyledMain = styled.section`
	min-height: 100vh;
	background-color: #77608d;
	display: flex;
`;

const Photo = styled.img`
	width: 350px;
	height: 430px;
	object-fit: cover;

	margin-right: 17px;

	@media ${theme.media.mobile} {
		width: 310px;
		height: 380px;
	}
`;
const MainTitle = styled.h1`
	${font({weight: 400, Fmax: 24, Fmin: 20})}
`;
const Name = styled.h2`
	${font({family: '"Josefin Sans",sans-serif', weight: 700, Fmax: 50, Fmin: 36})}

	letter-spacing: 2.5px;

	margin: 10px 0;
	display: inline-block;

	span {
		position: relative;
		z-index: 1;
		white-space: nowrap;

		::before {
			content: "";
			display: inline-block;
			width: 100%;
			height: 20px;
			background-color: ${theme.colors.accent};

			position: absolute;
			bottom: 0;
			z-index: -1;
		}
	}

	@media ${theme.media.mobile} {
		margin: 15px 0 22px;
	}
`;
const SmallText = styled.span`
	display: block;
	font-size: 14px;
	font-weight: 400;
`;

const PhotoWrapper = styled.div`
	position: relative;
	z-index: 1;

	@media ${theme.media.mobile} {
		margin-top: 65px;
	}

	&::before {
		content: "";
		display: inline-block;
		width: 360px;
		height: 470px;
		border: 5px solid ${theme.colors.accent};

		position: absolute;
		top: -24px;
		left: 24px;

		z-index: -1;

		@media ${theme.media.mobile} {
			height: 414px;
			width: 314px;
			top: -17px;
			left: 20px;
		}
	}
`;
