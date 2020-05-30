import React, {FC} from 'react';
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
import {IUser} from '../../interfaces/IUser';
import {connect} from 'react-redux';

const ProfileScreen = (props: IProps) => {
  const navigation = useNavigation();
  const activeMenu = TopBarNavigationTypes.Profile;
  console.log(props.user);
  return (
    <SafeAreaView style={DarkTheme.scrollView}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TopBarNavigation activeMenu={activeMenu} />
        <View style={styles.container}>
          <Image
            source={{uri: props.user.picture}}
            style={styles.profilePicture}
            PlaceholderContent={<ActivityIndicator />}
          />
          <TextView style={styles.profileName}>{props.user.username}</TextView>
          <TextView style={styles.profileBio}>{props.user.biography}</TextView>
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

interface IProps {
  user: IUser;
}

const mapState = (state) => ({
  user: state.userProfileModel,
});

export default connect(mapState, null)(ProfileScreen);
