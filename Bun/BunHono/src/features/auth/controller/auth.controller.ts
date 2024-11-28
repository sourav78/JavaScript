import { Context, Next } from "hono";
import { CustomError } from "../../../middleware/ErrorHandler.middleware";

export const loginHandler = async (c: Context) => {
  try{

    const {user, pass} = await c.req.json()

    const username = "Hello"
    const password = "byy"

    if(user !== username || pass !== password){
      throw new CustomError(401, "Login failed")
    }
    
    return c.json({
      success: true,
      message: "Login successfull"
    }, 200)
  }catch(error){
    throw error
  }
}