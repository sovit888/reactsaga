import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from "./store/reducer"
import {createStore,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import createSagaMiddleware from "redux-saga"
import rootsaga from './store/saga';

const sagaMiddleware=createSagaMiddleware()
const store=createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootsaga)

ReactDOM.render(
  <Provider store={store}>
 <App/>
  </Provider>,
  document.getElementById('root')
);
