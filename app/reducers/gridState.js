'use strict';

import { GRID_CELL_CLICKED, USER_CHARACTER_CHOSEN, RESET_GAME } from '../actions';
import { convertTo2DIndex, deepCopy2DArray } from '../utility/generalUtility';

const initialGridState = [['', '', ''],
  ['', '', ''],
  ['', '', '']];

const gridState = (state = initialGridState, action) => {
  switch (action.type) {
    case GRID_CELL_CLICKED:
      let twoDimensionalIndex = convertTo2DIndex(action.cellIndex, 3);

      if (state[twoDimensionalIndex.row][twoDimensionalIndex.column] === '') {
        let newGridState = deepCopy2DArray(state);
        newGridState[twoDimensionalIndex.row][twoDimensionalIndex.column] = action.userCharacter === 'X' ? 'X' : 'O';          
        
        return newGridState;
      }
    case USER_CHARACTER_CHOSEN:
    case RESET_GAME:
      return initialGridState;
    default:
      return state;
  }
}

export default gridState;
