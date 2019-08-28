import React, { Component } from 'react'
import Dice from './Dice'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

export default class DicePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {diceSize: 100, id: 1001},
        {diceSize: 20, id: 201}, 
        {diceSize: 6, id: 61}, 
        {diceSize: 2, id: 21},  
      ]
    }
    this.removeItem = this.removeItem.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  addItem(diceSize, id) {

  }
  
  removeItem(e) {
    const newItems = this.state.items.filter(item => item.id !== e)
    this.setState({items: newItems})
  }

  render() {
    const listItems = this.state.items.map((item) =>
      <ListGroup.Item> 
      <Container style={{
        left: '0px',
        position: 'left',
        display: 'contents'                
        }}>
        <Row>
          <Col sm={11} style={{padding: '0'}}>
            <Dice diceSize={item.diceSize}/>
          </Col>
          <Col sm={1} style={{padding: '0'}}>
            <Button onClick={() => this.removeItem(item.id)}>X</Button>  
          </Col>
        </Row>
      </Container> 
      </ListGroup.Item>
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
