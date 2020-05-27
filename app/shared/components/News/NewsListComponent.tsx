import React, {Component} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import News from './NewsComponent';
import {INewsList} from '../../../interfaces/INews';
import {StyleSheet, View, Alert} from 'react-native';
import {AppSectionColour} from '../../layoutStyles/DarkLayoutStyle';
import NewsPagination from './NewsPaginationComponent';
import axiosClient from '../../../config/axiosConfig';
import NewsLoading from './NewsLoadingComponent';

class NewsListComponent extends Component {
  initialState: INewsList = {
    pageIndex: 1,
    pageLimit: 5,
    isPageLoading: true,
    isNextPageEmpty: false,
    news: [],
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  showLoader = (callback?: Function) => {
    this.setState(
      {
        isPageLoading: true,
      },
      callback,
    );
  };

  hideLoader = (callback?: Function) => {
    this.setState(
      {
        isPageLoading: true,
      },
      callback,
    );
  };

  fetchData = async () => {
    let currentPageIndex = this.state.pageIndex;

    let currentPageLimit = this.state.pageLimit;

    try {
      const response = await axiosClient.get('/news', {
        params: {
          page: currentPageIndex,
          limit: currentPageLimit,
        },
      });

      if (response.status == 200) {
        if (response.data.length == 0) {
          Alert.alert('Nothing to fetch');
          this.setState({
            isPageLoading: false,
            isNextPageEmpty: true,
            page: --currentPageIndex,
          });
        } else {
          this.setState({
            isPageLoading: false,
            isNextPageEmpty: false,
            news: response.data,
          });
        }
      }
    } catch (ex) {
      Alert.alert('System Error', ex.message);
    }
  };

  nextPage = async () => {
    let currentPageIndex = this.state.pageIndex;

    if (!this.state.isNextPageEmpty) {
      this.setState(
        {
          pageIndex: ++currentPageIndex,
        },
        () => {
          this.showLoader(this.fetchData);
        },
      );
    } else {
      Alert.alert('Nothing to fetch');
    }
  };

  previousPage = async () => {
    if (this.state.pageIndex > 1) {
      let initialState = this.state.pageIndex;
      this.setState(
        {
          pageIndex: --initialState,
        },
        () => {
          this.showLoader(this.fetchData);
        },
      );
    } else {
      Alert.alert('You are currently on the first page');
    }
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.isPageLoading && <NewsLoading />}

        {!this.state.isPageLoading && (
          <View>
            <FlatList
              style={styles.newsFlatList}
              data={this.state.news}
              renderItem={({item}) => <News title={item.title} />}
              keyExtractor={(item) => item.id}
            />

            <NewsPagination
              backFunction={this.previousPage}
              nextFunction={this.nextPage}
              disableNext={this.state.isNextPageEmpty}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%%',
    alignSelf: 'center',
    backgroundColor: AppSectionColour.appBackground,
  },
  newsFlatList: {
    backgroundColor: AppSectionColour.appBackground,
  },
});

export default NewsListComponent;
