import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { categoryDatas } from '../../common_style/common';
import GotopBtn from './GotopBtn';
import ItemCardContainer from './ItemCardContainer';
import ItemListHeader from './ItemListHeader';

const ItemListWrapper = () => {
  const { firstParams } = useSelector(state => state.itemList);
  const [datas, setDatas] = useState({ sub: [] });

  useEffect(() => {
    setDatas(categoryDatas.find(data => data.id === firstParams));
  }, [firstParams]);

  return (
    <div className="pb-12 flex flex-col justify-items-center items-center">
      <ItemListHeader
        id={datas.id}
        imgUrl={datas.activeImg}
        desc={datas.text}
        key={datas.id}
        text={datas.text}
        subdatas={datas.sub}
      />
      <ItemCardContainer firstParams={firstParams} />
      <GotopBtn />
    </div>
  );
};

export default ItemListWrapper;
