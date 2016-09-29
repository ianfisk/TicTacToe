'use strict';

import { connect } from 'react-redux';
import Cell from '../components/Cell';
import { gridCellClicked } from '../actions';


const mapStateToProps = (state) => {
  return {
    userCharacter: state.userCharacter,
    cellsActive: state.cellsActive
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCellClicked: (cellIndex, userCharacter, cellsActive, cellLetter) => {
      console.log("row container dispatch:", cellsActive, cellLetter)
      if (cellsActive && cellLetter === '')
        dispatch(gridCellClicked(cellIndex, userCharacter));
    }
  };
}

const CellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);

export default CellContainer;
