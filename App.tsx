import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { HomeIcon, BookOpenIcon } from 'react-native-heroicons/solid';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const RootStack = createBottomTabNavigator();

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={size} />,
            }}
            name="Home"
            component={HomeScreen}
          />
          <RootStack.Screen
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => <BookOpenIcon color={color} size={size} />,
            }}
            name="Product"
            component={ProductScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
