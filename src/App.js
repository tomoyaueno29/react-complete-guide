import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
    {name: 'Max', age: 18},
    {name: 'Manu', age: 30},
    {name: 'Stephanie', age: 20}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!!');
    this.setState({
      persons: [
        {name: newName, age: 22},
        {name: 'Manu', age: 30},
        {name: 'Stephanie', age: 20}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 22},
        {name: event.target.value, age: 30},
        {name: 'Stephanie', age: 20}
      ]
    })
  }


  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h1>Hi</h1>
          <p>This is really working!</p>
          <button onClick={() => this.switchNameHandler('Maxmelian')}> Switch Name </button>
          <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
          
          />

          <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}
          />

          <Person 
          name={this.state.persons[2].name}
          click={this.switchNameHandler}
          
          />
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