'use strict';

const updateGridWithComputersMove = (gridState, computersCharacter) => {
  // basic algorithm: find the first computersCharacter, place another randomly next to it if possible,
  // otherwise find the next one and try to place next to that, etc.
  let blankSlots = [];
  let moveFound = false;

  for (let i = 0; i < gridState.length; i++) {
    for (let j = 0; j < gridState[0].length; j++) {
      switch (gridState[i][j]) {
        case '':
          blankSlots.push({
            row: i,
            col: j
          });
          break;
        case computersCharacter:
          var indexOfComputersMove = checkSurroundingCellsForVacancy(i, j, gridState);
          moveFound = indexOfComputersMove.row !== -1;
          break;
      }

      if (moveFound) {
        gridState[indexOfComputersMove.row][indexOfComputersMove.col] = computersCharacter;
        return;
      }
    }
  }

  if (blankSlots.length !== 0) {
    var randomMove = blankSlots[getRandomInteger(blankSlots.length)];
    gridState[randomMove.row][randomMove.col] = computersCharacter;
  }
}

const checkSurroundingCellsForVacancy = (row, column, gridState) => {
  let operations = [
    function(i) { return i - 1; },
    function(i) { return i; },
    function(i) { return i + 1; }
  ];

  for (let r = 0; r < operations.length; r++) {
    var adjacentRowIndex = operations[r](row);
    for (let c = 0; c < operations.length; c++) {
      var adjacentColumnIndex = operations[c](column);

      if (rowAndColumnAreValid(adjacentRowIndex, adjacentColumnIndex) && gridState[adjacentRowIndex][adjacentColumnIndex] === '')
        return {
          row: adjacentRowIndex,
          col: adjacentColumnIndex
        };
    }
  }

  return {
    row: -1,
    col: -1
  };
}

const rowAndColumnAreValid = (row, col) => {
  return row >= 0 && row <= 2 && col >= 0 && col <= 2;
}

// return integer in range [0,range)
const getRandomInteger = (range) => {
  return Math.floor(Math.random() * range);
}

export default updateGridWithComputersMove;
