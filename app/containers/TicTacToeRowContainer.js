'use strict';

import { connect } from 'react-redux';
import TicTacToeRow from '../components/TicTacToeRow';
import { gridCellClicked } from '../actions';

let counter = 0;

const mapStateToProps = (state) => {
  counter++;
  console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&", counter, " Mapping state: ", state, "to props in TicTacToeRowContainer");
  return {
    gridState: state.gridState,
    userCharacter: state.userCharacter
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCellClicked: (cellIndex, userCharacter) => {
      dispatch(gridCellClicked(cellIndex, userCharacter));
    }
  };
}

const TicTacToeRowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicTacToeRow);

export default TicTacToeRowContainer;
