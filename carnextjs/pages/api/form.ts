// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSurvey, postSurvey } from "../../services/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { description } = req.body;
  if (req.method === "POST") {
    postSurvey({ description });
  }
  res.status(200).json({ survey: getSurvey() });
}
