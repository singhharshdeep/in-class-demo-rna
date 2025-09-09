import React from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types";

export default function Home() {
  const appName = "MovieCatalog";
  const movie: Movie = {
    title: "Forrest Gump",
    overview:
      "The presidencies of Kennedy and Johnson are shown through the eyes of an Alabama man with an IQ of 75.",
    poster_path:
      "https://originalvintagemovieposters.com/wp-content/uploads/2016/08/Forrest-Gump-5048.jpg",
    release_date: "1994-07-06",
    vote_average: 8.8,
  };

  const movie2: Movie = {
    title: "The Godfather",
    overview: "lorem ipsum",
    poster_path:
      "https://originalvintagemovieposters.com/wp-content/uploads/2016/08/Forrest-Gump-5048.jpg",
    release_date: "1978-11-06",
    vote_average: 9.5,
  };

  return (
    <div>
      <Navbar name="MovieCatalog" />
      <MovieCard movie={movie} />
      <MovieCard movie={movie2} />
    </div>
  );
}
