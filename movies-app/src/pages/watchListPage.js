import React, { useContext } from "react";
import PageTemplate from "../components/templateListPage";
import { MoviesContext } from "../contexts/moviesContext";
import RemoveFromWatchList from "../components/cardIcons/removeFromWatchList";
import WriteReview from "../components/cardIcons/writeReview";

const WatchListPage = () => {
  const context = useContext(MoviesContext);
  context.getTheList()
  const { watchList } = context


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