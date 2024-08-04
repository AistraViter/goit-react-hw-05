import css from "./MovieReviews.module.css";

function MovieReviews({ items }) {
  return (
    <div className={css.movieReviews}>
      {items && items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <p>
                <span> {item.author} </span> <br />
                {item.content}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews for this movie.</p>
      )}
    </div>
  );
}

export default MovieReviews;
