import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const wrapper = 'w-p-1050 mx-auto pt-r-7.4';
const buttonAllStyle =
  'w-r-12 h-r-4.4 text-1.4 text-gray-800 text-center cursor-pointer focus:outline-0 border border-gray-300 rounded-p-3';
const useSavingStyle =
  'text-1.4 font-light w-64 h-r-4.4 border border-gray-300 py-r-1.2 px-r-1.6 focus:outline-0 rounded-p-3  mr-3';

const Coupon = () => {
  return (
    <div className="flex pt-r-7.4">
      <div className="w-full mr-8">
        <h2 className="text-2 font-medium pb-r-1.6 border-b border-gray-800">쿠폰 / 적립금</h2>
        <table>
          <tbody className="text-gray-900 text-left">
            <tr className="border-b border-gray-100">
              <th className="pt-r-1.9 text-1.4 font-medium w-r-19 align-text-top">쿠폰 적용</th>
              <td className="py-8">
                <select
                  name="coupon"
                  id="coupon"
                  className="w-r-56.2 h-r-4.4 focus:outline-0 border border-gray-300 block pl-6 pr-r-5.5 text-1.4 text-gray-300 bg-gray-50 font-light leading-10"
                >
                  <option value="사용 가능 쿠폰0개 / 전체 0개">사용 가능 쿠폰0개/전체0개</option>
                </select>
                <button className="text-kp-600 text-1.2 pt-7 focus:outline-0">
                  쿠폰사용문의(카카오톡)
                  <MdKeyboardArrowRight className="inline-block text-2xl" />
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <th className="pt-r-1.9 text-1.4 font-medium align-text-top">적립금 적용</th>
              <td className="py-8">
                <form>
                  <input type="text" placeholder="0" className={useSavingStyle} />
                  <button className={buttonAllStyle}>모두 사용</button>
                </form>
                <p className="pt-4 text-1.4 text-gray-700">
                  보유 적립금 : <span className="font-bold">839원</span>
                </p>
                <ul className="pt-r-1.6 text-1.2 text-gray-700">
                  <li className="pt-r-0.4">&middot; 보유 적립금 1천원 이상부터 사용가능</li>
                  <li className="pt-r-0.4">&middot; 적립금 내역:마이컬리&gt;적립금</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Coupon;
