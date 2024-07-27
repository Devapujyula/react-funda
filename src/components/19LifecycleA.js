import React, { Component } from 'react'
import LifecycleB from './20LifecycleB';


export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Prakash'
      }
      console.log("LifeCycleA Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount");
    }
    
  render() {
    console.log("LifecycleA render")
    return (
      <div>
        <div>LifeCycleA</div>
        <div><LifecycleB/></div>
      </div>
    )
  }
}

export default LifecycleA
