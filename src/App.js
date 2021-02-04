import ItemList from './components/itemList/ItemList';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import FindIdPage from './pages/FindIdPage';
import FindPasswordPage from './pages/FindPasswordPage';
import MainContainer from './container/MainContainer';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Switch>
      <Route path="/shop/account/signin" component={LoginPage} />
      <Route path="/shop/account/find_id" component={FindIdPage} />
      <Route path="/shop/account/find_pwd" component={FindPasswordPage} />
      <Route path="/shop/goods/item_list" component={ItemList} />
      <Route path="/" exact component={MainContainer} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
