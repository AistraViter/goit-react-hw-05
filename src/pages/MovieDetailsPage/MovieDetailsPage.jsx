import { Link, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";

function MovieDetailsPage() {
  const { movieId } = useParams();

  return (
    <div className={css.movieDetailsPage}>
      <div>Now showing product with id - {movieId}</div>
      <Link to="/" className={css.goBack}>
        <FaArrowLeftLong /> Go back
      </Link>
      <h3>The Lion King (2019)</h3>
      <p>User Score: 90%</p>
      <h4>Overview</h4>
      <p>
        Студія Marvel представляє свою найприкрішу помилку на сьогоднішній день
        – «Дедпул і Росомаха». Безпорадний Вейд Вілсон тяжко трудиться у
        цивільному житті. Його дні як найманця з гнучкими моральними орієнтирами
        Дедпула позаду. Коли його рідний світ стикається зі Среальною загрозою,
        Вейд неохоче знову вдягає костюм, як і значно більш неохочий…
        неохочіший? Найнеохочіший? Він повинен розвести упертого Росомаху на
        сек...Секундочку, ці синопсиси такі тупі...
      </p>
      <h4>Genres</h4>
      <p>Adventure Animation Drama</p>
      <h4>Addtional information</h4>
      <ul>
        <li> {<Link to="/">Cast</Link>}</li>
        <li> {<Link to="/">Reviews</Link>}</li>
      </ul>
    </div>
  );
}

export default MovieDetailsPage;
