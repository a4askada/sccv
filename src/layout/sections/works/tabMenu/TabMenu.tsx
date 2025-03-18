import React from "react";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/icon/Link";

// type MenuPropsType={
// 	menuItems:Array<string>       Тоже самое (если один пропс то незачем писать это а сразу туда)
// }

export const TabMenu = (props: {menuItems: Array<string>}) => {
	return (
		<StyledTabMenu>
			<ul>
				{props.menuItems.map((item, index) => {
					return (
						<ListItem key={index}>
							<Link href="">{item}</Link>
						</ListItem>
					);
				})}
			</ul>
		</StyledTabMenu>
	);
};

const StyledTabMenu = styled.nav`
	ul {
		display: flex;

		justify-content: space-between;
		max-width: 352px;
		width: 100%;

		margin: 0 auto 40px;

		outline: 1px solid blue;
	}
`;

const ListItem = styled.li``;
