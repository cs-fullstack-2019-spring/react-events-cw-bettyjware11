import React, { Component } from 'react';

class Increments extends Component{
    render(){
        return(
            <nav>
            <p>{this.props.whichIncrement}</p>

            </nav>


        );
    }
}

export default Increments;