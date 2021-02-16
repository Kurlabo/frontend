import { useRef } from 'react';
import { useState } from 'react';
import MyModal from './common/MyModal';
import OrderCheck from './OrderCheck';

const userInfo = {
  email: 'nara@gmail.com',
  phone: '010-2323-7878',
};

const GetSupportWriting = ({ setPage }) => {
  const [checkClicked, setCheckClicked] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const select = useRef(null);
  const title = useRef(null);
  const textarea = useRef(null);

  return (
    <>
      <form className="border-t-2 border-kp-600">
        <table width="100%">
          <tbody className="text-r-1.2 text-gray-700">
            <tr className="h-40 border-b border-gray-100">
              <th className=" font-normal py-6 pl-8 text-left w-44 bg-purple-50">제목</th>
              <td className="py-6 pl-4">
                <select
                  ref={select}
                  required
                  name="category"
                  id="category"
                  className="w-r-13 h-r-3.4 border border-gray-300 mb-2 py-2 px-2 focus:outline-0"
                >
                  <option value="">선택해주세요.</option>
                  <option value="0">배송지연/불만</option>
                  <option value="1">반품문의</option>
                  <option value="2">A/S문의</option>
                  <option value="3">환불문의</option>
                  <option value="4">주문결제문의</option>
                  <option value="5">회원정보문의</option>
                  <option value="6">취소문의</option>
                  <option value="7">교환문의</option>
                  <option value="8">상품정보문의</option>
                  <option value="9">기타문의</option>
                </select>
                <input
                  required
                  ref={title}
                  type="text"
                  className="block w-full h-12 px-2 border border-gray-300 focus:outline-0 focus:border-kdp-300"
                />
              </td>
            </tr>
            <tr className=" h-24 border-b border-gray-100">
              <th className="font-normal py-6 pl-8 text-left w-44 bg-purple-50">주문번호</th>
              <td className="py-6 pl-4">
                <input
                  readOnly
                  type="text"
                  value={orderNumber}
                  className="w-r-17.5 h-12 px-1 text-gray-500 border border-gray-300 focus:outline-0 "
                />
                <div
                  onClick={setClickedTrue}
                  className="inline-block w-40 h-12 text-center pt-2 ml-2 text-r-1.3 bg-klp-400 text-white hover:bg-klp-600 cursor-pointer"
                >
                  주문조회
                </div>
                <OrderCheck
                  checkClicked={checkClicked}
                  setClickedFalse={setClickedFalse}
                  onSetOrderNumber={onSetOrderNumber}
                />
              </td>
            </tr>
            <tr className=" h-24 border-b border-gray-100">
              <th className="font-normal py-6 pl-8 text-left w-44 bg-purple-50">이메일</th>
              <td className="py-6 pl-4">
                <input
                  type="text"
                  className="w-r-17.5 h-12 px-1 border border-gray-300 focus:outline-0 text-gray-500"
                  value={userInfo.email}
                  readOnly
                />
              </td>
            </tr>
            <tr className=" h-24 border-b border-gray-100">
              <th className="font-normal py-6 pl-8 text-left w-44 bg-purple-50">문자메시지</th>
              <td className="py-6 pl-4">
                <input
                  type="text"
                  className="w-r-17.5 h-12 px-1 border border-gray-300 focus:outline-0 text-gray-500"
                  value={userInfo.phone}
                  readOnly
                />
              </td>
            </tr>
            <tr className=" h-24 border-b border-gray-100">
              <th className="font-normal py-6 pl-8 text-left w-44 bg-purple-50">내용</th>
              <td className="py-6 pl-4">
                <strong className="font-medium py-4">1:1 문의 작성 전 확인해주세요!</strong>
                <p className="py-4">
                  현재 문의량이 많아 답변이 지연되고 있습니다. 문의 남겨 주시면 2일 이내 순차적으로
                  답변 드리겠습니다.
                </p>
                <dl className="py-4">
                  <dt className="font-medium">반품 / 환불</dt>
                  <dd>
                    - 제품 하자 혹은 이상으로 반품 (환불)이 필요한 경우 사진과 함께 구체적인 내용을
                    남겨주세요.
                  </dd>
                </dl>
                <dl className="py-4">
                  <dt className="font-medium">주문취소</dt>
                  <dd>
                    <span className="block">- 배송 단계별로 주문취소 방법이 상이합니다.</span>
                    <span className="block pl-4">
                      {'[입금확인] 단계 : [마이컬리 > 주문내역 상세페이지] 에서 직접 취소 가능'}
                    </span>
                    <span className="block pl-4">[입금확인] 이후 단계 : 고객행복센터로 문의</span>
                    <span className="block mt-8">
                      - 생산이 시작된 [상품 준비중] 이후에는 취소가 제한되는 점 고객님의 양해
                      부탁드립니다.
                    </span>
                    <span className="block">
                      {
                        '- 비회원은 모바일 App 또는 모바일 웹사이트에서 [마이컬리 > 비회원 주문 조회 페이지] 에서 취소가 가능합니다.'
                      }
                    </span>
                    <span className="block">
                      - 일부 예약상품은 배송 3~4일 전에만 취소 가능합니다.
                    </span>
                    <span className="block">
                      - 주문상품의 부분 취소는 불가능합니다. 전체 주문 취소 후 재구매 해주세요.
                    </span>
                  </dd>
                </dl>
                <dl className="py-4">
                  <dt className="font-medium">배송</dt>
                  <dd>
                    <span className="block">
                      - 주문 완료 후 배송 방법(샛별 / 택배)은 변경이 불가능합니다.
                    </span>
                    <span className="block">
                      - 배송일 및 배송시간 지정은 불가능합니다. (예약배송 포함)
                    </span>
                  </dd>
                </dl>
                <p className="text-klp-600 mb-9">
                  ※ 전화번호, 이메일, 주소, 계좌번호 등의 상세 개인정보가 문의 내용에 저장되지
                  않도록 주의해 주시기 바랍니다.
                </p>
                <textarea
                  ref={textarea}
                  required
                  className="border border-gray-300 focus:outline-0 w-full h-r-45 p-2 focus:border-kdp-300"
                  name="contents"
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={onClick}
          type="submit"
          className=" w-r-10.3 h-16 my-6 float-right text-r-1.3 text-center bg-klp-400 text-white hover:bg-klp-600 cursor-pointer"
        >
          저장
        </button>
      </form>
      <MyModal openModal={openModal} closeModal={closeModal}>
        정상적으로 등록되었습니다.
        <br />
        상담문의가 급증할 경우, 답변처리가 다소 지연 될 수 있음을 양해 바랍니다.
      </MyModal>
    </>
  );

  function closeModal() {
    setOpenModal(false);
    // 작성한 문의글 post 하고 다시 1:1문의로!!!!!!!!!!!!!!
    // 문의글 Post하는 로직
    setPage(false);
  }

  function setClickedTrue() {
    setCheckClicked(true);
  }
  function setClickedFalse() {
    setCheckClicked(false);
  }

  function onSetOrderNumber(e) {
    setOrderNumber(e.target.id);
  }

  function onClick(e) {
    if (!(select.current.value && title.current.value && textarea.current.value)) return;
    e.preventDefault();
    setOpenModal(true);
  }
};

export default GetSupportWriting;
