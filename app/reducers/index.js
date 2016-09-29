'use strict';

import { combineReducers } from 'redux';
import gridState from './gridState';
import userCharacter from './userCharacter';
import cellsActive from './cellsActive';

const ticTacToeApp = combineReducers({
  gridState,
  userCharacter,
  cellsActive
});

export default ticTacToeApp;
