import React, { useContext } from "react";
import PageTemplate from "../components/templateListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/movies-api";
import Spinner from '../components/spinner'
import RemoveFromWatchList from "../components/cardIcons/removeFromWatchList";
import WriteReview from "../components/cardIcons/writeReview";

const WatchListPage = () => {
  const { watchList } = useContext(MoviesContext);


  const movies = watchList


  return (
    <PageTemplate
      title="Must Watch"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromWatchList movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default WatchListPage;