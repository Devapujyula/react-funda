import React, { useState } from 'react'

export default function UseStateHook() {
    const [name, setName] = useState('SkillHub...!')
    const [count, setCount] = useState(0);
  return (
    <div>
      <center>
        <h1>{name}</h1>
        <h1>{count}</h1>
        <button onClick={() => setName('Button Clicked')}>Change</button>
        <button onClick={() => setCount(count+1)}>Click to count</button>
      </center>
    </div>
  )
}
