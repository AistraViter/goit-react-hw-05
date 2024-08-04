import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import api from "../../gallery-api";
import css from "./MovieDetailsPage.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import clsx from "clsx";

const detailsItem = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function MovieDetailsPage(errorMessage) {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieCast, setMovieCast] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    async function getMovieById() {
      try {
        setLoading(true);
        setError(false);
        const data = await api.fetchMovieById(movieId, errorMessage);
        setMovieInfo(data);
      } catch (error) {
        setError(true);
        toast.error(
          errorMessage ||
            "Oops! An error occurred while fetching the movie information. Please try again!"
        );
      } finally {
        setLoading(false);
      }
    }
    getMovieById();
  }, [movieId, errorMessage]);

  useEffect(() => {
    async function getMovieCast() {
      try {
        setLoading(true);
        setError(false);
        const data = await api.fetchMovieCast(movieId, errorMessage);
        setMovieCast(data.cast);
      } catch (error) {
        setError(true);
        toast.error(
          errorMessage ||
            "Oops! An error occurred while fetching the movie's cast. Please try again!"
        );
      } finally {
        setLoading(false);
      }
    }
    getMovieCast();
  }, [movieId, errorMessage]);

  useEffect(() => {
    async function getMovieReviews() {
      try {
        setLoading(true);
        setError(false);
        const data = await api.fetchMovieReviews(movieId, errorMessage);
        setMovieReviews(data.results);
      } catch (error) {
        setError(true);
        toast.error(
          errorMessage ||
            "Oops! An error occurred while fetching the movie's reviews. Please try again!"
        );
      } finally {
        setLoading(false);
      }
    }
    getMovieReviews();
  }, [movieId, errorMessage]);

  return (
    movieInfo && (
      <div className={css.movieDetailsPage}>
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
          <li>
            {
              <NavLink to="credits" className={detailsItem}>
                Cast
              </NavLink>
            }
          </li>
          <li>
            {
              <NavLink to="reviews" className={detailsItem}>
                Reviews
              </NavLink>
            }
          </li>
        </ul>
        {movieCast.length > 0 && (
          <Routes>
            <Route path="credits" element={<MovieCast items={movieCast} />} />
            <Route
              path="reviews"
              element={<MovieReviews items={movieReviews} />}
            />
          </Routes>
        )}
        {error && <Toaster />}
      </div>
    )
  );
}

export default MovieDetailsPage;

{
  /* <Outlet context={movieCast.length > 0 ? movieCast : null} /> */
}
