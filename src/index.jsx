import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Style
import './index.scss';

// Components
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './redux/reducers/rootReducer'; 
import thunk from 'redux-thunk';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
));

const app = (
  <Provider store={store}> <App /> </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);


serviceWorker.unregister();
