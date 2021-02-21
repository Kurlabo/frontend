import React, { useState, useEffect } from 'react';
import RelatedProduct from './detail/RelatedProduct';
import PurchaseInfo from './detail/PurchaseInfo';
import GoodsInfo from './detail/GoodsInfo';
import GotopBtn from './detail/GotopBtn';
import CartOption from './detail/CartOption';
import { useCallback } from 'react';

const ItemDetail = ({ itemDetail, loading, error }) => {
  const [viewCartOption, setviewCartOption] = useState(false);

  const cartOptionRender = useCallback(() => {
    if (window.pageYOffset > 1500) {
      setviewCartOption(true);
    } else {
      setviewCartOption(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', cartOptionRender);
    return () => {
      window.removeEventListener('scroll', cartOptionRender);
    };
  }, [cartOptionRender]);

  return (
    <div>
      <main className="w-p-1050 pt-8 mx-auto my-0 text-gray-800">
        <PurchaseInfo itemDetail={itemDetail} />
        {/* <RelatedProduct relatedProducts={itemDetail['related_product']} /> */}
        <GoodsInfo itemDetail={itemDetail} />
        <GotopBtn />
      </main>
      {viewCartOption && <CartOption name={itemDetail.name} price={+itemDetail.original_price} />}
    </div>
  );
};
export default React.memo(ItemDetail);
