import React from 'react';

const RelatedProduct = props => {
  return (
    <div>
      <div className="w-8 h-2 bg-gray-800" />
      <h3 className="uppercase text-13 font-semibold">Related Product</h3>
      <div className="w-1050">
        <svg
          className="w-10 bg-red-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <svg
          className="w-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default RelatedProduct;
