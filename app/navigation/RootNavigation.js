import React from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from 'app/screens/Home';
import ItemForm from 'app/screens/NewForm';


// import HomeTabNav from 'app/navigation/HomeTabNav';

const RootStack = StackNavigator({
	Overview: {
		// screen: HomeTabNav,
		headerTitle: 'overview',
		screen: HomeScreen,
	},
	ItemForm: {
		title: 'new item',
		screen: ItemForm,
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
