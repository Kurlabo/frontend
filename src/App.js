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
import SearchLocation from './components/common/SearchLocation';
import Footer from './components/common/Footer';
import WeekEvent from './components/weekEvent/WeekEvent';
import CustomerService from './components/customerService/CustomerService';
import NoticeDetail from './components/customerService/NoticeDetail';
import Sidebar from './components/common/Sidebar';
import MyOrderViewPage from './pages/MyOrderViewPage';
import OrderPage from './pages/OrderPage';
import Header from './components/common/Header';
import ItemDetailPage from './pages/ItemDetailPage';
import ItemListPage from './pages/ItemListPage';
import MainPage from './pages/MainPage';
import GoodsCartPage from './pages/GoodsCartPage';
import ThemeProductListPage from './pages/ThemeProductListPage';
import MyReviewRegisterPage from './pages/MyReviewRegisterPage';
import KurlyPassPage from './pages/KurlyPassPage';
import MyDestinationModify from './components/mykurly/MyDestinationModify';
import GetSupportWritingPage from './pages/GetSupportWritingPage';
import PayComplete from './components/order/PayComplete';
function App() {
  return (
    <>
      {window.location.pathname !== '/kakao/destination' ? <Header /> : null}
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/goods_cart" component={GoodsCartPage} />
        <Route path="/shop/mypage/mypage_orderview/:orderNumber" component={MyOrderViewPage} />
        <Route path="/shop/account/modal" component={Modal} />
        <Route path="/shop/account/signin" component={LoginPage} />
        <Route path="/shop/account/signup" component={SignupPage} />
        <Route path="/shop/account/find_id" component={FindIdPage} />
        <Route path="/shop/account/find_pwd" component={FindPasswordPage} />
        <Route path="/shop/goods/theme_list/:theme" component={ThemeProductListPage} />
        <Route path="/shop/goods/goods_view/:productId" component={ItemDetailPage} />
        <Route path="/shop/goods/item_list/:category:page" component={ItemListPage} />
        <Route path="/shop/goods/theme_list/:theme" component={ThemeProductListPage} />
        <Route path="/shop/goods/event" component={WeekEvent} />
        <Route path="/order/paycomplete" component={PayComplete} />
        <Route path="/order" component={OrderPage} />
        <Route path="/shop/mypage/mypage_orderlist" component={MyOrderListPage} />
        <Route path="/shop/customer/board/get_support_writing" component={GetSupportWritingPage} />
        <Route path="/shop/customer/board/:id" component={NoticeDetail} />
        <Route path="/shop/customer/board" component={CustomerService} />
        <Route path="/shop/mypage/destination/list" component={MyDestinationLIstPage} />
        <Route path="/shop/mypage/mypage_wishlist:page" component={MyWishListPage} />
        <Route path="/shop/mypage/mypage_wishlist" component={MyWishListPage} />
        <Route path="/shop/mypage/mypage_review/register" component={MyReviewRegisterPage} />
        <Route path="/shop/mypage/mypage_review" component={MyReviewPage} />
        <Route path="/shop/mypage/mypage_review#tabid" component={MyReviewPage} />
        <Route path="/shop/mypage/mypage_emoney" component={MyEmoneyPage} />
        <Route path="/shop/mypage/mypage_coupon" component={MyCouponPage} />
        <Route path="/shop/member/myinfo" component={MyInfoPage} />
        <Route path="/shop/mypage/kurlypass" component={KurlyPassPage} />
        <Route path="/shop/mypage/desination/modify_form?:dtn_id" component={MyDestinationModify} />
        <Route path="/shop/mypage/desination/modify_form" component={MyDestinationModify} />
        <Route path="/shop/member/" component={MyInfoPage} />
        <Route path="/kakao/destination" component={SearchLocation} />
        <Route component={NotFoundPage} />
      </Switch>
      {window.location.pathname !== '/kakao/destination' ? <Sidebar /> : null}
      {window.location.pathname !== '/kakao/destination' ? <Footer /> : null}
    </>
  );
}
export default App;
