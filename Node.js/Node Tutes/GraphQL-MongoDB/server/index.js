const express = require("express")
const { ApolloServer } = require("@apollo/server")
const { expressMiddleware } = require("@apollo/server/express4")
const bodyParser = require('body-parser')
const cors = require('cors')

const connectDB = require("./database")
const typeDefs = require('./graphQL/graphqlShema')
const resolvers = require('./graphQL/resolver')

async function startServer() {
    const app = express()
    connectDB()

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })

    app.use(bodyParser.json())
    app.use(cors())

    await server.start()
    app.use("/graphql", expressMiddleware(server))
    app.listen(3001, console.log("server started at 3001"))
}

startServer()

// mongo-graphQL - setup and retreve data from mongoDB