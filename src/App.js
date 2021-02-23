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
import MainContainer from './containers/MainContainer';
import NotFoundPage from './pages/NotFoundPage';
import SearchLocation from './components/common/SearchLocation';
import CustomerService from './components/customerService/CustomerService';
import NoticeDetail from './components/customerService/NoticeDetail';
import Footer from './components/common/Footer';
import WeekEvent from './components/weekEvent/WeekEvent';
import Aside from './components/aside/Aside';
import MyOrderViewPage from './pages/MyOrderViewPage';
import OrderPage from './pages/OrderPage';
import TypeUserInfo from './components/order/TypeUserInfo';
import Header from './components/common/Header';
import ItemDetailPage from './pages/ItemDetailPage';
import ItemListPage from './pages/ItemListPage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/shop/account/signin" component={LoginPage} />
        <Route path="/shop/account/signup" component={SignupPage} />
        <Route path="/shop/account/find_id" component={FindIdPage} />
        <Route path="/shop/account/find_pwd" component={FindPasswordPage} />

        <Route path="/shop/goods/goods_view" component={ItemDetailPage} />
        <Route path="/shop/goods/item_list/:category" component={ItemListPage} />
        <Route path="/shop/goods/event" component={WeekEvent} />

        <Route path="/order/input_reception" exact component={TypeUserInfo} />
        <Route path="/order" component={OrderPage} />

        <Route path="/shop/account/modal" component={Modal} />
        <Route path="/shop/mypage/mypage_orderlist" component={MyOrderListPage} />
        <Route
          path="/shop/mypage/mypage_orderview/ordno=:orderNumber"
          component={MyOrderViewPage}
        />
        <Route path="/shop/customer/board" component={CustomerService} />
        <Route path="/shop/customer/board/detail" component={NoticeDetail} />
        <Route path="/shop/mypage/destination/list" component={MyDestinationLIstPage} />
        <Route path="/shop/mypage/mypage_wishlist" component={MyWishListPage} />
        <Route path="/shop/mypage/mypage_review" component={MyReviewPage} />
        <Route path="/shop/mypage/mypage_review#tabid" component={MyReviewPage} />
        <Route path="/shop/mypage/mypage_emoney" component={MyEmoneyPage} />
        <Route path="/shop/mypage/mypage_coupon" component={MyCouponPage} />
        <Route path="/shop/member/myinfo" component={MyInfoPage} />
        <Route path="/shop/member/" component={MyInfoPage} />
        <Route path="/kakao/destination" component={SearchLocation} />
        <Route path="/" exact component={MainContainer} />
        <Route component={NotFoundPage} />
      </Switch>
      <Aside />
      <Footer />
    </>
  );
}

export default App;
