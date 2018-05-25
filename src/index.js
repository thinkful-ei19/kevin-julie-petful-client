import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Dashboard from './Dashboard';
import Header from './components/Header'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div className="App">
    <Header />
    <Dashboard />
  </div>,
  document.getElementById('root'))
registerServiceWorker();
