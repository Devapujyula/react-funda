import React from 'react'

function List() {
  const names = ['Priya', 'Shanthi', 'Madhu', 'Radha']
  const nameList = names.map(name =>  <h2>{name}</h2>)
  return (
    <div>
      {
        nameList
      }
    </div>
  )
}

export default List
