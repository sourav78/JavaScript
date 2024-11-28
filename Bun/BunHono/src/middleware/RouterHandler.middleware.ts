import { Hono } from "hono";
import authRouter from "../features/auth/routes/auth.route";

const globalRouter = new Hono()

globalRouter.route("/api", authRouter)

export default globalRouter