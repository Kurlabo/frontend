import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import FindIdPage from './pages/FindIdPage';
import FindPasswordPage from './pages/FindPasswordPage';
import SignupPage from './pages/SignupPage';
import MainContainer from './containers/MainContainer';
import NotFoundPage from './pages/NotFoundPage';
import ItemListPage from './pages/ItemListPage';
import ItemDetail from './components/itemDetail/ItemDetail';
import SearchLocation from './components/common/SearchLocation';
import CustomerService from './components/customerService/CustomerService';

function App() {
  return (
    <Switch>
      <Route path="/shop/account/signin" component={LoginPage} />
      <Route path="/shop/account/signup" component={SignupPage} />
      <Route path="/shop/account/find_id" component={FindIdPage} />
      <Route path="/shop/account/find_pwd" component={FindPasswordPage} />
      <Route path="/shop/customer/board" component={CustomerService} />
      <Route path="/shop/goods/item_list/detail" component={ItemDetail} />
      <Route path="/shop/goods/item_list" component={ItemListPage} />
      <Route path="/kakao/destination" component={SearchLocation} />
      <Route path="/" exact component={MainContainer} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
