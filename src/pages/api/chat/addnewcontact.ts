// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
   email?: string;
   status?: string;
};

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   if (req.method !== "POST") {
      return res
         .status(405)
         .json({ status: "Method not allowed, only POST  " });
   }

   res.send({ status: "Success" });
}
