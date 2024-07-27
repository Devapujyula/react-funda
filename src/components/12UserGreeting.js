import React, { Component } from 'react'

export class UserGreeting extends Component {
constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: false
  }
}


  render() {

    return(

        // Approach3: Using terinary operator
        this.state.isLoggedIn ? 
        <div>Welcome Satya</div> :
        <div>Welcome Guest</div>
    )
    // Approach2: using element variables
    // let message
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Satya</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    // Approach1: using if esle
//     if(this.state.isLoggedIn) {
//         return(
//             <div>
//             Welcome Satya
//             </div>
//         )
//     } else {
//         return(
//             <div>
//             Welcome Guest
//             </div>
//         )

    // return (
    //   <div>
    //   <div>Welcome Satya</div>
    //   <div>welcome Guest</div>
    //   </div>
    // )
    // }
}
}

export default UserGreeting
