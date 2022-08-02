import MainCard from '@components/MainCard';
import { useGuard } from '@hooks/useGuard';
import LandingLayout from '@layouts/LandingLayout';
import React, { ReactElement } from 'react';

const Dashboard = () => {
  useGuard();
  return (
    <MainCard title="En Construcción">
      <></>
    </MainCard>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Dashboard;
