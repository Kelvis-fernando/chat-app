import styles from "../styles/chat/Chat.module.scss";
import HeaderChat from "../components/chat/HeaderChat";
import InputToWriteMessage from "../components/chat/InputToWriteMessage";
import Contacts from "../components/chat/Contacts";
import { Plus, MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

const Chat = () => {
   const [toogleInputView, setToogleInputView] = useState(false);

   return (
      <main className={styles.chat}>
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
                  className="h-5 hover:text-zinc-300 absolute right-10"
               >
                  <MagnifyingGlass size={20} className=" font-bold" />
               </button>
               <Plus
                  size={20}
                  className="text-blue-700 hover:text-blue-600 font-bold"
               />
            </div>
            <ul>
               <li>
                  <Contacts />
               </li>
               <li>
                  <Contacts />
               </li>
               <li>
                  <Contacts />
               </li>
            </ul>
         </aside>
         <div className={styles.messageArea}>
            <HeaderChat />
            <p>Chat</p>
            <InputToWriteMessage />
         </div>
      </main>
   );
};

export default Chat;
