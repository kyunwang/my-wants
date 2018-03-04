import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { testHook } from '../../helpers/cavy';


const OverviewWrapper = styled.View`
	background-color: red;
	height: 300px;
	width: 90%;

	flex-direction: row;
`;

const OverviewText = styled.Text`
	color: blue;
`;

class Overview extends Component {
	render() {
		return (
			<OverviewWrapper>
				<OverviewText>Overview</OverviewText>
			</OverviewWrapper>
		);
	}
}

export default testHook(Overview);
