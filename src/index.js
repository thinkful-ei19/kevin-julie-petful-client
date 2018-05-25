import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './store';
import Dashboard from './Dashboard';
import Header from './components/Header'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker();
