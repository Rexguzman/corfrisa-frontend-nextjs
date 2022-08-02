import React, { ReactElement, useEffect, useState } from 'react';
import LandingLayout from '@layouts/LandingLayout';
import { useGuard } from '@hooks/useGuard';
import { useAxios } from '@hooks/useAxios';
import { useQuery } from 'react-query';
import TableV2 from '@components/TableV2';
import { EyeIcon, PencilAltIcon, PlusIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

const columns = [
  {
    id: '1',
    accessor: 'name',
    Header: 'Nombre',
  },
  {
    id: '2',
    accessor: 'phone',
    Header: 'Contacto',
  },
  {
    id: '3',
    accessor: 'email',
    Header: 'Correo',
  },
  {
    id: '4',
    accessor: 'actions',
    Header: 'Acciones',
  },
];

const Clients = () => {
  useGuard();
  const { requester } = useAxios();
  const router = useRouter();
  const { data, isLoading } = useQuery('clients', async () => {
    const { data } = await requester({
      method: 'GET',
      url: '/clients',
    });
    return data;
  });

  const [dataTable, setDataTable] = useState<Array<any>>([]);
  useEffect(() => {
    if (data) {
      const dataTable = data.map(({ _id, name, phone, email }) => ({
        name,
        phone,
        email,
        actions: (
          <div className="flex gap-3">
            <button
              data-id={_id}
              type="button"
              onClick={(e) =>
                router.push(`/clients/view/${e.currentTarget.dataset.id}`)
              }
              className="h-8 w-8 rounded-full bg-blue-800 text-center text-white hover:bg-blue-300"
            >
              <EyeIcon className="m-auto block h-6 w-6" aria-hidden="true" />
            </button>
            <button
              data-id={_id}
              type="button"
              onClick={(e) =>
                router.push(`/clients/edit/${e.currentTarget.dataset.id}`)
              }
              className="h-8 w-8 rounded-full bg-blue-800 text-center text-white hover:bg-blue-300"
            >
              <PencilAltIcon
                className="m-auto block h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
        ),
      }));
      setDataTable(dataTable);
    }
  }, [data, router]);

  return (
    <div>
      {isLoading ? null : (
        <div className="p-6">
          <TableV2 columns={columns} data={dataTable} />
        </div>
      )}
      <button
        className="absolute bottom-10 right-10 h-14 w-14 rounded-full bg-blue-800"
        onClick={() => {
          router.push('clients/create');
        }}
      >
        <PlusIcon
          className="mx-2 block h-10 w-10 font-bold text-white"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

Clients.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Clients;
