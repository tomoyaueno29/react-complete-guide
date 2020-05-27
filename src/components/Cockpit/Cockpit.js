import React, { useEffect, useReducer } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
  useEffect(() => {

    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('Saved data to cloud!')
    }, 1000);
    return 
  }, []);
  // [] execute it only first time
  // just need componentDidMout.

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
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button
        // alt={props.showPersons}
        onClick={props.clicked}
      > 
        Toggle Person</button>
    </div>
  );
}

export default cockpit;