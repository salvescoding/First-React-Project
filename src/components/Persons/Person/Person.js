import React from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css'
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

const person = (props) => {

    return (
        <Aux>
            <p onClick={props.click} >My name is {props.name} and I am {props.age} years old!</p>  
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </Aux>
    ) 
}

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.fun
}

export default withClass(person, classes.Person);