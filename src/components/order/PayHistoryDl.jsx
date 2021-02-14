import React from 'react';

const bothDt = 'text-1.4 text-gray-400 inline-block pt-r-0.8';
const onlyTitle = 'text-1.6 inline-block pt-r-1.2';

const PayHistoryDl = ({ title, subtitle }) => {
  return (
    <dl className="flex justify-between">
      <dt className={title && subtitle ? bothDt : onlyTitle}>{title}</dt>
      <dd className={title && subtitle ? bothDt : onlyTitle}>
        13,700<span>원</span>
      </dd>
    </dl>
  );
};

export default PayHistoryDl;
