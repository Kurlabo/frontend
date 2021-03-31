import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useCookies, withCookies } from 'react-cookie';
import {
  deleteDestinationItem,
  getMyDestination,
  modifyDestination,
} from '../../modules/desination';
import { useState } from 'react';

const MyDestinationModify = ({ location, history }) => {
  const destination = useSelector(state => state.destination);
  const { item: destinationItem } = destination;

  const { reciever, reciever_phone, deliver_address, id } = destinationItem;

  const { dtn_id } = useParams();
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);
  const cookieAuth = cookies.auth;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyDestination(cookieAuth, +dtn_id));
    return () => {
      dispatch(getMyDestination(cookieAuth));
    };
  }, []);

  const [inputs, setInputs] = useState({
    address: '',
    name: '홍인',
    reciever: '',
    reciever_phone: '',
  });
  return (
    <div className="my-10 px-10 text-r-1.4 font-medium text-kg-350">
      <form>
        <h1 className="a11y-hidden">배송지 </h1>
        <div className="pb-6">
          <h2 className=" mr-6 text-r-2.4 mb-6 text-kg-400">배송지 수정</h2>
          <span className="inline-block text-r-1.2 text-kg-350 bg-gray-100 rounded-full px-3 py-2 leading-none">
            기본 배송지
          </span>
          <p className="mt-6 text-r-1.6 ">{destinationItem.deliver_address}</p>
          <input
            type="text"
            defaultValue={destinationItem.deliver_address}
            className="w-full my-3 py-4 font-medium px-8 border-kg-80 border rounded
        "
          />
          <label htmlFor="reciever" className="mt-6 block">
            받으실 분
            <input
              id="reciever"
              type="text"
              defaultValue={inputs.name}
              onChange={onChange}
              className="w-full my-3 py-4 font-medium px-8 border-kg-80 border rounded
        "
            />
          </label>
          <label htmlFor="reciever_phone" className="mt-6 block">
            휴대폰
            <input
              id="reciever_phone"
              type="text"
              defualtValue={reciever_phone}
              className="w-full my-3 py-4 font-medium px-8 border-kg-80 border rounded
        "
            />
          </label>
        </div>
        <button
          type="button"
          className=" border-kp-600 border text-kp-600 w-full py-4 "
          onClick={deleteDestination}
        >
          삭제
        </button>
        <button type="submit" className="bg-kp-600 text-white w-full py-4 " onClick={onClick}>
          저장
        </button>
      </form>
    </div>
  );
  function onClick() {
    dispatch(modifyDestination(cookieAuth, inputs));
    window.opener.document.location.reload();
    window.self.close();
  }

  function onChange(e) {
    setInputs({
      ...inputs,
      name: e.target.value,
    });
    console.log(e.target.value);
  }
  function deleteDestination() {
    dispatch(deleteDestinationItem(id, cookieAuth));
  }
};

export default withCookies(MyDestinationModify);
