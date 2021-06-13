import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./SearchMovies.css";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  async function searchMovies(e) {
    e.preventDefault();
    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=25e7eb8b18f141a45a0b57cea814d0c1&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Enter the movie name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="button" type="submit">
          Search!
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default SearchMovies;
