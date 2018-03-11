import React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';

import styled from 'styled-components';

import Style from '../../constants/Style';
import Color from '../../constants/Color';
import Icon from '../../constants/Icon';

const HeaderWrapper = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 50;

	paddingHorizontal: ${Style.spaceHorizontal};
`;

const HeaderTitle = styled.Text`
	font-family: font-bold;
	color: ${Color.secColor};
`;

const HeaderButton = styled.Image`
	height: 15;
	width: 15;
`;

function Header() {
	// Props is empty atm need the title
	return (
		<HeaderWrapper>
			<HeaderButton
				source={Icon.menu}
				fadeDuration={0}
			/>

			<HeaderTitle>{'header'.toUpperCase()}</HeaderTitle>
			<HeaderButton
				source={Icon.add}
				fadeDuration={0}
			/>
		</HeaderWrapper>
	);
}

export default Header;
