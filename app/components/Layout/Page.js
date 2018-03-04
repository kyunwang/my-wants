import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { SafeAreaView } from 'react-native';

const PageWrapper = styled.SafeAreaView`
	background-color: yellow;
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
	return (
		<PageWrapper>
			<PageText>Page</PageText>
			{props.children}
		</PageWrapper>
	);
}

Page.propTypes = propTypes;

export default Page;
