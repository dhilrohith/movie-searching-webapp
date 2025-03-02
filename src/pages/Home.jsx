import { useState, useEffect } from "react";
import { fetchMovies } from "../services/api";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import FilterDropdown from "../components/FilterDropDown";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Batman");
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");

  useEffect(() => {
    fetchMovies(query, page, type).then((data) => {
      if (data && data.Search) setMovies(data.Search);
    });
  }, [query, page, type]);

  return (
    <div className="container mx-auto p-4">
      {/* Top Controls: Search + Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        <SearchBar onSearch={setQuery} />
        <FilterDropdown onSelectType={setType} />
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination currentPage={page} onPageChange={setPage} />
      </div>
    </div>
  );
};

export default Home;
