import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { testHook } from '../../helpers/cavy';
import Style from '../../constants/Style';

import CardActive from '../../components/UI/Card/CardActive';

const OverviewWrapper = styled.View`
	justify-content: center;
	align-items: center;
	height: 300px;
	width: 100%;
	background-color: red;

`;

const OverviewText = styled.Text`
	color: blue;
`;

const CardListWrapper = styled.View`
	width: 100%;
	paddingHorizontal: ${Style.spaceHorizontal}
`;

function Overview() {
	return (
		<OverviewWrapper>
			<OverviewText>Overview</OverviewText>

			<CardListWrapper>
				<CardActive />
			</CardListWrapper>
		</OverviewWrapper>
	);
}

export default testHook(Overview);
