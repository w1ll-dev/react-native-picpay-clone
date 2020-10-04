import React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function ReturnCustomStausBar(props) {
  const isFocused = useIsFocused();

  return isFocused && <StatusBar {...props} />
}

export default ReturnCustomStausBar;