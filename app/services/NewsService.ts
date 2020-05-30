import {INewsList, INews, INewsComment, INewsImage} from '../interfaces/INews';
import {IServiceFunction} from '../interfaces/IServiceFunction';
import axiosClient from '../config/axiosConfig';
import {ServiceResponseMessage} from '../constant/ServiceResponseMessage';

export async function fetchNewsIncludingComments({
  pageIndex,
  pageLimit,
}: {
  pageIndex: number;
  pageLimit: number;
}): Promise<IServiceFunction<Array<INews>>> {
  let responseObject: IServiceFunction<Array<INews>> = {
    message: '',
    data: [],
  };
  try {
    let newsData: Array<INews> = [];

    let response = await fetchNews(pageIndex, pageLimit);

    if ((response.message = ServiceResponseMessage.Successful)) {
      for (const news of response.data.news) {
        newsData.push({
          ...news,
          image: (await fetchNewsImage(news.id)).data,
          comments: await (await fetchNewsComment(news.id)).data,
        });
      }
    } else {
      throw new Error(ServiceResponseMessage.Error);
    }

    responseObject.message = ServiceResponseMessage.Successful;
    responseObject.data = newsData;
  } catch (ex) {
    responseObject.message = ex.message;
  }

  return responseObject;
}

export async function fetchNewsWithImage({
  pageIndex,
  pageLimit,
}: {
  pageIndex: number;
  pageLimit: number;
}): Promise<IServiceFunction<Array<INews>>> {
  let responseObject: IServiceFunction<Array<INews>> = {
    message: '',
    data: [],
  };
  try {
    let newsWithImages: Array<INews> = [];

    let response = await fetchNews(pageIndex, pageLimit);

    if ((response.message = ServiceResponseMessage.Successful)) {
      for (const news of response.data.news) {
        newsWithImages.push({
          ...news,
          image: (await fetchNewsImage(news.id)).data,
        });
      }
    } else {
      throw new Error(ServiceResponseMessage.Error);
    }

    responseObject.message = ServiceResponseMessage.Successful;
    responseObject.data = newsWithImages;
  } catch (ex) {
    responseObject.message = ex.message;
  }

  return responseObject;
}

export async function fetchNews(
  pageIndex: number,
  pageLimit: number,
): Promise<IServiceFunction<INewsList>> {
  let responseObject: IServiceFunction<INewsList> = {
    message: '',
    data: {pageIndex: pageIndex, news: []},
  };
  try {
    const response = await axiosClient.get<Array<INews>>('/news', {
      params: {
        page: pageIndex,
        limit: pageLimit,
      },
    });

    console.log('vvvv', response.data);

    if (response.status === 200) {
      responseObject.message = ServiceResponseMessage.Successful;
      responseObject.data = {
        pageIndex: pageIndex,
        news: response.data,
      };
    } else {
      throw new Error(ServiceResponseMessage.Error);
    }
  } catch (ex) {
    responseObject.message = ex.message;
  }

  return responseObject;
}

export async function fetchNewsComment(
  newsId: number,
): Promise<IServiceFunction<Array<INewsComment>>> {
  let responseObject: IServiceFunction<Array<INewsComment>> = {
    message: '',
    data: [],
  };
  try {
    const response = await axiosClient.get(`/news/${newsId}/comments`);

    if (response.status === 200) {
      responseObject.message = ServiceResponseMessage.Successful;
      responseObject.data = response.data;
    } else {
      throw new Error(ServiceResponseMessage.Error);
    }
  } catch (ex) {
    responseObject.message = ex.message;
  }

  return responseObject;
}

export async function fetchNewsImage(
  newsId: number,
): Promise<IServiceFunction<string[]>> {
  let responseObject: IServiceFunction<string[]> = {
    message: '',
    data: [],
  };
  try {
    const response = await axiosClient.get<Array<INewsImage>>(
      `/news/${newsId}/images`,
    );

    let images: Array<string> = [];

    response.data.forEach((image) => {
      images.push(image.image);
    });

    if (response.status === 200) {
      responseObject.message = ServiceResponseMessage.Successful;
      responseObject.data = images;
    } else {
      throw new Error(ServiceResponseMessage.Error);
    }
  } catch (ex) {
    responseObject.message = ex.message;
  }
  return responseObject;
}
