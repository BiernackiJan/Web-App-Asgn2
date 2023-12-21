import express from 'express';
import User from './userModel';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// register(Create)/Authenticate User
router.post('/', asyncHandler(async (req, res) => {
    try {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ success: false, msg: 'Username and password are required.' });
        }
        if (req.query.action === 'register') {
            await registerUser(req, res);
        } else {
            await authenticateUser(req, res);
        }
    } catch (error) {
        // Log the error and return a generic error message
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));

// Update a user
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await User.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'User Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update User' });
    }
});

async function registerUser(req, res) {
    // Add input validation logic here
    await User.create(req.body);
    res.status(201).json({ success: true, msg: 'User successfully created.' });
}

async function authenticateUser(req, res) {
    const user = await User.findByUserName(req.body.username);
    if (!user) {
        return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
        const token = jwt.sign({ username: user.username }, process.env.SECRET);
        res.status(200).json({ success: true, token: 'BEARER ' + token });
    } else {
        res.status(401).json({ success: false, msg: 'Wrong password.' });
    }
}


router.post('/addFavourites', async (req, res) => {
    try {
        const user = await User.findByUserName(req.body.username);

        if (!user) {
            return res.status(401).json({ success: false, msg: 'Invalid token or user not authorized.' });
        }

        const userId = user._id;
        const movie = req.body.movie;

        // Check if the movie is already in the user's favorites
        if (user.favorites.includes(movie)) {
            return res.status(400).json({ success: false, msg: 'Movie already in favorites.' });
        }

        // Find the user by ID and update their favorites array
        const userUpdate = await User.findByIdAndUpdate(userId, { $addToSet: { favorites: movie } });

        if (!userUpdate) {
            return res.status(404).json({ success: false, msg: 'User not found.' });
        }

        res.status(200).json({ success: true, msg: 'Movie added to favorites.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
});


router.get('/getFavourites/:username', async (req, res) => {
    const user = await User.findByUserName(req.params.username);
    const favourites = user.favorites
    res.status(200).json(favourites);
});


router.post('/addToWatchList', async (req, res) => {
    try {
        const user = await User.findByUserName(req.body.username);

        if (!user) {
            return res.status(401).json({ success: false, msg: 'Invalid token or user not authorized.' });
        }

        const userId = user._id;
        const movie = req.body.movie;

        // Check if the movie is already in the user's watchList
        if (user.watchList.includes(movie)) {
            return res.status(400).json({ success: false, msg: 'Movie already in watchlist.' });
        }

        // Find the user by ID and update their watchList array
        const userUpdate = await User.findByIdAndUpdate(userId, { $addToSet: { watchList: movie } });

        if (!userUpdate) {
            return res.status(404).json({ success: false, msg: 'User not found.' });
        }

        res.status(200).json({ success: true, msg: 'Movie added to Watchlist.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
});

router.get('/getWatchList/:username', async (req, res) => {
    const user = await User.findByUserName(req.params.username);
    const watchList = user.watchList
    res.status(200).json(watchList);
});


export default router;