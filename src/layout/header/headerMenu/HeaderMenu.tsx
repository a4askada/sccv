import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

// type MenuPropsType={
// 	menuItems:Array<string>       Тоже самое (если один пропс то незачем писать это а сразу туда)
// }

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
	return (
		<StyledHeaderMenu>
			<ul>
				{props.menuItems.map((item, index) => {
					return (
						<ListItem key={index}>
							<Link href="">
								{item}
								<Mask>
									<span>{item}</span>
								</Mask>
								<Mask>
									<span>{item}</span>
								</Mask>
							</Link>
						</ListItem>
					);
				})}
			</ul>
		</StyledHeaderMenu>
	);
};

const StyledHeaderMenu = styled.nav`
	ul {
		display: flex;
		gap: 30px;
		justify-content: center;
	}

	@media ${theme.media.tablet} {
		display: none;
	}
`;
const Link = styled.a`
	color: #3d39c4;
	font-family: "Josefin Sans", sans-serif;
	font-size: 30px;

	font-weight: 400;
	line-height: 55px;
`;

const Mask = styled.span`
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
	height: 50%;
	overflow-y: hidden;
	/* outline: 1px solid red; */
	color: ${theme.colors.accent};

	& + & {
		top: 50%;
		span {
			display: inline-block;
			transform: translateY(-50%);
		}
	}
`;

const ListItem = styled.li`
	position: relative;

	&:hover {
		${Mask} {
			transform: skew(12deg) translateX(5px);

			& + ${Mask} {
				transform: scaleX(12deg) translateX(-5px);
			}
		}
	}
`;
