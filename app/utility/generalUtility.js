'use strict';

export const convertTo2DIndex = (index, gridWidth) => {
  return {
    row: Math.floor(index / gridWidth),
    column: index % gridWidth
  };
}

export const deepCopy2DArray = (array) => {
  let copy = []
  for (let i = 0; i < array.length; i++) {
    let row = [];

    for (let j = 0; j < array.length; j++)
      row.push(array[i][j]);

    copy.push(row);
  }

  return copy;
}

export default convertTo2DIndex;
