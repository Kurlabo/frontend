import React from 'react';

import { HiOutlineExclamationCircle } from 'react-icons/hi';
import ConfirmText from './ConfirmText';

const textAreaStyle =
  'resize-none  h-r-7.4 w-full border border-gray-300 rounded-p-3 text-1.4 py-r-1.2 px-r-1.6 mb-4 focus:outline-0';
// 경비실 메세지
const securityText =
  '경비 부재로 출입이 불가능한 경우, 부득이하게 1층 공동현관 앞 또는 경비실 앞에 배송될 수 있습니다.';

// 기타 메세지
const otherText = '정확한 배송을 위해 장소의 특징 또는 출입 방법 등을 자세하게 작성해주세요.';
const otherText2 = '보일러 실, 양수기 함, 소화전 앞 또는 위탁배송은 불가능 합니다.';
const otherText3 =
  '요청하신 장소로 배송이 어려운 경우, 부득이하게 1층 공동현관 앞 또는 경비실 앞에 배송될 수 있습니다.';
const otherText4 =
  '배송 받으실 시간은 별도로 지정하실 수 없으며, 밤 11시까지 주문 시 오전 7시까지 배송이 완료됩니다.';

const ReceivePlace = ({ state }) => {
  return (
    <div>
      <h3 className="pb-6 pt-9 text-1.4 font-semibold">
        {state === 'security' ? '경비실 특이사항' : '기타 장소 세부 사항'}
      </h3>
      <textarea
        name="others"
        id="others"
        cols="20"
        rows="10"
        placeholder={
          state === 'security'
            ? '경비실 위치 등 특이사항이 있을 경우 작성해주세요'
            : '예 : 계단 밑, 주택단지 앞 경비초소를 지나 A동 출입구 (배송 시간은 별도로 지정할 수 없습니다)'
        }
        className={textAreaStyle}
      ></textarea>
      <div className="text-1.2 text-kp-600 w-full bg-klp-30 bg-opacity-5 py-6 px-6">
        <p className="font-medium">
          <HiOutlineExclamationCircle className="inline-block mr-2 text-1.5 align-text-top" />
          확인해주세요!
        </p>
        {state === 'security' ? (
          <ConfirmText text={securityText} />
        ) : (
          <ConfirmText text={otherText} text2={otherText2} text3={otherText3} text4={otherText4} />
        )}
      </div>
    </div>
  );
};

export default ReceivePlace;
