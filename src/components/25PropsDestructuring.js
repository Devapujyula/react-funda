import React from 'react'

export default function PropsDestructuring({name, age}) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>You are {age} years old</p>
    </div>
  )
}
