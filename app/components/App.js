'use strict';

import React from 'react';
import { View } from 'react-native';
import TicTacToeMainGridContainer from '../containers/TicTacToeMainGridContainer';
import ResultsContainer from '../containers/ResultsContainer';
import CharacterButtons from './CharacterButtons';
import generalStyles from '../styles/generalStyles';

const App = ({ winnersCharacter }) => {
  if (winnersCharacter !== '') {
    return <ResultsContainer winnersCharacter={winnersCharacter} />
  } else {
    return (
      <View style={generalStyles.centerJustified}>
        <TicTacToeMainGridContainer />
        <CharacterButtons />
      </View>
    )
  }
}

export default App;
