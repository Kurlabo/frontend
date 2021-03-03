import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router';
import GetSupportModal from '../components/customerService/GetSupportModal';
import GetSupportWriting from '../components/customerService/GetSupportWriting';
import NavBar from '../components/customerService/NavBar';

const GetSupport = ({ history }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex w-r-105 pt-r-6.5 mx-auto justify-between">
      <NavBar />
      <div className="w-r-82">
        <h2 className="pt-2 pb-r-3.4 text-r-24 inline-block text-gray-800 font-medium mt-3 mb-1">
          1:1문의
        </h2>
        <GetSupportWriting />
        <GetSupportModal openModal={openModal} closeModal={closeModal} />
      </div>
    </div>
  );

  function closeModal() {
    setOpenModal(false);
    history.push('/shop/account/signin');
  }
};

export default withRouter(React.memo(GetSupport));
