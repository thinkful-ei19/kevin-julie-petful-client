import React from 'react';
import { connect } from 'react-redux';

import Pet from './components/Pet'

export class Dashboard extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <React.Fragment>
        <Pet 
          className="col-6 pet-container"
        />

        <Pet
          className="col-6 pet-container"
        />

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  warning: state.auth.warning,
  cats: state.post.catReducers,
  dogs: state.post.dogReducers
});

export default connect(mapStateToProps)(Dashboard);