import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Picker } from 'react-native';

import styled from 'styled-components';

import { capitalize } from 'app/config/helpers';

const propTypes = {
	selectableItems: PropTypes.array.isRequired,
	selectedItem: PropTypes.string,
	selectCategory: PropTypes.func.isRequired,
};

const defaultProps = {
	selectedItem: '',
};


function FormPicker(props) {
	const {
		selectableItems,
		selectedItem,
		selectCategory,
	} = props;

	return (
		<Picker
			selectedValue={selectedItem}
			onValueChange={selectCategory}
		>
			{selectableItems.map((item, i) => (<Picker.Item key={i} label={item.charAt(0) + item.substr(1)} value={item} />))}
		</Picker>
	);
}

FormPicker.propTypes = propTypes;
FormPicker.defaultProps = defaultProps;

export default FormPicker;
