import {
	ADD_ITEM,
	UPDATE_ITEM,
	DELETE_ITEM,
} from '../actions/constants';

// Honestly can't think of anything better...
function myItems(state = [], action) {
	switch (action.type) {
	case ADD_ITEM:
		return state;
	case UPDATE_ITEM:
		return state;
	case DELETE_ITEM:
		return state;
	default:
		return state;
	}
}

export default myItems;
