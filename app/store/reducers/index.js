import { combineReducers } from 'redux';
import myItems from './myItems';

// We combine all the reducers into one rootReducer here (if we need more thatn one)
const rootReducer = combineReducers({
	myItems,
});

export default rootReducer;

