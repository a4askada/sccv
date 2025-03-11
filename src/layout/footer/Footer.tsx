import React from "react";
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

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
	background-color: #794f45;
	min-height: 20vh;
	text-align: center;
`;

const Name = styled.h5``;
const SocialList = styled.ul`
	display: flex;
`;
const SocialItem = styled.li``;
const SocialLink = styled.a``;
const Copyright = styled.small``;
