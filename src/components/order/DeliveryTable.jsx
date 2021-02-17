import React from 'react';

const tdStyle = 'pt-r-1.9 text-1.4 font-normal pb-10';
const defaultDeliver =
  'w-r-7.4 rounded-r-1.1 bg-gray-100 text-1.2 text-center block mb-3 p-1 text-gray-600 font-medium';
const modifyBtn =
  'w-24 h-12 text-1.2 font-medium rounded-p-3 border border-kp-600 text-kp-600 focus:outline-0';

const DeliveryTable = () => {
  return (
    <table className="w-full">
      <tbody className="text-gray-900 text-left">
        <tr className="border-b border-gray-100">
          <th style={{ width: '19rem' }} className="pt-r-1.9 text-1.4 font-medium align-text-top">
            배송지
          </th>
          <td className={tdStyle}>
            <span className={defaultDeliver}>기본배송지</span>
            <p>서울시 강남구 청담동 어디어디</p>
            <span className="text-gray-400 block pt-2">택배배송</span>
          </td>
        </tr>
        <tr style={{ width: '19rem' }} className="align-text-top border-b border-gray-100">
          <th className="pt-r-1.9 text-1.4 font-medium">상세 정보</th>
          <td className={tdStyle}>
            <p className="pb-6 ">조재연, 01098063260</p>
            <button className={modifyBtn} onClick={typeDeliveryInfo}>
              입력
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );

  function typeDeliveryInfo() {
    const width = 500;
    const height = 800;
    var left = Math.ceil((window.screen.width - width) / 2);
    var top = Math.ceil((window.screen.height - height) / 2);

    window.open(
      '/order/input_reception',
      '_blank',
      `height=${height},width=${width}, top=${top}, left=${left}`,
    );
  }
};

export default DeliveryTable;
