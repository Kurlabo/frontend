import QnAContent from './QnAContent';

const posts = [
  {
    no: '1',
    title: '재입고 언제 되나요.',
    content: '상품이 언제쯤 재입고 되나요?',
    writer: '백나라',
    date: '2020-01-02',
  },
];

const ProductQnAList = () => {
  return (
    <div className="border-b border-t border-kp-600 mt-8 mb-8">
      <div className="flex pt-10 pb-9 text-r-1.2 text-center justify-between border-b border-gray-300">
        <span className="w-28">번호</span>
        <span className="w-p-560">제목</span>
        <span className="w-p-88">작성자</span>
        <span className="w-40">작성일</span>
      </div>
      {posts.map(post => (
        <QnAContent key={post.no} post={post} />
      ))}
    </div>
  );
};

export default ProductQnAList;
