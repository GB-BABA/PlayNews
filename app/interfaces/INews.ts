export interface INewsList {
  news: Array<INews>;
  pageIndex: number;
  pageLimit: number;
  isNextPageEmpty: boolean;
  isPageLoading: boolean;
}

export interface INews {
  id?: number;
  author?: string;
  title: string;
  createdAt?: Date;
  url?: string;
  body?: string;
  image?: string;
}
