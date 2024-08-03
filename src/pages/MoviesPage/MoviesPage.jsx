import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchMovies } from "../../gallery-api";
import SearchForm from "../../components/SearchForm/SearchForm";
import Loader from "../../components/Loader/Loader";
import MoviesList from "../../components/MoviesList/MoviesList";
import css from "./MoviesPage.module.css";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState("");

  const handleSearch = async (newTopic, errorMessage) => {
    setMovies([]);
    setTopic(newTopic);
    if (!topic) {
      toast.error(errorMessage || "Please enter search term!");
      return;
    }
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovies(topic, errorMessage);
        setMovies((prevImages) => {
          return [...prevImages, ...data.results];
        });
        if (data.results.length === 0) {
          toast.error(
            errorMessage ||
              "Sorry, there are no images matching your search query. Please try again!"
          );
        }
      } catch (error) {
        setError(true);
        toast.error(
          errorMessage ||
            "Oops! An error occurred while fetching the images. Please try again!"
        );
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  };

  return (
    <div className={css.moviesPage}>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Toaster />}
      {movies.length > 0 && <MoviesList items={movies} />}
    </div>
  );
}

export default MoviesPage;
