import type { NextApiRequest, NextApiResponse } from "next";
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get(
   "/api/websocket/socketIo",
   (req: NextApiRequest, res: NextApiResponse) => {
      res.send("conected");
   }
);
