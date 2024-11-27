import { Context } from "hono";
import { StatusCode } from "hono/utils/http-status";

export class CustomError extends Error{

  statusCode: StatusCode;

  constructor(statusCode: StatusCode, errMessage: string){
    super(errMessage)
    this.statusCode = statusCode
  }
}


export const errorHandler = (err: Error | CustomError, c: Context) => {

  if(err instanceof CustomError){
    return c.json({
      success: false,
      message: err.message
    }, err.statusCode)
  }

  console.log(err);
  
  return c.json({
    success: false,
    message: "Internal server error. Please try again",
    description: err?.message || ""
  }, 500)

}