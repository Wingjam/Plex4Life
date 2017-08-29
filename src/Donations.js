import React, { Component } from 'react';
import './Donations.css';

// My components
import SimplePieChart from './SimplePieChart';

class Donations extends Component {
  render() {
    return (
      <div className="Donations">
        <h2>
          Donations
          <a href="https://www.paypal.me/plex4life/20">
            <img id="PayPalButton" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" alt="Donate with Paypal" />
          </a>
        </h2>
        <SimplePieChart />
      </div>
    );
  }
}

export default Donations;
