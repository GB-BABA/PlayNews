export interface INewsList {
  news: Array<INews>;
  pageIndex: number;
}

export interface INews {
  id?: number;
  author?: string;
  title: string;
  createdAt?: Date;
  url?: string;
  body?: string;
  image?: Array<string>;
}
