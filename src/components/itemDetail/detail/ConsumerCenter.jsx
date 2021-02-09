import React from 'react';
import QTypeList from './QTypeList';
import ConsumerGuide from './ConsumerGuide';

const ConsumerCenter = () => {
  return (
    <div className="pt-24 border-t border-gray-300">
      <h4 className="text-p-28 font-medium text-gray-500 mb-12">고객행복센터</h4>
      <p className="text-r-1.8 text-gray-500 font-medium pb-2">
        궁금하신 점이나 서비스 이용에 불편한 점이 있으신가요?
      </p>
      <p className="text-p-16 text-gray-500 font-normal">
        문제가 되는 부분을 사진으로 찍어 아래 중 편하신 방법으로 접수해 주시면 빠르게
        도와드리겠습니다.
      </p>
      <QTypeList />
      <ConsumerGuide />
    </div>
  );
};

export default ConsumerCenter;
