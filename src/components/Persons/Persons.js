import React from 'react';
import Person from './Person/Person';


const persons = (props) => props.persons.map((person, index) => {
    return <Person
        click={() => props.clicked(index)}
        change={ (event) => props.change(event, person.id)}
        name={person.name}
        age={person.age} 
        key={person.id}
        /> 
    })


export default persons;

