import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import useAuthStore from './stores/auth.store';

const queryClient = new QueryClient();

export type RootStackParamList = {
  Home: undefined;
  Auth: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const isLogged = useAuthStore((state) => state.isLogged);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack.Navigator>
          {isLogged ? (
            <RootStack.Screen
              options={{
                headerShown: false,
              }}
              name="Home"
              component={HomeScreen}
            />
          ) : (
            <RootStack.Screen
              options={{
                headerShown: false,
              }}
              name="Auth"
              component={AuthScreen}
            />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
