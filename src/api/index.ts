import { NextFunction, Request, Response } from "express";

export const GET = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers["cookie"]?.includes("auth=true")) {
    return next();
  }

  res.send({ name: "VectorDB Admin API Service" });
};
