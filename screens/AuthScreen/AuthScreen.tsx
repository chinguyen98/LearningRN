import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import BaseInput from '../../components/BaseInput';
import useThemeStore from '../../stores/theme.store';

const AuthScreen = () => {
  const theme = useThemeStore((state) => state.base.theme);

  return (
    <SafeAreaView style={theme}>
      <View>
        <Text className="text-center text-lg">LOGIN</Text>
        <BaseInput />
        <BaseInput />
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
