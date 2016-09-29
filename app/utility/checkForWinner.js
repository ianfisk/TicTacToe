'use strict';

const checkForWinner = (userCharacter, grid) => {
  // check for full rows
  var rowCharacter = checkRows(grid);
  if (rowCharacter !== '')
    return rowCharacter;

  // check for full columns
  var columnCharacter = checkColumns(grid);  
  if (columnCharacter !== '')
    return columnCharacter;

  // check diagonals
  var diagonalCharacter = checkDiagonals(grid);
  if (diagonalCharacter !== '')
    return diagonalCharacter;

  return '';
}

const checkRows = (grid) => {
  const gridWidth = grid.length;

  for (let i = 0; i < gridWidth; i++) {
    let allSameRowCharacters = true;
    for (let j = 1; j < gridWidth; j++) {
      if (grid[i][j] !== grid[i][j-1]) {
        allSameRowCharacters = false;
        break;
      }
    }

    // winner!
    if (allSameRowCharacters)
      return grid[i][0];
  }

  return '';
}

const checkColumns = (grid) => {
  const gridWidth = grid.length;

  for (let col = 0; col < gridWidth; col++) {
    let allSameColumnCharacters = true;
    for (let row = 1; row < gridWidth; row++) {
      if (grid[row][col] !== grid[row-1][col]) {
        allSameColumnCharacters = false;
        break;
      }
    }

    // winner!
    if (allSameColumnCharacters)
      return grid[0][col];
  }

  return '';
}

const checkDiagonals = (grid) => {
  const gridWidth = grid.length;

  let diagonalOneIsWinner = true;
  for (let k = 1; k < gridWidth; k++) {
    if (grid[k][k] !== grid[k-1][k-1])
      diagonalOneIsWinner = false;
  }

  let diagonalTwoIsWinner = true;
  for (let m = 1, n = gridWidth - 2; m < gridWidth, n >= 0; m++, n--) {
    if (grid[m][n] !== grid[m-1][n+1])
      diagonalTwoIsWinner = false;
  }

  if (diagonalOneIsWinner)
    return grid[0][0];
  else if (diagonalTwoIsWinner)
    return grid[0][gridWidth - 1];
  else
    return '';
}

export default checkForWinner;
