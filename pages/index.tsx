import React, { useContext, useState } from "react";
import MovieCard from "../components/MovieCard";
import { MoviesContext } from "@/context/MoviesContext";
import { AuthContext } from "@/context/AuthContext";

export default function Home() {
  const { movies, favoriteMovies, addToFavorites, removeFromFavorites } =
    useContext(MoviesContext);
  const { isLoggedIn } = useContext(AuthContext);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  function searchMovies(searchTerm: string) {
    const moviesToKeep = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredMovies(moviesToKeep);
  }

  return (
    <div>
      <input
        style={{
          backgroundColor: "white",
          marginTop: 16,
          color: "black",
        }}
        onChange={(event) => searchMovies(event.target.value)}
        placeholder="Search Movies"
      />
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            addToFavorites={addToFavorites}
            isFavorite={favoriteMovies.includes(movie)}
            removeFromFavorites={removeFromFavorites}
          />
        ))
      ) : (
        <p style={{ marginTop: 16 }}>No movies found</p>
      )}
    </div>
  );
}
