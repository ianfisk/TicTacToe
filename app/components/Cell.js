'use strict';

import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import cellStyles from '../styles/cellStyles';

const Cell = ({ cellIndex, letter, userCharacter, onCellClicked }) => {
  return (
    <TouchableHighlight style={cellStyles.cell} underlayColor='#dddddd' onPress={() => onCellClicked(cellIndex, userCharacter)}>
      <Text style={cellStyles.cellText}>
        {letter}
      </Text>
    </TouchableHighlight>
  );
}

Cell.propTypes = {
  letter: PropTypes.oneOf(['', 'X', 'O']),
  onCellClicked: PropTypes.func.isRequired
};

Cell.defaultProps = {
  letter: ''
};

export default Cell;
