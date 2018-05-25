import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { mapDispatchToProps } from 'app/store/tools';

import Color from 'app/constants/Color';
import Style from 'app/constants/Style';

import Page from 'app/components/Layout/Page';

import InputContainer from 'app/components/UI/Form/InputContainer';
import FormTextInput from 'app/components/UI/Form/TextInput';
import FormPicker from 'app/components/UI/Form/Picker';
import Button from 'app/components/UI/Button';

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

const propTypes = {
	generateTestHook: PropTypes.func,
	navigation: PropTypes.object.isRequired,
	addItem: PropTypes.func.isRequired,
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

	}

	componentDidMount() {
		console.log('newform props:', this.props);
	}

	onChange = name => (e) => {
		const value = e.nativeEvent.text;
		this.setState(prevState => ({ [name]: value }));
	}

	setCategory = (itemValue, itemIndex) => this.setState({ selectedItem: itemValue });

	saveItem = () => {
		const {
			savingFor,
			toSave,
			saved,
		} = this.state;
		console.log('Saving item');
		// Need to return feedback
		if (!savingFor) return;
		if (!toSave) return;

		const newItem = {
			savingFor,
			toSave,
			saved,
		};

		this.props.addItem(newItem);
	}

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

					{/* <FormPicker
						selectableItems={selectableItems}
						selectedItem={selectedItem}
						selectCategory={this.setCategory}
					/> */}

					<Button
						style={{
							height: 50,
							width: '100%',
							backgroundColor: Color.primaryColor,
							borderRadius: 3,
							justifyContent: 'center',
							alignSelf: 'flex-end',
						}}
						title="Save Item"
						onPress={this.saveItem}
					/>
				</ItemFormWrapper>
			</Page>
		);
	}
}

export default connect(({ myItems }) => ({ myItems }), mapDispatchToProps)(ItemForm);
