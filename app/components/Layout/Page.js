import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Color from 'app/constants/Color';

import Header from './Header';

const PageWrapper = styled.SafeAreaView`
	background-color: ${Color.backgroundColor};
	height: 100%;
	width: 100%;
	padding-top: 5%;
`;

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
	]).isRequired,
	navigation: PropTypes.object.isRequired,
};

function Page(props) {
	// console.log('Page props:', props);

	const {
		navigation,
	} = props;

	return (
		<PageWrapper>
			<Header navigation={navigation} />
			{props.children}
		</PageWrapper>
	);
}

Page.propTypes = propTypes;

export default Page;
