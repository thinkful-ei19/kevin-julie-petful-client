import React, { Component } from 'react';

import './App.css';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Petful</h1>
          <p className="App-intro">
            Pet adoption service
          </p>
        </header>

        <Dashboard />

      </div>
    );
  }
}

export default App;
