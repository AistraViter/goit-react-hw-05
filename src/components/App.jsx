import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import "normalize.css";
//  import css from "./App.module.css";

function App(movies, errorMessage) {
  return (
    <div>
      {<Navigation />}
      <Routes>
        <Route path="/" element={<HomePage errorMessage={errorMessage} />} />
        <Route path="/movies" element={<MoviesPage movies={movies} />} />
        <Route path="/movies/id" element={<MovieDetailsPage/>} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
