import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Overview from './routes/Overview';
import Archive from './routes/Archive';

// class MyWantsApp extends Component {
// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<Text>Open up App.js to start working on your app!</Text>
// 			</View>
// 		);
// 	}
// }

const RootStack = StackNavigator({
	Overview: {
		screen: Overview,
	},
	Archive: {
		screen: Archive,
	},
}, {
	initialRouteName: 'Overview',
	/* The header config from HomeScreen is now here */
	navigationOptions: {
		// headerStyle: {
		// 	backgroundColor: '#f4511e',
		// },
		// headerTintColor: '#fff',
		// headerTitleStyle: {
		// 	fontWeight: 'bold',
		// },
	},
	headerMode: 'none',
});

export default class App extends Component {
	render() {
	  return <RootStack />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

// export default MyWantsApp;
