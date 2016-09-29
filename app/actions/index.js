'use strict';

export const GRID_CELL_CLICKED = 'GRID_CELL_CLICKED';
export const USER_CHARACTER_CHOSEN = 'USER_CHARACTER_CHOSEN';
export const TOGGLE_CELLS_ACTIVE = 'TOGGLE_CELLS_ACTIVE';
export const RESET_GAME = 'RESET_GAME';

export const gridCellClicked = (cellIndex, userCharacter) => {
  return {
    type: GRID_CELL_CLICKED,
    cellIndex: cellIndex,
    userCharacter: userCharacter
  };
}

export const toggleCellsActive = () => {
  return {
    type: TOGGLE_CELLS_ACTIVE
  };
}

export const resetGame = () => {
  return {
    type: RESET_GAME
  };
}

const userCharacterChosenAction = (character) => {
  return {
    type: USER_CHARACTER_CHOSEN,
    userCharacter: character
  };
}

export default userCharacterChosenAction;
