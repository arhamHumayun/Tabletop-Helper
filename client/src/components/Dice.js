import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceSize: props.diceSize,
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
            <Container style={{border: '1px solid red'}}>
                <Row>
                    <Col xs={1} style={{border: '1px solid red'}}>
                        <Button variant="primary" onClick={this.roll} block>Roll</Button> 
                    </Col>
                    <Col xs={3} style={{border: '1px solid red'}}>
                        <h1>1D{this.state.diceSize} =</h1>
                    </Col>
                    <Col xs={1} style={{border: '1px solid red'}}>
                        <h1>{this.state.result}</h1> 
                    </Col>
                </Row>
            </Container>
    
            </div>
        )
    }
}
