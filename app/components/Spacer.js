'use strict'

import React from 'react';
import { View, StyleSheet } from 'react-native';
import generalStyles from '../styles/generalStyles';

const Spacer = ({ width, height }) => {
  console.log("spacer w, h", width, height)
  var style = StyleSheet.create({
    spacer: {
      width: width,
      height: height
    }
  });

  return (
    <View style={style.spacer} />
  )
}

export default Spacer;
