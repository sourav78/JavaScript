const express = require('express');
const cors = require('cors');
const app = express();

/**
 * These are all the major options you can pass to the cors middleware.
 * You usually only need a few of them, like 'origin'.
 */
const allCorsOptions = {
  /**
   * origin: Configures the 'Access-Control-Allow-Origin' header.
   * - true: Reflects the request's origin (e.g., 'http://example.com').
   * - false: Disables CORS.
   * - '*': Allows all origins (the default).
   * - 'http://example.com': Allows only this specific origin.
   * - [/example\.com$/, 'http://trusted.com']: Allows a regex or an array of strings/regex.
   * - (origin, callback) => { ... }: A custom function for dynamic logic.
   */
  origin: 'https://my-frontend-app.com',

  /**
   * methods: Configures the 'Access-Control-Allow-Methods' header.
   * Specifies which HTTP methods are allowed.
   * Default: 'GET,HEAD,PUT,PATCH,POST,DELETE'
   */
  methods: ['GET', 'POST', 'PUT', 'DELETE'],

  /**
   * allowedHeaders: Configures the 'Access-Control-Allow-Headers' header.
   * Specifies which request headers are allowed.
   * Default: Uses the headers from 'Access-Control-Request-Headers' on the request.
   */
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],

  /**
   * exposedHeaders: Configures the 'Access-Control-Expose-Headers' header.
   * Specifies which headers can be exposed as part of the response by the client's browser.
   */
  exposedHeaders: ['Content-Length', 'X-My-Custom-Header'],

  /**
   * credentials: Configures the 'Access-Control-Allow-Credentials' header.
   * Default: false
   * Set to 'true' to allow cookies, authorization headers, or TLS client certificates
   * to be included in cross-origin requests.
   */
  credentials: true,

  /**
   * maxAge: Configures the 'Access-Control-Max-Age' header (in seconds).
   * This caches the result of the preflight (OPTIONS) request for this long,
   * so the browser doesn't have to send a preflight request every time.
   */
  maxAge: 3600, // 1 hour

  /**
   * preflightContinue:
   * Default: false
   * Set to 'true' to pass the preflight (OPTIONS) request to the next middleware
   * or router, instead of ending it with a 204 No Content.
   */
  preflightContinue: false,

  /**
   * optionsSuccessStatus:
   * Provides a status code to use for successful OPTIONS (preflight) requests.
   * Default: 204 (No Content)
   * Some older browsers (IE11, various SmartTVs) choke on 204.
   */
  optionsSuccessStatus: 200 // Use 200 OK for legacy compatibility
};

// Use the options in your application
app.use(cors(allCorsOptions));

// Example API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'CORS is configured!' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});