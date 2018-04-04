// This component should take (text) input components only
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const InputContainer = styled.View`
	width: 100%;
	flex-direction: row;
`;

function applyMargins(children) {
	let renderElements = children;

	// Apply correct margins when there are more than 2 input items in children
	if (children.length > 2) {
		renderElements = children.map((child, i) => {
			if (i === 0) {
				return React.cloneElement(child, { containerStyle: { marginRight: 12 } });
			} else if (i === (children.length - 1)) {
				return React.cloneElement(child, { containerStyle: { marginLeft: 12 } });
			}
			return React.cloneElement(child, { containerStyle: { marginHorizontal: 12 } });
		});
	} else if (children.length === 2) {
		renderElements = children.map((child, i) => (i === 0 ?
			React.cloneElement(child, { containerStyle: { marginRight: 12 } })
			:
			React.cloneElement(child, { containerStyle: { marginLeft: 12 } })));
	}

	// Return only the child if there is just one. The container should not be used for less than 2 inputs through
	return renderElements;
}

const propTypes = {
	children: PropTypes.any.isRequired,
};

function FormContainer(props) {
	const {
		children,
	} = props;

	return (
		<InputContainer>
			{applyMargins(children)}
		</InputContainer>
	);
}

FormContainer.propTypes = propTypes;

export default FormContainer;
