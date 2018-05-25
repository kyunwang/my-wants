import {
	ADD_ITEM,
	UPDATE_ITEM,
	DELETE_ITEM,
} from '../actions/constants';

// Honestly can't think of a better name...
function myItems(state = [], action) {
	switch (action.type) {
	case ADD_ITEM:
		// Return the current state as it was and add the new item to it
		return [...state, action.formData];
	case UPDATE_ITEM:
		return state;
	case DELETE_ITEM:
		return state;
	default:
		return state;
	}
}

export default myItems;
