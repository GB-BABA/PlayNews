import 'react-native-gesture-handler';
import React from 'react';

import HomeMenu from './app/shared/components/AppFooter/HomeMenuComponent';
import CreateMenu from './app/shared/components/AppFooter/CreateMenuComponent';
import MyProfileMenu from './app/shared/components/AppFooter/MyProfileMenuComponent';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './app/screens/home/HomeScreen';
import AppHeader from './app/shared/components/AppHeader/AppHeaderComponent';
import {AppSectionColour} from './app/shared/layoutStyles/DarkLayoutStyle';
import NewsDetailsScreen from './app/screens/home/NewsDetailsScreen';
import CreateScreen from './app/screens/create/CreateScreen';
import ProfileScreen from './app/screens/profile/ProfileScreen';
import ProfileEditScreen from './app/screens/profile/ProfileEditScreen';
import AppHeaderWithBackButtonComponent from './app/shared/components/AppHeader/AppHeaderWithBackButtonComponent';

const HomeStack = createStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: AppSectionColour.safeAreaView,
          height: 110,
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: () => <AppHeader />}}
      />
      <HomeStack.Screen name="Details" component={NewsDetailsScreen} />
    </HomeStack.Navigator>
  );
}

const CreateStack = createStackNavigator();

export function CreateScreenStack() {
  return (
    <CreateStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: AppSectionColour.safeAreaView,
          height: 110,
        },
      }}>
      <CreateStack.Screen
        name="create"
        component={CreateScreen}
        options={{header: () => <AppHeader />}}
      />
    </CreateStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

export function ProfileScreenStack() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: AppSectionColour.safeAreaView,
          height: 110,
        },
      }}>
      <ProfileStack.Screen
        name="profile"
        component={ProfileScreen}
        options={{header: () => <AppHeader />}}
      />
      <ProfileStack.Screen
        name="edit-profile"
        component={ProfileEditScreen}
        options={{
          header: () => (
            <AppHeaderWithBackButtonComponent name="Edit Profile" />
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
}

export const PlayNewsTabTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 255, 255)',
    background: 'rgb(54, 54, 54)',
    card: 'rgb(54, 54, 54)',
    text: 'rgb(255, 255, 255)',
    border: 'transparent',
  },
};

export const tabBarScreeenOptions = ({route}) => ({
  tabBarIcon: ({focused}) => {
    let idealComponent = null;
    switch (route.name) {
      case 'home':
        idealComponent = <HomeMenu isActive={focused} />;
        break;
      case 'create':
        idealComponent = <CreateMenu isActive={focused} />;
        break;
      case 'profile':
        idealComponent = <MyProfileMenu isActive={focused} />;
        break;
    }

    // You can return any component that you like here!
    return idealComponent;
  },
});
