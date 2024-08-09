import React from 'react'
import Movies from './Movies'
function MovieList({ movies}) {
  return (
    <div className="container">

    <div className="d-flex flex-wrap justify-content-around">
    {movies.map((movie, index) => (
      <Movies
        key={index}
        title={movie.title}
        image={movie.image}
        rating={movie.rating}
        dateOfRelease={movie.dateOfRelease}
      />
    ))}
  </div>
    </div>
  )
}

export default MovieList
