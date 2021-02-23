import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import FindIdPage from './pages/FindIdPage';
import FindPasswordPage from './pages/FindPasswordPage';
import MyDestinationLIstPage from './pages/MyDestinationListPage';
import MyOrderListPage from './pages/MyOrderListPage';
import MyReviewPage from './pages/MyReviewPage';
import MyEmoneyPage from './pages/MyEmoneyPage';
import MyCouponPage from './pages/MyCouponPage';
import MyInfoPage from './pages/MyInfoPage';
import MyWishListPage from './pages/MyWishListPage';
import SignupPage from './pages/SignupPage';
import Modal from './components/login/Modal';
import NotFoundPage from './pages/NotFoundPage';
import ItemListPage from './pages/ItemListPage';
import ItemDetail from './components/itemDetail/ItemDetail';
import SearchLocation from './components/common/SearchLocation';
import OrderPage from './pages/OrderPage';
import PayCompletePage from './pages/PayCompletePage';
import TypeUserInfo from './components/order/TypeUserInfo';
import MainPage from './pages/MainPage';
import GoodsCartPage from './pages/GoodsCartPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/goods_cart" component={GoodsCartPage} />
      <Route path="/shop/account/signin" component={LoginPage} />
      <Route path="/shop/account/signup" component={SignupPage} />
      <Route path="/shop/account/find_id" component={FindIdPage} />
      <Route path="/shop/account/find_pwd" component={FindPasswordPage} />
      <Route path="/shop/goods/item_list/detail" component={ItemDetail} />
      <Route path="/shop/goods/item_list" component={ItemListPage} />
      <Route path="/order/input_reception" exact component={TypeUserInfo} />
      <Route path="/order" component={OrderPage} />
      <Route path="/pay_complete" component={PayCompletePage} />
      <Route path="/shop/account/modal" component={Modal} />
      <Route path="/shop/mypage/mypage_orderlist" component={MyOrderListPage} />
      <Route path="/shop/mypage/destination/list" component={MyDestinationLIstPage} />
      <Route path="/shop/mypage/mypage_wishlist" component={MyWishListPage} />
      <Route path="/shop/mypage/mypage_review" component={MyReviewPage} />
      <Route path="/shop/mypage/mypage_emoney" component={MyEmoneyPage} />
      <Route path="/shop/mypage/mypage_coupon" component={MyCouponPage} />
      <Route path="/shop/member/myinfo" component={MyInfoPage} />
      <Route path="/kakao/destination" component={SearchLocation} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
