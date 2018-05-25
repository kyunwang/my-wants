import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Color from 'app/constants/Color';
import Style from 'app/constants/Style';

import Page from 'app/components/Layout/Page';

import InputContainer from 'app/components/UI/Form/InputContainer';
import FormTextInput from 'app/components/UI/Form/TextInput';
import FormPicker from 'app/components/UI/Form/Picker';
import ButtonWrapper from 'app/components/UI/Button/Wrapper';

const ItemFormWrapper = styled.View`
	flex: 1;
	padding: ${Style.defSpace}px;
`;

const HeaderText = styled.Text`
	align-self: center;
	padding: 36px 0;
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
	generateTestHook: () => { },
};

class ItemForm extends Component {
	static propTypes = propTypes;
	static defaultProps = defaultProps;

	state = {
		selectableItems: [
			'Home',
			'Hobby',
			'Software',
		],
		selectedItem: '',
		savingFor: '',
		toSave: 0,
		saved: 0,
		category: '',
	}

	onChange = name => (e) => {
		const value = e.nativeEvent.text;
		this.setState(prevState => ({ [name]: value }), () => {
			console.log(this.state);
		});
	}

	setCategory = (itemValue, itemIndex) => this.setState({ selectedItem: itemValue });

	render() {
		const {
			selectableItems,
			selectedItem,
			savingFor,
			toSave,
			saved,
			category,
		} = this.state;

		const { navigation } = this.props;

		return (
			<Page navigation={navigation} showCloseBtn>
				<ItemFormWrapper>
					<HeaderText>What are you saving money for?</HeaderText>

					<FormTextInput
						inputName="savingFor"
						labelName="saving for"
						onChange={this.onChange}
						textValue={savingFor}
					/>
					<InputContainer>
						<FormTextInput
							inputName="toSave"
							labelName="to save"
							onChange={this.onChange}
							textValue={toSave}
							keyboardType="numeric"
						/>
						<FormTextInput
							inputName="saved"
							labelName="already saved"
							onChange={this.onChange}
							textValue={saved}
							keyboardType="numeric"
						/>
					</InputContainer>
					<FormTextInput
						inputName="category"
						labelName="category"
						onChange={this.onChange}
						textValue={category}
					/>
					{/* <FormPicker
						selectableItems={selectableItems}
						selectedItem={selectedItem}
						selectCategory={this.setCategory}
					/> */}

					<ButtonWrapper title="add details" />
				</ItemFormWrapper>
			</Page>
		);
	}
}

export default ItemForm;
