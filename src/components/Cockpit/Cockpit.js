import React from 'react';
import styles from './Cockpit.css'

const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = '';

    if(props.persons.length < 2) {
      assignedClasses.push( styles.red )
    }
    if (props.persons.length < 1) {
      assignedClasses.push( styles.bold )
    }
    if (props.showPersons) {
        btnClass = styles.Red;
    }

    return(
        <div className={styles.Cockpit} >
            <h1>This is my first React App</h1>
            <p className={assignedClasses.join(" ")} >This is really working!</p>
            <button 
            className={btnClass}
            onClick={props.togglePersons}>Toggle Persons</button>
        </div>
        
    );
}

export default cockpit;