import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const Adress = () => {
  const onClickLink = useCallback(() => {
    /*global daum*/
    // new daum.Postcode({
    //   oncomplete: function (data) {
    //     // console.log(data.address);
    //   },
    // }).open();
    console.log(1111);
  }, []);

  const addressData = '경기도 부천시 가로공원 111';
  // const addressData = '';

  return (
    <div className="w-r-28.4 px-8 py-9 border text-r-1.6 font-bold">
      <p>
        <FaMapMarkerAlt className="inline-block mr-3" />
        배송지
      </p>
      {addressData === '' && (
        <p>
          <span className="text-kp-600">배송지를 입력</span>하고
          <span className="block">배송유형을 확인해 보세요!</span>
        </p>
      )}
      {addressData !== '' && (
        <p className="pt-4 font-medium">
          <span>{addressData}</span>
          <span className="block text-kp-600 text-r-1.4 pt-3">샛별배송</span>
        </p>
      )}
      <Link
        to="#"
        onClick={onClickLink}
        className="mt-7 border rounded-r-0.4 border-kp-600 w-full h-14 text-r-1.2 text-kp-600 inline-block text-center leading-r-3.5 font-semibold"
      >
        {addressData === '' && (
          <>
            <FaSearch className="inline-block mr-3" />
            주소 검색
          </>
        )}
        {addressData !== '' && <span>배송지 변경</span>}
      </Link>
    </div>
  );
};

export default Adress;
