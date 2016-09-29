'use strict';

import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import gridStyles from '../styles/gridStyles';
import { Col, Row, Grid } from 'react-native-easy-grid';
import TicTacToeRowContainer from '../containers/TicTacToeRowContainer'

const TicTacToeMainGrid = ({ gridState, userCharacter, cellsActive, updateGridWithComputersMove }) => {
  if (!cellsActive)
    updateGridWithComputersMove(gridState, userCharacter);

  return (
    <Grid style={gridStyles.grid}>
      <TicTacToeRowContainer cellIndexStart={0} />

      <Row style={{ flex: 0 }}>
        <Col style={gridStyles.horizontalSeparatorLeft} />
        <Col style={gridStyles.horizontalSeparatorCenter} />
        <Col style={gridStyles.horizontalSeparatorRight} />
      </Row>

      <TicTacToeRowContainer cellIndexStart={3} />

      <Row style={{ flex: 0 }}>
        <Col style={gridStyles.horizontalSeparatorLeft} />
        <Col style={gridStyles.horizontalSeparatorCenter} />
        <Col style={gridStyles.horizontalSeparatorRight} />
      </Row>

      <TicTacToeRowContainer cellIndexStart={6} />

    </Grid>
  )
}

TicTacToeMainGrid.propTypes = {
  winnerCharacter: PropTypes.oneOf(['', 'X', 'O']),
};

export default TicTacToeMainGrid;
