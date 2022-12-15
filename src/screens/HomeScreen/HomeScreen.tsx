import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import useThemeStore from '../../stores/theme.store';

const HomeScreen = () => {
  const theme = useThemeStore((state) => state.base.theme);

  return (
    <SafeAreaView style={theme}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
