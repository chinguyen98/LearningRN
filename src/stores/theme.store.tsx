import create from 'zustand';
import { Appearance, StyleSheet } from 'react-native';

const colorScheme = Appearance.getColorScheme();
const backgroundColor = '#000000';
const textColor = '#FFFFFF';

const useThemeStore = create(() => ({
  colorScheme,
  backgroundColor,
  textColor,
  base: StyleSheet.create({
    theme: {
      backgroundColor,
      color: textColor,
      width: '100%',
      height: '100%',
    },
  }),
}));

export default useThemeStore;
