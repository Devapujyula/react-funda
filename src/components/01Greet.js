import React from 'react'

// function Greet() {
//     return <h1>Hello Prakash</h1>
// }

// use of ES-6 arrowFunction to declare greet function

// const Greet = () => <h1>Hello Prakash</h1>

// named export means using export keyword while declaring the function

// const Greet = ({props}) => {
//     console.log(props);
//     return (
//         <div>
//         <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//         {props.children}, {props.button}
//         </div>
//     )
// }

 // Destructuring props in the parameter
// const Greet = ({name, heroName}) => {
//     return(
//         <div>
//         <h1>Hello{name} a.k.a {heroName}</h1>
//         </div>
//     )
// }

// destructuring props in the functional body 
const Greet = props => {
    const {name, heroName} = props
    return(
        <div>
          <h1>
            Hello {name} a.k.a {heroName}
          </h1>
        </div>
    )
}


export default Greet
