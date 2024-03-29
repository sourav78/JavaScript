const express = require('express')
const { ApolloServer } = require("@apollo/server")
const { expressMiddleware } = require("@apollo/server/express4")
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

async function startServer() {
    const app = express()
    const server = new ApolloServer({
        typeDefs: `

            type User {
                id: ID!,
                name: String!,
                username: String!,
                email: String!,
                phone: String!,
                website: String!
            }

            type Todo {
                id: ID!,
                title: String!,
                completed: Boolean,
                user: User
            }

            type Query {
                getTodos(offset: Int, limit: Int): [Todo],
                getUsers: [User],
                getOneUser(id: ID!): User
                getOneTodo(id: ID!): Todo
            }
        `,
        resolvers: {
            Todo: {
                user: async (todo) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)).data
            },
            Query: {
                getTodos: async (parent, { offset, limit}) => (
                    (await axios.get("https://jsonplaceholder.typicode.com/todos")).data.slice(offset, offset + limit)
                ),
                getUsers: async () => (
                    (await axios.get("https://jsonplaceholder.typicode.com/users")).data
                ),
                getOneUser: async (parent, {id}) => (
                    (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
                ),
                getOneTodo: async (parent, {id}) => (
                    (await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)).data
                )
            }
        }
    })

    app.use(bodyParser.json())
    app.use(cors())

    await server.start()

    app.use("/graphql", expressMiddleware(server))

    app.listen(3001, () => console.log(`server started at port: 3001`))
}

startServer()