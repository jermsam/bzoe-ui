import { NextApiRequest, NextApiResponse } from "next";

export default async (req:NextApiRequest, res:NextApiResponse) => {
  res.statusCode = 200
  res.json({ message:'sample api'})
}