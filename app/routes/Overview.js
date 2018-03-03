import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

// import { View, Text } from 'react-native';

const OverviewWrapper = styled.View`
	background-color: red;
	height: 100px;
	width: 100px;
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

export default Overview;
