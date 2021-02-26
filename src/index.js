import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
<<<<<<< HEAD
import rootReducer from './modules/index';
=======
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules/index';
>>>>>>> bdce600c385ba0dc0e8fdef795c54389cc39cf2a
import { composeWithDevTools } from 'redux-devtools-extension';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './pages/ErrorPage';
import ReduxThunk from 'redux-thunk';
<<<<<<< HEAD

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
=======
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';

const history = createBrowserHistory();
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), ReduxThunk, sagaMiddleWare)),
);

sagaMiddleWare.run(rootSaga);
>>>>>>> bdce600c385ba0dc0e8fdef795c54389cc39cf2a

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
