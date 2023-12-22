import React, { useContext } from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import { MoviesContext } from "../../contexts/moviesContext";

const WriteReviewIcon = ({ movie }) => {
  const { setMovie } = useContext(MoviesContext)

  const handleWriteReviewClick = () => {
    setMovie(movie);
  };
  return (
    <Link
      to={{
        pathname: "/reviews/form",
        state: {
          movieId: movie.id,
        },
      }}
    >
    <div style={{flexGrow: 2}} onClick={handleWriteReviewClick}>
    <Tooltip title="Write a review" placement="bottom" arrow >
      <RateReviewIcon color="primary" fontSize="large" />
    </Tooltip>
    </div>
    </Link>
  );
};

export default WriteReviewIcon;