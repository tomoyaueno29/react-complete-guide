import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h1>Hi</h1>
          <p>This is really working!</p>
          <Person name="Max" age="18" />
          <Person name="Manu" age="30"></Person>
          <Person name="Stephanie" />
        </div>
      </React.Fragment>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'))
  }
}

Person.defaultProps = {
  age: 10
}

export default App;