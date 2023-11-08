import React from 'react'

const Hello = () => {
    // return (
    //     <div className: 'dummyClass'>
    //     <h1>Hello Prakash</h1>
    //     </div>
    // )

     // Writting component without using jsx

  return React.createElement('div', {id: "hello", className:'dummyClass'}, React.createElement('h1', null,  'Hello Prakash'))

}

export default Hello