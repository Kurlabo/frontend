import { Route, Switch } from 'react-router-dom';
import GoodsCartContainer from './containers/GoodsCartContainer';
import MainContainer from './containers/MainContainer';
function App() {
  return (
    <Switch>
      <Route path="/" exact component={MainContainer} />
      <Route path="/goods_cart" component={GoodsCartContainer} />
    </Switch>
  );
}

export default App;
