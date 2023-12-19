import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useState} from "react";
import { getCast, getActorImages } from "../../api/movies-api";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
import { useParams } from "react-router-dom";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";
import ViewMore from "../cardIcons/viewMore";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {
  const {id} = useParams(); 
  const {data: credits} = useQuery(["credits", {id}], () => getCast(id))

  
  const { data: bestActors, error: bestActorsError } = useQuery(
    ["bestActors", id],
    () => credits?.cast.slice(0, 10),
    {
      enabled: !!credits, // only run if credits exists
    }
  );

  const { data: actorsImages, error: actorsImagesError } = useQuery(
    ["actorsImages", bestActors?.map((actor) => actor.id)],// array of actor ids
    () =>
      Promise.all(// get all images for all actors
        bestActors?.map((actor) => getActorImages(actor.id)) || [] // if bestActors is undefined, pass an empty array
      ).then((images) =>
        images.map((image) => ({// map the results to an array of objects with id and url properties
          id: image.file_path,// use the file_path as the id
          url: 'https://image.tmdb.org/t/p/w200/${image.file_path}', // use the file_path as the url
        }))
      )
  );

  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Production Country" sx={{...chip}} color="primary" />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}


      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </Paper>

      <Typography variant="h5" component="h3">
        Top Actors
      </Typography>
      <Grid container spacing={2}>
        {bestActors && <ActorList actors={bestActors} images={actorsImages} />}
        <ViewMore movie={movie}/>
      </Grid>
      
      </>
  );
};
export default MovieDetails ;