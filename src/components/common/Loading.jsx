import React from 'react';

const Loading = () => {
  return (
    <div
      className=" bg-gray-900 opacity-50 fixed top-0 right-0 left-0 bottom-0 overflow-hidden"
      style={{ zIndex: 99999 }}
    >
      <img
        src="/img/loading-foods.gif"
        alt="loading.."
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 "
      />
    </div>
  );
};

export default Loading;
