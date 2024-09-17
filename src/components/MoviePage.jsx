import React, { useEffect, useState } from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import Footer from "./Footer"
import Shimmer from "../Shimmer";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [language, setLanguage] = useState("en");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmVhYzMzZGRiM2ZhOGU1NWQyY2IxMTRlZGYzMDA1ZCIsIm5iZiI6MTcyMzIyMTM4Mi4xNDYzNTksInN1YiI6IjY2YjY0NDEwMTQ3OGM5ZGNlYjQ1NWM2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5oOAwUc8u1zborpVkbzuU9XuBp5YuXHkGqwsI3ChZUM",
    },
  };

  const fetchMovies = async (lang) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=${lang}`,
        options
      );
      const result = await response.json();
      console.log(result.results)

      const formattedMovies = result.results.map((movie) => ({
        title: movie.title,
        image: movie.poster_path,
        rating: movie.vote_average,
        dateOfRelease : movie.release_date,
      }));
      setMovies(formattedMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to load movies. Please try again later.");
    }
  };

  useEffect(() => {
    fetchMovies(language);
  }, [language]);

  return  (
    <>
      <Header onLanguageChange={setLanguage} />
      {movies.length === 0 ? (<Shimmer/>): (<MovieList movies={movies} />) }
      
      <Footer/>
    </>
  );
};

export default MoviesPage;
