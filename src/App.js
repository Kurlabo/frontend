import { Route } from 'react-router-dom';
import MainContainer from './container/MainContainer';
function App() {
  return <Route path="/" exact component={MainContainer} />;
}

export default App;
