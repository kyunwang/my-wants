import React, { Component } from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { connect } from 'react-redux';
import { mapDispatchToProps } from 'app/store/tools';

import GLOBAL from 'app/config/globals';
import { testHook } from 'app/config/cavy';

import Page from 'app/components/Layout/Page';

import OverviewScreen from './Overview';
import ArchiveScreen from './Archive';

const PageWrapper = styled.View`
	flex: 1;
	width: 100%;
	flex-direction: row;
`;

const propTypes = {
	generateTestHook:
		PropTypes.func,
	navigation:
		PropTypes
			.object
			.isRequired,
};

const defaultProps = {
	generateTestHook: () => {},
};

class Overview extends Component {
	static propTypes = propTypes;
	static defaultProps = defaultProps;

	componentDidMount() {}

	render() {
		// console.log('Overview', this.props);
		const {
			navigation,
			myItems,
		} = this.props;

		return (
			<Page navigation={navigation}>
				<PageWrapper>
					<OverviewScreen myItems={myItems} />
					{/* <ArchiveScreen /> */}
				</PageWrapper>
				<Button
					ref={
						GLOBAL.TEST_ENABLED
							? this.props.generateTestHook('Overview.ToOverview')
							: null
					}
					title="Overview"
					onPress={() =>
						this.props.navigation.navigate('Overview')
					}
				/>
				<Button
					ref={
						GLOBAL.TEST_ENABLED
							? this.props.generateTestHook('Overview.ToArchive')
							: null
					}
					title="Archive"
					onPress={() =>
						this.props.navigation.navigate('Archive')
					}
				/>
				<Button
					ref={
						GLOBAL.TEST_ENABLED
							? this.props.generateTestHook('Overview.ToItemForm')
							: null
					}
					title="ItemForm"
					onPress={() =>
						this.props.navigation.navigate('ItemForm')
					}
				/>
			</Page>
		);
	}
}

export default connect(
	({ myItems }) => ({ myItems }),
	mapDispatchToProps,
)(testHook(Overview));
