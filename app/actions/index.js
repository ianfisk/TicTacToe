'use strict';

export const GRID_CELL_CLICKED = 'GRID_CELL_CLICKED';
export const TOGGLE_COMPUTERS_TURN = 'TOGGLE_COMPUTERS_TURN';
export const USER_CHARACTER_CHOSEN = 'USER_CHARACTER_CHOSEN';

export const gridCellClicked = (cellIndex, userCharacter) => {
  return {
    type: GRID_CELL_CLICKED,
    cellIndex: cellIndex,
    userCharacter: userCharacter
  };
}
