import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Page from '../../components/Layout/Page';

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
			<Page>
				<ArchiveWrapper>
					<ArchiveText>Archive</ArchiveText>
				</ArchiveWrapper>
			</Page>
		);
	}
}

export default Archive;
