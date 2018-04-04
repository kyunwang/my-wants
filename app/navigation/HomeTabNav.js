import React from 'react';

import { TabNavigator, TabBarBottom } from 'react-navigation';

import HomeScreen from 'app/routes/Home';
import ArchiveScreen from 'app/routes/Home/ArchiveScreen';

const HomeTabNav = TabNavigator({
	Overview: {
		screen: HomeScreen,
	},
	Archive: {
		screen: ArchiveScreen,
	},
}, {
	tabBarComponent: TabBarBottom,
	tabBarPosition: 'bottom',
	animationEnabled: true,
	swipeEnabled: true,
});

export default HomeTabNav;
