import React, { Component } from 'react'
import Dice from './Dice'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import uuid from "uuid";

export default class DicePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {diceSize: 20, id: uuid()}, 
        {diceSize: 12, id: uuid()},
        {diceSize: 10, id: uuid()}, 
        {diceSize: 8, id: uuid()}, 
        {diceSize: 6, id: uuid()}, 
        {diceSize: 4, id: uuid()}, 
      ]
    }
    this.removeItem = this.removeItem.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  addItem(diceSize) {
    this.setState({
      items:[...this.state.items, {diceSize: diceSize, id: uuid()}]
    });
  }
  
  removeItem(e) {
    const newItems = this.state.items.filter(item => item.id !== e)
    this.setState({items: newItems})
  }

  render() {
    let listItems = this.state.items.map((item) =>
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
            <Button variant="danger" onClick={() => this.removeItem(item.id)}>X</Button>  
          </Col>
        </Row>
      </Container> 
      </ListGroup.Item>
    );
    console.log(listItems)
       return (
            <div style={{ width: '100%'}}>
            <ButtonToolbar>
              <div style={{width: '30%'}}></div>
              <ButtonGroup>
                <Button onClick={() => this.addItem(1000)}>D1000</Button>
                <Button onClick={() => this.addItem(500)}>D500</Button>
                <Button onClick={() => this.addItem(100)}>D100</Button>
                <Button onClick={() => this.addItem(50)}>D50</Button>
                <Button onClick={() => this.addItem(20)}>D20</Button>
                <Button onClick={() => this.addItem(12)}>D12</Button>
                <Button onClick={() => this.addItem(10)}>D10</Button>
                <Button onClick={() => this.addItem(8)}>D8</Button>
                <Button onClick={() => this.addItem(6)}>D6</Button>
                <Button onClick={() => this.addItem(4)}>D4</Button>
                <Button onClick={() => this.addItem(3)}>D3</Button>
                <Button onClick={() => this.addItem(2)}>D2</Button>
              </ButtonGroup>
            </ButtonToolbar>
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
