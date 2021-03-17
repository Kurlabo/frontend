import React from 'react';
import MyKurlyHeader from './MyKurlyHeader';
import MyKurlyCategory from './MyKurlyCategory';
import MyInfoModify from './MyInfoModify';
import Modal from '../login/Modal';
import Modalform from '../login/Modalform';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const MyInfo = () => {
  const [confirm, setConfirm] = useState({
    authState: false,
    modal: false,
  });
  // const dispatch = useDispatch();
  return (
    <>
      <MyKurlyHeader />
      <main className="container h-full box-content clear-fix">
        <MyKurlyCategory />
        {!confirm.authState ? (
          <MyInfoBlock confirm={confirm} setConfirm={setConfirm} />
        ) : (
          <MyInfoModify />
        )}
        {confirm.modal ? (
          <Modalform id="modal">
            <Modal
              modal={confirm.modal}
              closeModal={closeModal}
              value="비밀번호를 정확하게 입력해주세요"
            />
          </Modalform>
        ) : (
          ''
        )}
      </main>
    </>
  );

  function closeModal() {
    setConfirm({
      ...confirm,
      modal: false,
    });
  }
};

const MyInfoBlock = ({ confirm, setConfirm }) => {
  const [password, setPassword] = useState('');
  const { u_id, u_password } = useSelector(state => state.login.member);
  return (
    <div className="float-left align-middle w-r-85 h-full mt-20 mb-6 px-12 pb-32 box-border">
      <h1 className="a11y-hidden">개인 정보 수정하기 </h1>
      <div className="pb-10 border-b-2 border-kg-300">
        <h2 className=" inline-block font-medium align-middle mr-6 text-r-2.4">개인 정보 수정</h2>
        <h3 className="mt-10 text-r-1.6 font-medium">비밀번호 재확인</h3>
        <p className="text-r-1.2 text-kg-350">
          회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.
        </p>
      </div>
      <div className="text-center text-r-1.4">
        <form onSubmit={onSubmit}>
          <div className="border-b border-kg-80 py-6 mb-16">
            <label className="block my-4">
              <span className="text-left inline-block w-48 font-medium">아이디</span>
              <input
                className="inline-block text-r-1.4 p-4 px-6 w-p-340 focus:bg-klp-700 border border-kg-80 rounded"
                type="text"
                value={`${u_id}`}
              />
            </label>
            <label className="block my-4 mt-8">
              <span className="text-left inline-block w-48 font-medium">
                비밀번호<span className="text-red-500 font-normal">*</span>
              </span>
              <input
                className="inline-block text-r-1.4 py-4 px-6 w-p-340 focus:bg-klp-700 border border-kg-80 rounded"
                type="password"
                value={`${password}`}
                onChange={onChange}
              />
            </label>
          </div>
          <button className="rounded w-p-230 py-7 bg-kp-600 text-white" type="submit">
            확인
          </button>
        </form>
      </div>
    </div>
  );
  function onChange(e) {
    setPassword(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(password === u_password);
    if (password === u_password) {
      setConfirm({
        ...confirm,
        authState: true,
      });
    } else {
      setConfirm({
        ...confirm,
        modal: true,
      });
    }
  }
};

export default MyInfo;
