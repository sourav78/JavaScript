import React from 'react'
import { useQuery } from '@apollo/client'
import { getAllMovie } from './GQLQuery/MovieQuery';
import MovieCards from './components/MovieCards';

const App = () => {

    const { loading, error, data } = useQuery(getAllMovie);

    return (
        <>
            <div className="min-h-screen bg-gray-800">
                {loading && <h1 className='text-4xl font-bold text-white text-center pt-6'>Loadding...</h1>}

                <div className="w-4/5 m-auto p-5 pb-7">
                    <h1 className='text-4xl font-bold text-white text-center pt-6'>All Movies</h1>
                    {
                        data && data.getAllMovies.map(movie => (
                            <div key={movie.id}>
                                <MovieCards movie={movie} />
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </>
    )
}

export default App
