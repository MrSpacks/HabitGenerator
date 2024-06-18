import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import AddHabitScreen from './screens/AddHabitScreen';
import { HabitProvider } from './context/HabitContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <HabitProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddHabit" component={AddHabitScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </HabitProvider>
  );
};

export default App;
