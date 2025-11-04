import { MoviesContext } from "@/context/MoviesContext";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function MovieDetailsPage() {
    const router = useRouter();
    const { id } = router.query;

    const { movies } = useContext(MoviesContext);

    const foundMovie = movies.find((movie) => movie.id.toString() === id);

    return foundMovie ? (
        <div>
            <h1>{foundMovie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w300${foundMovie.poster_path}`} />
            <p>{foundMovie.overview}</p>
            <p>Release Date: {foundMovie.release_date}</p>
            <p>Rating: {foundMovie.vote_average}/10</p>
        </div>
    ) : (
        <div>Movie not found</div>
    )

}