import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const MovieBox = React.memo(({ Title, Year, Poster, imdbID }) => {
  return (
    <Link to={`/single/${imdbID}`} className="movie">
      <article>
        <img src={Poster ? Poster : url} alt={Title} />
        <div className="movie-info">
          <h4 className="title">{Title}</h4>
          <p>{Year}</p>
        </div>
      </article>
    </Link>
  );
});

const Movies = () => {
  const { movies, loading } = useGlobalContext();
  if (loading || !movies) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie, index) => {
        return <MovieBox key={index + movie.imdbID} {...movie} />;
      })}
    </section>
  );
};

export default Movies;
