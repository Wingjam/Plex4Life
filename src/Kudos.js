import React, { Component } from 'react';

class Kudos extends Component {
  render() {
    return (
      <div className="Kudos">
        <h2>Kudos</h2>
        <ul>
          <li>Kudos to <b>everyone</b> who donate!</li>
          <li>Kudos to <b>Francis Gagnon</b> for helping hosting and playing badly at NHL.</li>
          <li>Kudos to <b>Jonathan Raymond</b> for hosting and helping in hardware.</li>
          <li>Kudos to <b>Raphaël Cayouette</b> for helping with Plex admin and content.</li>
        </ul>
      </div>
    );
  }
}

export default Kudos;
