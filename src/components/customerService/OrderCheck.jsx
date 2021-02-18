import OrderCheckList from './OrderCheckList';

const orderList = [
  {
    'order-number': '1001',
    'order-date': '2020-12-13',
    'goods-name': '[우주] 프리미엄 손질 생새우살 200g(냉동)',
    count: '3',
    'total-price': '45600',
  },
  {
    'order-number': '1002',
    'order-date': '2020-12-11',
    'goods-name': '[단양] 흑마늘 닭강정 200g(냉동)',
    count: 1,
    'total-price': '13300',
  },
  {
    'order-number': '1003',
    'order-date': '2020-11-12',
    'goods-name': '부드럽고 담백한 스테이크 조리 밀키트',
    count: 3,
    'total-price': '45600',
  },
  {
    'order-number': '1004',
    'order-date': '2020-10-11',
    'goods-name': '[단양] 알싸한 마늘치킨 200g(냉동)',
    count: 1,
    'total-price': '13300',
  },
];

const OrderCheck = ({ checkClicked, setClickedFalse, onSetOrderNumber }) => {
  return (
    <div
      className={
        'absolute bg-white w-r-60 h-p-400 border border-black p-4 mt-2' +
        (checkClicked || ' hidden')
      }
    >
      <p className="my-4 ml-r-0.1 text-r-1.2 text-gray-600">문의하실 주문번호를 선택하세요.</p>
      <table width="100%">
        <tbody>
          <tr className="bg-gray-400 text-white">
            <th className="w-r-10.3">주문번호</th>
            <th className="w-r-6.5">주문일자</th>
            <th className="w-r-19.4">상품명</th>
            <th className="w-p-54">수량</th>
            <th className="w-32">주문금액</th>
            <th className="w-r-3.6">선택</th>
          </tr>
          <OrderCheckList orderList={orderList} onSetOrderNumber={onSetOrderNumber} />
        </tbody>
      </table>
      <div
        onClick={setClickedFalse}
        className="uppercase text-r-1 text-black py-2 px-4 absolute bottom-0 right-0 cursor-pointer"
      >
        close
        <svg
          className="w-r-1.3 inline-block ml-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default OrderCheck;
