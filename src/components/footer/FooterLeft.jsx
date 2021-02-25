import React from 'react';

const FooterLeft = () => {
  return (
    <div className="w-2/4 pt-12  pb-8">
      <h2 className="font-bold text-r-2">고객행복센터</h2>
      <dl className="flex pt-8">
        <dt className="text-r-2.8 font-extrabold mr-7 w-64">1644-1107</dt>
        <dd>
          <p>365고객센터</p>
          <p className="text-kmi-100">오전 7시 - 오후 7시</p>
        </dd>
      </dl>
      <dl className="flex flex-shrink-0 pt-8">
        <dt className="mr-7 w-64">
          <p className="h-16 border border-solid border-kmmd-100 text-center leading-4">
            카카오톡 문의
          </p>
        </dt>
        <dd>
          <p>365고객센터</p>
          <p className="text-kmi-100">오전 7시 - 오후 7시</p>
        </dd>
      </dl>
      <dl className="flex pt-8">
        <dt className="mr-7 w-64 flex-shrink-0">
          <p className="h-16 border border-solid border-kmmd-100 text-center leading-4">1:1 문의</p>
        </dt>
        <dd>
          <p>24시간 접수 가능</p>
          <p className="text-kmi-100">고객센터 운영시간에 순차적으로 답변해드리겠습니다.</p>
        </dd>
      </dl>
    </div>
  );
};

export default FooterLeft;
