import React from 'react';
import {ScrollView, SafeAreaView, ActivityIndicator, View} from 'react-native';
import {Image} from 'react-native-elements';
import TopBarNavigation from '../../shared/components/Navigation/TopBarNavigationComponent';
import DarkTheme from '../../shared/layoutStyles/DarkLayoutStyle';

import AppFooter from '../../shared/components/AppFooter/AppFooter';
import {TopBarNavigationTypes} from '../../constant/TopBarNavigationTypes';
import TextView from '../../shared/components/TextComponent';

import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './ProfileScreen.Styles';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const activeMenu = TopBarNavigationTypes.Profile;
  return (
    <SafeAreaView style={DarkTheme.scrollView}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TopBarNavigation activeMenu={activeMenu} />
        <View style={styles.container}>
          <Image
            source={{uri: 'https://i.picsum.photos/id/888/640/480.jpg'}}
            style={styles.profilePicture}
            PlaceholderContent={<ActivityIndicator />}
          />
          <TextView style={styles.profileName}> Akinsanya Omogbolahan</TextView>
          <TextView style={styles.profileBio}>
            I love bringing to life beautiful user interfaces
          </TextView>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('edit-profile');
            }}>
            <TextView style={styles.actionLabel}>Edit profile</TextView>
          </TouchableOpacity>
        </View>
        <AppFooter />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
