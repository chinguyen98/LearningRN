import axios from '../libs/xhr';

const prefix = '/auth';

export const loginApi = async ({ username, password }: { username: string; password: string }) => {
  return axios.post(`${prefix}/login`, { username, password });
};
