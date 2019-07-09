import React, { Component } from 'react';

class Btn extends Component {
    state = {
        input: this.props.input
    }

    render() {
        return (
            <div>
                <button onClick = {this.props.onClick}>Find</button>
                <br></br>
                <hr></hr>
                <br></br>
                <h2>TRANSLIT: {this.props.input}</h2>
            </div>
        )
    }
}

export default Btn