import { Link } from "react-router-dom";
import css from "./MovieList.module.css";


const MoviesList = ({ items }) => {
  return (
    <div>
      <ul className={css.moviesList}>
        {items.map((item) => (
          <li key={item.id}>{<Link to="/movies/id" >{item.title}</Link>}</li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesList;

// href={`/movies/${item.poster_path}`}
