'use strict';

import React from 'react';
import gridStyles from '../styles/gridStyles';
import { Col, Row } from 'react-native-easy-grid';
import Cell from './Cell';

const TicTacToeRow = ({ cellIndexStart, gridState, userCharacter, onCellClicked }) => (
  <Row style={gridStyles.row}>
    <Col>
      <Cell cellIndex={cellIndexStart} letter={gridState[cellIndexStart]} userCharacter={userCharacter} onCellClicked={onCellClicked} />
    </Col>
    <Col style={gridStyles.verticalSeparator}></Col>
    <Col>
      <Cell cellIndex={cellIndexStart + 1} letter={gridState[cellIndexStart + 1]} userCharacter={userCharacter} onCellClicked={onCellClicked} />
    </Col>
    <Col style={gridStyles.verticalSeparator}></Col>
    <Col>
      <Cell cellIndex={cellIndexStart + 2} letter={gridState[cellIndexStart + 2]} userCharacter={userCharacter} onCellClicked={onCellClicked} />
    </Col>
  </Row>
)

export default TicTacToeRow;
