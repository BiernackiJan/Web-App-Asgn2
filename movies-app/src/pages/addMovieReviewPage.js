import React, { useContext } from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from "../components/reviewForm";
import { useQuery } from "react-query";
import { getMovie } from "../api/movies-api";
import Spinner from "../components/spinner";
import { MoviesContext } from "../contexts/moviesContext";

const WriteReviewPage = (props) => {
  const context = useContext(MoviesContext)
  const id = context.theMovie.id

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    () => getMovie(id)
  );


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // if (isLoading) {
  //   return <Spinner />;
  // }

  // if (isError) {
  //   return <h1>{error.message}</h1>;
  // }
  return (
    <PageTemplate movie={movie}>
      <ReviewForm movie={movie} />
    </PageTemplate>
  );
};

export default WriteReviewPage;