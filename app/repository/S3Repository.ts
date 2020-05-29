import {s3Instance} from '../config/awsS3Config';

class S3Repository implements IS3Repository {
  constructor() {
    console.log('Logging... from s3 service');
    console.log(s3Instance);
    return new S3Repository();
  }
  getImage(imageName: string): string {
    throw new Error('Method not implemented.');
  }
  putImage(imageSource: string): string {
    throw new Error('Method not implemented.');
  }
  deleteImage(imageSource: string): boolean {
    throw new Error('Method not implemented.');
  }
}

interface IS3Repository {
  getImage(imageName: string): string;
  putImage(imageSource: string): string;
  deleteImage(imageSource: string): boolean;
}

export default S3Repository;
