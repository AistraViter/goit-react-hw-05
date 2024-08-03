import css from "./MoviesList.module.css";

const MoviesList = ({ items }) => {
  return (
    <div>
      <ul className={css.moviesList}>
        {items.map((item) => (
          <li key={item.id}>
            { <a 
            // href={`/movies/${item.poster_path}`}
            >{item.title}</a> }
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesList;
