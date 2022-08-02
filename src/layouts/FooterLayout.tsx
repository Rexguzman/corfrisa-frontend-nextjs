import React from 'react';

const FooterLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen flex-col justify-between">
      {children}
      <div className="my-2 w-full p-2">
        <p className="my-2 text-center">
          Copyright © 2022 Corporación del Frío S.A.
        </p>
      </div>
    </div>
  );
};

export default FooterLayout;
