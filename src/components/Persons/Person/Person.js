import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css'
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {

    constructor( props ) {
        super(props);
        console.log("[Person.js] Inside constructor" );
    }

    render() {
        console.log(this.props.name);
        return (
            <Aux>
                <p onClick={this.props.click} >My name is {this.props.name} and I am {this.props.age} years old!</p>  
                <p>{this.props.children}</p>
            
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </Aux>
        ) 
    }

    
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.fun
}

export default withClass(Person, classes.Person);