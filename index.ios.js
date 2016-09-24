'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import ticTacToeApp from './app/reducers';
import TicTacToeMainGrid from './app/components/TicTacToeMainGrid';

let store = createStore(ticTacToeApp);

class TicTacToe extends Component {
  render() {
    return (
      <Provider store={store}>
        <TicTacToeMainGrid />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TicTacToe', () => TicTacToe);
