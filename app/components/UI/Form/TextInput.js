import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Animated } from 'react-native';

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
	color: ${Color.primaryColor};
	position: absolute;
	bottom: 0;
	margin-left: 6px;
	margin-bottom: 6px;
`;

const AnimatedLabel = Animated.createAnimatedComponent(Label);

class FormTextInput extends Component {
	static propTypes = {
		labelName: PropTypes.string.isRequired,
	}

	static defaultProps = {
		// labelName: 'label',
	}

	state = {
		labelPosY: new Animated.Value(0),
		labelPosX: new Animated.Value(0),
		labelScale: new Animated.Value(1),
	}

	onInputFocus = () => {
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
		console.log('End editing');
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
					}}
				>{labelName}
				</AnimatedLabel>
				<StyledTextInput
					maxLength={20}
					underlineColorAndroid="transparent"
					onFocus={this.onInputFocus}
					onEndEditing={this.onEndEditing}
				/>
			</InputContainer>
		);
	}
}

export default FormTextInput;
