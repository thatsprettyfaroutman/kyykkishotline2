import './App.css';

import React, { Component } from 'react';

import KyykkisHeader from './KyykkisHeader'
import KyykkisButtons from './KyykkisButtons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <KyykkisHeader />
        <KyykkisButtons />
      </div>
    );
  }
}

export default App;
