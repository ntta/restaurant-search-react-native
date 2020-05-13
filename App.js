import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Search'
          component={SearchScreen}
          options={{ title: 'Business Search' }}
        />
        <Stack.Screen
          name='ResultsShow'
          component={ResultsShowScreen}
          options={{ title: 'Restaurant' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
