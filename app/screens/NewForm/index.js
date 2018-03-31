import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Color from '../../constants/Color';
import Style from '../../constants/Style';

import Page from '../../components/Layout/Page';

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
	font-size: 24px;
	text-align: center;
	width: 75%;
`;

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

	render() {
		// console.log('Item form', this.props);
		const { navigation } = this.props;

		return (
			<Page navigation={navigation}>
				<ItemFormWrapper>
					<HeaderText>What are you saving money for?</HeaderText>
					<TextInput />
					<ItemFormText>ItemForm</ItemFormText>
				</ItemFormWrapper>
			</Page>
		);
	}
}

export default ItemForm;
