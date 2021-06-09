import React from 'react'
import Movie from './MovieCard'

function MovieList({ movies, titleSearch, rateSearch }) {
  const filter = () => {
    let searchResult =
      rateSearch === 0
        ? movies.filter((movie) =>
            movie.title.toLowerCase().includes(titleSearch.toLowerCase())
          )
        : movies.filter(
            (movie) =>
              movie.title
                .toLowerCase()
                .includes(titleSearch.toLowerCase().trim()) &&
              movie.rate === rateSearch
          )
    return searchResult
  }

  return (
    <div className="movielist">
      {filter().map((movie, i) => {
        return (
          <div key={i}>
            <Movie movie={movie} />
          </div>
        )
      })}
    </div>
  )
}

export default MovieList
