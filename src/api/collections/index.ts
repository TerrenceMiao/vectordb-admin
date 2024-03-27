import { Request, Response } from "express";

import { fetchCollections } from "@/lib/server/db";

export const GET = async (req: Request, res: Response) => {
  const connectionString = req.query.connectionString as string;
  const data = await fetchCollections(connectionString);

  res.send(data);
};
