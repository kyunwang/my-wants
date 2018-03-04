import React from 'react';
// import PropTypes from 'prop-types';

import { StackNavigator } from 'react-navigation';

import HomeScreen from '../routes/Home';
import ItemFormScreen from '../routes/ItemFormScreen';


// import HomeTabNav from '../navigation/HomeTabNav';

const RootStack = StackNavigator({
	Overview: {
		// screen: HomeTabNav,
		screen: HomeScreen,
	},
	ItemForm: {
		screen: ItemFormScreen,
	},
}, {
	initialRouteName: 'Overview',
	navigationOptions: {},
	headerMode: 'none',
});

// Keeping this in case there is a problem with using a SFC
// class MyWantsApp extends Component {
// 	render() {
// 		return <RootStack />;
// 	}
// }

function RootNavigation() {
	return <RootStack />;
}

export default RootNavigation;
