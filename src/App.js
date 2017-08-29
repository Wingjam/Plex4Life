import React, { Component } from 'react';
import './App.css';

// My components
import SimplePieChart from './SimplePieChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>
          Donations
          <a href="https://www.paypal.me/plex4life/20">
            <img id="PayPalButton" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" alt="Donate with Paypal" />
          </a>
        </h2>
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
