import React, { PureComponent } from 'react';

import { Tester, TestHookStore } from 'cavy';

import MyWantsApp from './app/MyWantsApp';

import GLOBAL from './app/helpers/globals';

if (GLOBAL.TEST_ENABLED) {
	const TestSuites = require('./specs/AppSpec.js');
	// Has to be var or else it will not work
	var testHookStore = new TestHookStore();
	var testSuitesArray = [TestSuites.test];

	// console.ignoredYellowBox = ['A component for'];

	// const testApiParams = {
	// 	url: 'http://localhost:3003/jenkins',
	// 	method: 'POST',
	// 	headers: { 'Content-Type': 'application/json' },
	// };
}

class AppWrapper extends PureComponent {
	render() {
		if (GLOBAL.TEST_ENABLED) {
			return (
				<Tester
					specs={testSuitesArray}
					store={testHookStore}
					waitTime={1000} // Time for finding specified hooked components
					// testStartDelay={1000}
					// consoleLog="verbose" // {false}, {true}, 'verbose'
					// reporter="ChromiumJSONTestReporting"
					// notifier={testApiParams}
					reRender={false}
				>
					<MyWantsApp />
				</Tester>
			);
		}

		return (<MyWantsApp />);
	}
}

export default AppWrapper;
