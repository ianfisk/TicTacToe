'use strict';

import { GRID_CELL_CLICKED, TOGGLE_CELLS_ACTIVE, USER_CHARACTER_CHOSEN, RESET_GAME } from '../actions';

const cellsActive = (state = true, action) => {
  console.log("cellsActive reducer:", state, action);
  switch (action.type) {
    case GRID_CELL_CLICKED:
    case TOGGLE_CELLS_ACTIVE:
      return !state;
    case USER_CHARACTER_CHOSEN:
    case RESET_GAME:
      return true;
    default:
      return state;
  }
}

export default cellsActive;
