import { useContext } from "react";
import { Movie } from "../types";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";

type MovieCardProps = {
  movie: Movie;
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movie: Movie) => void;
  isFavorite?: boolean;
};

export default function MovieCard({
  movie,
  addToFavorites,
  removeFromFavorites,
  isFavorite = false,
}: MovieCardProps) {
  const router = useRouter();
  function handleClick() {
    router.push(`/movies/${movie.id}`);
  }

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div
      className="transition hover:scale-105 border w-[300px] h-[450px] mt-4 mb-12 rounded-2xl border-gray-700"
      onClick={handleClick}
    >
      <img
        className="rounded-tl-2xl rounded-tr-2xl h-[300px] w-[300px]"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="mt-2 flex flex-col justify-center items-center">
        <div className="text-xl">{movie.title}</div>
        <div>{movie.release_date}</div>
        <div>Rating: {movie.vote_average}</div>
        {isLoggedIn && (
          <button
            className="z-[100] bg-white rounded-full text-gray-800 p-2 hover:bg-gray-200"
            onClick={(e) => {
              e.stopPropagation();
              isFavorite ? removeFromFavorites(movie) : addToFavorites(movie);
            }}
          >
            {isFavorite ? "Remove From Favorites" : "Add To Favorite"}
          </button>
        )}
      </div>
    </div>
  );
}
