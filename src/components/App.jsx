import { Routes, Route, NavLink } from "react-router-dom";
import clsx from 'clsx';
// import Home from "../pages/Home/Home";
// import Movies from "../pages/Movies/Movies";
import css from "./App.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
