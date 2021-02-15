import React from 'react';
import { Link } from 'react-router-dom';
import { wrapperWithText } from './MemberInfo';
import { MdKeyboardArrowRight } from 'react-icons/md';

const PersonalAgree = () => {
  return (
    <div className={wrapperWithText}>
      <h2 className="pb-r-1.6 border-b border-gray-800">개인정보 수집/제공</h2>
      <div>
        <input type="radio" id="agreePersonal" className="mr-5" />
        <label htmlFor="agreePersonal">
          <p className="text-1.8 font-medium inline-block pt-3 text-gray-700">
            결제 진행 필수 동의
          </p>
        </label>
      </div>
      <div className="pl-r-1.4 text-1.4 border-b border-gray-100 pb-7">
        <p className="pt-r-0.8 ml-5">
          개인정보 수집<span className="mx-1">&middot;</span>이용 및 위탁 동의
          <span className="text-gray-400 ml-1 mr-5">(필수)</span>
          <Link className="text-kp-600" to="/">
            약관보기
            <MdKeyboardArrowRight className="inline-block text-1.6 align-bottom" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PersonalAgree;
