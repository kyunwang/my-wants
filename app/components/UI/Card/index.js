import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Color from 'app/constants/Color';
import Style from 'app/constants/Style';

const CardWrapper = styled.View`
	width: 100%;
	background-color: #fff;
	margin-bottom: ${Style.defSpace};
	border-radius: 3;
	paddingHorizontal: ${Style.defSpace};
	paddingVertical: ${Style.defSpace};
	box-shadow: 0px 3px 4px grey;
`;

const CardRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

const CardText = styled.Text`
	font-family: font-bold;
	color: ${Color.mainBlack};
	font-size: ${Style.fontNormal};
	letter-spacing: 2.5;
`;

const SecondaryText = CardText.extend`
	color: ${Color.lightGrey2};
`;

const HighlightText = CardText.extend`
	font-size: ${Style.fontLarge2};
	color: ${Color.mainColor};
`;

const Title = CardText.extend`
	font-size: ${Style.fontLarge};
	max-width: 60%;
`;

const propTypes = {
	data: PropTypes.shape({
		savingFor: PropTypes.string.isRequired,
		toSave: PropTypes.string.isRequired,
		saved: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
	}).isRequired,
	// style: {},
};
const defaultProps = {};

class Card extends PureComponent {
	static propTypes = propTypes;
	static defaultProps = defaultProps;

	state = {};

	render() {
		const {
			data,
			style,
		} = this.props;

		const {
			savingFor,
			toSave,
			saved,
			category,
		} = data;

		return (
			<CardWrapper
				style={{ ...style }}
			>
				<SecondaryText style={{ marginBottom: 6 }}>{category || 'default'}</SecondaryText>
				<CardRow>
					<Title>{savingFor.toUpperCase()}</Title>
					<View>
						<SecondaryText style={{ textAlign: 'right' }}>{toSave}</SecondaryText>
						<HighlightText>${saved}</HighlightText>
					</View>
				</CardRow>
			</CardWrapper>
		);
	}
}

export default Card;
