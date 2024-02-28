const MovieModel = require("../model/movie.model")

const resolvers = {
    Query: {
        getAllMovies: async () => {
            return await MovieModel.find()
        },
        getMovie: async (_, {id}) => {
            return await MovieModel.findById(id)
        },
        getMovieByYear: async (_, {year}) => {
            return await MovieModel.find({year})
        }
    }
}

module.exports = resolvers