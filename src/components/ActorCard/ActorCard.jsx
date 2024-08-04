import css from "./ActorCard.module.css";

const ActorCard = ({ actor }) => {
  return (
    <div className={css.actorCard}>
      <img
        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
        alt={actor.name}
      />
      <p>
        {actor.name} <br />
        {actor.character && (
          <>
            as <span>{actor.character}</span>
          </>
        )}
      </p>
    </div>
  );
};
export default ActorCard;
