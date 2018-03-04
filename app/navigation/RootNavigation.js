import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { StackNavigator } from 'react-navigation';

import Overview from '../routes/Overview';
import Archive from '../routes/Archive';
import ItemForm from '../routes/ItemForm';

const RootStack = StackNavigator({
	Overview: {
		screen: Overview,
	},
	Archive: {
		screen: Archive,
	},
	ItemForm: {
		screen: ItemForm,
	},
}, {
	initialRouteName: 'Overview',
	navigationOptions: {},
	headerMode: 'none',
});

// class MyWantsApp extends Component {
// 	render() {
// 		return <RootStack />;
// 	}
// }

function MyWantsApp() {
	return <RootStack />;
}

export default MyWantsApp;
