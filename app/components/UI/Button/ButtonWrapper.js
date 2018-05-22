
import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ButtonWrap = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`;

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
	]).isRequired,
	onPress: PropTypes.func.isRequired,
};

const defaultProps = {};

function ButtonWrapper(props) {
	const {
		onPress,
	} = props;

	return (
		<ButtonWrap
			activeOpacity={0.7}
			onPress={onPress}
		>
			{props.children}
		</ButtonWrap>
	);
}

ButtonWrapper.propTypes = propTypes;
ButtonWrapper.defaultProps = defaultProps;

export default ButtonWrapper;
