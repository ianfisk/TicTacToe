'use strict';

import React from 'react';
import gridStyles from '../styles/gridStyles';
import { Col, Row } from 'react-native-easy-grid';
import CellContainer from '../containers/CellContainer';
import convertTo2DIndex from '../utility/generalUtility';

const TicTacToeRow = ({ cellIndexStart, gridState, userCharacter, cellsActive, onCellClicked }) => {
  let twoDimensionalIndeces = convertTo2DIndex(cellIndexStart, 3);
  return (
    <Row style={gridStyles.row}>
      <Col>
        <CellContainer
          cellIndex={cellIndexStart}
          letter={gridState[twoDimensionalIndeces.row][twoDimensionalIndeces.column]}
        />
      </Col>
      <Col style={gridStyles.verticalSeparator}></Col>
      <Col>
        <CellContainer
          cellIndex={cellIndexStart + 1}
          letter={gridState[twoDimensionalIndeces.row][twoDimensionalIndeces.column + 1]}
        />
      </Col>
      <Col style={gridStyles.verticalSeparator}></Col>
      <Col>
        <CellContainer
          cellIndex={cellIndexStart + 2}
          letter={gridState[twoDimensionalIndeces.row][twoDimensionalIndeces.column + 2]}
        />
      </Col>
    </Row>
  )
}

export default TicTacToeRow;
