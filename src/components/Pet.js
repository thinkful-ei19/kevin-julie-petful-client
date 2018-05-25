import React, { Component } from 'react';

export default class Pet extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="cats-container">
          <h3>{this.props.name}</h3>
          <img className="pet-image" src={this.props.imageURL} alt={this.props.imageDescription} />
          <main>
            <dl>
              <dt>Sex:</dt>
              <dd>{this.props.sex}</dd>
              <dt>Age:</dt>
              <dd>{this.props.age}</dd>
              <dt>Breed:</dt>
              <dd>{this.props.breed}</dd>
              <dt>Story:</dt>
              <dd>{this.props.story}</dd>
            </dl>
            <button onClick={this.props.onAdoptPet}>Adopt</button>
          </main>
        </section>
      </React.Fragment>
    );
  }
}