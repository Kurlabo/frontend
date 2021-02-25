import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const Adress = () => {
  return (
    <div className="w-r-28.4 px-8 py-9 border text-r-1.6 font-bold">
      <p>
        <FaMapMarkerAlt className="inline-block mr-3" />
        배송지
      </p>
      <p>
        <span className="text-kp-600">배송지를 입력</span>하고
      </p>
      <p>배송유형을 확인해 보세요!</p>
      <Link
        to="#"
        onClick={onClickLink}
        className="mt-7 border rounded-r-0.4 border-kp-600 w-full h-14 text-r-1.2 text-kp-600 inline-block text-center leading-r-3.5 font-semibold"
      >
        <FaSearch className="inline-block mr-3" />
        주소 검색
      </Link>
    </div>
  );
  function onClickLink() {
    const width = 500;
    const height = 450;
    var left = Math.ceil((window.screen.width - width) / 2);
    var top = Math.ceil((window.screen.height - height) / 2);

    window.open(
      'https://www.kurly.com/m2/myp/destination/chkAddress.php?device=popup&from=pc&by=cart&guest=1',
      '_blank',
      `height=${height},width=${width}, top=${top}, left=${left}`,
    );
  }
};

export default Adress;
