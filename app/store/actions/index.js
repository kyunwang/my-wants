import {
	ADD_ITEM,
	UPDATE_ITEM,
	DELETE_ITEM,
} from './constants';

const uuidv1 = require('uuid/v1');


function addItem(formData) {
	// Assign an id to the item
	formData.id = uuidv1();

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

