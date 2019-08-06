import React, { Component } from 'react'
import Dice from './Dice'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class DicePage extends Component {
    render() {
        return (
            <div>
            <Container fluid={true}>
              <Row>
                <Col md={10} >
                  <ListGroup variant="flush">
                    <ListGroup.Item >
                      <Dice diceSize={100}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Dice diceSize={20}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Dice diceSize={12}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Dice diceSize={10}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Dice diceSize={8}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Dice diceSize={6}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Dice diceSize={4}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Dice diceSize={3}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Dice diceSize={2}/>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  roll log
                </Col>
              </Row>
            </Container>
            </div>
        )
    }
}
