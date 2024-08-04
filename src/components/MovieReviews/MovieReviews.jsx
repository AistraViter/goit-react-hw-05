import css from "./MovieReviews.module.css";

function MovieReviews() {
  return (
    <div className={css.movieReviews}>
      {console.log("MovieReviews:")}
      <h3>Відгуки</h3>
    </div>
  );
}

export default MovieReviews;
