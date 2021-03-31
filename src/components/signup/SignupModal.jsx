import React from 'react';
import Modal from 'react-modal';
import { IoCloseOutline } from 'react-icons/io5';

// 모달창 스타일 정의
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '490px',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    boxSizing: 'border-box',
    padding: 0,
    borderRadius: 0,
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    backgroundColor: 'rgba(32, 32, 32, 0.75)',
  },
};
const modalStyles2 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '490px',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    boxSizing: 'border-box',
    padding: 0,
    borderRadius: '8px',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    backgroundColor: 'rgba(32, 32, 32, 0.75)',
  },
};
const SignupModal = ({ modalIsOpen, closeModal, value, form }) => {
  let modalText = '';
  switch (value) {
    case 'uid':
      modalText = '아이디를';
      break;
    case 'password':
      modalText = '비밀번호를';
      break;
    case 'repassword':
      modalText = '비밀번호 확인을';
      break;
    case 'name':
      modalText = '이름을';
      break;
    case 'email':
      modalText = '이메일을';
      break;
    case 'phone':
      modalText = '휴대폰 번호를';
      break;
    case 'birthY':
      modalText = '생년을';
      break;
    case 'birthM':
      modalText = '생월을';
      break;
    case 'birthD':
      modalText = '생일을';
      break;
    default:
      modalText = value;
      break;
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={form ? modalStyles2 : modalStyles}
      ariaHideApp={false}
    >
      {form ? (
        <div className="px-8 pt-8 text-center">
          <div className="pb-8">
            <h1 className="inline-block font-bold text-left text-r-2.4">
              개인정보 수집 이용 동의<span className="text-gray-300"> (선택)</span>
            </h1>
            <button type="button" className="float-right w-8 h-8 text-r-2" onClick={closeModal}>
              <IoCloseOutline />
            </button>
          </div>
          <div className="w-full">
            <table
              className="block text-r-1.2"
              cellPadding="0"
              cellSpacing="0"
              width="100%"
              height="100px"
            >
              <thead className="bg-gray-100 block w-full border-gray-200 border-1  ">
                <tr className="block ">
                  <th className="font-medium inline-block py-3 border-r-1 border-gray-200 w-2/4">
                    수집 목적
                  </th>
                  <th className="font-medium inline-block py-3 border-r-1 border-gray-200 w-1/4">
                    수집 항목
                  </th>
                  <th className="font-medium inline-block py-3 w-1/4">보유 기간</th>
                </tr>
              </thead>
              <tbody className="block w-full ">
                <tr className="block border-1 border-gray-200 border-t-0">
                  <td className="inline-block py-7 border-r-1 border-gray-200 w-2/4">
                    맞춤형 회원 서비스 제공
                  </td>
                  <td className="inline-block py-7 border-r-1 border-gray-200 w-1/4">
                    성별,생년월일
                  </td>
                  <td className="inline-block py-7 w-1/4">회원 탈퇴 즉시파기</td>
                </tr>
              </tbody>
            </table>
            <p className="my-4 text-r-1.6">
              동의를 거부하시는 경우에도 서비스를 이용 할 수 있습니다.
            </p>
          </div>
          <div className="text-center border-gray-100 border-t-1 px-4">
            <button onClick={closeModal} className="text-kp-600 py-6 px-8 text-r-1.6">
              확인
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="px-8 pt-8">
            <div className="pb-8 border-b-1 border-gray-400">
              <h1 className="inline-block font-bold text-r-1.4 text-kp-600 ">알림메세지</h1>
              <button type="button" className="float-right w-8 h-8 text-r-2" onClick={closeModal}>
                <IoCloseOutline />
              </button>
            </div>
            <p className="py-20 text-r-1.4 text-center">
              {modalText.length > 10 ? modalText : `${modalText} 입력해 주세요`}
            </p>
          </div>
          <div className="bg-modalBg py-12 text-center">
            <button
              onClick={closeModal}
              className="bg-kp-600 text-white w-60 h-20 leading-5 text-r-1.3"
            >
              확인
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default SignupModal;
