import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { testHook } from 'app/config/cavy';
import Style from 'app/constants/Style';

import Card from 'app/components/UI/Card';
import CardActive from 'app/components/UI/Card/CardActive';

const OverviewWrapper = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const OverviewText = styled.Text`
`;

const CardListWrapper = styled.ScrollView`
	height: 100%;
	width: 100%;
	paddingHorizontal: ${Style.defSpace}
`;

class Overview extends Component {
	state = {}

	mapItems = items => items.map((item, index) => (<Card style={{ }} key={item.id} data={item} />))

	render() {
		const { myItems } = this.props;

		return (
			<OverviewWrapper>
				<CardListWrapper>
					{ this.mapItems(myItems) }
				</CardListWrapper>
			</OverviewWrapper>
		);
	}
}

export default testHook(Overview);
