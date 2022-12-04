import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import useThemeStore from '../../stores/theme.store';

const HomeScreen = () => {
  const backgroundColor = useThemeStore((state) => state.backgroundColor);

  return (
    <SafeAreaView style={{ backgroundColor }}>
      <Text>{backgroundColor}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
