import React from 'react';

const EntrancePwd = ({ title }) => {
  return (
    <div>
      <fieldset id="entrance">
        <legend>
          {title}
          <span className="text-formStar">*</span>
        </legend>

        <input type="radio" id="enterPwd" name="entrance" />
        <label htmlFor="enterPwd">공동현관 비밀번호</label>
        <input type="text" placeholder="예:#1234*" />
        <p>특수문자를 포함한 정확한 비밀번호를 입력해 주세요.</p>

        <input type="radio" id="enterFree" name="entrance" />
        <label htmlFor="">자유 출입 가능</label>

        <input type="radio" id="others" name="entrance" />
        <label htmlFor="others">기타</label>
        <textarea
          name="others"
          id="others"
          cols="30"
          rows="10"
          placeholder="예: 연락처로 전화, 경비실로 호출 (배송 시간은 별도로 ㅣ지정할 수 없습니다)"
        ></textarea>
      </fieldset>
      <div>
        <p>확인해주세요!</p>
        <p>
          &middot;비밀번호가 정확하지 않을 경우, 부득이하게 1층 공동현관 앞 또는 경비실 앞에 배송될
          수 있습니다.
        </p>
        <p>
          &middot;자유출입이 불가능한 경우, 부득이하게 1층 공동현관 앞 또는 경비실 앞에 배송될 수
          있습니다.
        </p>
        <p>
          &middot;요청하신 방법으로 출입이 어려운 경우, 부득이하게 1층 공동현관 앞 또는 경비실 앞에
          배송될 수 있습니다.
        </p>
        <p>
          &middot;배송 받으실 시간은 별도로 지정하실 수 없으며, 밤 11시까지 주문 시 오전 7시까지
          배송이 완료됩니다.
        </p>
      </div>
    </div>
  );
};

export default EntrancePwd;
