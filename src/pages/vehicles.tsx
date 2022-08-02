import React, { ReactElement } from 'react';
import LandingLayout from '@layouts/LandingLayout';
import TableV2 from '@components/TableV2';

const Vehicles = () => {
  // const [loading, setLoading] = useState<boolean>(false);

  const Headers = [
    {
      id: '1',
      accessor: 'brand',
      Header: 'Marca',
    },
    {
      id: '2',
      accessor: 'model',
      Header: 'Modelo',
    },
    {
      id: '3',
      accessor: 'plate_number',
      Header: 'Placa',
    },
    {
      id: '4',
      accessor: 'medium',
      Header: 'Medio',
    },
    // {
    //   id: '5',
    //   accessor: 'last_toll',
    //   Header: 'Último peaje',
    // },
    // {
    //   id: '6',
    //   accessor: 'last_used',
    //   Header: 'Último uso',
    // },
    // {
    //   id: '7',
    //   accessor: 'actions',
    //   Header: 'Acciones',
    // },
  ];

  const data = [
    {
      id: '1',
      brand: 'Ford',
      model: 'Fiesta',
      plate_number: 'AA4-B44',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      medium: 'QR',
      test: 'test',
      actions: <p className="bg-black"> asdas</p>,
    },
    {
      id: '2',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
    },
    {
      id: '3',
      brand: 'Marca 1',
      model: 'Modelo 2',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: '1234567',
      medium: 'Medio1',
      test2: 'test23',
    },
    {
      id: '4',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
    },
    {
      id: '5',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
    },
    {
      id: '6',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
    },
    {
      id: '7',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
    },
    {
      id: '8',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
    },
    {
      id: '9',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
    },
    {
      id: '10',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
    },
    {
      id: '11',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
    },
    {
      id: '12',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
    },
    {
      id: '13',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
    },
    {
      id: '14',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
    },
  ];

  return (
    <div className="">
      <TableV2 columns={Headers} data={data} />
    </div>
  );
};

Vehicles.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Vehicles;
