import React, { ReactElement } from 'react';
import LandingLayout from '@layouts/LandingLayout';
import MainCard from '@components/MainCard';
import { useAxios } from '@hooks/useAxios';
import { useRouter } from 'next/router';
// import { useAppDispatch } from '@store/hooks';
import { ArrowNarrowLeftIcon, UserCircleIcon } from '@heroicons/react/outline';
import { useQuery } from 'react-query';
import ClientForm from '@components/clients/clientForm';
import Button from '@components/Button';
import { Tooltip } from '@material-tailwind/react';

const ViewClient = () => {
  const { requester } = useAxios();
  const router = useRouter();
  const clientId = router.query.id;
  // const dispatch = useAppDispatch();
  const { data } = useQuery('getClient', () => {
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
          <h1>Datos del Cliente</h1>
        </div>
      }
      className="mx-auto w-full md:w-2/3"
    >
      <div className="mb-9">
        <Button
          className="h-10 w-10 rounded-full"
          type="button"
          onClick={() => router.push('/clients')}
        >
          <Tooltip content="Atras" className="bg-blue-900 text-xs">
            <ArrowNarrowLeftIcon
              className="m-auto block h-6 w-6"
              aria-hidden="true"
            />
          </Tooltip>
        </Button>
      </div>
      <ClientForm clientData={data?.data} editMode />
    </MainCard>
  );
};

ViewClient.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default ViewClient;
