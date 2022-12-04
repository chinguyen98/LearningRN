import React from 'react';
import { TextInput, TextStyle } from 'react-native';
import useThemeStore from '../../stores/theme.store';

const BaseInput = () => {
  const colorScheme = useThemeStore((state) => state.colorScheme);

  const style: TextStyle = {
    backgroundColor: colorScheme === 'dark' ? '#262A34' : '#262A34',
    color: colorScheme === 'dark' ? '#FFFFFF' : '#FFFFFF',
    borderRadius: 18,
    paddingLeft: 15,
  };

  return <TextInput className="my-1" style={style} selectTextOnFocus={true} blurOnSubmit={true} />;
};

export default BaseInput;
