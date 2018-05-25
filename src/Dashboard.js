import React from 'react';
import { connect } from 'react-redux';

import Pet from './components/Pet';
import {fetchCat, adoptCat, fetchDog, adoptDog } from './actions';

export class Dashboard extends React.Component {

  componentDidMount() {
    Promise.all([this.props.dispatch(fetchCat()), this.props.dispatch(fetchDog())]);
  }

  render() {
    return (
      <React.Fragment>
        <Pet
          {...this.props.cats}
          className="col-6 pet-container"
        />

        <Pet
          {...this.props.dogs}
          className="col-6 pet-container"
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