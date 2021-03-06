import { Plus, MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

import styles from "../styles/chat/Chat.module.scss";
import HeaderChat from "../components/chat/HeaderChat";
import WriteAndSendMessage from "../components/chat/WriteAndSendMessage";
import Contacts from "../components/chat/Contacts";
import MessageArea from "../components/chat/MessageArea";
import Head from "next/head";

const Chat = () => {
   const [toogleInputView, setToogleInputView] = useState(false);

   return (
      <main className={styles.chat}>
         <Head>
            <title>Chat App</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
            <link rel="icon" href="/chatapp-icon.png" />
         </Head>
         <aside className={styles.contactsArea}>
            <div className={styles.contactsHeader}>
               <h2>Chats</h2>
               <div className="flex">
                  {toogleInputView && (
                     <input
                        type="text"
                        className={styles.chatInput}
                        placeholder="Search"
                     />
                  )}
               </div>
               <button
                  onClick={() => setToogleInputView(!toogleInputView)}
                  className="h-5 hover:text-zinc-300 absolute right-16"
               >
                  <MagnifyingGlass size={20} className=" font-bold" />
               </button>
               <Plus
                  size={20}
                  className="text-blue-700 hover:text-blue-600 font-bold"
               />
            </div>
            <div className="overflow-scroll max-h-[85%] overflow-x-hidden scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin">
               <ul>
                  <li>
                     <Contacts />
                  </li>
               </ul>
            </div>
         </aside>
         <div className={styles.messageArea}>
            <HeaderChat />
            <MessageArea />
            <WriteAndSendMessage />
         </div>
      </main>
   );
};

export default Chat;
