
export const corsOption = {
  origin: ['http://example.com'],
  allowHeaders: [
    'X-Custom-Header',
    'Upgrade-Insecure-Requests',
    'Authorization',
    'Content-Type'
  ], // Add more headers the client is allowed to send
  allowMethods: ['POST', 'GET', 'OPTIONS', 'PUT', 'DELETE', "PATCH"], // Add more methods if necessary
  exposeHeaders: [
    'Content-Length',
    'X-Kuma-Revision',
    'ETag',
    'X-RateLimit-Limit',
    'X-RateLimit-Remaining'
  ], // Add headers that the client can see in the response
  maxAge: 1200, // Cache preflight response for 20 minutes
  credentials: true, // Allow credentials like cookies or HTTP authentication
}