import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import SiteHeader from './components/siteHeader'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import TopRatedMoviePage from "./pages/topRatedMoviesPage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import WatchListPage from "./pages/watchListPage";
import ActorsWeeklyPage from "./pages/actorsWeeklyListPage";
import ActorsDailyPage from "./pages/actorsDailyListPage";
import ActorPage from "./pages/actorDetailsPage";
import RecommendMoviesPage from "./pages/recommendedMoviesPage";
import MovieCastPage from "./pages/movieCastPage";
import MovieActorsPage from "./pages/movieActorsPage"
import MovieCrewPage from "./pages/movieCrewPage"
import ActorPopularPage from "./pages/actorPopularPage"
import SignIn from "./pages/loginPage";
import SignUp from "./pages/signUpPage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <AuthContextProvider>
      <SiteHeader />
      <MoviesContextProvider>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/movies/nowPlaying" element={<NowPlayingPage />} />
          <Route path="/movies/topRated" element={<TopRatedMoviePage />} />
          <Route path="/movies/:id/recommendations" element={<RecommendMoviesPage />} />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/watchList" element={<WatchListPage />} />

          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />

          <Route path="/movies/:id/actors/:id" element={<ActorPage />} />
          <Route path="/movies/:id/actors" element={<MovieCastPage />} />
          <Route path="/movies/:id/actorsOnly" element={<MovieActorsPage />} />
          <Route path="/movies/:id/crewOnly" element={<MovieCrewPage />} />
          <Route path="/actors/popular" element={<ActorPopularPage />} />
          <Route path="/actors/actorsWeekly" element={<ActorsWeeklyPage />} />
          <Route path="/actors/actorsDaily" element={<ActorsDailyPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />

        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
      
      </MoviesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
   <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);