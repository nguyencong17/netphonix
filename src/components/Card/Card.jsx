import Link from "next/link";
import PropTypes from "prop-types";

export const Card = (props) => {
  const { movie } = props;
  return (
    <div>
      <Link href={`/movie/${movie.id}`}>
        <div key={movie.id} className="p-4 bg-[#20283E] rounded-[8px]">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <h1>{movie.title}</h1>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object,
};
