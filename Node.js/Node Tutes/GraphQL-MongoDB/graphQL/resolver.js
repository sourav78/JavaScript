const MovieModel = require("../model/movie.model")

const resolvers = {
    Query: {
        getAllMovies: async () => {
            return await MovieModel.find()
        }
    }
}

module.exports = resolvers