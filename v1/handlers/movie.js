const tmdb = require('../pkg/movies');

//Global Search

const search = async (req, res) => {
    try {
        let src = await tmdb.searchGlobal(req.params.keyword);
        res.send(src);
    } catch (err) {
        return res.status(500).send('Internal server error.')
    }
}

//Movie Search

const getByID = async (req, res) => {
    try {
        let mvs = await tmdb.getMovieByID(req.params.movie_id)
        res.send(mvs)
    } catch (err) {
        return res.status(500).send('Internal server error.')
    }
}

const getByQuery = async (req, res) => {
    try {
        let mvs = await tmdb.searchMovies(req.params.keyword);
        res.send(mvs)
    } catch (err) {
        return res.status(500).send('Internal server error.')
    }
}

const getPopMovies = async (req, res) => {
    try {
        let mvs = await tmdb.popMovies();
        res.send(mvs)
    } catch (err) {
        return res.status(500).send('Internal server error.')
    }
}

// const getPoster = async (req, res) => {
//     try {
//         let mv_post = await tmdb.getPosterForMovie(req.params.poster_path)
//         res.send(mv_post)
//     } catch (err) {
//         return res.status(500).send('Internal server error.')
//     }
// }

const getVideo = async (req, res) => {
    try {
        let mv_vd = await tmdb.getVideoForMovie(req.params.movie_id)
        res.send(mv_vd)
    } catch (err) {
        return res.status(500).send('Internal server error.')
    }
}

// Tv Show Search

const getShowByID = async (req, res) => {
    try {
        let tv_sh = await tmdb.getTvShowByID(req.params.tv_id)
        res.send(tv_sh)
    } catch (err) {
        return res.status(500).send('Internal server error.')
    }
}

const getTvByQuery = async (req, res) => {
    try {
        let tv = await tmdb.searchTvShow(req.params.keyword)
        res.send(tv)
    } catch (err) {
        return res.status(500).send('Internal server error.')
    }
}

const getTvTrailer = async (req, res) => {
    try {
        let mv_vd = await tmdb.getVideoForMovie(req.params.movie_id)
        res.send(mv_vd)
    } catch (err) {
        return res.status(500).send('Internal server error.')
    }
}

module.exports = {
    search,
    getByID,
    getByQuery,
    getPopMovies,
    // getPoster,
    getVideo,
    getTvByQuery,
    getShowByID
}