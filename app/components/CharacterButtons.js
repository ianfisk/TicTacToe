'use strict'

import React from 'react';
import { View } from 'react-native';
import generalStyles from '../styles/generalStyles';
import CharacterButtonContainer from '../containers/CharacterButtonContainer';
import Spacer from './Spacer';

const CharacterButtons = () => {
  return (
    <View style={generalStyles.characterButtons}>
      <CharacterButtonContainer character={'X'} />
      <Spacer width={5} height={5} />
      <CharacterButtonContainer character={'O'} />
    </View>
  )
}

export default CharacterButtons;
