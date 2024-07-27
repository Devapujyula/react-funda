import React, { Component } from 'react'

class  Counter extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  IncreaseCount = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   }, () => {console.log('Callback value', this.state.count);})
  //   console.log(this.state.count);
  // }

  this.setState((prevState) => ({
    count: prevState.count + 1
  }))
  console.log(this.state.count);

  }
  
  IncreaseCount5() {
    this.IncreaseCount()
    this.IncreaseCount()
    this.IncreaseCount()
    this.IncreaseCount()
    this.IncreaseCount()
  }
  

  render() {
    return (
      <div>
      
      <div>
      <h2>Count</h2> <h3>-</h3> <h3>{this.state.count}</h3>
      </div>

      <button onClickCapture={() => this.IncreaseCount5()}>Increment</button>
      
      </div>
    )
  }
}

export default Counter
