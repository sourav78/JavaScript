import {gql} from "@apollo/client"

export const getAllMovie = gql`
    query Query {
        getAllMovies {
            id
            title
            year
            plot
            rated
            runtime
            awards {
                wins
                nominations
            }
            imdb {
                votes
                rating
            }
        }
    }
`