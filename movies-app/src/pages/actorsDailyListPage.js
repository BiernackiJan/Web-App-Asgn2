import React from "react";
import { getActorsDaily } from "../api/movies-api";
import PageTemplate from '../components/templateActorsListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';


const ActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getActorsDaily)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const actors = data.results;
  
  return (
    <PageTemplate
      title="Daily Trending Actors"
      actors={actors}
    />
  );
};
export default ActorsPage;
