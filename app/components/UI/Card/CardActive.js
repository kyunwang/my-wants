import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Color from 'app/constants/Color';

const CardActiveWrapper = styled.View`
	min-height: 100;
	width: 100%;
	background-color: #fff;

	border-radius: 3;
`;

const CardActiveText = styled.Text`
	font-family: font-regular;
	color: red;
`;

function CardActive() {
	return (
		<CardActiveWrapper>
			<CardActiveText>Text</CardActiveText>
		</CardActiveWrapper>
	);
}

export default CardActive;
