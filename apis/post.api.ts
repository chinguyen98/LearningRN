import axios from 'axios';
import { GetAllPostResponseData } from '../types/apis/postApi.type';
import BaseResponse from '../types/BaseResponse.type';

export const fetchAllPostApi = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const data: BaseResponse<GetAllPostResponseData> = response.data.data;
  return data;
};
