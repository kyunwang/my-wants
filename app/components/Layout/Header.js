import React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';

import styled from 'styled-components';

import Style from '../../constants/Style';
import Color from '../../constants/Color';
import Icon from '../../constants/Icon';

import ButtonWrapper from '../Button/ButtonWrapper';

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

function headerNavigate(navigation, route) {
	return function () {
		console.log(route);
		navigation.navigate(route);
	};
}

const propTypes = {
	navigation: PropTypes.object.isRequired,
};

function Header(props) {
	const {
		navigation,
	} = props;

	return (
		<HeaderWrapper>
			<ButtonWrapper onPress={headerNavigate(navigation, 'Overview')}>
				<HeaderButton
					source={Icon.menu}
					fadeDuration={0}
				/>
			</ButtonWrapper>

			<HeaderTitle>{'header'.toUpperCase()}</HeaderTitle>
			<ButtonWrapper onPress={headerNavigate(navigation, 'ItemForm')}>
				<HeaderButton
					source={Icon.add}
					fadeDuration={0}
				/>
			</ButtonWrapper>
		</HeaderWrapper>
	);
}

Header.propTypes = propTypes;

export default Header;
