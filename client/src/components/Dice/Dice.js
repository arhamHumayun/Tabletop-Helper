import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rolls: [],
            result: 0,
            finalResult: 0,
            multiple: "1",
            inputValue: "0"
        }

        this.roll = this.roll.bind(this);
        this.changeMod = this.changeMod.bind(this);
        this.changeMultiple = this.changeMultiple.bind(this);
        this.reset = this.reset.bind(this);
    }

    roll() {
        let total = 0;
        let rolls = [];
        let finalResult = 0;

        for(let i = 0; i < this.state.multiple; i++) {
            rolls[i] = Math.floor(Math.random() * this.props.diceSize) + 1
        }

        for (var i in rolls)
            total += rolls[i];

        finalResult = parseInt(this.state.inputValue, 10) + total
        
        for (i = 0; i < rolls.length - 1; i++) {
            rolls[i] = rolls[i] + " + "
        }

        this.setState(state => ({
            result: total,
            finalResult: finalResult,
            rolls: rolls
        }))
    }

    changeMod(e) {
        if (e.target.validity.valid) {
            this.setState({ inputValue: e.target.value }); 
        }
    }
    
    changeMultiple(e)  {
        if (e.target.validity.valid) {
            this.setState({ multiple: e.target.value }); 
        }
    }

    reset() {
        this.setState({ inputValue: "0" }); 
    }

    render() {
        return (
                <Container style={{
                    left: '0px',
                    position: 'left',
                    display: 'contents'                
                    }}>
                    <Row>
                        <Col sm={2} >
                            <Button variant="primary" onClick={this.roll} size="lg" className="btn btn-primary btn-lg btn-block" block>Roll</Button> 
                        </Col>
                        <Col sm={1} style={{padding: '0'}}>
                            <input
                            type="number" value={this.state.multiple} 
                            onChange={this.changeMultiple} step="any" 
                            style={{
                                width: '100%', 
                                height: '85%',
                                display: 'inline',
                                fontSize: '20px'                                
                                }}/>
                        </Col>
                        <Col sm={2} style={{padding: '0', 'text-align': 'left'}}>
                            <h3 style={{padding: '0'}}>D{this.props.diceSize} +</h3>
                        </Col>
                        <Col sm={1} style={{padding: '0'}}>
                            <input 
                            type="number" 
                            value={this.state.inputValue} 
                            onChange={this.changeMod} 
                            step="any" 
                            style={{
                                width: '100%', 
                                height: '85%',
                                display: 'inline',
                                fontSize: '20px'
                                }}/>
                        </Col>
                        <Col sm={3} >
                            <h5>= ({this.state.rolls}) + {this.state.inputValue} =</h5> 
                        </Col>
                        <Col sm={3} >
                            <h3>{this.state.finalResult}</h3>
                        </Col>
                    </Row>
                </Container>
        )
    }
}