import React, { Component } from 'react';
import './App.css';

// My components
import SimplePieChart from './SimplePieChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Donations</h2>
        <SimplePieChart/>
        <h2>Kudos</h2>
        <li>Kudos to everyone who donate!</li>
        <li>Kudos to Jonathan Raymond for hosting and helping in hardware.</li>
        <li>Kudos to Raphaël Cayouette for helping with Plex content.</li>
      </div>
    );
  }
}

export default App;
