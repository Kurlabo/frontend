import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { categoryDatas } from '../../common_style/common';
import GotopBtn from './GotopBtn';
import ItemCardContainer from './ItemCardContainer';
import ItemListHeader from './ItemListHeader';
import PageContainer from './PageContainer';

const ItemListWrapper = () => {
  const { firstParams } = useSelector(state => state.itemList);
  const [datas, setDatas] = useState({ sub: [] });

  useEffect(() => {
    setDatas(categoryDatas.find(data => data.id === firstParams));
  }, [firstParams]);

  // console.log(
  //   categoryDatas.find(data => {
  //     console.log('data.id', data.id);
  //     console.log('firstParams', firstParams);
  //     return data.id === firstParams;
  //   }),
  // );

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
      <ItemCardContainer />
      <PageContainer />
      <GotopBtn />
    </div>
  );
};

export default ItemListWrapper;
