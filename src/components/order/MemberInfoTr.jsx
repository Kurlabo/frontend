import React from 'react';

const MemberInfoTr = ({ tableHeader, desc }) => {
  return (
    <tr className="text-gray-900 text-left">
      <th style={{ width: '19rem' }} className="pt-r-1.9 text-1.4 font-medium">
        {tableHeader}
      </th>
      <td className="pt-r-1.9 text-1.4 font-normal">{desc}</td>
    </tr>
  );
};

export default MemberInfoTr;
