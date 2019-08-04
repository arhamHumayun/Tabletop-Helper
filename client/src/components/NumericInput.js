import React, { Component } from 'react'

class NumericInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = { inputValue: "" };
      this._handleUpdate = this._handleUpdate.bind(this);
      this._reset = this._reset.bind(this);
    }
    
    _handleUpdate(e) {
      if (e.target.validity.valid) {
        this.setState({ inputValue: e.target.value }); 
      }
    }
  
    _reset() {
      this.setState({ inputValue: "" }); 
    }
    
    render() {
      return (
        <div>
          <input type="number" value={this.state.inputValue} onChange={this._handleUpdate} step="any"/>
          <button onClick={this._reset}>reset</button>
        </div>
      )
    }  
  }  

export default NumericInput