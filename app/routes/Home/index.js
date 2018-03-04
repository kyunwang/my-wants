import React, { Component } from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Page from '../../components/Layout/Page';

import GLOBAL from '../../helpers/globals';
import { testHook } from '../../helpers/cavy';

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
			<Page>
				<OverviewWrapper>
					<OverviewText>Overview</OverviewText>
				</OverviewWrapper>
				<Button
					ref={GLOBAL.TEST_ENABLED ? this.props.generateTestHook('Overview.ToOverview') : null}
					title="Overview"
					onPress={() => this.props.navigation.navigate('Overview')}
				/>
				<Button
					ref={GLOBAL.TEST_ENABLED ? this.props.generateTestHook('Overview.ToArchive') : null}
					title="Archive"
					onPress={() => this.props.navigation.navigate('Archive')}
				/>
				<Button
					ref={GLOBAL.TEST_ENABLED ? this.props.generateTestHook('Overview.ToItemForm') : null}
					title="ItemForm"
					onPress={() => this.props.navigation.navigate('ItemForm')}
				/>
			</Page>
		);
	}
}

export default testHook(Overview);
