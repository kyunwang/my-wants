import React from 'react';
import PropTypes from 'prop-types';

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

// Return a closure to render the function just once instead of each render (currying)
function headerNavigate(navigation, route, title) {
	return function navigate() {
		console.log(navigation.state, title);

		navigation.navigate(route, { title });
		// navigation.setParams({ title });
	};
}

function getHeader(navigation) {
	const { params } = navigation.state;

	// Set default to 'overview'
	if (typeof params === 'undefined' || typeof params.title === 'undefined') {
		return 'overview'.toUpperCase();
	}

	// Return the title
	return params.title.toUpperCase();
}

const propTypes = {
	navigation: PropTypes.object.isRequired,
};

function Header(props) {
	// console.log('Header', props);
	const {
		navigation,
	} = props;

	return (
		<HeaderWrapper>
			<ButtonWrapper onPress={headerNavigate(navigation, 'Overview', 'overview')}>
				<HeaderButton
					source={Icon.menu}
					fadeDuration={0}
				/>
			</ButtonWrapper>

			<HeaderTitle>{getHeader(navigation)}</HeaderTitle>

			<ButtonWrapper onPress={headerNavigate(navigation, 'ItemForm', 'new item')}>
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
