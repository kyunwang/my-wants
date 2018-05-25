import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Color from 'app/constants/Color';

import Wrapper from './Wrapper';

const Label = styled.Text`
	color: ${Color.mainWhite};
	align-self: center;
	font-family: font-regular;
`;

const propTypes = {
	onPress: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
};

const defaultProps = {
};

function Button({
	onPress, title, style,
}) {
	return (
		<Wrapper
			style={style}
			onPress={onPress}
			activeOpacity={0.7}
		>
			<Label>
				{title.toUpperCase()}
			</Label>
		</Wrapper>
	);
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
