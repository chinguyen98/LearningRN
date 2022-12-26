import axios from '../../libs/xhr';
import { GenerateAccessTokenResponseType } from './auth.type';

export const generateAccessToken = async ({
  refresh_token,
  client_id,
  client_secret,
  grant_type = 'refresh_token',
}: {
  refresh_token: string;
  client_id: string;
  client_secret: string;
  grant_type?: string;
}): Promise<GenerateAccessTokenResponseType> => {
  return await axios.post('/oauth2/token', {
    refresh_token,
    client_id,
    client_secret,
    grant_type,
  });
};
