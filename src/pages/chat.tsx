import type { NextPage } from "next";
import styles from "../styles/chat/Chat.module.scss";
import HeaderChat from "../components/chat/HeaderChat";
import InputToWriteMessage from "../components/chat/InputToWriteMessage";
import Contacts from "../components/chat/Contacts";

const Chat: NextPage = () => {
   return (
      <main className={styles.chat}>
         <aside className={styles.contacts}>
            <InputToWriteMessage />
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
