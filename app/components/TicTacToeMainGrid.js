'use strict';

import React from 'react';
import gridStyles from '../styles/gridStyles';
import { Col, Row, Grid } from 'react-native-easy-grid';
import TicTacToeRowContainer from '../containers/TicTacToeRowContainer'

const TicTacToeMainGrid = () => {
  return (
    <Grid style={gridStyles.grid}>
      <TicTacToeRowContainer cellIndexStart={0} />

      <Row style={{ flex: 0 }}>
        <Col style={gridStyles.horizontalSeparatorLeft}></Col>
        <Col style={gridStyles.horizontalSeparatorCenter}></Col>
        <Col style={gridStyles.horizontalSeparatorRight}></Col>
      </Row>

      <TicTacToeRowContainer cellIndexStart={3} />

      <Row style={{ flex: 0 }}>
        <Col style={gridStyles.horizontalSeparatorLeft}></Col>
        <Col style={gridStyles.horizontalSeparatorCenter}></Col>
        <Col style={gridStyles.horizontalSeparatorRight}></Col>
      </Row>

      <TicTacToeRowContainer cellIndexStart={6} />

    </Grid>
  )
}

export default TicTacToeMainGrid;
