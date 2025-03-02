import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{movie.Title}</h3>
      <p className="text-gray-400">{movie.Year}</p>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="inline-block mt-2 text-blue-400 hover:text-blue-300"
      >
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
