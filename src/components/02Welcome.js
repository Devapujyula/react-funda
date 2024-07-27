import React, {Component} from 'react'

class Welcome extends Component {
    render() {
        // destructuring props
        const {name, heroName} = this.props

        // Destructuring state properties
      //  const {state1, state2} = this.state
        return <h1>Welcome {name} a.k.s {heroName}</h1>
    }
}

export default Welcome
