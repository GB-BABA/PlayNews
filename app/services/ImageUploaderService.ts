import S3Repository from '../repository/S3Repository';

export class ImageUploaderService {
  _imageSource: IImageSource;
  _s3RepositoryInstance: S3Repository;
  constructor() {
    this._s3RepositoryInstance = new S3Repository();
    this._imageSource = new ImageSource('', ImageSourceType.LocalFile);
  }

  addImage(imageSource: ImageSource) {
    this._imageSource = imageSource;
  }
}

class ImageSource implements IImageSource {
  source: string;
  type: ImageSourceType;

  constructor(source: string, type: ImageSourceType) {
    this.source = source;
    this.type = type;
  }
}

interface IImageSource {
  source: string;
  type: ImageSourceType;
}

enum ImageSourceType {
  RemoteUrl,
  LocalFile,
}
