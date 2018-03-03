import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

// import { View, Text } from 'react-native';

const ArchiveWrapper = styled.View`
	background-color: red;
	height: 100px;
	width: 100px;
`;

const ArchiveText = styled.Text`
	color: blue;
`;

class Archive extends Component {
	render() {
		return (
			<ArchiveWrapper>
				<ArchiveText>Archive</ArchiveText>
			</ArchiveWrapper>
		);
	}
}

export default Archive;
