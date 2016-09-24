'use strict';

import { GRID_CELL_CLICKED, PRELOAD_DATA } from '../actions';

const initialGridState = ['', '', '', '', '', '', '', '', ''];

const gridState = (state = initialGridState, action) => {
  switch (action.type) {
    case GRID_CELL_CLICKED:
      let newGridState = state.slice();
      newGridState[action.cellIndex] = action.userCharacter == 'X' ? 'X' : 'O';
      return newGridState;
      
    default:
      return state;
  }
}

export default gridState;
