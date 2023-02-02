// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
   email?: string;
   status?: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
   if (req.method !== "POST") {
      return res
         .status(405)
         .json({ status: "Method not allowed, only POST  " });
   }

   fetch(
      "https://chat-app-1b664-default-rtdb.firebaseio.com/" + "usuarios.json",
      {
         method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
         body: JSON.stringify(req.body),
      }
   ).then(() => {
      console.log("aqui");
   });

   res.send({ status: "Success" });
};

export default handler;
