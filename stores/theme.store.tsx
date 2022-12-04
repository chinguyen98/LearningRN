import create from 'zustand';
import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();
const backgroundColor = colorScheme === 'dark' ? '#000000' : '#FFFFFF';
const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';

const useThemeStore = create(() => ({
  colorScheme,
  backgroundColor,
  textColor,
}));

export default useThemeStore;
