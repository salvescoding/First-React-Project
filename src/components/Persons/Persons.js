import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';


const persons = (props) => props.persons.map((person, index) => {
    return <Person
        click={() => props.clicked(index)}
        change={(event) => props.changed(event, person.id)}
        name={person.name}
        age={person.age} 
        key={person.id}
        /> 
    })

persons.propTypes = {
    change: PropTypes.func
}

export default persons;

