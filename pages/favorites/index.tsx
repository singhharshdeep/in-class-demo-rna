import MovieCard from "@/components/MovieCard";
import { AuthContext } from "@/context/AuthContext";
import { MoviesContext } from "@/context/MoviesContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function FavoritesPage() {
  const { favoriteMovies, addToFavorites, removeFromFavorites } =
    useContext(MoviesContext);
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

//   useEffect(() => {
//     const isLoggedIn = window.localStorage.getItem("user") !== null;
//     if (isLoggedIn) {
//       router.replace("/auth");
//     }
//   }, [isLoggedIn]);

  return (
    <>
      <div
        style={{
          fontSize: 32,
          marginTop: 16,
        }}
      >
        Favorites
      </div>

      {favoriteMovies.length > 0 ? (
        favoriteMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            addToFavorites={addToFavorites}
            isFavorite={true}
            removeFromFavorites={removeFromFavorites}
          />
        ))
      ) : (
        <p style={{ marginTop: 16 }}>No favorites found</p>
      )}
    </>
  );
}
