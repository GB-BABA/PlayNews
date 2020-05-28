import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import TopBarNavigation from '../../shared/components/Navigation/TopBarNavigationComponent';
import DarkTheme from '../../shared/layoutStyles/DarkLayoutStyle';
import {Image} from 'react-native-elements';
import AppFooter from '../../shared/components/AppFooter/AppFooter';
import {TopBarNavigationTypes} from '../../constant/TopBarNavigationTypes';
import InputWithLabel from '../../shared/components/InputWithLabelComponent';
import styles from './ProfileEditScreen.Styles';
import GradiantButton from '../../shared/components/GradiantButton';

const ProfileEditScreen = () => {
  const activeMenu = TopBarNavigationTypes.Profile;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <SafeAreaView style={DarkTheme.scrollView}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TopBarNavigation activeMenu={activeMenu} />
          <View style={styles.container}>
            <Image
              source={{uri: 'https://i.picsum.photos/id/888/640/480.jpg'}}
              style={styles.profilePicture}
              PlaceholderContent={<ActivityIndicator />}
            />
            <InputWithLabel
              style={styles.formControl}
              title="Username"
              isMultiline={false}
              placeholder="Enter your name"
            />
            <InputWithLabel
              style={styles.formControl}
              title="Bio"
              isMultiline={false}
              placeholder="Enter your bio"
            />
            <GradiantButton style={styles.submitBtn} onPress={() => {}}>
              Save Changes
            </GradiantButton>
          </View>
          <AppFooter />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

interface IProps {
  navigation: any;
}

export default ProfileEditScreen;
