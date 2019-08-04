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
                <Container>
                    <Row>
                        <Col xs={1}>
                            <Button variant="primary" onClick={this.roll} size="lg" className="btn btn-primary btn-lg btn-block" block>Roll</Button> 
                        </Col>
                        <Col xs={2}>
                            <h2>1D{this.state.diceSize} =</h2>
                        </Col>
                        <Col xs={1}>
                            <h2>{this.state.result}</h2> 
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
