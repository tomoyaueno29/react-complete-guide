import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => {
    return props.alt ? 'red' : 'green'
  }};
  font: inherit;
  color: #fff;
  border: none;
  padding: 8px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${props => {
      return props.alt ? 'salmon' : 'lightgreen'
    }};
    color: black;
  }
`

class App extends Component {
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
    const doesShow = this.state.showPersons
    console.log(doesShow);
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
      persons = (
        <div >
          { this.state.persons.map((person, index) => {
            return <Person
                    click={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)}
                   />
          })}
        </div> 
      )

      // style.backgroundColor = 'red';

      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    };

    // let classes = ['blue', 'bold'].join(' ');
    let classes = []
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold')
    } 

    return (
      
        <div className="App">
          <h1>Hi, I'm React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <StyledButton
            alt={this.state.showPersons}
            onClick={this.togglePersonHandler}
          > 
            Toggle Person
          </StyledButton>
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