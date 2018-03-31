import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ArchiveWrapper = styled.View`
	background-color: pink;
	height: 100px;
	width: 90%;
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
