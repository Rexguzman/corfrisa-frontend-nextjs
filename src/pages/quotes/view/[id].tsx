import React, { ReactElement } from 'react';
import LandingLayout from '@layouts/LandingLayout';
import MainCard from '@components/MainCard';
import { useAxios } from '@hooks/useAxios';
import { useRouter } from 'next/router';
// import { useAppDispatch } from '@store/hooks';
import { UserCircleIcon } from '@heroicons/react/outline';
import { useQuery } from 'react-query';

const ViewClient = () => {
  const { requester } = useAxios();
  const router = useRouter();
  const clientId = router.query.id;
  // const dispatch = useAppDispatch();
  const { data, isLoading } = useQuery('getClient', () => {
    return requester({
      method: 'GET',
      url: `/clients/${clientId}`,
    });
  });
  return (
    <MainCard
      title={
        <div className="flex">
          <UserCircleIcon className="mr-4 h-8 w-8" />
          <h1>{isLoading ? null : <p>{data.data.name}</p>}</h1>
        </div>
      }
      className="mx-auto w-full md:w-2/3"
    ></MainCard>
  );
};

ViewClient.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default ViewClient;
