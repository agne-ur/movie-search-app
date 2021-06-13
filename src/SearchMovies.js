import React from "react";
import "./SearchMovies.css";

function SearchMovies() {
  async function searchMovies(e) {
    e.preventDefault();
    console.log("submitting");

    const query = "Jurassic Park";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=25e7eb8b18f141a45a0b57cea814d0c1&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch(err) {
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
        ></input>
        <button className="button" type="submit">
          Search!
        </button>
      </form>
    </div>
  );
}

export default SearchMovies;
