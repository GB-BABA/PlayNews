import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {getPersistor} from '@rematch/persist';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ProfileScreenStack,
  CreateScreenStack,
  HomeStackScreen,
  PlayNewsTabTheme,
  tabBarScreeenOptions,
} from './App.Navigation';
import {store} from './app/store';

const Tab = createBottomTabNavigator();
const persistor = getPersistor();

const App = (props: any) => {
  console.log('Showing root props', props);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;
