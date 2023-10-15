import React from 'react'
import Card from './Card'
import '../styles/movieList.css'
import '../styles/card.css'


export default function MovieList({movieScheduleData}) {
  return (
    <>
      <h1>Movie List</h1>
      <div className='movie-list'>
        {movieScheduleData.map((value, index) => (
          <div className='draggble'>
            <Card key={value.id} img={value.img} movieTitle={value.movieTitle} showtime={value.showtime} className='movie-list-card'/>
          </div>
        ))}
    </div>
    </>
    
  )
}
