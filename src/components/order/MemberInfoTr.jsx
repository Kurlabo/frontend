import React from 'react';

const MemberInfoTr = ({ heading, desc }) => {
  return (
    <tr>
      <th>{heading}</th>
      <td>{desc}</td>
    </tr>
  );
};

export default MemberInfoTr;
