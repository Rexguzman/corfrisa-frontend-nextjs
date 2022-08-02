import React from 'react';

interface TMainCartProps {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  className?: string;
}

const MainCard = ({ children, title, className }: TMainCartProps) => {
  return (
    <div className={`p-2 ${className ? className : ''}`}>
      <div className="m-4 rounded-lg">
        <div className="rounded-lg bg-blue-800 px-10 py-6 text-2xl font-bold text-white">
          {title}
        </div>
        <hr className="border-4 border-slate-200" />
        <div className="rounded-lg bg-white p-10">{children}</div>
      </div>
    </div>
  );
};

export default MainCard;
