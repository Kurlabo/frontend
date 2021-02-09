import React from 'react';
import MemberInfoTr from './MemberInfoTr';

const MemberInfo = () => {
  return (
    <div>
      <h2 className="border-b border-gray-800">주문자 정보</h2>
      <table>
        <tbody>
          <MemberInfoTr heading="보내는 분" desc="조재연" />
          <MemberInfoTr heading="휴대폰" desc="01098063260" />
          <MemberInfoTr heading="이메일" desc="cjy0029@naver.com" />
          <tr>
            <th></th>
            <td>이메일을 통해 주문처리과정을 보내드립니다.</td>
            <td>정보 변경은 마이컬리 &#62; 개인정보 수정 메뉴에서 가능합니다.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MemberInfo;
