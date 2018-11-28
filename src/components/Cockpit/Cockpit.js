import React from 'react';
import styles from './Cockpit.css'
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = styles.Button;

    if(props.persons.length < 2) {
      assignedClasses.push( styles.red )
    }
    if (props.persons.length < 1) {
      assignedClasses.push( styles.bold )
    }
    if (props.showPersons) {
        btnClass = [styles.Button, styles.Red].join(" ");
    }

    return(
        <Aux>
            <h1>This is my first React App</h1>
            <p className={assignedClasses.join(" ")} >This is really working!</p>
            <button 
            className={btnClass}
            onClick={props.togglePersons}>Toggle Persons</button>
        </Aux>      
    );
}

export default cockpit;