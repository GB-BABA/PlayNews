import {IUser} from '../interfaces/IUser';
import {
  INewsListComponent,
  INewsComment,
  INewsCommentComponent,
} from '../interfaces/INews';
import {
  fetchNewsWithImage,
  fetchNewsComment,
  fetchNewsIncludingComments,
} from '../services/NewsService';

const initialUserProfileState: IUser = {
  username: 'Akinsanya Omogbolahan',
  picture: 'https://i.picsum.photos/id/888/640/480.jpg',
  biography: ' I love bringing to life beautiful user interfaces',
};

export const userProfileModel = {
  state: {
    ...initialUserProfileState,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    load(state: IUser) {
      return state;
    },
    updateProfile(payload: IUser) {
      return payload;
    },
    updateUsername(state: IUser, payload: string) {
      return ({...state}.username = payload);
    },
    updatePicture(state: IUser, payload: string) {
      return ({...state}.picture = payload);
    },
    updateBiography(state: IUser, payload: string) {
      return ({...state}.biography = payload);
    },
  },
  effects: (dispatch: any) => ({
    // handle state changes with impure functions.
    async load() {
      dispatch.userProfile.load();
    },
    async updateProfile(payload: IUser) {
      dispatch.userProfile.updateUsername(payload);
    },
    async updateUsername(payload: string) {
      dispatch.userProfile.updateUsername(payload);
    },
    async updateUserBiography(payload: string) {
      dispatch.userProfile.updateBiography(payload);
    },
    async updateUserPicture(payload: string) {
      dispatch.userProfile.updatePicture(payload);
    },
  }),
};

const initialNewsState: INewsListComponent = {
  pageIndex: 1,
  hasNext: true,
  isPageLoading: true,
  pageLimit: 5,
  news: [],
};

export const newsModel = {
  state: {
    ...initialNewsState,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    load(state: INewsListComponent) {
      return state;
    },
    save(state: INewsListComponent, payload: INewsListComponent) {
      return {...payload, isPageLoading: false, hasNext: true};
    },
  },
  effects: (dispatch: any) => ({
    // handle state changes with impure functions.
    async loadNews(payload: INewsListComponent) {
      try {
        const responseData = await fetchNewsIncludingComments({
          pageIndex: payload.pageIndex,
          pageLimit: payload.pageLimit,
        });
        payload.news = responseData.data;
      } catch (ex) {}

      dispatch.newsModel.save(payload);
    },
  }),
};
