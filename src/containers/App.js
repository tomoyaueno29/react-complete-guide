import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from  '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  state = {
    persons: [
    {id: 'asfa1', name: 'Max', age: 18},
    {id: 'vasdf1', name: 'Manu', age: 30},
    {id: 'asdf11', name: 'Stephanie', age: 20}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons
    })
  }

  togglePersonHandler = () => {
    console.log('clicked');
    const doesShow = this.state.showPersons
    // console.log(doesShow);
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  } 


  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: '#fff',
      border: 'none',
      padding: '8px',
      cursor: 'pointer',
      outline: 'none',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons  
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            />;
    }


    return (
        <div className="App">
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
          />
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'))
  }
}

Person.defaultProps = {
  age: 10
}

export default App;