//------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------TO APP-------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
  

// export const getMovie = (args) => {
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

// export const getUpcomingMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };
  
// export const getGenres = async () => {
//   return fetch(
//     "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
//       process.env.REACT_APP_TMDB_KEY +
//       "&language=en-US"
//   ).then( (response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//   });
// };

// export const getMovieImages = ({ queryKey }) => {
//   const [, idPart] = queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then( (response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();

//   })
//   .catch((error) => {
//     throw error
//  });
// };

// export const getMovieReviews = (id) => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   )
//     .then((res) => res.json())
//     .then((json) => {
//       // console.log(json.results);
//       return json.results;
//     });
// };

// export const getTopRatedMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// }; 

// export const getNowPlayingMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// }; 

// export const getCast = (movieId) => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

// export const getActorImages = (id) => {
//   return fetch(
//     `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then( (response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();

//   })
//   .catch((error) => {
//     throw error
//  });
// };

// export const getActorsWeekly = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/trending/person/week?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };

// export const getActorsDaily = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };

// export const getActor = (id) => {
//   return fetch(
//     `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data)
//       return data;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

// export const getActorCredits = (id) => {
//   return fetch(
//     `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data)
//       return data;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };


// export const getRecommendedMovies = (movie_id) => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data)
//     return data;
//   })
//   .catch((error) => {
//      throw error
//   });
// }; 

// export const getPopularActors = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };



// export const getSortedMovies = async (sort) => {
//   const totalPagesToFetch = 10;
//   const moviePromises = [];

//   for (let page = 1; page <= totalPagesToFetch; page++) {
//     moviePromises.push(
//       fetch(
//         `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}${sort}`
//       ).then((response) => {
//         if (!response.ok) {
//           throw new Error(response.json().message);
//         }
//         return response.json();
//       })
//     );
//   }

//   return Promise.all(moviePromises)
//     .then((moviesData) => moviesData.flatMap((data) => data.results))
//     .catch((error) => {
//       throw error;
//     });
// };





//------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------TO API---------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

export const getMovies = async () => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    'http://localhost:8080/api/movies', {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};


export const getUpcomingMovies = async () => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/upcoming', {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};


export const getMovie = async (id) => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    `http://localhost:8080/api/movies/${id}`, {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getMovieImages = async (id) => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    `http://localhost:8080/api/movies/${id}/images`, {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getGenres = async () => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/genres', {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};





export const getMovieReviews = async (id) => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    `http://localhost:8080/api/movies/${id}/reviews`, {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};



export const getTopRatedMovies = async () => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/topRated', {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getNowPlayingMovies = async () => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/nowPlaying', {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getCast = async (id) => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    `http://localhost:8080/api/movies/${id}/cast`, {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getActorImages = async (id) => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    `http://localhost:8080/api/movies/actor/${id}/image`, {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getActorsWeekly = async () => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    'http://localhost:8080/api/movies/actors/weekly', {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getActorsDaily = async () => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    'http://localhost:8080/api/movies/actors/daily', {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getActor = async (id) => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    `http://localhost:8080/api/movies/actor/${id}`, {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getActorCredits = async (id) => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    `http://localhost:8080/api/movies/actor/${id}/credits`, {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};


export const getRecommendedMovies = async (id) => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    `http://localhost:8080/api/movies/${id}/recommended`, {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getPopularActors = async () => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    'http://localhost:8080/api/movies/actors/popular', {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};


export const getSortedMovies = async (orderFilter) => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(
    `http://localhost:8080/api/movies/sorted/${orderFilter}`, {
      
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};


export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};



export const addFavourites = async (movie, username) => {
  console.log(window.localStorage.getItem('token'))
  console.log(movie, username)
  const response = await fetch('http://localhost:8080/api/users/addFavourites', {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ movie: movie, username: username })
  });
  return response.json();
};

export const getFavourites = async (username) => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(`http://localhost:8080/api/users/getFavourites/${username}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
      },
      method: 'get',
  });
  return response.json();
};


export const addToList = async (movie, username) => {
  console.log(window.localStorage.getItem('token'))
  console.log(movie, username)
  const response = await fetch('http://localhost:8080/api/users/addToWatchList', {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ movie: movie, username: username })
  });
  return response.json();
};

export const getWatchList = async (username) => {
  console.log(window.localStorage.getItem('token'))
  const response = await fetch(`http://localhost:8080/api/users/getWatchList/${username}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
      },
      method: 'get',
  });
  return response.json();
};

export const removeFavourite = async (movie, username) => {
  console.log(window.localStorage.getItem('token'))
  console.log(movie, username)
  const response = await fetch('http://localhost:8080/api/users/removeFavourite', {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ movie: movie, username: username })
  });
  return response.json();
};


export const removeFromList = async (movie, username) => {
  console.log(window.localStorage.getItem('token'))
  console.log(movie, username)
  const response = await fetch('http://localhost:8080/api/users/removeFromList', {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ movie: movie, username: username })
  });
  return response.json();
};