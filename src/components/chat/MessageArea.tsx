import type { NextPage } from "next";
import { useEffect } from "react";
import { io } from "socket.io-client";

const MessageArea: NextPage = () => {
   // const socket = io("http://localhost:3000/api/websocket/socketIo");
   // useEffect(() => {
   //    // client-side
   //    socket.on("connect", () => {
   //       console.log(socket.id); // x8WIv7-mJelg7on_ALbx
   //    });
   // }, []);
   return (
      <>
         <h1>Chat</h1>
      </>
   );
};

export default MessageArea;
