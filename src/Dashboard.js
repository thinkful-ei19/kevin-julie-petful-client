import React, { Component } from 'react';

import Pet from './components/Pet'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Pet 
          catToAdopt={this.catToAdopt}
        />
        <Pet
          dogToAdopt={this.dogToAdopt} 
        />

        <div className="row">
          {/* <div className="col-6"> */}
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
                <button>Adpot</button>
              </main>
            </section>
          {/* </div> */}

          {/* <div className="col-6"> */}
            <section className="dogs-container">
              <h1>Dogs to Adopt</h1>
              <h3>Chewbacca</h3>
              <img src="" alt="put dynamic animal description here" />
              <main>
                <dl>
                  <dt>Sex:</dt>
                  <dd>Male</dd>
                  <dt>Age:</dt>
                  <dd>3 years</dd>
                  <dt>Breed:</dt>
                  <dd>Belgian Sheep Dog</dd>
                  <dt>Story:</dt>
                  <dd>Chewbacca was hit by a car without any identification on him</dd>
                </dl>
                <button>Adpot</button>
              </main>
            </section>
          </div>
        {/* </div> */}


      </React.Fragment>
    );
  }
}