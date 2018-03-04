import React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';

import styled from 'styled-components';

import Style from '../../constants/Style';

const HeaderWrapper = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 50;

	paddingHorizontal: ${Style.spaceHorizontal};
`;

const HeaderTitle = styled.Text`
	font-family: font-regular
`;

function Header() {
	// Props is empty atm need the title
	return (
		<HeaderWrapper>
			<Text>X</Text>
			<HeaderTitle>{'header'.toUpperCase()}</HeaderTitle>
			<Text>X</Text>
		</HeaderWrapper>
	);
}

export default Header;
