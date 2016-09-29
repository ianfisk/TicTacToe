'use strict';

import { connect } from 'react-redux';
import TicTacToeRow from '../components/TicTacToeRow';

const mapStateToProps = (state) => {
  return {
    gridState: state.gridState,
    userCharacter: state.userCharacter,
    cellsActive: state.cellsActive
  };
}

const TicTacToeRowContainer = connect(
  mapStateToProps,
  null
)(TicTacToeRow);

export default TicTacToeRowContainer;
