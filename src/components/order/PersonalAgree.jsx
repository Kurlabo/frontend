import React from 'react';
import { Link } from 'react-router-dom';

const PersonalAgree = () => {
  return (
    <div>
      <h2>개인정보 수집/제공</h2>
      <div>
        <input type="radio" />
        <p>결제 진행 필수 동의</p>
      </div>
      <p>
        개인정보 수집&middot;이용 및 위탁 동의(필수) <Link>약관보기 &gt;</Link>
      </p>
      <p>
        결제대행 서비스 약관 동의(필수) <Link>약관보기 &gt;</Link>
      </p>
    </div>
  );
};

export default PersonalAgree;
