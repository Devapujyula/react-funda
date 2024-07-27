import React from 'react'

export default function MapFunction() {
    const array = ["Shiva", "Krishna", "Venkatesh", "Hanuman", "Shiva"]
    // Array of objects
    const movieList = [
        {
            id: 1,
            movieName:"Bahubali"
        }, 
        {
            id: 2,
            movieName: "Badri"
        }, 
        {
            id: 3,
            movieName: "Barath Ane Nenu"
        },
        {
            id: 4,
            movieName: "nannaku Prematho"
        }
    ]
  return (
    <div>
      {/* {
        array.map(
            (value, index) => <li key={index}>{value}</li>
        )
      } */}

      {
        movieList.map(
            (value) => <li key={value.id}>{value.movieName}</li> 
        )
      }
    </div>
  )
}
