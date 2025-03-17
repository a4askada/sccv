import React from "react";
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
	return (
		<StyledFooter>
			<FlexWrapper direction="column" align="center">
				<Name>Svetlana</Name>
				<SocialList>
					<SocialItem>
						<SocialLink>
							<Icon iconId="vk" height="21px" width="21px" viewBox="0 0 21px 21px" />
						</SocialLink>
					</SocialItem>
					<SocialItem>
						<SocialLink>
							<Icon iconId="telegram" height="21px" width="21px" viewBox="0 0 21px 21px" />
						</SocialLink>
					</SocialItem>
					<SocialItem>
						<SocialLink>
							<Icon iconId="instagram" height="21px" width="21px" viewBox="0 0 21px 21px" />
						</SocialLink>
					</SocialItem>
					<SocialItem>
						<SocialLink>
							<Icon iconId="linkedin" height="21px" width="21px" viewBox="0 0 21px 21px" />
						</SocialLink>
					</SocialItem>
				</SocialList>

				<Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
			</FlexWrapper>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	background-color: ${theme.colors.primaryBg};

	padding: 40px 0 40px;
	text-align: center;
`;

const Name = styled.h5`
	font-family: "Josefin Sans", sans-serif;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 3px;
`;
const SocialList = styled.ul`
	margin: 30px 0 30px;
	display: flex;
	gap: 20px;
`;
const SocialItem = styled.li``;
const SocialLink = styled.a`
	width: 35px;
	height: 35px;

	border-radius: 25px;
	background-color: rgba(255, 255, 255, 0.1);

	display: flex;
	justify-content: center;
	align-items: center;

	color: ${theme.colors.accent};

	&:hover {
		color: ${theme.colors.primaryBg};
		background-color: ${theme.colors.accent};
		transform: translateY(-4px);
	}
`;
const Copyright = styled.small`
	font-size: 12px;

	opacity: 0.5;
`;
