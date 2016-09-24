'use strict';

import { combineReducers } from 'redux';
import gridState from './gridState';
import userCharacter from './userCharacter';

const ticTacToeApp = combineReducers({
  gridState,
  userCharacter
});

export default ticTacToeApp;
