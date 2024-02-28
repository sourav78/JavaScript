
const typeDefs = `
    type Movie {
        id: ID!,
        plot: String,
        genres: [String],
        runtime: Int,
        cast: [String],
        num_mflix_comments: Int,
        title: String,
        fullplot: String,
        countries: [String],
        directors: [String],
        rated: String,
        lastupdated: String,
        year: Int,
        type: String
    }

    type Query {
        getAllMovies: [Movie],
        getMovie(id: ID!): Movie,
        getMovieByYear(year: Int!): [Movie]
    }
`

module.exports = typeDefs