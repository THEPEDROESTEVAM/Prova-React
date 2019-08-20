import React, { Component } from 'react';

import './style.css';

class Hearder extends Component
{
  render()
  {
    return(
        <div className="row">
          <div className="col-md-6" id="Hearder">
            <h2>Noticias</h2>
          </div>
          <div className="col-md-6" id="Hearder">
            <a href="/Brasil">Brasil</a>
            <a href="/Esporte">Esporte</a>
            <a href="/Politica">Politica</a>
            <a href="/Economia">Economia</a>
          </div>
        </div>
    );
  }
}

export default Hearder;
