'use strict';

import { connect } from 'react-redux';
import Results from '../components/Results';
import { resetGame } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onPlayAgain: () => {
      console.log("DISPATCHING resetGame")
      dispatch(resetGame());
    }
  }
}

const ResultsContainer = connect(
  null,
  mapDispatchToProps
)(Results);

export default ResultsContainer;
