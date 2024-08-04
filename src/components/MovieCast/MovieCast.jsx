import ActorCard from "../ActorCard/ActorCard";
import css from "./MovieCast.module.css";

function MovieCast({ items }) {
  return (
    <div className={css.movieCast}>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <ActorCard actor={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available.</p>
      )}
    </div>
  );
}

export default MovieCast;


{/* <h3>Акторський склад</h3>
{console.log("Значення items: ", items)}
{console.log("Довжина items: ", items.length)} */}
