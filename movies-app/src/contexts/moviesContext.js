import React, { useContext, useState, useEffect} from "react";
import { addFavourites, getFavourites, getWatchList, addToList, removeFavourite, removeFromList, addReview, getDbReviews } from "../api/movies-api";
import { AuthContext } from "./authContext";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const { userName } = useContext(AuthContext)
  const [favorites, setFavorites] = useState( [] )
  const [watchList, setWatchList] = useState( [] )
  const [myReviews, setMyReviews] = useState( [] ) 
  const [theMovie, setMovie] = useState( {} )

  

  const addToFavorites = async (movie) => {
    const result = await addFavourites(movie, userName);
    
    getFavorites()
    return (result.code === 201) ? true : false;
  };

  const getFavorites = async () => {
    const fav = await getFavourites(userName)
    setFavorites(fav)
  }

  const addToWatchList = async (movie) => {
    const result = await addToList(movie, userName);
    
    getTheList()
    return (result.code === 201) ? true : false;
  };

  const getTheList = async () => {
    const watch = await getWatchList(userName)
    setWatchList(watch)
  }

  const addToReviews = async (movie, review) => {
    const result = await addReview(movie, review);
    
    getFavorites()
    return (result.code === 201) ? true : false;
  };


  const getMyReviews = async (movie) => {
    const rev = await getDbReviews(movie.id)
    setMyReviews(rev)
  }

  
  // We will use this function in a later section
  const removeFromFavorites = async (movie) => {
    removeFavourite(movie , userName)
    getFavorites()
  };

  const removeFromWatchList =  (movie) => {
    removeFromList(movie , userName)
    getTheList()
  };




  useEffect(() => {
    const fetchData = async () => {
      await getFavorites();
      await getTheList();
    };

    if (userName) {
      fetchData();
    }
  }, [userName]);
  // const getAll = () =>{
  //   getWatchList()
  //   getFavorites()
  // };

  // useEffect(() => {
  //   getAll();
  // }, [userName]);

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        watchList,
        myReviews,
        addToFavorites,
        getFavorites,
        addToWatchList,
        getTheList,
        removeFromFavorites,
        removeFromWatchList,
        addToReviews,
        getMyReviews,
        setMovie,
        theMovie
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;