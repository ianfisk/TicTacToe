'use strict';

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import generalStyles from '../styles/generalStyles';

const Results = ({ winnersCharacter, onPlayAgain }) => {
  return (
    <View style={generalStyles.centeredView}>
      <Text style={generalStyles.primaryText}>
        Winner: {winnersCharacter}
      </Text>
      <TouchableHighlight
        style={generalStyles.button}
        underlayColor='#dddddd'
        onPress={() => onPlayAgain() }>
        <Text style={generalStyles.secondaryText}>
          Play again
        </Text>
      </TouchableHighlight>
    </View>
  )
}

export default Results;
