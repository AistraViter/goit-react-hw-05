import css from "./MovieCast.module.css";

function MovieCast() {
  return (
    <div className={css.movieCast}>
      {console.log("MovieCast:")}
      <h3>Акторський склад</h3>
    </div>
  );
}

export default MovieCast;
