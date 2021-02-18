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
    content: '샛별배송은 밤 11시 이후 주문건은 다다음날 새벽에 배송됩니다.',
  },
  {
    no: '3',
    category: '취소/교환/반품',
    title: '교환 또는 반품신청 시에 사진을 첨부해야 하나요?',
    content:
      '상품의 하자 등의 사유로 교환 또는 반품을 신청하시는 경우, 1:1 문의 또는 카카오톡 문의에 해당 사항을 확인할 수 있는 사진 첨부를 부탁드립니다. ',
  },
  {
    no: '4',
    category: '배송문의',
    title: '묶음 배송이 가능한가요?',
    content: '컬리에서는 주문번호 별로 포장이 되며 주문번호 별로 배송비가 발생합니다. ',
  },
  {
    no: '5',
    category: '쿠폰/적립금',
    title: '적립금 유효기간은 어떻게 확인하나요?',
    content: '적립금의 유효기간은 마이컬리 페이지의 [나의 적립금]에서 확인하실 수 있습니다.',
  },
  {
    no: '6',
    category: '서비스 이용 및 기타',
    title: '장바구니 상품은 언제까지 보관이 되나요?',
    content: '장바구니 상품은 최대 90일간 저장됩니다.',
  },
  {
    no: '7',
    category: '회원문의',
    title: '회원 탈퇴 후 동일한 연락처로 재가입이 가능한가요?',
    content: '회원탈퇴 후 30일 이내에는 동일한 연락처로 가입이 불가합니다.',
  },
  {
    no: '8',
    category: '주문/결제',
    title: '전화로도 주문할 수 있나요?',
    content: '컬리는 현재 전화주문이 불가합니다.(오프라인 매장 보유X)',
  },
  {
    no: '9',
    category: '취소/교환/반품',
    title: '교환시 별도 배송비가 부과되나요?',
    content: '판매자 과실 등 상품에 문제로 인해 교환시 배송비를 판매자가 부담합니다.',
  },
  {
    no: '10',
    category: '배송문의',
    title: '(샛별배송) 배송시간 및 날짜를 정할 수 있나요?',
    content: '배송시간 및 날짜 지정은 어렵습니다.',
  },
  {
    no: '11',
    category: '쿠폰/적립금',
    title: '적립금은 어떻게 쌓을 수 있나요?',
    content: '적립금은 주문결제, 후기 작성, 이벤트에 참여하고 쌓을 수 있습니다.',
  },
  {
    no: '12',
    category: '서비스 이용 및 기타',
    title: '후기 적립금은 얼마인가요?',
    content: '일반 텍스트 후기는 50원, 사진후기는 100원의 적립금이 지급됩니다.',
  },
];

const FrequentQuestion = () => {
  const [state, setState] = useState({
    selected: '선택',
    isOpen: false,
  });
  const [currPage, setCurrPage] = useState(1);

  const dataOfcategory =
    state.selected === '선택' ? fqData : fqData.filter(data => data.category === state.selected);

  const viewData = dataOfcategory.filter((data, index) => {
    if (index >= currPage * 5 + currPage - 6 && index <= currPage * 5 + currPage - 1) return true;
    return false;
  });

  const pageNum = (dataOfcategory.length || 1) / 6;

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
        {viewData.map(data => (
          <FrequentQuestionList data={data} key={data.no} />
        ))}
      </div>
      <div className="mt-24">
        <Pagination num={pageNum} onClick={selectPage} />
      </div>
      <FrequentQuestionSearch />
    </div>
  );

  function clickCategory(e) {
    setState({
      selected: e.target.firstChild.nodeValue,
      isOpen: state.isOpen,
    });
    setCurrPage(1);
  }

  function clickCategoryTab() {
    setState(state => ({
      selected: state.selected,
      isOpen: !state.isOpen,
    }));
  }

  function selectPage(e) {
    setCurrPage(+e.currentTarget.id);
  }
};

export default FrequentQuestion;
