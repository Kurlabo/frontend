import React from 'react';

const PaymentBrand = ({ brand, imgUrl, id, credit }) => {
  return (
    <tr>
      <th>{brand} 결제</th>
      <td>
        <input type="radio" id={id} />
        <label htmlFor={id}>
          {imgUrl ? (
            <img src={imgUrl} alt={brand + '결제'} />
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
