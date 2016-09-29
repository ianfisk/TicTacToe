'use strict'

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import generalStyles from '../styles/generalStyles';

const CharacterButton = ({ character, userCharacter, onCharacterButtonClicked }) => {
  return (
    <View
      backgroundColor={character == userCharacter ? '#dddddd' : 'transparent'}
      style={generalStyles.characterButtonContainer}>
      <TouchableHighlight
        style={generalStyles.characterButton}
        onPress={ () => onCharacterButtonClicked(character) }
        underlayColor='#dddddd'>
        <Text style={generalStyles.secondaryText}>
          {character}
        </Text>
      </TouchableHighlight>
    </View>
  )
}

export default CharacterButton;
