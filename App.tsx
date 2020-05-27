import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './app/screens/Home/HomeScreen';
import AppHeader from './app/shared/components/AppHeader/AppHeaderComponent';
import {AppSectionColour} from './app/shared/layoutStyles/DarkLayoutStyle';
import NewsDetailsScreen from './app/screens/Home/NewsDetailsScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: AppSectionColour.safeAreaView,
            height: 110,
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{header: () => <AppHeader />}}
        />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetailsScreen}
          options={{header: () => <AppHeader />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
