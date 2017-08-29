import React, { Component } from 'react';
import './App.css';

// My components
import Donations from './Donations';
import Kudos from './Kudos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Donations />
        <Kudos />
      </div>
    );
  }
}

export default App;
