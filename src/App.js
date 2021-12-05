import React, { useState } from 'react';

import { moviesData } from './Components/MoviesData';
import SearchMovie from './Components/SearchMovie/SearchMovie';
import MoviesList from './Components/MovieList/MovieList';
import AddMovie from './Components/AddMovie/AddMovie';
import NavBar from './Components/NavBar/NavBar';
//@Adam-Azouz
import './App.css';
//@Adam-Azouz
function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };
//@Adam-Azouz
  return (
    <div >
      <NavBar />
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
    </div>
  );
}

export default App;