import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import NumericInput from './NumericInput'

export default class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceSize: props.diceSize,
            result: 0,
            finalResult: 0,
            inputValue: "0"
        }
        this.roll = this.roll.bind(this);
        this._handleUpdate = this._handleUpdate.bind(this);
        this._reset = this._reset.bind(this);
    }

    roll() {
        this.setState(state => ({
            result: Math.floor(Math.random() * this.state.diceSize) + 1
        }))
        this.setState(state => ({
            finalResult: parseInt(this.state.inputValue, 10) + this.state.result
        }))
    }

    _handleUpdate(e) {
        if (e.target.validity.valid) {
          this.setState({ inputValue: e.target.value }); 
        }
      }
    
      _reset() {
        this.setState({ inputValue: "0" }); 
      }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col md="auto">
                            <Button variant="primary" onClick={this.roll} size="lg" className="btn btn-primary btn-lg btn-block" block>Roll</Button> 
                        </Col >
                        <Col md={2}>
                            <h4>1D{this.state.diceSize} + </h4>
                        </Col>
                        <Col md={4}>
                            <input type="number" value={this.state.inputValue} onChange={this._handleUpdate} step="any" />
                            <button onClick={this._reset}>reset</button>
                        </Col>
                        <Col md={2}>
                            <h4>= {this.state.finalResult}</h4> 
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
