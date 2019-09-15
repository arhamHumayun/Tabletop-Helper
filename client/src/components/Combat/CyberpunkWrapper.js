import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import CyberpunkCombat from './CyberpunkCombat'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class CyberpunkWrapper extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            items: []
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
                    <Form>
                        <Form.Row>
                            <Form.Group controlId="">
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form.Group>
                        </Form.Row>
                  </Form>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            <CyberpunkCombat numDice={6} damageBonus={2} diceSize={6}/>
            <CyberpunkCombat numDice={4} damageBonus={1} diceSize={6}/>
            </div>
        )
    }
}
