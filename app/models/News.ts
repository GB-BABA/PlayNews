export const count = {
  state: {
    pageIndex: 1,
    pageLimit: 5,
    isPageLoading: true,
    isNextPageEmpty: false,
    news: [],
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state: any, payload: any) {
      return state + payload;
    },
  },
  effects: (dispatch: any) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload: any, rootState: any) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
  }),
};
