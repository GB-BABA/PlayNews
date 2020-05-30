import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import TextView from '../TextComponent';
import ButtonIcon from '../ButtonIconComponent';
import {Icons} from '../../../constant/Icons';
import {FlatList} from 'react-native-gesture-handler';
import {INewsComment} from 'app/interfaces/INews';
import {Colours} from '../../../constant/Colours';
import {DefaultFontFamily} from '../../layoutStyles/DarkLayoutStyle';
import {Image} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const NewsCommentComponent = (props: INewsCommentComponent) => {
  return (
    <View>
      <NewsCommentHeader />
      {props.comments?.length > 0 ? (
        <FlatList
          data={props.comments}
          renderItem={({item}) => (
            <NewsComment
              name={item.name}
              id={item.id}
              avatar={item.avatar}
              comment={item.comment}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      ) : (
        <NoNewsComment />
      )}
    </View>
  );
};

interface INewsCommentComponent {
  comments?: Array<INewsComment>;
}

export default NewsCommentComponent;

const NoNewsComment = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 20,
        padding: 20,
        backgroundColor: Colours.Dark,
      }}>
      <TextView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontSize: 15,
          color: Colours.Grey,
        }}>
        No data was found
      </TextView>
    </View>
  );
};

const NewsCommentHeader = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 15,
        marginBottom: 20,

        borderBottomWidth: 0.4,
        borderBottomColor: '#707070',
      }}>
      <TextView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontSize: 18,
          color: Colours.White,
          fontFamily: DefaultFontFamily.Medium,
          marginTop: 10,
          fontWeight: '300',
        }}>
        Comments
      </TextView>
      <ButtonIcon action={() => {}} icon={Icons.AddCommentIcon} />
    </View>
  );
};

const NewsComment = (props: INewsComment) => {
  return (
    <LinearGradient
      style={{
        flexDirection: 'row',
        padding: 5,
        position: 'relative',
        margin: 12,
        marginHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10,
      }}
      colors={['#2F2D2D', '#212121']}>
      <Image
        source={{uri: props.avatar}}
        style={{
          flex: 5,
          width: 50,
          height: 50,
          marginHorizontal: 10,
          borderRadius: 25,
          marginTop: 10,
        }}
        PlaceholderContent={<ActivityIndicator color={Colours.White} />}
      />
      <View style={{flex: 1, padding: 10}}>
        <TextView
          style={{
            color: Colours.Grey,
            // marginVertical: 5,
            fontWeight: '200',
            marginBottom: 4,
          }}>
          {props.name}
        </TextView>
        <TextView style={{color: Colours.White, fontWeight: '400'}}>
          {props.comment}
        </TextView>
      </View>
    </LinearGradient>
  );
};
