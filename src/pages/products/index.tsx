import React, { ReactElement } from 'react';
import LandingLayout from '@layouts/LandingLayout';
import { useGuard } from '@hooks/useGuard';
import { useAxios } from '@hooks/useAxios';
import { useQuery } from 'react-query';
import TableV2 from '@components/TableV2';

const columns = [
  {
    id: '1',
    accessor: 'code',
    Header: 'Código',
  },
  {
    id: '2',
    accessor: 'description',
    Header: 'Descripción',
  },
  {
    id: '3',
    accessor: 'price',
    Header: 'Precio',
  },
  {
    id: '4',
    accessor: 'stock',
    Header: 'Stock',
  },
];

const Products = () => {
  useGuard();
  const { requester } = useAxios();
  const { data, isLoading } = useQuery('products', async () => {
    const { data } = await requester({
      method: 'GET',
      url: '/products',
    });
    return data;
  });
  return (
    <div>
      {isLoading ? null : (
        <div className="p-6">
          {/* <h1 className="my-4 text-2xl font-bold text-blue-800">Productos</h1> */}
          <TableV2 columns={columns} data={data} />
        </div>
      )}
    </div>
  );
};

Products.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Products;
