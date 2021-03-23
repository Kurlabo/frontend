import React from 'react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { RiRadioButtonFill } from 'react-icons/ri';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { formRadioIcon, formRadioIcon2 } from '../../common_style/common';
import ConfirmText from './ConfirmText';
import CourierInfo from './CourierInfo';

const textAreaStyle =
  'resize-none h-r-11 w-full border border-gray-300 rounded-p-3 text-1.4 py-r-1.2 px-r-1.6 mb-4 focus:outline-0';
const inputStyle =
  'text-1.4 h-r-4.4 w-full px-r-1.4 pb-1 border border-gray-00 rounded-p-3 focus:outline-0 mb-2';

// 확인해주세요 메시지
const enterPwdText =
  '비밀번호가 정확하지 않을 경우, 부득이하게 1층 공동현관 앞 또는 경비실 앞에 배송될 수 있습니다.';
const enterFreeText =
  '자유출입이 불가능한 경우, 부득이하게 1층 공동현관 앞 또는 경비실 앞에 배송될 수 있습니다.';
const othersText =
  '요청하신 방법으로 출입이 어려운 경우, 부득이하게 1층 공동현관 앞 또는 경비실 앞에 배송될 수 있습니다.';
const othersText2 =
  '배송 받으실 시간은 별도로 지정하실 수 없으며, 밤 11시까지 주문 시 오전 7시까지 배송이 완료됩니다.';

const EntrancePwd = ({ title, state, deliveryInfo, setDeliveryInfo }) => {
  const [entrancePwd, setEntrancePwd] = useState('enterPwd');

  return (
    <div className="text-1.4">
      {state === 'courier' && (
        <CourierInfo
          title="택배함 정보"
          deliveryInfo={deliveryInfo}
          setDeliveryInfo={setDeliveryInfo}
        />
      )}

      <fieldset id="entrance">
        <legend className="pb-6 pt-9 font-semibold">
          {title}
          <span className="text-formStar">*</span>
        </legend>

        {/* 공동현관 비밀번호를 클릭했을 때 */}
        <input
          type="radio"
          id="enterPwd"
          name="entrance"
          className="hidden"
          onChange={onChange}
          title="공동현관 비밀번호"
        />
        <label htmlFor="enterPwd" className="text-1.4 inline-block mb-6 cursor-pointer">
          {entrancePwd === 'enterPwd' ? (
            <RiRadioButtonFill className={formRadioIcon} />
          ) : (
            <RiCheckboxBlankCircleLine className={formRadioIcon2} />
          )}
          공동현관 비밀번호
        </label>
        {entrancePwd === 'enterPwd' && (
          <>
            <input
              type="text"
              placeholder="예:#1234*"
              className={inputStyle}
              onChange={typePassword}
              title="공동현관 비밀번호"
              value={deliveryInfo.enterPwd}
            />
            <p className="text-1.2 text-gray-400 mb-6">
              특수문자를 포함한 정확한 비밀번호를 입력해 주세요.
            </p>
          </>
        )}

        {/* 자유 출입 라디오 클릭했을 때  */}
        <div>
          <input
            type="radio"
            id="enterFree"
            name="entrance"
            className="hidden"
            onChange={onChange}
            title="자유 출입 가능"
          />
          <label htmlFor="enterFree" className="text-1.4 inline-block mb-6 cursor-pointer">
            {entrancePwd === 'enterFree' ? (
              <RiRadioButtonFill className={formRadioIcon} />
            ) : (
              <RiCheckboxBlankCircleLine className={formRadioIcon2} />
            )}
            자유 출입 가능
          </label>
        </div>

        {/* 기타 클릭했을 때 */}
        <div>
          <input
            type="radio"
            id="others"
            name="entrance"
            className="hidden"
            onChange={onChange}
            title="기타"
          />
          <label htmlFor="others" className="text-1.4 inline-block mb-6 cursor-pointer">
            {entrancePwd === 'others' ? (
              <RiRadioButtonFill className={formRadioIcon} />
            ) : (
              <RiCheckboxBlankCircleLine className={formRadioIcon2} />
            )}
            기타
          </label>
        </div>
        {entrancePwd === 'others' && (
          <textarea
            name="others"
            id="others"
            cols="30"
            rows="10"
            placeholder="예: 연락처로 전화, 경비실로 호출 (배송 시간은 별도로 지정할 수 없습니다)"
            className={textAreaStyle}
            value={deliveryInfo.otherMsg || ''}
            onChange={typePassword}
          ></textarea>
        )}
      </fieldset>

      <div className="text-1.2 text-kp-600 w-full bg-klp-30 bg-opacity-5 py-6 px-6 ">
        <p className="font-medium">
          <HiOutlineExclamationCircle className="inline-block mr-2 text-1.5 align-text-top" />
          확인해주세요!
        </p>
        {entrancePwd === 'enterPwd' ? (
          <ConfirmText text={enterPwdText} />
        ) : entrancePwd === 'enterFree' ? (
          <ConfirmText text={enterFreeText} />
        ) : (
          <ConfirmText text={othersText} text2={othersText2} />
        )}
      </div>
    </div>
  );
  function onChange(e) {
    setEntrancePwd(e.target.id);
    setDeliveryInfo({
      ...deliveryInfo,
      enterWay: e.target.title,
      enterPwd: '',
      otherMsg: '',
    });
  }

  function typePassword(e) {
    switch (entrancePwd) {
      case 'enterPwd':
        setDeliveryInfo({
          ...deliveryInfo,
          otherMsg: '',
          enterWay: '',
          enterPwd: e.target.value,
        });
        break;
      case 'others':
        setDeliveryInfo({
          ...deliveryInfo,
          enterPwd: '',
          enterWay: '',
          otherMsg: e.target.value,
        });
        console.log(deliveryInfo.otherMsg);
        break;
      default:
        break;
    }
  }
};

export default EntrancePwd;
