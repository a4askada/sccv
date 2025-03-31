import React from "react";
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";
import {S} from "../skill/Skills_Styles";
type SkillPropsType = {
	iconId: string;
	title: string;
	text: string;
};

export const Skill = (props: SkillPropsType) => {
	return (
		<S.Skill>
			<S.IconWrapper>
				<Icon iconId={props.iconId} />
			</S.IconWrapper>

			<S.SkillTitle>{props.title}</S.SkillTitle>
			<S.SkillText>{props.text}</S.SkillText>
		</S.Skill>
	);
};
