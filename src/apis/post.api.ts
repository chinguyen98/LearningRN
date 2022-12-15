import axios from 'axios';
import { GetAllPostResponseData } from '../types/apis/postApi.type';

export const fetchAllPostApi = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const data: GetAllPostResponseData = response.data;
  return data;
};
