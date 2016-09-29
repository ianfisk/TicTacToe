'use strict';

import { connect } from 'react-redux';
import TicTacToeMainGrid from '../components/TicTacToeMainGrid';
import updateGridWithComputersMove from '../utility/computersMove';
import { toggleCellsActive } from '../actions';

const mapStateToProps = (state) => {
  return {
    gridState: state.gridState,
    userCharacter: state.userCharacter,
    cellsActive: state.cellsActive
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateGridWithComputersMove: (gridState, userCharacter) => {
      setTimeout(() => {
        updateGridWithComputersMove(gridState, userCharacter === 'X' ? 'O' : 'X');
        dispatch(toggleCellsActive());
      }, 500);
    }
  };
}

const TicTacToeMainGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicTacToeMainGrid);

export default TicTacToeMainGridContainer;
