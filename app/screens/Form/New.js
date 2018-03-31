import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Page from '../../components/Layout/Page';

const ItemFormWrapper = styled.View`
	background-color: red;
	height: 100px;
	width: 100px;
`;

const ItemFormText = styled.Text`
	color: blue;
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
					<ItemFormText>ItemForm</ItemFormText>
				</ItemFormWrapper>
			</Page>
		);
	}
}

export default ItemForm;
