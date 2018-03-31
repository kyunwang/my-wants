
import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
	]).isRequired,
	onPress: PropTypes.func.isRequired,
};

const defaultProps = {
	// onPress: () => {},
};


function ButtonWrapper(props) {
	const {
		onPress,
	} = props;

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={onPress}
		>
			{props.children}
		</TouchableOpacity>
	);
}

ButtonWrapper.propTypes = propTypes;
ButtonWrapper.defaultProps = defaultProps;

export default ButtonWrapper;
