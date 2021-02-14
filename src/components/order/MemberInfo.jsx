import React from 'react';
import { wrapper } from './Coupon';
import MemberInfoTr from './MemberInfoTr';

export const wrapperWithText = `${wrapper} text-2`;

const MemberInfo = () => {
  return (
    <div className={wrapperWithText}>
      <h2 className="border-b border-gray-800 pb-8 font-medium">주문자 정보</h2>
      <table>
        <tbody>
          <MemberInfoTr tableHeader="보내는 분" desc="조재연" />
          <MemberInfoTr tableHeader="휴대폰" desc="01098063260" />
          <MemberInfoTr tableHeader="이메일" desc="cjy0029@naver.com" />
          <tr className="text-1.2 text-gray-600">
            <th></th>
            <td className="pt-r-1.9 pb-r-0.9">
              이메일을 통해 주문처리과정을 보내드립니다.
              <br />
              정보 변경은 마이컬리 &#62; 개인정보 수정 메뉴에서 가능합니다.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MemberInfo;
