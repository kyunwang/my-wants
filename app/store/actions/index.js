import {
	ADD_ITEM,
	UPDATE_ITEM,
	DELETE_ITEM,
} from './constants';

function addItem(formData) {
	return {
		type: ADD_ITEM,
		formData,
	};
}

function updateItem(id, formData) {
	return {
		type: UPDATE_ITEM,
		id, // The item id
		formData,
	};
}

function deleteItem(id) {
	return {
		type: DELETE_ITEM,
		id, // The item id
	};
}

export {
	addItem,
	updateItem,
	deleteItem,
};

