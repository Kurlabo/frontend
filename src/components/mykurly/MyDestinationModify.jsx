import React from 'react';

const MyDestinationModify = ({ history }) => {
  const address1 = '서울시 도봉구 아파트';
  const address2 = '206-2304';
  const addressee = '세영';
  const phoneNumber = '010-1234-1234';
  console.log(history.location);
  return (
    <div className="my-10 px-10 text-r-1.4 font-medium text-kg-350">
      <form>
        <h1 className="a11y-hidden">배송지 </h1>
        <div className="pb-6">
          <h2 className=" mr-6 text-r-2.4 mb-6 text-kg-400">배송지 수정</h2>
          <span className="inline-block text-r-1.2 text-kg-350 bg-gray-100 rounded-full px-3 py-2 leading-none">
            기본 배송지
          </span>
          <p className="mt-6 text-r-1.6 ">{address1}</p>
          <input
            type="text"
            value={address2}
            className="w-full my-3 py-4 font-medium px-8 border-kg-80 border rounded
        "
          />
          <label htmlFor="addressee" className="mt-6 block">
            받으실 분
            <input
              id="addressee"
              type="text"
              value={addressee}
              className="w-full my-3 py-4 font-medium px-8 border-kg-80 border rounded
        "
            />
          </label>
          <label htmlFor="phoneNumber" className="mt-6 block">
            휴대폰
            <input
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              className="w-full my-3 py-4 font-medium px-8 border-kg-80 border rounded
        "
            />
          </label>
        </div>
        <button type="submit" className="bg-kp-600 text-white w-full py-4 ">
          저장
        </button>
      </form>
    </div>
  );
};

export default MyDestinationModify;
