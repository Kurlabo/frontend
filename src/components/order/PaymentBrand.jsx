import React from 'react';

const PaymentBrand = ({ brand, imgUrl, id, credit }) => {
  return (
    <tr className="text-1.4 text-left font-medium">
      <th className="pt-9 pb-3 w-r-19">{brand} 결제</th>
      <td className="pt-9 pb-3">
        <input type="radio" id={id} className="inline-block mr-4 cursor-pointer" />
        <label htmlFor={id} className="inline-block pr-20 cursor-pointer">
          {imgUrl ? (
            <img src={imgUrl} alt={brand + '결제'} className="h-r-1.8" />
          ) : credit ? (
            <p>{credit}</p>
          ) : (
            <p>{brand}</p>
          )}
        </label>
      </td>
    </tr>
  );
};

export default PaymentBrand;
