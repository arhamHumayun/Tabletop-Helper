import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceSize: 20,
            result: 0
        }
        this.roll = this.roll.bind(this);
    }

    roll() {
        this.setState(state => ({
            result: Math.floor(Math.random() * this.state.diceSize) + 1
        }))
    }

    render() {
        return (
            <div>
               <p>this is a {this.state.result}</p>
               <Button variant="primary" 
               onClick={this.roll}>Roll</Button>      
            </div>
        )
    }
}
