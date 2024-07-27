import React, { Component } from 'react'

export default class UseOfState extends Component {

  constructor() {
    super()
    this.state = {
      message: "Click here to view the Page"
    }
  }

  changeMessage() {
    this.setState({
      message: "Welcome to AP Tourism"
    })
  }


  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Click Me..!</button>
      </div>
    )
  }
}
