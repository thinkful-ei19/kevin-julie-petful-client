import React, { Component } from 'react';

import Pet from './components/Pet'

export default class App extends Component {

  catToAdpot = (data) => {
    console.log('cat to adpot', data)
  }

  dogToAdpot = (data) => {
    console.log('dog to adopt', data)
  }

  onAdoptPet = (data) => {
    console.log('on adopt pet', data)
  }

  render() {
    return (
      <React.Fragment>
        <Pet 
          catToAdopt={this.catToAdopt}
          onAdoptPet={this.onAdpotPet}
          className="col-6 pet-container"
        />

        <Pet
          dogToAdopt={this.dogToAdopt}
          onAdoptPet={this.onAdpotPet} 
          className="col-6 pet-container"
        />

      </React.Fragment>
    );
  }
}