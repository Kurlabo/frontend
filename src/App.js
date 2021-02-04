import { Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
function App() {
  return <Route path="/" exact component={MainContainer} />;
}

export default App;
