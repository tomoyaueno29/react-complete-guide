import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h1>Hi</h1>
        </div>
        <div className="App">
          <p>This is really working!</p>
        </div>
      </React.Fragment>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'))
  }
}

export default App;