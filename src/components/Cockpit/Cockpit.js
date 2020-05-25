import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

  const classes = []
  let btnClass = '';
  if(props.showPersons){
    btnClass = classes.Red;
  }

  if(props.persons.length <= 2){
    classes.push('red');
  }
  if(props.persons.length <= 1){
    classes.push('bold')
  } 
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm React App</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button
        alt={props.showPersons}
        onClick={props.clicked}
      > 
        Toggle Person</button>
    </div>
  );
}

export default cockpit;