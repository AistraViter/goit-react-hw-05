import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./HomePage.module.css";

function HomePage(errorMessage) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovies(errorMessage);
        setMovies((prevMovies) => {
          return [...prevMovies, ...data.results];
        });
        if (data.results.length === 0) {
          toast.error(
            errorMessage ||
              "Sorry, there are no movies matching your search query. Please try again!"
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
  }, [errorMessage]);

  return (
    <div className={css.homePage}>
      <h2>Trending today</h2>
      {loading && <Loader />}

      {movies.length > 0 && <ImageGallery items={movies} />}
      {error && <Toaster />}
    </div>
  );
}

export default HomePage;
