import React, { Component, PureComponent } from 'react'
import RegularComponent from './27RegularComponent'
import MemoComponent from './29MemoComponent'


class ParentCoponent extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Prakash"
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Prakash"
            })
        }, 2000)
    }
    
  render() {
    console.log("******Parent Component**********")
    return (
      <div>
        Parent Component
        {/* <RegularComponent name = {this.state.name}/>
        <PureComponent name = {this.state.name}/> */}

        <MemoComponent name = {this.state.name}/>
      </div>
    )
  }
}

export default ParentCoponent
