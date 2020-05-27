import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ProfileScreenStack,
  CreateScreenStack,
  HomeStackScreen,
  PlayNewsTabTheme,
  tabBarScreeenOptions,
} from './App.Navigation';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer theme={PlayNewsTabTheme}>
      <Tab.Navigator
        screenOptions={tabBarScreeenOptions}
        tabBarOptions={{
          showLabel: false,
        }}>
        <Tab.Screen name="home" component={HomeStackScreen} />
        <Tab.Screen name="create" component={CreateScreenStack} />
        <Tab.Screen name="profile" component={ProfileScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
