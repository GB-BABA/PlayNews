import React, {useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import DarkTheme from '../../shared/layoutStyles/DarkLayoutStyle';
import {Image} from 'react-native-elements';
import AppFooter from '../../shared/components/AppFooter/AppFooter';
import InputWithLabel from '../../shared/components/InputWithLabelComponent';
import styles from './ProfileEditScreen.Styles';
import GradiantButton from '../../shared/components/GradiantButton';
import {IUser} from '../../interfaces/IUser';
import {connect} from 'react-redux';

const ProfileEditScreen = (props: IProps) => {
  let initialState: IUser = {
    username: props.user.username,
    biography: props.user.biography,
    picture: props.user.picture,
  };
  console.log(initialState);
  const [state] = useState({...initialState});
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <SafeAreaView style={DarkTheme.scrollView}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.container}>
            <Image
              source={{uri: state.picture}}
              style={styles.profilePicture}
              PlaceholderContent={<ActivityIndicator />}
            />
            <InputWithLabel
              style={styles.formControl}
              title="Username"
              isMultiline={false}
              placeholder="Enter your name"
              value={state.username}
            />
            <InputWithLabel
              style={styles.formControl}
              title="Bio"
              isMultiline={false}
              placeholder="Enter your bio"
              value={state.biography}
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
  user: IUser;
}

const mapState = (state) => ({
  count: state.count,
  user: state.userProfileModel,
});

export default connect(mapState, null)(ProfileEditScreen);
