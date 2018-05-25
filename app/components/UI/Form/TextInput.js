import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Animated, ViewPropTypes } from 'react-native';

import styled from 'styled-components';

import Color from 'app/constants/Color';

// position: relative;
const InputContainer = styled.View`
	flex: 1;
	flex-direction: row;
	max-height: 55px;
	height: 55px;
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
	align-self: flex-end;
`;

const Label = styled.Text`
	font-family: font-regular;
	font-size: 18px;
	text-align: left;
	letter-spacing: 2px;
	position: absolute;
	bottom: 0;
	margin-left: 6px;
	margin-bottom: 6px;

`;

const AnimatedLabel = Animated.createAnimatedComponent(Label);

class FormTextInput extends Component {
	static propTypes = {
		containerStyle: ViewPropTypes.style,
		labelName: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired,
		inputName: PropTypes.string.isRequired,
		textValue: PropTypes.string,
		keyboardType: PropTypes.string,
	}

	static defaultProps = {
		containerStyle: {},
		keyboardType: 'default',
		textValue: '',
	}

	state = {
		labelPosY: new Animated.Value(0),
		labelPosX: new Animated.Value(0),
		labelScale: new Animated.Value(1),
	}

	onInputFocus = () => {
		if (this.props.textValue) return;

		const {
			labelScale,
			labelPosY,
			labelPosX,
		} = this.state;

		Animated.parallel([
			Animated.timing(labelScale, {
				toValue: 0.8,
				duration: 300,
				useNativeDriver: true,
			}),
			Animated.timing(labelPosY, {
				toValue: -30,
				duration: 300,
				useNativeDriver: true,
			}),
			Animated.timing(labelPosX, {
				toValue: -12,
				duration: 300,
				useNativeDriver: true,
			}),
		]).start();
	}

	onEndEditing = () => {
		if (this.props.textValue) return;

		const {
			labelScale,
			labelPosY,
			labelPosX,
		} = this.state;

		Animated.parallel([
			Animated.timing(labelScale, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
			}),
			Animated.timing(labelPosY, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}),
			Animated.timing(labelPosX, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}),
		]).start();
	}

	render() {
		const {
			labelScale,
			labelPosY,
			labelPosX,
		} = this.state;

		const {
			containerStyle,
			labelName,
			onChange,
			inputName,
			keyboardType,
			textValue,
		} = this.props;

		return (
			<InputContainer style={containerStyle}>
				<AnimatedLabel
					style={{
						transform: [
							{ scale: labelScale },
							{ translateY: labelPosY },
							{ translateX: labelPosX },
						],
						color: textValue ? Color.primaryColor : Color.lightGrey2,
					}}
				>
					{labelName}
				</AnimatedLabel>
				<StyledTextInput
					// name={inputName}
					maxLength={20}
					underlineColorAndroid="transparent"
					onFocus={this.onInputFocus}
					onEndEditing={this.onEndEditing}
					onChange={onChange(inputName)}
					keyboardType={keyboardType}
				/>
			</InputContainer>
		);
	}
}

export default FormTextInput;
