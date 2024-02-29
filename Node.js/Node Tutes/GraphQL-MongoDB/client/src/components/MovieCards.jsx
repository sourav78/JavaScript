import React from 'react'

const MovieCards = ({movie}) => {
    return (
        <>
            <div className="mt-5 p-4 border rounded-lg w-4/5 m-auto flex gap-24">
                <div className="w-2/3">
                    <p className='text-4xl text-blue-400 font-semibold mt-3'>Title: {movie.title}</p>
                    <p className='text-xl font-semibold mt-3 text-gray-300'>Plot: {movie.plot}</p>
                    <p className='text-xl font-semibold mt-3 text-gray-300'>Year: {movie.year}</p>
                    <p className='text-xl font-semibold mt-3 text-gray-300'>Sales: {movie.runtime}</p>
                </div>
                <div className="flex-1">
                    <p className='text-xl font-semibold mt-3 text-gray-300'>Wins: {movie.awards.wins}</p>
                    <p className='text-xl font-semibold mt-3 text-gray-300'>Nominations: {movie.awards.nominations}</p>
                    <p className='text-xl font-semibold mt-3 text-gray-300'>Ratting: {movie.imdb.rating}</p>
                    <p className='text-xl font-semibold mt-3 text-gray-300'>Votes: {movie.imdb.votes}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCards