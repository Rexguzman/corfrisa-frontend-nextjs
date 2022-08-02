import LandingLayout from '@layouts/LandingLayout';
import React, { ReactElement } from 'react';
// import { useForm } from 'react-hook-form';
import { UserCircleIcon, PencilAltIcon } from '@heroicons/react/solid';

const User = () => {
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm<any>({});
  return (
    <div className="mt-36 rounded-xl bg-gray-100 p-24 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="w-1/2 border-r-2">
          <UserCircleIcon className="mr-16 h-20 text-gray-500" />
        </div>
        <h1 className="ml-16 w-full text-4xl font-bold tracking-wide">
          {' '}
          John Doe
        </h1>
      </div>
      <div className="mt-10 flex flex-col">
        <div className="mt-6 flex items-center">
          <h3 className="mr-4 text-lg  font-bold">Correo:</h3>
          <h3 className="mr-auto text-lg">johndoe@vepeajes.com</h3>
          <button type="button">
            <PencilAltIcon className="h-5 text-gray-600 hover:text-emerald-500" />
          </button>
        </div>
        <div className="mt-10 flex items-center">
          <h3 className="mr-4 text-lg font-bold">Teléfono:</h3>
          <h3 className="mr-auto text-lg">+58 (414)1234567</h3>
          <PencilAltIcon className="h-5 text-gray-600 hover:text-emerald-500" />
        </div>
        <div className="mt-10 flex items-center">
          <h3 className="mr-4 text-lg font-bold">Contraseña:</h3>
          <h3 className="mr-auto text-lg">password</h3>
          <PencilAltIcon className="h-5 text-gray-600 hover:text-emerald-500" />
        </div>
      </div>
    </div>
  );
};

User.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default User;
