import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducers/cheese';
import {Provider} from 'react-redux';

const store =  createStore(
  reducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
<Provider store={store}>
  <CheeseList />
</Provider>, document.getElementById('root'));
registerServiceWorker();
