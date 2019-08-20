import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import CyberpunkCombat from './CyberpunkCombat'
import Modal from 'react-bootstrap/Modal'


export default class CyberpunkWrapper extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            showModal: false
        }
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleShow() { this.setState({ showModal: true })}

    handleClose() {this.setState({ showModal: false })}

    render() {
        return (
            <div>
            <Button variant="primary" onClick={this.handleShow}>
                +
            </Button>

            <Modal show={this.state.showModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add new dice configuration</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <CyberpunkCombat numDice={6} damageBonus={2} diceSize={6}/>
            <CyberpunkCombat numDice={4} damageBonus={1} diceSize={6}/>
            </div>
        )
    }
}
