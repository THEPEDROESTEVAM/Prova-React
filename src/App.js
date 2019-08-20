import React, { Component } from 'react';

import Hearder from './components/Hearder';
import Search from './components/Search';

import './style.css';

class App extends Component
{


  render()
  {
    return(
      <div className="App" id="box">
        <Hearder />
        <Search />
      </div>
    );
  }
}

export default App;
