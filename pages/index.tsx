import React, { useContext, useState } from "react";
import MovieCard from "../components/MovieCard";
import { MoviesContext } from "@/context/MoviesContext";
import { AuthContext } from "@/context/AuthContext";

export default function Home() {
  const { movies, favoriteMovies, addToFavorites, removeFromFavorites } =
    useContext(MoviesContext);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  function searchMovies(searchTerm: string) {
    const moviesToKeep = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredMovies(moviesToKeep);
  }

  return (
    <div className="bg-gray-800">
      <input
        className="bg-transparent border-gray-700 border-2 text-white p-4 mt-4 w-3xl"
        onChange={(event) => searchMovies(event.target.value)}
        placeholder="Search Movies"
      />
      {filteredMovies.length > 0 ? (
        <div className="mt-8 grid grid-cols-4">
          {filteredMovies.map((movie) => (
            <MovieCard
              movie={movie}
              addToFavorites={addToFavorites}
              isFavorite={favoriteMovies.includes(movie)}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      ) : (
        <p style={{ marginTop: 16 }}>No movies found</p>
      )}
    </div>
  );
}
