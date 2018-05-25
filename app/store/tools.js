import { bindActionCreators } from 'redux';

import * as actions from './actions';

function mapStateToProps(state) {
	return { state };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		...actions,
	}, dispatch);
}

export {
	mapStateToProps,
	mapDispatchToProps,
};
