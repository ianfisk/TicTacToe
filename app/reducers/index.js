'use strict';

import { combineReducers } from 'redux';

const firstReducer = (state = {}, action) => {
		return state;
};

const ticTacToeApp = combineReducers({
	firstReducer
});

export default firstReducer;
