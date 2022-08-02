import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { loginUser } from '@store/counter/loginReducer';
import { useAppSelector } from '@store/hooks';

export const useGuard = () => {
  const router = useRouter();
  const { loggedIn } = useAppSelector(loginUser);
  useEffect(() => {
    !loggedIn ? router.push('/login') : null;
  }, [loggedIn]);
};
