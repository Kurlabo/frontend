import React from 'react';

const bothDt = 'text-1.4 text-gray-400 inline-block pt-r-0.8';
const onlyTitle = 'text-1.6 inline-block pt-r-1.2';
const textLarge = 'text-r-2.2';

const PayHistoryDl = ({ title, subtitle, cost }) => {
  return (
    <dl className=" flex justify-between">
      <dt className={title && subtitle ? bothDt : onlyTitle}>{title}</dt>
      <dd className={title && subtitle ? bothDt : onlyTitle}>
        {cost !== undefined &&
          (title === '상품할인금액' ? (
            <span
              className={title === '최종결제금액' ? textLarge : undefined}
            >{`- ${cost.toLocaleString()}원`}</span>
          ) : title === '배송비' ? (
            <span
              className={title === '최종결제금액' ? textLarge : undefined}
            >{`+ ${cost.toLocaleString()}원`}</span>
          ) : (
            <span className={title === '최종결제금액' ? textLarge : undefined}>
              {cost.toLocaleString()}원
            </span>
          ))}
      </dd>
    </dl>
  );
};

export default PayHistoryDl;
