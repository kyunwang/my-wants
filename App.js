import React, { PureComponent } from 'react';

import { Tester, TestHookStore } from 'cavy';

import GLOBAL from './app/helpers/globals.js';
import MyWantsApp from './app/MyWantsApp';

if (GLOBAL.TEST_ENABLED) {
	// if (GLOBAL.API_URL !== 'stage') {console.error('You are running tests on prod!')} else {...

	var testHookStore = new TestHookStore();
	console.ignoredYellowBox = ['A component for'];

	const TestSuites = require('./specs/AppSpec.js');
	console.log(TestSuites);


	// // Test Suites ////
	var testSuitesArray = [TestSuites.test];

	const testApiParams = {
		url: 'http://localhost:3003/jenkins',
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	};
}

class AppWrapper extends PureComponent {
	render() {
		if (GLOBAL.TEST_ENABLED) {
			return (
				<Tester
					specs={testSuitesArray}
					store={testHookStore}
					waitTime={1000}
					testStartDelay={1000}
					consoleLog="verbose" // {false}, {true}, 'verbose'
					reporter="ChromiumJSONTestReporting"
					// notifier={testApiParams}
					reRender={false}
				>
					<MyWantsApp />
				</Tester>
			);
		}
		return (
			<MyWantsApp />
		);
	}
}

export default AppWrapper;
