import { Request, Response, NextFunction } from "express";
export const cors = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  response.header("access-control-allow-origin", "*");
  response.header("access-control-allow-headers", "*");
  response.header("access-control-allow-methods", "*");
  next();
};
