import React from 'react';
import '../SearchMovie/SearchMovie.css'
import Rate from '../Rate';
//@Adam-Azouz
//@Adam-Azouz
//@Adam-Azouz
const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  return (
    <div>
      <div className="search-container">
        <h4 style={{color:"white",alignText:"left"}}>Barre de Recherche. . . . :</h4>
        <input
          type="text"
          
          placeholder="Search Here ..."
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <div className="rating-search">
          <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
      </div>
    </div>
  );
};
//@Adam-Azouz
export default SearchMovie;