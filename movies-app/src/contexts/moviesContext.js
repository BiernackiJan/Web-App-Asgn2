import React, { useContext, useState, useEffect} from "react";
import { addFavourites, getFavourites, getWatchList, addToList, removeFavourite, removeFromList } from "../api/movies-api";
import { AuthContext } from "./authContext";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const { userName } = useContext(AuthContext)
  const [favorites, setFavorites] = useState( [] )
  const [watchList, setWatchList] = useState( [] )
  

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
    
    getList()
    return (result.code === 201) ? true : false;
  };

  const getList = async () => {
    const watch = await getWatchList(userName)
    setWatchList(watch)
  }


  const [myReviews, setMyReviews] = useState( {} ) 

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  
  // We will use this function in a later section
  const removeFromFavorites = async (movie) => {
    removeFavourite(movie , userName)
    getFavorites()
  };

  const removeFromWatchList =  (movie) => {
    removeFromList(movie , userName)
    getList()
  };



  useEffect(() => {
    const fetchData = async () => {
      await getFavorites();
      await getList();
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
        addToFavorites,
        getFavorites,
        addToWatchList,
        removeFromFavorites,
        removeFromWatchList,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;