import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then((data) => {
      setMovie(data);
    });
  }, [id]);

  if (!movie) return <p className="p-4">Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Poster */}
        <div className="md:w-1/3">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="rounded-md shadow-lg"
          />
        </div>

        {/* Movie Info */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-2">
            {movie.Title} ({movie.Year})
          </h2>
          <p className="text-gray-300 mb-4">{movie.Plot}</p>
          <p className="mb-2">
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p className="mb-2">
            <strong>IMDB Rating:</strong> {movie.imdbRating}
          </p>
          <p className="mb-2">
            <strong>Cast:</strong> {movie.Actors}
          </p>
          <p className="mb-2">
            <strong>Director:</strong> {movie.Director}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
