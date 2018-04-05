import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Color from 'app/constants/Color';

const InputContainer = styled.View`
	flex: 1;
	max-height: 55px;
	margin-bottom: 12px;
	border-bottom-width: 1px;
	border-bottom-color: ${Color.lightGrey2};
	padding: 0 6px;
`;

const StyledTextInput = styled.TextInput`
	font-family: font-regular;
	font-size: 18px;
	height: 30px;
	width: 100%;
`;

const Label = styled.Text`
	font-family: font-regular;
	color: ${Color.primaryColor}
`;


class FormTextInput extends Component {
	static propTypes = {
		labelName: PropTypes.string.isRequired,
	}

	static defaultProps = {
		// labelName: 'label',
	}

	state = {}

	render() {
		const {
			containerStyle,
			labelName,
		} = this.props;

		return (
			<InputContainer style={containerStyle}>
				<Label>{labelName}</Label>
				<StyledTextInput
					maxLength={20}
					underlineColorAndroid="transparent"
				/>
			</InputContainer>
		);
	}
}

export default FormTextInput;
