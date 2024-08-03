import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Movies from "../pages/MoviesPage/MoviesPage";
import Navigation from "./Navigation/Navigation";
import "normalize.css";
//  import css from "./App.module.css";

function App(errorMessage) {


  return (
    <div>
      {<Navigation />}
      <Routes>
      <Route path="/" element={<HomePage errorMessage={errorMessage} />} />
      <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
