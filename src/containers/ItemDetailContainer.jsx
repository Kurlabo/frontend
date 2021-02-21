import React from 'react';
import ItemDetail from '../components/itemDetail/ItemDetail';

// 상품 상세 정보 임시 데이터
const data = {
  no: '63711',
  img: 'https://img-cf.kurly.com/shop/data/goods/1611715742614y0.jpg',
  goods_info_img: 'https://img-cf.kurly.com/shop/data/goodsview/20210127/gv30000154524_1.jpg',
  goods_detail_img: 'https://img-cf.kurly.com/shop/data/goodsview/20210127/gv30000154526_1.jpg',
  name: '[우주] 무산 재래김 25g(10매 내외)',
  short_description: '장흥에서 양식한 유기 김',
  price: '3300',
  long_description:
    '유기산 없이 양식한 우주의 무산 재래김을 만나 보세요. 대부분의 김은 잡조류가 붙는 것을 막기 위해 양식 과정에서 유기산을 뿌리곤 합니다. 하지만 장흥에서는 산을 사용하는 대신 김발을 햇빛에 수시로 노출시켜 잡조류가 붙을 수 없게 했어요. 이처럼, 산을 사용하지 않아 유기 식품으로 인정 받은 재래김을 보내드립니다. 따로 간을 하지 않았으니 취향에 맞춰 소금을 뿌리거나 기름을 발라 구워 드셔 보세요.',
  tags: {
    names: ['Kurly only'],
    types: [
      {
        type: 'default',
        names: ['Kurly only'],
      },
    ],
  },
  sales_status: 'ing',
  is_sales: true,
  is_shown: true,
  sales_unit: 1,
  unit_text: '1봉',
  weight: '25g 내외',
  origin: '',
  contactant: '',
  brand_title: '',
  effective_date_start: '',
  effective_date_end: '',
  expiration_date:
    '출고일 기준, 유통기한 만기 45일 이상 남은 상품을 보내드립니다. (총유통기한 : 90일)',
  not_sales_text: '',
  extended_infos: [],
  today_brix: '',
  guides: [],
  under_specific_quantity: 0,
  is_expected_point: true,
  expected_point: 0,
  expected_point_ratio: 0,
  is_kurly_pass_product: false,
  delivery_method: '',
  delivery_time_types: [0, 1],
  delivery_time_type_text: '샛별배송/택배배송',
  packing_type_text: '상온/종이포장',
  delivery_type: 0,
};

// 연관 상품 목록 임시 데이터
const relatedProducts = [
  {
    no: '26448',
    img: 'https://img-cf.kurly.com/shop/data/goods/1585642854156l0.jpg',
    name: '[씨투게더]땅콩버터 오징어',
    price: '1000',
  },
  {
    no: '26401',
    img: 'https://img-cf.kurly.com/shop/data/goods/1585642854156l0.jpg',
    name: '[씨투게더]땅콩버터 오징어',
    price: '1000',
  },
  {
    no: '26402',
    img: 'https://img-cf.kurly.com/shop/data/goods/1585642854156l0.jpg',
    name: '[씨투게더]땅콩버터 오징어',
    price: '1000',
  },
  {
    no: '26403',
    img: 'https://img-cf.kurly.com/shop/data/goods/1585642854156l0.jpg',
    name: '[씨투게더]땅콩버터 오징어',
    price: '1000',
  },
  {
    no: '26404',
    img: 'https://img-cf.kurly.com/shop/data/goods/1585642854156l0.jpg',
    name: '[씨투게더]땅콩버터 오징어',
    price: '1000',
  },
  {
    no: '26405',
    img: 'https://img-cf.kurly.com/shop/data/goods/1575349219737l0.jpg',
    name: '[씨투게더]명태어포',
    price: '2000',
  },
  {
    no: '26406',
    img: 'https://img-cf.kurly.com/shop/data/goods/1575349219737l0.jpg',
    name: '[씨투게더]명태어포',
    price: '2000',
  },
  {
    no: '26407',
    img: 'https://img-cf.kurly.com/shop/data/goods/1575349219737l0.jpg',
    name: '[씨투게더]명태어포',
    price: '2000',
  },
  {
    no: '26408',
    img: 'https://img-cf.kurly.com/shop/data/goods/1575349219737l0.jpg',
    name: '[씨투게더]명태어포',
    price: '2000',
  },
  {
    no: '26409',
    img: 'https://img-cf.kurly.com/shop/data/goods/1575349219737l0.jpg',
    name: '[씨투게더]명태어포',
    price: '2000',
  },
  {
    no: '26410',
    img: 'https://img-cf.kurly.com/shop/data/goods/1589172960257l0.jpg',
    name: '[바다원]구운 쥐포채 150g',
    price: '3000',
  },
  {
    no: '26411',
    img: 'https://img-cf.kurly.com/shop/data/goods/1589172960257l0.jpg',
    name: '[바다원]구운 쥐포채 150g',
    price: '3000',
  },
  {
    no: '26412',
    img: 'https://img-cf.kurly.com/shop/data/goods/1589172960257l0.jpg',
    name: '[바다원]구운 쥐포채 150g',
    price: '3000',
  },
  {
    no: '26412',
    img: 'https://img-cf.kurly.com/shop/data/goods/1589172960257l0.jpg',
    name: '[바다원]구운 쥐포채 150g',
    price: '3000',
  },
  {
    no: '26413',
    img: 'https://img-cf.kurly.com/shop/data/goods/1589172960257l0.jpg',
    name: '[바다원]구운 쥐포채 150g',
    price: '3000',
  },
  {
    no: '26414',
    img: 'https://img-cf.kurly.com/shop/data/goods/1592532897286l0.jpg',
    name: '[주전부리연구소]국산 내맘속에 핫다리 120g',
    price: '4000',
  },
  {
    no: '26415',
    img: 'https://img-cf.kurly.com/shop/data/goods/1592532897286l0.jpg',
    name: '[주전부리연구소]국산 내맘속에 핫다리 120g',
    price: '4000',
  },
  {
    no: '26416',
    img: 'https://img-cf.kurly.com/shop/data/goods/1592532897286l0.jpg',
    name: '[주전부리연구소]국산 내맘속에 핫다리 120g',
    price: '4000',
  },
  {
    no: '26417',
    img: 'https://img-cf.kurly.com/shop/data/goods/1592532897286l0.jpg',
    name: '[주전부리연구소]국산 내맘속에 핫다리 120g',
    price: '4000',
  },
  {
    no: '26418',
    img: 'https://img-cf.kurly.com/shop/data/goods/1592532897286l0.jpg',
    name: '[주전부리연구소]국산 내맘속에 핫다리 120g',
    price: '4000',
  },
];
const ItemDetailContainer = () => {
  return <ItemDetail data={data} relatedProducts={relatedProducts} />;
};

export default ItemDetailContainer;
