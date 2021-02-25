import styled from 'styled-components';

const NameBox = styled.p`
  display: inline-block;
  max-width: 150px;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const NameBoxLong = styled.p`
  display: inline-block;
  max-width: 190px;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const OrderCheckList = ({ orderList, onSetOrderNumber }) => {
  return (
    <>
      {orderList.map(list => (
        <tr className="text-center text-r-1.3 text-gray-600 h-p-40 border-b border-gray-200 odd:bg-gray-100">
          <td>{list['order-number']}</td>
          <td>{list['order-date']}</td>
          <td>
            <div className="flex px-3">
              {+list.count > 1 ? (
                <>
                  <NameBox>{list['goods-name']}</NameBox>
                  <span>외 {list.count - 1}개</span>
                </>
              ) : (
                <NameBoxLong>{list['goods-name']}</NameBoxLong>
              )}
            </div>
          </td>
          <td>{list.count}개</td>
          <td>{(+list['total-price']).toLocaleString()}원</td>
          <td>
            <input
              id={list['order-number']}
              type="radio"
              name="orderCheck"
              onClick={onSetOrderNumber}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default OrderCheckList;
