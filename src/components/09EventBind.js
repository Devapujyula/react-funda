import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

      {/**Approach3: Binding the EventHandler in the constructor as a binding in the render method 
      this.clickHandler = this.clickHandler.bind(this)*/}
    }

    // clickHandler() {
    //     this.setState({
    //         message: "GoodBye..!"
    //     })
    //     console.log(this);
    // }

    /**Approach4: class Property as a Arrow Function */
    clickHandler = () => {
        this.setState({
            message: "GoodBye"
        })
    }

  render() {
    return (
      <div>
      <div>{this.state.message}</div>
    
    {/**Approach1: Using the bind keyword render method
        <button onClick={this.clickHandler.bind(this)}>Click</button>*/}

    {/**Approach2: Using the Arrow Function in render method
    <button onClick={() => this.clickHandler()}>Click</button>*/}

    <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
