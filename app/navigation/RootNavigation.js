import React from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from '../routes/Home';
import ItemFormScreen from '../routes/ItemFormScreen';


// import HomeTabNav from '../navigation/HomeTabNav';

const RootStack = StackNavigator({
	Overview: {
		// screen: HomeTabNav,
		headerTitle: 'overview',
		screen: HomeScreen,
	},
	ItemForm: {
		title: 'new item',
		screen: ItemFormScreen,
	},
}, {
	initialRouteName: 'Overview',
	// navigationOptions: ({ navigation }) => {
	// 	const { params } = navigation.state;
	// 	return {
	// 		headerTitle: params ? params.title : '',
	// 	};
	// },

	headerMode: 'none', // Turn off the default header
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
