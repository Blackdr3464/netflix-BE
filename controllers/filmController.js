const Film = require('../models/Film');

const filmController = {
    getAllFilm: async (req, res) => {
        try {
            const film = await Film.find();
            return res.status(200).json(film);
        } catch (error) {
            return res.status(404).json(error);
        }
    },

    createFilm: async (req, res) => {
        try {
            const newFilm = await new Film({
                name: req.body.name,
                category: req.body.category,
                content: req.body.content,
                cast: req.body.cast,
                episodes: req.body.episodes,
            });
            const film = await newFilm.save();
            return res.status(200).json(film);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
};

module.exports = filmController;
