import React, { Component } from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import GLOBAL from 'app/config/globals';
import { testHook } from 'app/config/cavy';

import Page from 'app/components/Layout/Page';

import OverviewScreen from './Overview';
import ArchiveScreen from './Archive';

const PageWrapper = styled.View`
	background-color: red;
	height: 300px;
	width: 100%;

	flex-direction: row;
`;

const propTypes = {
	generateTestHook: PropTypes.func,
	navigation: PropTypes.object.isRequired,
};

const defaultProps = {
	generateTestHook: () => {},
};

class Overview extends Component {
	static propTypes = propTypes;
	static defaultProps = defaultProps;

	render() {
		// console.log('Overview', this.props);
		const {
			navigation,
		} = this.props;

		return (
			<Page navigation={navigation}>
				<PageWrapper>
					<OverviewScreen />
					{/* <ArchiveScreen /> */}
				</PageWrapper>
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
