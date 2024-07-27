import React, { useState } from 'react'

export default function DOMExample() {
    const [count, setCount] = useState(0);

    function IncrementHandler() {
        setCount(count + 1)
    }

    let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => IncrementHandler()}>Click to Add</button>

     <ul>
        {
            items.map(
            (item, index) =>  <li>Item: {item}</li>
            )
        }
     </ul>
    </div>
  )
}
