import React, { Component } from 'react'
import Dice from './Dice'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class DicePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        100, 20, 12, 10, 8, 6, 4, 3, 2
      ]
    }
  }

  render() {
    const listItems = this.state.items.map((diceSize) =>
      <ListGroup.Item> <Dice diceSize={diceSize}/> </ListGroup.Item>
    );
    console.log(listItems)
       return (
            <div style={{ width: '100%'}}>
            <Container fluid={true}>
              <Row>
                <Col>
                  <ListGroup variant="flush">
                    {listItems}
                  </ListGroup>
                </Col>
              </Row>
            </Container>
            </div>
        )
    }
}
