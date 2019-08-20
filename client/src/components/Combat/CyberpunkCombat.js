import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class CyberpunkCombat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            body: "",
            results: [],
            rolls: []
        }
        this.roll = this.roll.bind(this);
    }

    roll() {
        let
        body = 0, 
        rolls = 0,
        results = new Array(this.props.numBullets)

        body = Math.floor(Math.random() * 10) + 1

        for(var i = 0; i < this.props.numDice; i++) {
            results[i] = new Array(this.props.numDice)
            results[i] = Math.floor(Math.random() * this.props.diceSize) + 1
            rolls += results[i]
        }
        rolls += this.props.damageBonus
        console.log(rolls[i])
        
        for(i = 0; i < (this.props.numDice - 1); i++) {
            results[i] = results[i] + " + "
        }

        switch(body) {
            case 1: 
                body = "head";
                break;
            case 2:
            case 3:
            case 4: 
                body = "torso";
                break;
            case 5:
                body = "right arm"
                break;
            case 6:
                body = "left arm"
                break;
            case 7:
            case 8: 
                body = "right leg";
                break;
            case 9:
            case 10:
                body = "left leg";
                break;     
            default:
                body = "";

        }

        this.setState(state => ({
            body: body,
            results: results,
            rolls: rolls
        }))
    }

    render() {
        return (
            <div>
                <Container style={{
                    left: '0px',
                    position: 'left',
                    display: 'contents'                
                    }}>
                    <Row>
                        <Col sm={1} >
                            <Button variant="primary" onClick={this.roll} size="lg" className="btn btn-primary btn-lg btn-block" block>Roll</Button> 
                        </Col>
                        <Col sm={2} style={{padding: '0', 'textAlign': 'left'}}>
                            <h3 style={{padding: '0'}}>{this.props.numDice}D{this.props.diceSize} + {this.props.damageBonus}</h3>
                        </Col>
                        <Col sm={5} >
                            <h5>= ({this.state.results}) + {this.props.damageBonus} =</h5> 
                        </Col>
                        <Col sm={4} >
                            <h3>{this.state.rolls} to {this.state.body}</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
