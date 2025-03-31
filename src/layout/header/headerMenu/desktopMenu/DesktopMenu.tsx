import React from "react";
import styled from "styled-components";
import {S} from "../HeaderMenu_Styles";
import {Menu} from "../menu/Menu";

// type MenuPropsType={
// 	menuItems:Array<string>       Тоже самое (если один пропс то незачем писать это а сразу туда)
// }

export const DesktopMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
	return (
		<S.DesktopMenu>
			<Menu menuItems={props.menuItems} />
		</S.DesktopMenu>
	);
};
