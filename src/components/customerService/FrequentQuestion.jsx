import React from 'react';
import { useState } from 'react';
import CategoryTab from './CategoryTab';
import Pagination from './common/Pagination';
import FrequentQuestionList from './FrequentQuestionList';
import FrequentQuestionSearch from './FrequentQuestionSearch';

const fqData = [
  {
    no: '1',
    category: '회원문의',
    title: '아이디와 비밀번호가 생각나지 않아요. 어떻게 찾을 수 있나요?',
    content:
      '(PC) 오른쪽 위의 [로그인] > 화면 아래 [아이디 찾기] [비밀번호 찾기]를 통해 확인 가능합니다.',
  },
  {
    no: '2',
    category: '주문/결제',
    title: '(샛별배송) 어제 주문했는데 오늘 아침에 배송이 안 됐어요. 왜 그런가요?',
    content:
      '(PC) 오른쪽 위의 [로그인] > 화면 아래 [아이디 찾기] [비밀번호 찾기]를 통해 확인 가능합니다.',
  },
  {
    no: '3',
    category: '취소/교환/반품',
    title: '교환 또는 반품신청 시에 사진을 첨부해야 하나요?',
    content:
      '(PC) 오른쪽 위의 [로그인] > 화면 아래 [아이디 찾기] [비밀번호 찾기]를 통해 확인 가능합니다.',
  },
  {
    no: '4',
    category: '배송문의',
    title: '묶음 배송이 가능한가요?',
    content:
      '(PC) 오른쪽 위의 [로그인] > 화면 아래 [아이디 찾기] [비밀번호 찾기]를 통해 확인 가능합니다.',
  },
  {
    no: '5',
    category: '쿠폰 적립금',
    title: '적립금 유효기간은 어떻게 확인하나요?',
    content:
      '(PC) 오른쪽 위의 [로그인] > 화면 아래 [아이디 찾기] [비밀번호 찾기]를 통해 확인 가능합니다.',
  },
  {
    no: '6',
    category: '서비스 이용 및 기타',
    title: '내가 주문한 내역은 어떻게 확인하나요?',
    content:
      '(PC) 오른쪽 위의 [로그인] > 화면 아래 [아이디 찾기] [비밀번호 찾기]를 통해 확인 가능합니다.',
  },
];

const FrequentQuestion = () => {
  const [state, setState] = useState({
    selected: '선택',
    isOpen: false,
  });

  console.log('설마 다시?');
  console.log(state.isOpen);

  return (
    <div className="w-r-82">
      <div className="pt-2 pb-r-3.4">
        <h2 className="text-r-24 inline-block text-gray-800 font-medium mt-3 mb-1">
          자주하는 질문
        </h2>
        <span className="text-r-1.4 pl-r-1.1 text-gray-400">
          고객님들께서 가장 자주하시는 질문을 모두 모았습니다.
        </span>
        <CategoryTab
          state={state}
          clickCategory={clickCategory}
          clickCategoryTab={clickCategoryTab}
        />
      </div>
      <div className="border-t-2 border-kp-600">
        <div className="flex pt-8 pb-8 text-r-1.2 text-center justify-between border-b border-gray-600 text-gray-700">
          <span className="w-28">번호</span>
          <span className="w-r-13">카테고리</span>
          <span className="w-r-61.5">제목</span>
        </div>
      </div>
      <div className="flex flex-col pb-8">
        {fqData.map(data => (
          <FrequentQuestionList data={data} />
        ))}
      </div>
      <div className="mt-24">
        <Pagination />
      </div>
      <FrequentQuestionSearch />
    </div>
  );

  function clickCategory(e) {
    setState({
      selected: e.target.firstChild.nodeValue,
      isOpen: state.isOpen,
    });
  }

  function clickCategoryTab() {
    setState(state => ({
      selected: state.selected,
      isOpen: !state.isOpen,
    }));
  }
};

export default FrequentQuestion;
