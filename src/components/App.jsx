import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "./MovieCast/MovieCast";
// import MovieReviews from "./MovieReviews/MovieReviews";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import "normalize.css";
//  import css from "./App.module.css";

function App({ movies, errorMessage }) {
  // Приймаємо props як об'єкт
  return (
    <div>
      {<Navigation />}
      <Routes>
        <Route path="/" element={<HomePage errorMessage={errorMessage} />} />
        <Route path="/movies" element={<MoviesPage movies={movies} />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
