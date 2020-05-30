import React, {useEffect, useState, useRef} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import News from './NewsComponent';
import {INewsListComponent} from '../../../interfaces/INews';
import {StyleSheet, View, Platform, Alert} from 'react-native';
import {AppSectionColour} from '../../layoutStyles/DarkLayoutStyle';
import NewsPagination from './NewsPaginationComponent';
import NewsLoading from './NewsLoadingComponent';
import * as DimensionsUtil from '../../../util/Dimensions';
import {connect} from 'react-redux';

const NewsListComponent = (props: IProps) => {
  const scrollRef = useRef<FlatList>();

  const scrollTop = () => {
    scrollRef.current?.scrollToOffset({animated: true, offset: 0});
  };

  useEffect(() => {
    if (
      (props.newsData.pageIndex === 1 && props.newsData.isPageLoading) ||
      (props.newsData.pageIndex > 1 &&
        !isNewsDataEmpty() &&
        props.newsData.isPageLoading)
    ) {
      fetchData();
    }
  });

  const isNewsDataEmpty = (): boolean => props.newsData.news.length === 0;

  const fetchData = () => {
    props.loadNews({...props.newsData, isPageLoading: true});
  };

  const nextPage = async () => {
    props.loadNews({
      ...props.newsData,
      isPageLoading: true,
      pageIndex: ++props.newsData.pageIndex,
    });

    scrollTop();
  };

  const previousPage = async () => {
    if (props.newsData.pageIndex > 1) {
      props.loadNews({
        ...props.newsData,
        isPageLoading: true,
        pageIndex: --props.newsData.pageIndex,
      });
      scrollTop();
    } else {
      Alert.alert('You are currently on the first page');
    }
  };

  return (
    <View style={styles.container}>
      {props.newsData.isPageLoading && <NewsLoading />}

      {!props.newsData.isPageLoading && (
        <View>
          <FlatList
            style={styles.newsFlatList}
            data={props.newsData.news}
            renderItem={({item}) => <News news={item} />}
            keyExtractor={(item) => item.id}
            ref={scrollRef}
          />

          <NewsPagination
            backFunction={previousPage}
            nextFunction={nextPage}
            disableNext={!props.newsData.hasNext}
          />
        </View>
      )}
    </View>
  );
};

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

interface IProps {
  newsData: INewsListComponent;
  loadNews: Function;
  nextPage: Function;
  previousPage: Function;
}

const mapState = (state) => ({
  newsData: state.newsModel,
});

const mapDispatch = ({newsModel: {loadNews}}) => ({
  loadNews: (props: INewsListComponent) => loadNews(props),
});

export default connect(mapState, mapDispatch)(NewsListComponent);
