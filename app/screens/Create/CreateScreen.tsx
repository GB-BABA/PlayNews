import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import TopBarNavigation from '../../shared/components/Navigation/TopBarNavigationComponent';
import DarkTheme from '../../shared/layoutStyles/DarkLayoutStyle';

import DarkLayoutStyle from '../../shared/layoutStyles/DarkLayoutStyle';
import AppFooter from '../../shared/components/AppFooter/AppFooter';
import {TopBarNavigationTypes} from '../../constant/TopBarNavigationTypes';
import UserProfileSettings from '../../shared/components/Settings/UserProfileSettingsComponent';
import UploadNewsImage from '../../shared/components/News/UploadNewsImageComponent';
import InputWithLabel from '../..//shared/components/InputWithLabelComponent';
import TextView from '../../shared/components/TextComponent';
import GradiantButton from '../../shared/components/GradiantButton';
import styles from './CreateScreen.Styles';

const CreateScreen = () => {
  const activeMenu = TopBarNavigationTypes.Create;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <SafeAreaView style={DarkLayoutStyle.scrollView}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={DarkTheme.scrollView}>
          <TopBarNavigation activeMenu={activeMenu} />
          <UserProfileSettings name="Akinsanya Omogbolahan" />
          <UploadNewsImage />
          <InputWithLabel
            style={styles.formControl}
            title="Title"
            isMultiline={false}
            placeholder="Enter news title"
          />
          <InputWithLabel
            style={styles.formControl}
            title="Description"
            isMultiline={true}
            placeholder="Share your story with the world"
          />
          <TextView style={styles.terms}>
            Kindly ensure that you don’t post abusive or inappropriate contents
            that is not suitable for young adults and the general public
          </TextView>

          <GradiantButton style={styles.submitBtn} onPress={() => {}}>
            Submit
          </GradiantButton>

          <AppFooter />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CreateScreen;
