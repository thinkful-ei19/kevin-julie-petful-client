import React, { Component } from 'react';

export default class Pet extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="cats-container">
          <h1>Cats to Adopt</h1>
          <h3>Tiberius</h3>
          <img src="" alt="put dynamic animal description here" />
          <main>
            <dl>
              <dt>Sex:</dt>
              <dd>Male</dd>
              <dt>Age:</dt>
              <dd>1 years</dd>
              <dt>Breed:</dt>
              <dd>Tabby</dd>
              <dt>Story:</dt>
              <dd>Owner moved to another country</dd>
            </dl>
            <button onClick={this.props.onAdoptPet}>Adpot</button>
          </main>
        </section>
      </React.Fragment>
    );
  }
}