import React from 'react';

const Card = ({ title, data, icon }) => {
  return (
    <div className="flex aspect-[7/3] rounded-lg bg-gray-50 bg-card-background-1 text-black shadow-lg hover:bg-card-background-2 hover:shadow-xl">
      <div className="flex w-1/3 items-center justify-center p-2">{icon}</div>
      <div className="flex w-2/3 flex-col justify-evenly p-2">
        <h1 className="text-2xl font-bold lg:text-3xl">{title}</h1>
        <h2 className="text-4xl lg:text-5xl">{data}</h2>
      </div>
    </div>
  );
};

export default Card;
