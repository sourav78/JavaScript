import { Context, Next } from "hono";

export const loggerHander = async (c: Context, next: Next) => {

  console.log(`Incoming : METHOD : [${c.req.method}] - URL : [${c.req.url}] - TIMESTAMP : [${new Date()}]`);

  await next(); // Proceed to the next middleware or route handler

  console.log(`Result : METHOD : [${c.req.method}] - URL : [${c.req.url}] - STATUS : [${c.res.status}] - TIMESTAMP : [${new Date()}]`);
}