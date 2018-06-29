import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Style from 'app/constants/Style';
import Color from 'app/constants/Color';
import Icon from 'app/constants/Icon';

import ButtonWrapper from 'app/components/UI/Button/Wrapper';

const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 50;
`;
// paddingHorizontal: ${Style.defSpace};

const HeaderTitle = styled.Text`
  font-family: font-bold;
  color: ${Color.secColor};
  flex: 1;
  text-align: center;
`;

const HeaderButton = styled.Image`
  height: 15px;
  width: 15px;
  margin: ${Style.defSpace}px;
`;

const HeaderText = styled.Text`
  font-family: font-bold;
  color: ${Color.mainBlack};
`;

// Return a closure to render the function just once instead of each render (currying)
function headerNavigate(navigation, route, title, back) {
	return function navigate() {
		if (back) {
			return navigation.goBack();
		}

		navigation.navigate(route, { title });
	};
}

function getHeader(navigation) {
	const { params } = navigation.state;

	// Set default to 'overview'
	if (typeof params === 'undefined' || typeof params.title === 'undefined') {
		// Or just return? e.g. no title
		return <HeaderTitle>{'overview'.toUpperCase()}</HeaderTitle>;
	}

	// Return the title
	return <HeaderTitle>{params.title.toUpperCase()}</HeaderTitle>;
}

const propTypes = {
	navigation: PropTypes.object.isRequired,
	showCloseBtn: PropTypes.bool,
	closeBtnText: PropTypes.string,
};

const defaultProps = {
	showCloseBtn: false,
	closeBtnText: 'close',
};

function Header(props) {
	const { navigation, showCloseBtn, closeBtnText } = props;

	return (
		<HeaderWrapper>
			{showCloseBtn ? (
				<ButtonWrapper
					style={{ maxWidth: 55 }}
					onPress={headerNavigate(navigation, null, null, true)}
				>
					<HeaderButton source={Icon.close} fadeDuration={0} />
					<HeaderText>{closeBtnText}</HeaderText>
				</ButtonWrapper>
			) : (
				<ButtonWrapper
					style={{ maxWidth: 55 }}
					onPress={headerNavigate(navigation, 'Overview', 'overview')}
				>
					<HeaderButton source={Icon.menu} fadeDuration={0} />
				</ButtonWrapper>
			)}

			{getHeader(navigation)}

			<ButtonWrapper
				style={{ maxWidth: 55 }}
				onPress={headerNavigate(navigation, 'ItemForm', 'new item')}
			>
				<HeaderButton source={Icon.add} fadeDuration={0} />
			</ButtonWrapper>
		</HeaderWrapper>
	);
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
