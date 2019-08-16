import React, { Component } from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

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
        this.showStandardArray = this.showStandardArray.bind(this)
    }

    generate4D6DL() {
            var results = [0, 0, 0, 0]
            var statArray = []
            var rollsArray = []
            for(var i = 0; i < 6; i++) {
                results = [0, 0, 0, 0]
                for(var j = 0; j < 4; j++) {
                    results[j] = Math.floor((Math.random() * 6) + 1)
                }
                results.sort()
                statArray[i] = results[1] + results[2] + results[3]
                rollsArray[i] = results[0] + " | " + results[1] + " + " + results[2] + " + " + results[3]
            }
            this.setState(state => ({
                statArray: statArray,
                rollsArray: rollsArray
            }))
    }

    generate3D6() {
        var results = [0, 0, 0]
        var statArray = []
        var rollsArray = []
        for(var i = 0; i < 6; i++) {
            results = [0, 0, 0]
            for(var j = 0; j < 3; j++) {
                results[j] = Math.floor((Math.random() * 6) + 1)
            }
            statArray[i] = results[0] + results[1] + results[2]
            rollsArray[i] = results[0] + " + " + results[1] + " + " + results[2]
        }
        this.setState(state => ({
            statArray: statArray,
            rollsArray: rollsArray
        }))
    }

    generate2D6plus6() {
        var results = [0, 0]
        var statArray = []
        var rollsArray = []
        for(var i = 0; i < 6; i++) {
            results = [0, 0]
            for(var j = 0; j < 2; j++) {
                results[j] = Math.floor((Math.random() * 6) + 1)
            }
            statArray[i] = results[0] + results[1] + 6
            rollsArray[i] = results[0] + " + " + results[1] + " + 6"
        }
        this.setState(state => ({
            statArray: statArray,
            rollsArray: rollsArray
        }))
    }

    showStandardArray() {
        this.setState({ 
            statArray: [15, 14, 13 , 12, 10, 8],
            rollsArray: ["", "", "", "", "", ""]
        })
    }

    render() {
        return (
            <div>
                <ButtonToolbar aria-label="Toolbar with button groups">
                <div style={{width: '38%'}}></div>
                    <ButtonGroup>
                        <OverlayTrigger key='left ' placement='left' overlay={
                            <Tooltip id={`tooltip-${'left'}`}>
                                Most common way of rolling for stats
                            </Tooltip>
                        }>
                            <Button variant="primary" onClick={this.generate4D6DL}>4D6 drop lowest</Button>
                        </OverlayTrigger>
                        <Button variant="primary" onClick={this.generate3D6}>3D6</Button>
                        <Button variant="primary" onClick={this.generate2D6plus6}>2D6 + 6</Button>
                    </ButtonGroup> 
                    <div style={{width: '1%'}}></div>
                    <ButtonGroup>
                        <OverlayTrigger key='right ' placement='right' overlay={
                            <Tooltip id={`tooltip-${'right'}`}>
                                Standard array can be found in page 13 of the PHB.
                            </Tooltip>
                        }>
                            <Button variant="primary" onClick={this.showStandardArray}>Standard Array</Button>
                        </OverlayTrigger>
                    </ButtonGroup>
                </ButtonToolbar>
                <Table bordered hover>
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
                            <th>Rolls:</th>
                            <th>{this.state.rollsArray[0]}</th>
                            <th>{this.state.rollsArray[1]}</th>
                            <th>{this.state.rollsArray[2]}</th>
                            <th>{this.state.rollsArray[3]}</th>
                            <th>{this.state.rollsArray[4]}</th>
                            <th>{this.state.rollsArray[5]}</th>
                        </tr>
                        <tr>
                            <th>Results:</th>
                            <th>{this.state.statArray[0]}</th>
                            <th>{this.state.statArray[1]}</th>
                            <th>{this.state.statArray[2]}</th>
                            <th>{this.state.statArray[3]}</th>
                            <th>{this.state.statArray[4]}</th>
                            <th>{this.state.statArray[5]}</th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
