import React from 'react';

const PayingLoading = () => {
  return (
    <>
      <div
        className="bg-gray-300 fixed top-0 right-0 left-0 bottom-0 overflow-hidden"
        style={{ zIndex: 99998 }}
      ></div>
      <p
        style={{ zIndex: 99999 }}
        className="text-kp-600 text-r-3.8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-r-2.5"
      >
        결제가 진행중입니다.
      </p>
      <img
        src="/img/loading--unscreen.gif"
        alt="loading.."
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-r-40"
        style={{ zIndex: 99999 }}
      />
    </>
  );
};

export default PayingLoading;
