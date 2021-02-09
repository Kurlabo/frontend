import React from 'react';

const Coupon = () => {
  return (
    <div>
      <h2>쿠폰 / 적립금</h2>
      <table>
        <tbody>
          <tr>
            <th>쿠폰 적용</th>
            <td>
              <select name="coupon" id="coupon">
                <option value="사용 가능 쿠폰0개 / 전체 0개">안녕하세요</option>
              </select>
              <button>쿠폰사용문의(카카오톡)&gt;</button>
            </td>
          </tr>
          <tr>
            <th>적립금 사용</th>
            <td>
              <form>
                <input type="text" placeholder="0" />
                <button>모두 사용</button>
              </form>
              <p>보유 적립금 : 839원</p>
              <ul>
                <li>보유 적립금 1천원 이상부터 사용가능</li>
                <li>적립금 내역:마이컬리&gt;적립금</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Coupon;
