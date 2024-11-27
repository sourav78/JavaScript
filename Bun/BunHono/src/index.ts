import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { CustomError, errorHandler } from './middleware/ErrorHandler.middleware'
import { routeNotFoundHandler } from './middleware/RouteNotFound.middleware'
import {cors} from "hono/cors"
import { corsOption } from './middleware/CorsHandler.middleware'

const app:Hono = new Hono()

// Middleware for logging
app.use("*", logger((message: string, ...rest: string[]) => {
  console.log(message, ...rest)
}))

// Define Cors 
app.use(cors(corsOption))

app.get('/', (c) => {

  try {
    // throw new CustomError(400, "Cust err")
    return c.text(`Hello Hono! From sourav ${Bun.env.MY_NAME}`)
  } catch (e) {
    throw e
  }
})

// Define routing error handler
app.notFound(routeNotFoundHandler)

// Define error handler
app.onError(errorHandler)


export default {
  port: 3300,
  fetch: app.fetch,
} 
