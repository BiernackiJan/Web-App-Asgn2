import React from "react";
import PageTemplate from '../components/templateMovieCastPage';
import { useQuery } from 'react-query';
import { getCast } from "../api/movies-api";
import { useParams } from "react-router-dom";
import Spinner from '../components/spinner';


const MovieCastPage = () => {
    const { id } = useParams(); 
    const {data: credits, error, isLoading, isError } = useQuery(
        ["credits", {id: id}], 
        () => getCast(id))
    
    if (isLoading) {
        return <Spinner />
    }
        
    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movieCast = credits

    return (
        <>
        <PageTemplate
            movieCast={movieCast}
            title={'All Movie Cast'}
        />
        </>
        );
    };

export default MovieCastPage;