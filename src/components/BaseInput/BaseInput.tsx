import React from 'react';
import { TextInput, TextStyle } from 'react-native';
import useThemeStore from '../../stores/theme.store';

type BaseInputProps = {
  type?: 'text' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  name?: string;
};

const BaseInput = ({ type = 'text', placeholder, value, onChange = () => {} }: BaseInputProps) => {
  const colorScheme = useThemeStore((state) => state.colorScheme);

  const style: TextStyle = {
    backgroundColor: colorScheme === 'dark' ? '#262A34' : '#262A34',
    color: colorScheme === 'dark' ? '#FFFFFF' : '#FFFFFF',
    borderRadius: 18,
    paddingLeft: 15,
  };

  return (
    <TextInput
      secureTextEntry={type === 'password'}
      className="my-1"
      style={style}
      selectTextOnFocus={true}
      blurOnSubmit={true}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
    />
  );
};

export default BaseInput;
