import React from 'react'
import {gql, useQuery} from "@apollo/client"


const query = gql`
    query GetAllTodos {
        getTodos {
            title
            id
            user {
                username
                id
            }
        }
    }
`


const App = () => {

    const {data, loading} = useQuery(query)

    if(loading) return <h1>Loadding...</h1>

    return (
        <div>
            {
                JSON.stringify(data)
            }
        </div>
    )
}

export default App