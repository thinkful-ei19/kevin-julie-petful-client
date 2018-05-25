import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="row">
          <div className="cats-container">
            <h1>Cats to Adopt</h1>
          </div>

          <div className="dogs-container">
            <h1>Dogs to Adopt</h1>
          </div>
        </div>

      </React.Fragment>
    );
  }
}