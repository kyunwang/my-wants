
import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ButtonWrap = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	overflow: visible;
`;

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
	]).isRequired,
	onPress: PropTypes.func.isRequired,
};

const defaultProps = {};

function Wrapper(props) {
	const {
		onPress,
		style,
	} = props;

	return (
		<ButtonWrap
			style={style}
			activeOpacity={0.7}
			onPress={onPress}
		>
			{props.children}
		</ButtonWrap>
	);
}

Wrapper.propTypes = propTypes;
Wrapper.defaultProps = defaultProps;

export default Wrapper;
