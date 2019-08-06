import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            finalResult: 0,
            inputValue: "0"
        }

        this.roll = this.roll.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.reset = this.reset.bind(this);
    }

    roll() {
        this.setState(state => ({
            result: Math.floor(Math.random() * this.props.diceSize) + 1
        }))
        this.setState(state => ({
            finalResult: parseInt(this.state.inputValue, 10) + this.state.result
        }))
    }

    handleUpdate(e) {
        if (e.target.validity.valid) {
          this.setState({ inputValue: e.target.value }); 
        }
      }
    
    reset() {
        this.setState({ inputValue: "0" }); 
      }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row style={{}} >
                        <Col md={{span: 1.5}}>
                            <Button variant="primary" onClick={this.roll} size="lg" className="btn btn-primary btn-lg btn-block" block>Roll</Button> 
                        </Col >
                        <Col md={{span: 2}}>
                            <h4 style={{width: "100%"}} >1D{this.props.diceSize} + </h4>
                        </Col>
                        <Col md={{span: 1}}>
                            <input type="number" value={this.state.inputValue} onChange={this.handleUpdate} step="any" style={{width: "100%", height: '80%'}}/>
                        </Col>
                        <Col md={{span: 2}}>
                            <h3>= {this.state.finalResult}</h3> 
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}