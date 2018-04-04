import { hook, wrap } from 'cavy';

import GLOBAL from './globals';

// We wrap the stateless components with this to allow the usage of refs
function testWrapHook(component) {
	if (GLOBAL.TEST_ENABLED) {
		return hook(wrap(component));
	}
	return component;
}

// We wrap statefull component with this
function testHook(component) {
	if (GLOBAL.TEST_ENABLED) {
		return hook(component);
	}
	return component;
}

export {
	testWrapHook,
	testHook,
};
