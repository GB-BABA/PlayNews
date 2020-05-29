import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import NewsPaginationButton from './NewsPaginationButtonComponent';

const NewsPagination = (props: IProps) => {
  return (
    <View style={styles.defaultContainer}>
      <NewsPaginationButton
        action={props.backFunction}
        icon="back"
        isActive={true}
        highlight={props.disableNext}
      />
      <NewsPaginationButton
        action={props.nextFunction}
        icon="next"
        isActive={!props.disableNext}
        highlight={!props.disableNext}
      />
    </View>
  );
};

interface IProps {
  style?: object;
  backFunction: Function;
  nextFunction: Function;
  disableNext: boolean;
}

const styles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 30,
    marginHorizontal: 'auto',
  },
});

export default NewsPagination;
