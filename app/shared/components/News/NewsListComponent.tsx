import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import News from './NewsComponent';
import {INewsList} from '../../../interfaces/INews';
import {StyleSheet, View, Alert, Platform} from 'react-native';
import {AppSectionColour} from '../../layoutStyles/DarkLayoutStyle';
import NewsPagination from './NewsPaginationComponent';
import axiosClient from '../../../config/axiosConfig';
import NewsLoading from './NewsLoadingComponent';
import * as DimensionsUtil from '../../../util/Dimensions';

const NewsListComponent = () => {
  const initialNewsListComponentState: INewsListComponent = {
    news: [],
    isPageLoading: true,
    hasNext: true,
    pageIndex: 1,
    pageLimit: 5,
  };

  const [newsPageState, setNewsPageState] = useState({
    ...initialNewsListComponentState,
  });

  useEffect(() => {
    if (
      (newsPageState.pageIndex === 1 && newsPageState.isPageLoading) ||
      (newsPageState.pageIndex > 1 &&
        !isNewsDataEmpty() &&
        newsPageState.isPageLoading)
    ) {
      fetchData();
    }
  });

  const isNewsDataEmpty = (): boolean => newsPageState.news.length === 0;

  const fetchData = async () => {
    try {
      const response = await axiosClient.get('/news', {
        params: {
          page: newsPageState.pageIndex,
          limit: newsPageState.pageLimit,
        },
      });

      if (response.status === 200) {
        if (response.data.length === 0) {
          Alert.alert('Nothing to fetch');
          setNewsPageState({
            ...newsPageState,
            isPageLoading: false,
            hasNext: false,
            pageIndex: --newsPageState.pageIndex,
          });
        } else {
          setNewsPageState({
            ...newsPageState,
            news: response.data,
            hasNext: true,
            isPageLoading: false,
          });
        }
      }
    } catch (ex) {
      Alert.alert('System Error', ex.message);
    }
  };

  const nextPage = async () => {
    setNewsPageState({
      ...newsPageState,
      isPageLoading: true,
      pageIndex: ++newsPageState.pageIndex,
    });
  };

  const previousPage = async () => {
    if (newsPageState.pageIndex > 1) {
      setNewsPageState({
        ...newsPageState,
        isPageLoading: true,
        pageIndex: --newsPageState.pageIndex,
      });
    } else {
      Alert.alert('You are currently on the first page');
    }
  };

  return (
    <View style={styles.container}>
      {newsPageState.isPageLoading && <NewsLoading />}

      {!newsPageState.isPageLoading && (
        <View>
          <FlatList
            style={styles.newsFlatList}
            data={newsPageState.news}
            renderItem={({item}) => <News title={item.title} />}
            keyExtractor={(item) => item.id}
          />

          <NewsPagination
            backFunction={previousPage}
            nextFunction={nextPage}
            disableNext={!newsPageState.hasNext}
          />
        </View>
      )}
    </View>
  );
};

interface INewsListComponent {
  news: Array<INewsList>;
  isPageLoading: boolean;
  hasNext: boolean;
  pageIndex: number;
  pageLimit: number;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:
      Platform.OS === 'ios' ? '90%' : DimensionsUtil.getPercentageWidth(90),
    alignSelf: 'center',
    backgroundColor: AppSectionColour.appBackground,
  },
  newsFlatList: {
    backgroundColor: AppSectionColour.appBackground,
  },
});

export default NewsListComponent;
