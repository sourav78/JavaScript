import { Hono } from 'hono'
import { errorHandler } from './middleware/ErrorHandler.middleware'
import { routeNotFoundHandler } from './middleware/RouteNotFound.middleware'
import {cors} from "hono/cors"
import { corsOption } from './middleware/CorsHandler.middleware'
import { loggerHander } from './middleware/Logger.middleware'
import { starterMessage } from './utils/StarterMessage'
import globalRouter from './middleware/RouterHandler.middleware'

const app:Hono = new Hono()

// Middleware for logging
app.use("*", loggerHander)

// Define Cors 
app.use(cors(corsOption))

// Starter message for health check
app.get('/', starterMessage)

// Define router hanlder
app.route('/', globalRouter)

// Define routing error handler
app.notFound(routeNotFoundHandler)

// Define error handler
app.onError(errorHandler)


export default {
  port: 3300,
  fetch: app.fetch,
} 
