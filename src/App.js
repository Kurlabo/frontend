import { Route } from 'react-router';
import MainContainer from './container/MainContainer';

function App() {
  return (
    <div>
      <Route path="/" exact component={MainContainer} />
    </div>
  );
}

export default App;
