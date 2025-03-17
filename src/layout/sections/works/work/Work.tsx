import React from "react";
import styled from "styled-components";
import {Link} from "../../../../components/icon/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";
type WorkPropsType = {
	title: string;
	text: string;
	src: string;
};

export const Work = (props: WorkPropsType) => {
	return (
		<StyledWork>
			<ImageWrapper>
				<Button>view project</Button>
				<Image src={props.src} alt="" />
			</ImageWrapper>

			<Description>
				<Title>{props.title}</Title>
				<Text>{props.text}</Text>
				<Link href="#">demo</Link>
				<Link href="#">code</Link>
			</Description>
		</StyledWork>
	);
};

const StyledWork = styled.div`
	background-color: ${theme.colors.secondaryBg};
	max-width: 540px;
	width: 100%;

	${Link} {
		padding: 10px 2px;
		& + ${Link} {
			margin-left: 20px;
		}
	}
`;
const ImageWrapper = styled.div`
	position: relative;

	${Button} {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;

		&::before {
			width: 100%;
			height: 100%;
		}
	}

	&:hover {
		${Button} {
			opacity: 1;
		}
		&::before {
			content: "";
			position: absolute;
			right: 0;
			left: 0;
			top: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.3);
			backdrop-filter: blur(4px);
		}
	}
`;

const Image = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
`;

const Title = styled.h3`
	text-transform: uppercase;
`;
const Text = styled.p`
	margin: 14px 0 10px;
	padding-right: 13px;
`;
const Description = styled.div`
	padding: 25px 20px;
`;
