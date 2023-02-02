import styles from "../styles/chat/Chat.module.scss";
import HeaderChat from "../components/chat/HeaderChat";
import WriteAndSendMessage from "../components/chat/WriteAndSendMessage";
import Contacts from "../components/chat/Contacts";
import MessageArea from "../components/chat/MessageArea";
import Head from "next/head";
import AddContact from "../components/chat/AddContact";
import { Plus, MagnifyingGlass } from "phosphor-react";
import { useChat } from "../hooks/useChat";

const Chat = () => {
   const {
      toogleInputView,
      setToogleInputView,
      openAddContact,
      setOpenAddContact,
   } = useChat();

   return (
      <main className={styles.chat}>
         {openAddContact && <AddContact />}
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
                  size={22}
                  className="text-white font-bold cursor-pointer hover:text-zinc-300 hover:rotate-45 hover:duration-75"
                  onClick={() => setOpenAddContact(!openAddContact)}
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
