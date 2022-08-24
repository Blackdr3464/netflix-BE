const mongoose = require('mongoose');

const filmSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
        },
        content: {
            type: String,
        },
        cast: {
            type: Array,
        },

        episodes: {
            type: Object,
            required: true,
            data: {
                type: Array,
                required: true,
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('film', filmSchema);
