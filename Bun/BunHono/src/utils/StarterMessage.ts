import { Context } from "hono";

export const starterMessage = (c:Context) => {
  return c.json({
    success: true,
    message: `Server is up 🫡🍀`
  })
}