# Assignment 2 - Web API.

Name: Jan Biernacki

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Changed api imports in app to link all to my Api
 + Adding a movie to favourites and WatchList saves it to mongoDB
 + Favourites get saved and retrieved for the logged in user same with watchList
 + Adding a review for movie gets saved to mongoDB. Creating a review for a movie will list it in the reviews for the movie.
 + Protected routes, can only be accessed when user logs in.

## Setup requirements.

Run npm install

Navigate to movies-api and run npm run dev
Navigate in a separate terminal to movies-app and run npm start

## API Configuration

Create two `.env` files. 

One in movies-api:
_____________________
NODE_ENV=development
PORT=8080
HOST=
MONGO_DB=YourMongoURL
TMDB_KEY=YourTMDBKey
SECRET=YourJWTSecret
_____________________


One in movies-app:
______________________
REACT_APP_TMDB_KEY=YourReactTMDBKey
FAST_REFRESH=false
______________________

## API Design

- /api/movies | GET | Gets a list of movies 
- /api/movies/tmdb/upcoming | GET | Gets a list of upcomming movies from tmdb
- /api/movies/tmdb/genres | GET | Get a list of all genres 
- /api/movies/:id/images | GET | Gets a list of movie images
- /api/movies/:id/reviews | GET | Gets a list of movie reviews from tmdb
- /api/movies/tmdb/topRated | GET | Gets a list of top rated movies
- /api/movies/tmdb/nowPlaying | GET | Gets a list of now playing movies
- /api/movies/:id/cast | GET | Gets a list of cast for movie
- /api/movies/actor/:id/image | GET | Gets actor image
- /api/movies/actors/weekly | GET | Gets a list of weekly actors
- /api/movies/actors/daily | GET | Gets a list of daily actors
- /api/movies/actor/:id | GET | Gets an actor
- /api/movies/actor/:id/credits | GET | Gets actor credits
- /api/movies/:id/recommended | GET | Gets a list of recommendations based on movie
- /api/movies/actors/popular | GET | Gets a list of popular actors
- /api/movies/sorted/:sort | GET | Gets a list of sorted movies by specified filter

- /api/movies/:id/myReviews | GET | Gets a list of reviews from mongoDB
- /api/movies/addReview | POST | Adds movie review by saving in mongoDB


- /api/users | GET | Gets all users
- /api/users | POST | Registers or Authenticates user

- /api/users/addFavourites | POST | Adds movie to users favourite list in mongoDB
- /api/users/getFavourites/:username | GET | Gets user favourites based on username
- /api/users/removeFavourite | POST | Removes movie from user favourites in mongoDB

- /api/users/addToWatchList | POST | Adds movie to users watch list in mongoDB
- /api/users/getWatchList/:username | GET | Gets user watch list based on username
- /api/users/removeFromList | POST | Removes movie from user watch list in mongoDB

## Security and Authentication

All routes are protected besides /login and /signup. This can be easily changed by moving the protected route element in the /src/index.js file in movies-app

Authentication uses a Bearer token to authenticate the user

## Integrating with React App

All routes fetch information from the web API which then depending on the request fetches from TMDB or from MongoDB collections

## Independent learning (if relevant)

Reasearched a few React functions to refetch data when a page is fetched again to refetch the data needed for the mongoDB