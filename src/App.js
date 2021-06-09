import React, { useState } from 'react'
import './App.css'
import Trailer from './Components/Trailer'
import NavBar from './Components/NavBar.js'
import MovieList from './Components/MoviesList.js'
import { MovieData } from './Components/MoviesData.js'
import RatingSearch from './Components/RatingSearch'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

function App() {
  const [rateSearch, setRateSearch] = useState(0)
  const [titleSearch, setTitleSearch] = useState('')
  const [movies, setMovies] = useState(MovieData)

  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/trailer/:id">
          <Trailer movies={movies} />
        </Route>
        <Route exact path="/">
          <NavBar
            setTitleSearch={setTitleSearch}
            setMovies={setMovies}
            movies={movies}
          />

          <RatingSearch setRateSearch={setRateSearch} rateSearch={rateSearch} />

          <MovieList
            movies={movies}
            titleSearch={titleSearch}
            rateSearch={rateSearch}
          />
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default App
