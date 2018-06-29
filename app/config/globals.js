import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const globals = {
	TEST_ENABLED: false,
	width,
	height,
};

module.exports = { ...globals };
