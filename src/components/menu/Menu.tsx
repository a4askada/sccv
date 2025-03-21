import React from "react";
import styled from "styled-components";

// type MenuPropsType={
// 	menuItems:Array<string>       Тоже самое (если один пропс то незачем писать это а сразу туда)
// }

export const Menu = (props: {menuItems: Array<string>}) => {
	return (
		<StyledMenu>
			<ul>
				{props.menuItems.map((item, index) => {
					return (
						<li key={index}>
							<a href="">{item}</a>
						</li>
					);
				})}
			</ul>
		</StyledMenu>
	);
};

const StyledMenu = styled.nav`
	ul {
		display: flex;
		gap: 30px;
		justify-content: center;
	}
`;
