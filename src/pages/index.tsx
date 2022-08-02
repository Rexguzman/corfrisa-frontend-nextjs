import { loginUser } from '@store/counter/loginReducer';
import { useAppSelector } from '@store/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Landing from '../components/Landing';

const Home = () => {
  const router = useRouter();
  const { loggedIn } = useAppSelector(loginUser);
  useEffect(() => {
    !loggedIn ? router.push('/login') : router.push('/dashboard');
  }, [loggedIn]);
  return (
    <div>
      <Landing />
    </div>
  );
};

export default Home;
