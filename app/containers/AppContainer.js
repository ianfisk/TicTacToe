'use strict';

import { connect } from 'react-redux';
import App from '../components/App';
import checkForWinner from '../utility/checkForWinner';

const mapStateToProps = (state) => {
  return {
    winnersCharacter: checkForWinner(state.userCharacter, state.gridState)
  };
}

const AppContainer = connect(
  mapStateToProps,
  null
)(App);

export default AppContainer;
