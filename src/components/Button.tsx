import React from 'react';
import Loader2 from './loaders/Loader2';

interface ButtonProps {
  loading?: boolean;
  type: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
  className?: string;
}

const Button = ({
  loading,
  onClick,
  type,
  children,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick}
      className={`relative inline-flex h-10 w-full items-center justify-center rounded-md bg-blue-800 py-1 px-4 align-middle text-white shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 ${
        className ? className : ''
      } ${
        loading
          ? 'pointer-events-none'
          : ' font-bold transition-all delay-100 duration-200 hover:bg-blue-500 hover:text-white hover:shadow-lg '
      }`}
    >
      {loading ? (
        <div className="absolute -top-5">
          <Loader2 />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </button>
  );
};

export default Button;
