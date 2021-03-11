import React from 'react';
import { Link } from 'react-router-dom';
import { wrapperWithText } from './MemberInfo';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { formRadioIcon2, formRadioIcon } from '../../common_style/common.js';

const PersonalAgree = ({ onCheck, agreeCheck }) => {
  return (
    <div className={`${wrapperWithText} pb-r-15.5`}>
      <h2 className="pb-r-1.6 border-b border-gray-800">개인정보 수집/제공</h2>
      <div className="font-medium pt-r-1.9">
        <input
          type="checkbox"
          id="agreePersonal"
          className="mr-5 hidden cursor-pointer"
          onChange={onCheck}
        />
        <label htmlFor="agreePersonal" className="cursor-pointer">
          {agreeCheck ? (
            <RiCheckboxCircleLine className={formRadioIcon2} />
          ) : (
            <IoIosCheckmarkCircle className={formRadioIcon} />
          )}
          결제 진행 필수 동의
        </label>
      </div>
      <div className="pl-r-1.4 text-1.4 border-b border-gray-100 pb-7 ">
        <p className="pt-r-0.8 ml-10">
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
