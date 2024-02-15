import React, { useState } from 'react'
import { gql, useQuery } from "@apollo/client"


const query = gql`
    query GetAllTodos($offset: Int, $limit: Int) {
        getTodos(offset: $offset, limit: $limit) {
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

    const [limit, setLimit] = useState(5)

    const { data, loading } = useQuery(query, {
        variables: {
            offset: 0,
            limit: limit
        }
    })
    console.log(data);

    if (loading) return <h1>Loadding...</h1>

    return (
        <div>
            <button
                onClick={() => {setLimit(prev => prev+1)}}
            >
                Get more values
            </button>

            <table border={1} style={{ borderCollapse: 'collapse' }}>
                <tr>
                    <th style={{ padding: '5px 10px' }}>Todo Id</th>
                    <th style={{ padding: '5px 10px' }}>Title</th>
                    <th style={{ padding: '5px 10px' }}>User Id</th>
                    <th style={{ padding: '5px 10px' }}>User Name</th>
                </tr>
                {
                    data.getTodos.map(todo => (
                        <tr>
                            <td style={{ padding: '5px 10px' }}>{todo.id}</td>
                            <td style={{ padding: '5px 10px' }}>{todo.title}</td>
                            <td style={{ padding: '5px 10px' }}>{todo.user.id}</td>
                            <td style={{ padding: '5px 10px' }}>{todo.user.username}</td>
                        </tr>
                    ))
                }
            </table>
            {/* {
                JSON.stringify(data)
            } */}
        </div>
    )
}

export default App