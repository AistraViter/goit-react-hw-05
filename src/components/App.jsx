import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Navigation from "./Navigation/Navigation";
import "normalize.css";
// import css from "./App.module.css";

function App() {
  return (
    <div>
      {<Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
