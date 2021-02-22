import React, { useState, useEffect } from 'react';
import RelatedProduct from './detail/RelatedProduct';
import PurchaseInfo from './detail/PurchaseInfo';
import GoodsInfo from './detail/GoodsInfo';
import GotopBtn from './detail/GotopBtn';
import CartOption from './detail/CartOption';
import { useCallback } from 'react';

const ItemDetail = ({ data, relatedProducts }) => {
  const [viewCartOption, setviewCartOption] = useState(false);

  const cartOptionRender = useCallback(() => {
    if (window.pageYOffset > 1000) {
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
        <PurchaseInfo
          img={data.img}
          name={data.name}
          desc={data.short_description}
          price={+data.price}
          ea={data.unit_text}
          weight={data.weight}
          deliveryType={data.delivery_time_type_text}
          packingType={data.packing_type_text}
          expirationDate={data.expiration_date}
        />
        <RelatedProduct relatedProducts={relatedProducts} />
        <GoodsInfo
          img={data.goods_info_img}
          name={data.name}
          desc={data.short_description}
          long_desc={data.long_description}
          goods_detail_img={data.goods_detail_img}
        />
        <GotopBtn />
      </main>
      {viewCartOption && <CartOption name={data.name} price={+data.price} />}
    </div>
  );
};
export default React.memo(ItemDetail);
