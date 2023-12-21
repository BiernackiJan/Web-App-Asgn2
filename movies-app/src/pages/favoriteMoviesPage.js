import React, { useContext } from "react";
import PageTemplate from "../components/templateListPage";
import { MoviesContext } from "../contexts/moviesContext";
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteMoviesPage = () => {
  const context = useContext(MoviesContext);
  context.getFavorites()
  const { favorites } = context

  const movies = favorites



  // if (isLoading) {
  //   return <Spinner />; // Show a loading spinner while data is being fetched
  // }

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;