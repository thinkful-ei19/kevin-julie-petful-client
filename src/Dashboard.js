import React from 'react';
import { connect } from 'react-redux';

import Pet from './components/Pet';
import {fetchCat, adoptCat, fetchDog, adoptDog } from './actions';

export class Dashboard extends React.Component {

  componentDidMount() {
    Promise.all([this.props.dispatch(fetchCat()), this.props.dispatch(fetchDog())]);
  }

  onAdoptPet = (data) => {
    if(data === 'cat') {
       this.props.dispatch(adoptCat())

    }
    else if (data === 'dog') {
    this.props.dispatch(adoptDog())
    }
  }

  render() {
    return (
      <React.Fragment>
        <Pet
          {...this.props.cats}
          className="col-6 pet-container"
          adopt="cat"
          onAdoptPet={this.onAdoptPet}
        />

        <Pet
          {...this.props.dogs}
          className="col-6 pet-container"
          adopt="dog"
          onAdoptPet={this.onAdoptPet}
        />

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cats: state.cat.pets,
  dogs: state.dog.pets
});

export default connect(mapStateToProps)(Dashboard);