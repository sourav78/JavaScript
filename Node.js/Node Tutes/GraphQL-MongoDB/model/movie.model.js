const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    plot: String,
    genres: [String],
    runtime: { type: Number, required: true },
    cast: [String],
    num_mflix_comments: Number,
    title: { type: String, required: true, unique: true },
    fullplot: String,
    countries: [String],
    directors: [String],
    rated: String,
    lastupdated: { type: Date, default: Date.now },
    year: Number,
    type: String,
})

const MovieModel = mongoose.model("allmovies", MovieSchema)

module.exports = MovieModel