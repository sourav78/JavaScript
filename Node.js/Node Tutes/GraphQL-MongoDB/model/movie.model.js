const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    plot: {
        type: 'String'
    }
})

const MovieModel = mongoose.model("allmovies", MovieSchema)

module.exports = MovieModel