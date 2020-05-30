export interface INewsList {
  news: Array<INews>;
  pageIndex: number;
}

export interface INews {
  id: number;
  author?: string;
  title: string;
  createdAt?: Date;
  url?: string;
  body?: string;
  image?: Array<INewsImage>;
  comments?: Array<INewsComment>;
}

export interface INewsListComponent {
  news: Array<INews>;
  isPageLoading: boolean;
  hasNext: boolean;
  pageIndex: number;
  pageLimit: number;
}

export interface INewsImage {
  createdAt: Date;
  id: number;
  image: string;
  newsId: number;
}
export interface INewsComment {
  id: number;
  newsId?: number;
  createdAt?: Date;
  name: string;
  avatar: string;
  comment: string;
}
