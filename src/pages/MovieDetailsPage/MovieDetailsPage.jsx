import { useState, useEffect } from "react";
import { NavLink, Link, Outlet, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import api from "../../gallery-api";
import css from "./MovieDetailsPage.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";

function MovieDetailsPage(errorMessage) {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    async function getMovieById() {
      try {
        const data = await api.fetchMovieById(movieId, errorMessage);
        setMovieInfo(data);
      } catch (error) {
        setError(true);
        toast.error(
          errorMessage ||
            "Oops! An error occurred while fetching the movies. Please try again!"
        );
      } finally {
        setLoading(false);
      }
    }
    getMovieById();
  }, [movieId, errorMessage]);

  return (
    movieInfo && (
      <div className={css.movieDetailsPage}>
        {console.log("getMovieById:", movieInfo)}
        {loading && <Loader />}
        <Link to="/" className={css.goBack}>
          <FaArrowLeftLong /> Go back
        </Link>
        <div className={css.movieInfoContainer}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`}
            alt={movieInfo.title}
            className={css.movieImage}
          />
          <div className={css.textContainer}>
            <h3>
              {movieInfo.title} ({movieInfo.release_date.split("-")[0]})
            </h3>
            <p>User Score: {Math.round(movieInfo.vote_average * 10)}%</p>
            <h4>Overview</h4>
            <p>{movieInfo.overview}</p>
            <h4>Genres</h4>
            <p>{movieInfo.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>

        <h4>Addtional information</h4>
        <ul>
          <li> {<NavLink to="credits">Cast</NavLink>}</li>
          <li> {<NavLink to="reviews">Reviews</NavLink>}</li>
        </ul>
        <Outlet />

        {error && <Toaster />}

      </div>
    )
  );
}

export default MovieDetailsPage;
