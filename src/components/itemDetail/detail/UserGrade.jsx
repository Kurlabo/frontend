import React from 'react';

const userGrade = ['일반', '프렌즈', '화이트', '라벤더', '퍼플', '더퍼플'];

const UserGrade = ({ user_grade }) => {
  return (
    <div
      className={
        'text-r-1 inline-block absolute right-28 w-16 rounded-xl pb-1 px-r-0.4 text-white bg-kp-' +
        100 * +user_grade
      }
    >
      {userGrade[+user_grade]}
    </div>
  );
};

export default React.memo(UserGrade);
