import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import { getGenres, getUpcomingMovies, getMovies, getMovie, getMovieImages, getMovieReviews, getTopRatedMovies, getNowPlayingMovies, getCast, getActorImages, getActorsWeekly, getActorsDaily, getActor, getActorCredits, getRecommendedMovies, getPopularActors, getSortedMovies } from '../tmdb-api';

const router = express.Router();

// router.get('/', asyncHandler(async (req, res) => {
//     let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
//     [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

//     // Parallel execution of counting movies and getting movies using movieModel
//     const [total_results, results] = await Promise.all([
//         movieModel.estimatedDocumentCount(),
//         movieModel.find().limit(limit).skip((page - 1) * limit)
//     ]);
//     const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

//     //construct return Object and insert into response object
//     const returnObject = {
//         page,
//         total_pages,
//         total_results,
//         results
//     };
//     res.status(200).json(returnObject);
// }));

// // Get movie details
// router.get('/:id', asyncHandler(async (req, res) => {
//     const id = parseInt(req.params.id);
//     const movie = await movieModel.findByMovieDBId(id);
//     if (movie) {
//         res.status(200).json(movie);
//     } else {
//         res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
//     }
// }));

router.get('/', asyncHandler(async (req, res) => {
    const movies = await getMovies();
    res.status(200).json(movies);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getMovie(id);
    if (movie) {
        res.status(200).json(movie);
    }else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));




router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));


router.get('/:id/images', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const images = await getMovieImages(id);
    if (images) {
        res.status(200).json(images);
    }else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/reviews', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const reviews = await getMovieReviews(id);
    if (reviews) {
        res.status(200).json(reviews);
    }else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/topRated', asyncHandler(async (req, res) => {
    const movies = await getTopRatedMovies();
    res.status(200).json(movies);
}));

router.get('/tmdb/nowPlaying', asyncHandler(async (req, res) => {
    const movies = await getNowPlayingMovies();
    res.status(200).json(movies);
}));

router.get('/:id/cast', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const cast = await getCast(id);
    if (cast) {
        res.status(200).json(cast);
    }else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/actor/:id/image', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const castImage = await getActorImages(id);
    if (castImage) {
        res.status(200).json(castImage);
    }else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/actors/weekly', asyncHandler(async (req, res) => {
    const actors = await getActorsWeekly();
    res.status(200).json(actors);
}));

router.get('/actors/daily', asyncHandler(async (req, res) => {
    const actors = await getActorsDaily();
    res.status(200).json(actors);
}));


router.get('/actor/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const actor = await getActor(id);
    if (actor) {
        res.status(200).json(actor);
    }else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));


router.get('/actor/:id/credits', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const actorCredits = await getActorCredits(id);
    if (actorCredits) {
        res.status(200).json(actorCredits);
    }else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/recommended', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const recommended = await getRecommendedMovies(id);
    if (recommended) {
        res.status(200).json(recommended);
    }else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/actors/popular', asyncHandler(async (req, res) => {
    const actors = await getPopularActors();
    res.status(200).json(actors);
}));


router.get('/sorted/:sort', asyncHandler(async (req, res) => {
    const sort = req.params.sort
    const movies = await getSortedMovies(sort);
    if (movies) {
        res.status(200).json(movies);
    }else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/myReviews', async (req, res) => {
    const mov = await getMovie(req.params.id)
    const movie = await movieModel.findByMovie(mov);
    const reviews = movie?.reviews || []
    res.status(200).json(reviews);
});



router.post('/addReview', async (req, res) => {
    try {
        const movie = await movieModel.findByMovie(req.body.movie);
        const review = req.body.reviews



        if (!movie) {
            await movieModel.create(req.body)
        }

        // Find the movie by ID and update their review array
        await movieModel.findOneAndUpdate(movie, { $addToSet: { reviews: review } });

        res.status(200).json({ success: true, msg: 'Review added.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
});

export default router;