import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Color from '../../constants/Color';
import Style from '../../constants/Style';

import Page from '../../components/Layout/Page';

import InputContainer from '../../components/UI/Form/Container';
import TextInput from '../../components/UI/Form/TextInput';

const ItemFormWrapper = styled.View`
	${'' /* background-color: red; */, ''}
	flex: 1;
	padding: ${Style.defSpace}px;
`;

const ItemFormText = styled.Text`
	font-family: font-regular;
	color: ${Color.primaryColor};
`;

const HeaderText = styled.Text`
	align-self: center;
	paddingVertical: 36px;
	color: ${Color.mainBlack};
	font-family: font-bold;
	font-weight: 700;
	font-size: 22px;
	text-align: center;
	width: 75%;
`;

// const Button = styled.Button``;

const propTypes = {
	generateTestHook: PropTypes.func,
	navigation: PropTypes.object.isRequired,
};

const defaultProps = {
	generateTestHook: () => {},
};

class ItemForm extends Component {
	static propTypes = propTypes;
	static defaultProps = defaultProps;

	state = {}

	render() {
		const { navigation } = this.props;

		return (
			<Page navigation={navigation}>
				<ItemFormWrapper>
					<HeaderText>What are you saving money for?</HeaderText>

					<TextInput labelName="saving for" />
					<InputContainer>
						<TextInput labelName="to save" />
						<TextInput labelName="already saved" />
					</InputContainer>
					<TextInput labelName="category" />

					{/* <Button title="add details" /> */}
				</ItemFormWrapper>
			</Page>
		);
	}
}

export default ItemForm;
