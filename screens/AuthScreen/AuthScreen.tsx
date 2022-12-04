import React from 'react';
import { SafeAreaView, Text, View, ViewStyle } from 'react-native';
import BaseInput from '../../components/BaseInput';
import useThemeStore from '../../stores/theme.store';

const AuthScreen = () => {
  const theme = useThemeStore((state) => state.base.theme);

  const style: ViewStyle = {
    ...theme,
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <SafeAreaView style={style}>
      <View>
        <Text className="text-center text-lg">LOGIN</Text>
        <View className="my-3 px-3">
          <BaseInput placeholder="Input your username" />
          <BaseInput placeholder="Input your password" type="password" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
