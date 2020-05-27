import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const AppFooter = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.footerImage}
        source={require('../../../../assets/images/made-with-love.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginVertical: 30,
  },
  footerImage: {
    alignSelf: 'center',
  },
});

export default AppFooter;
