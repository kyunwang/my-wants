import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Color from '../../constants/Color';

import Header from './Header';

const PageWrapper = styled.SafeAreaView`
	background-color: ${Color.backgroundColor};
	height: 100%;
	width: 100%;
	padding-top: 5%;
`;

const PageText = styled.Text`
	color: gray;
`;


const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
	]).isRequired,
};

function Page(props) {
	const {
		navigation,
	} = props;

	return (
		<PageWrapper>
			<Header navigation={navigation} />
			<PageText>Page</PageText>
			{props.children}
		</PageWrapper>
	);
}

Page.propTypes = propTypes;

export default Page;
