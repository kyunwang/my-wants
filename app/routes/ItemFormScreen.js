import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Page from '../components/Layout/Page';

const ItemFormWrapper = styled.View`
	background-color: red;
	height: 100px;
	width: 100px;
`;

const ItemFormText = styled.Text`
	color: blue;
`;

class ItemForm extends Component {
	render() {
		return (
			<Page>
				<ItemFormWrapper>
					<ItemFormText>ItemForm</ItemFormText>
				</ItemFormWrapper>
			</Page>
		);
	}
}

export default ItemForm;
