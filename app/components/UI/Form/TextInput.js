import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledTextInput = styled.TextInput`
	font-family: font-regular;
	width: 100%;
	height: 30px;
`;

const Label = styled.Text`
	font-family: font-regular;
`;


class TextInput extends Component {
	render() {
	 return (
			<Fragment>
			<Label>Label</Label>
			<StyledTextInput maxLength={20} />
  </Fragment>
	 );
	}
}

export default TextInput;
