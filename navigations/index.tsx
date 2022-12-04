import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

const RootStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
      </RootStack.Navigator>
    </>
  );
};

export default RootNavigation;
