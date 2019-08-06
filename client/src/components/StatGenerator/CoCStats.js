import React, { Component } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

export default class CoCStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statArray: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            rollsArray: ["", "", "", "", "", "", "", "", ""]
        }
        this.generateStandard = this.generateStandard.bind(this)
    }

    generateStandard() {
            var results = [0, 0, 0]
            for(var i = 0; i < 7; i++) {
                results = [0, 0, 0]
                for(var j = 0; j < 3; j++) {
                    results[j] = Math.floor((Math.random() * 6) + 1)
                }
                this.state.statArray[i] = (results[0] + results[1] + results[2]) * 5
                this.state.rollsArray[i] = "(" + results[0] + " + " + results[1] + " + " + results[2] + ") * 5"
            }
            for(var i = 0; i < 2; i++) {
                results = [0, 0]
                for(var j = 0; j < 2; j++) {
                    results[j] = Math.floor((Math.random() * 6) + 1)
                }
                this.state.statArray[i + 7] = (results[0] + results[1] + 6) * 5
                this.state.rollsArray[i + 7] = "(" + results[0] + " + " + results[1] + " + (6)) * 5"
            }
            this.forceUpdate()
    }

    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button variant="primary" onClick={this.generateStandard}>Roll Standard</Button>
                    <Button variant="secondary" onClick={this.generate1D100}>1D100</Button>
                </ButtonGroup> 
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>STR</th>
                            <th>CON</th>
                            <th>SIZ</th>
                            <th>DEX</th>
                            <th>APP</th>
                            <th>POW</th>
                            <th>LUCK</th>
                            <th>INT</th>
                            <th>EDU</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Rolls:</th>
                            <th>{this.state.rollsArray[0]}</th>
                            <th>{this.state.rollsArray[1]}</th>
                            <th>{this.state.rollsArray[2]}</th>
                            <th>{this.state.rollsArray[3]}</th>
                            <th>{this.state.rollsArray[4]}</th>
                            <th>{this.state.rollsArray[5]}</th>
                            <th>{this.state.rollsArray[6]}</th>
                            <th>{this.state.rollsArray[7]}</th>
                            <th>{this.state.rollsArray[8]}</th>
                        </tr>
                        <tr>
                            <th>Results:</th>
                            <th>{this.state.statArray[0]}</th>
                            <th>{this.state.statArray[1]}</th>
                            <th>{this.state.statArray[2]}</th>
                            <th>{this.state.statArray[3]}</th>
                            <th>{this.state.statArray[4]}</th>
                            <th>{this.state.statArray[5]}</th>
                            <th>{this.state.statArray[6]}</th>
                            <th>{this.state.statArray[7]}</th>
                            <th>{this.state.statArray[8]}</th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
