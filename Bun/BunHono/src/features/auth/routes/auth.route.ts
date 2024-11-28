import { Context, Hono } from "hono";
import { loginHandler } from "../controller/auth.controller";

const authRouter = new Hono().basePath("/auth")

authRouter.get("/", (c:Context) => {
  return c.text("Fron Hono auth router")
})

authRouter.post("/login", loginHandler)

export default authRouter