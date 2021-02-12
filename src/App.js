import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Modal from './components/login/Modal';
import FindIdPage from './pages/FindIdPage';
import FindPasswordPage from './pages/FindPasswordPage';
import MainContainer from './containers/MainContainer';
import NotFoundPage from './pages/NotFoundPage';
import ItemListPage from './pages/ItemListPage';
import MyDestinationLIstPage from './pages/MyDestinationListPage';
import MyOrderListPage from './pages/MyOrderListPage';
import MyReviewPage from './pages/MyReviewPage';
import MyEmoneyPage from './pages/MyEmoneyPage';
import MyCouponPage from './pages/MyCouponPage';
import MyInfoPage from './pages/MyInfoPage';
import MyWishListPage from './pages/MyWishListPage';

function App() {
  return (
    <Switch>
      <Route path="/shop/account/signin" component={LoginPage} />
      <Route path="/shop/account/find_id" component={FindIdPage} />
      <Route path="/shop/account/find_pwd" component={FindPasswordPage} />
      <Route path="/shop/goods/item_list" component={ItemListPage} />
      <Route path="/shop/account/modal" component={Modal} />
      <Route path="/shop/mypage/mypage_orderlist" component={MyOrderListPage} />
      <Route path="/shop/mypage/destination/list" component={MyDestinationLIstPage} />
      <Route path="/shop/mypage/mypage_wishlist" component={MyWishListPage} />
      <Route path="/shop/mypage/mypage_review" component={MyReviewPage} />
      <Route path="/shop/mypage/mypage_emoney" component={MyEmoneyPage} />
      <Route path="/shop/mypage/mypage_coupon" component={MyCouponPage} />
      <Route path="/shop/mypage/mypage_emoney" component={MyInfoPage} />
      <Route path="/" exact component={MainContainer} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
