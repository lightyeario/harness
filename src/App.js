import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to the Stellar Integration Tutorial</h1>
        </header>
        <div className="Body">
          <p>
            Stellar is Open-Source, Distributed Payments Infastructure.
          </p>
          <p>
            It connects people, payment systems, and banks.<br/>
            Integrate with Stellar to move money quickly, reliably, and for a fraction of a penny.
          </p>
        </div>
        <div className="Footer">
          <button className="button Next item">
          &lt;- Previous
          </button>
          <button className="button Previous item">
          Next ->
          </button>
        </div>
      </div>
    );
  }
}

export default App;
