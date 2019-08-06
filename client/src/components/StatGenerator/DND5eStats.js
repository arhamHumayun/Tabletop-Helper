import React, { Component } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

export default class DND5eStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statArray: [0, 0, 0, 0, 0, 0],
            rollsArray: ["", "", "", "", "", ""]
        }
        this.generate4D6DL = this.generate4D6DL.bind(this)
        this.generate3D6 = this.generate3D6.bind(this)
        this.generate2D6plus6 = this.generate2D6plus6.bind(this)
        console.log('1'.strike)
    }

    generate4D6DL() {
            var results = [0, 0, 0, 0]
            for(var i = 0; i < 6; i++) {
                results = [0, 0, 0, 0]
                for(var j = 0; j < 4; j++) {
                    results[j] = Math.floor((Math.random() * 6) + 1)
                }
                results.sort()
                this.state.statArray[i] = results[1] + results[2] + results[3]
                this.state.rollsArray[i] = results[0] + " | " + results[1] + " + " + results[2] + " + " + results[3]
                
            }
            //console.log(this.state.statArray)
            this.forceUpdate()
    }

    generate3D6() {
        var results = [0, 0, 0]
        for(var i = 0; i < 6; i++) {
            results = [0, 0, 0]
            for(var j = 0; j < 3; j++) {
                results[j] = Math.floor((Math.random() * 6) + 1)
            }
            this.state.statArray[i] = results[0] + results[1] + results[2]
            this.state.rollsArray[i] = results[0] + " + " + results[1] + " + " + results[2]
        }
        this.forceUpdate()
    }

    generate2D6plus6() {
        console.log('am i fat')
        var results = [0, 0]
        for(var i = 0; i < 6; i++) {
            results = [0, 0]
            for(var j = 0; j < 2; j++) {
                results[j] = Math.floor((Math.random() * 6) + 1)
            }
            this.state.statArray[i] = results[0] + results[1] + 6
            this.state.rollsArray[i] = results[0] + " + " + results[1] + " + 6"
        }
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button variant="primary" onClick={this.generate4D6DL}>4D6 drop lowest</Button>
                    <Button variant="primary" onClick={this.generate3D6}>3D6</Button>
                    <Button variant="primary" onClick={this.generate2D6plus6}>2D6 + 6</Button>
                </ButtonGroup> 
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Results: </th>
                            <th>{this.state.statArray[0]}</th>
                            <th>{this.state.statArray[1]}</th>
                            <th>{this.state.statArray[2]}</th>
                            <th>{this.state.statArray[3]}</th>
                            <th>{this.state.statArray[4]}</th>
                            <th>{this.state.statArray[5]}</th>
                        </tr>
                        <tr>
                            <th>Rolls:</th>
                            <th>{this.state.rollsArray[0]}</th>
                            <th>{this.state.rollsArray[1]}</th>
                            <th>{this.state.rollsArray[2]}</th>
                            <th>{this.state.rollsArray[3]}</th>
                            <th>{this.state.rollsArray[4]}</th>
                            <th>{this.state.rollsArray[5]}</th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
