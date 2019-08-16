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
        this.generate1D100 = this.generate1D100.bind(this)
    }

    generateStandard() {
            var results = [0, 0, 0]
            var statArray = []; 
            var rollsArray = [];
            for(var i = 0; i < 6; i++) {
                results = [0, 0, 0]
                for(var j = 0; j < 3; j++) {
                    results[j] = Math.floor((Math.random() * 6) + 1)
                }
                statArray[i] = (results[0] + results[1] + results[2]) * 5
                rollsArray[i] = "(" + results[0] + " + " + results[1] + " + " + results[2] + ") * 5"
            }
            for(i = 0; i < 3; i++) {
                results = [0, 0]
                for(j = 0; j < 2; j++) {
                    results[j] = Math.floor((Math.random() * 6) + 1)
                }
                statArray[i + 6] = (results[0] + results[1] + 6) * 5
                rollsArray[i + 6] = "(" + results[0] + " + " + results[1] + " + (6)) * 5"
            }
            this.setState(state => ({
                statArray: statArray,
                rollsArray: rollsArray
            }))
    }

    generate1D100() {
        var statArray = []; 
        var rollsArray = [];
        for(var i = 0; i < 9; i++) {
            statArray[i] = Math.floor((Math.random() * 100) + 1)
            rollsArray[i] = this.state.statArray[i]
        }
        this.setState(state => ({
            statArray: statArray,
            rollsArray: rollsArray
        }))
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
                            <th>Stat:</th>
                            <th>STR</th>
                            <th>CON</th>
                            <th>SIZ</th>
                            <th>DEX</th>
                            <th>APP</th>
                            <th>POW</th>
                            <th>INT</th>
                            <th>EDU</th>
                            <th>LUCK</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Rolls:</th>
                            <th>{this.state.rollsArray[0]}</th>
                            <th>{this.state.rollsArray[1]}</th>
                            <th>{this.state.rollsArray[6]}</th>
                            <th>{this.state.rollsArray[2]}</th>
                            <th>{this.state.rollsArray[3]}</th>
                            <th>{this.state.rollsArray[4]}</th>
                            <th>{this.state.rollsArray[7]}</th>
                            <th>{this.state.rollsArray[8]}</th>
                            <th>{this.state.rollsArray[5]}</th>
                        </tr>
                        <tr>
                            <th>Results:</th>
                            <th>{this.state.statArray[0]}</th>
                            <th>{this.state.statArray[1]}</th>
                            <th>{this.state.statArray[6]}</th>
                            <th>{this.state.statArray[2]}</th>
                            <th>{this.state.statArray[3]}</th>
                            <th>{this.state.statArray[4]}</th>
                            <th>{this.state.statArray[7]}</th>
                            <th>{this.state.statArray[8]}</th>
                            <th>{this.state.statArray[5]}</th>
                        </tr>
                        <tr>
                            <th>Results 1/2:</th>
                            <th>{Math.floor(this.state.statArray[0] / 2)}</th>
                            <th>{Math.floor(this.state.statArray[1] / 2)}</th>
                            <th>{Math.floor(this.state.statArray[6] / 2)}</th>
                            <th>{Math.floor(this.state.statArray[2] / 2)}</th>
                            <th>{Math.floor(this.state.statArray[3] / 2)}</th>
                            <th>{Math.floor(this.state.statArray[4] / 2)}</th>
                            <th>{Math.floor(this.state.statArray[7] / 2)}</th>
                            <th>{Math.floor(this.state.statArray[8] / 2)}</th>
                            <th>{Math.floor(this.state.statArray[5] / 2)}</th>
                        </tr>
                        <tr>
                            <th>Results 1/5:</th>
                            <th>{Math.floor(this.state.statArray[0] / 5)}</th>
                            <th>{Math.floor(this.state.statArray[1] / 5)}</th>
                            <th>{Math.floor(this.state.statArray[6] / 5)}</th>
                            <th>{Math.floor(this.state.statArray[2] / 5)}</th>
                            <th>{Math.floor(this.state.statArray[3] / 5)}</th>
                            <th>{Math.floor(this.state.statArray[4] / 5)}</th>
                            <th>{Math.floor(this.state.statArray[7] / 5)}</th>
                            <th>{Math.floor(this.state.statArray[8] / 5)}</th>
                            <th>{Math.floor(this.state.statArray[5] / 5)}</th>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
        )
    }
}
