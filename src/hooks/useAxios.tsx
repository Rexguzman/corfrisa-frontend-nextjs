import axios from 'axios';
import { loginUser } from '@store/counter/loginReducer';
import { useAppSelector } from '@store/hooks';

const baseUrl = 'http://localhost:3001';

export const useAxios = () => {
  const user = useAppSelector(loginUser);
  console.log(user);
  const requester = axios.create({
    baseURL: baseUrl,
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${user.access_token}`,
    },
  });

  return { requester };
};
