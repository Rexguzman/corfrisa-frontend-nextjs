import React, { ReactElement, useEffect, useState } from 'react';
import LandingLayout from '@layouts/LandingLayout';
import MainCard from '@components/MainCard';
import Button from '@components/Button';
import { useRouter } from 'next/router';
import { ArrowNarrowLeftIcon, UserCircleIcon } from '@heroicons/react/outline';
import { Tooltip } from '@material-tailwind/react';
import Select from 'react-select';
import { useQuery } from 'react-query';
import { useAxios } from '@hooks/useAxios';

const CreateQuote = () => {
  const router = useRouter();
  const { requester } = useAxios();
  const { data, isLoading } = useQuery('clients', async () => {
    const { data } = await requester({
      method: 'GET',
      url: '/clients',
    });
    return data;
  });

  const [options, setOptions] = useState<
    {
      label: string;
      value: string;
    }[]
  >([{ label: '', value: '' }]);

  useEffect(() => {
    if (data) {
      const options = data.map((client) => ({
        label: client.name,
        value: client._id,
      }));
      setOptions(options);
    }
  }, [data]);

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
          onClick={() => router.push('/quotes')}
        >
          <Tooltip content="Atras" className="bg-blue-900 text-xs">
            <ArrowNarrowLeftIcon
              className="m-auto block h-6 w-6"
              aria-hidden="true"
            />
          </Tooltip>
        </Button>
      </div>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={{ label: '', value: '' }}
        // isDisabled={isDisabled}
        isLoading={isLoading}
        // isClearable={isClearable}
        isSearchable={true}
        name="client"
        options={options}
        onChange={(e) => {
          const clientData = data.find((client) => client._id === e.value);
          console.log(clientData);
        }}
      />
    </MainCard>
  );
};

CreateQuote.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default CreateQuote;
