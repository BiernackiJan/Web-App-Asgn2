import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/movies-api";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import Spinner from '../spinner'


const TemplateMoviePage = ({ movie, children}) => {
  const { id } = useParams();
  const { data , error, isLoading, isError, refetch } = useQuery(
    ["images", { id: id }],
    () => getMovieImages(movie.id)
  );

  
  React.useEffect(() => {
    // Refetch data when the movie ID changes
    refetch();
  }, [id, refetch]);

  if (isLoading) {
    return <Spinner />;
  }


  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const firstImage = data.posters.slice(0,2)

  return (
    <>
      <MovieHeader movie={movie} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList 
                cols={1}>
                {firstImage?.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.poster_path}
                    />
                    </ImageListItem>
                ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};


export default TemplateMoviePage;