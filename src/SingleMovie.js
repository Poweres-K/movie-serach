import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { dataReturn: movieDetail, loading } = useFetch(`&i=${id}`);

  if (loading) {
    return <div className="loading"></div>;
  }
  const { Poster, Title, Plot, Year } = movieDetail;
  return (
    <section className="single-movie">
      <img src={Poster} alt={Title} />
      <div className="single-movie-info">
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link to="/" className="btn">
          Back to Movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
