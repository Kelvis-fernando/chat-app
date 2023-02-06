import styles from "../styles/chat/Chat.module.scss";
import Contacts from "../components/chat/Contacts";
import Head from "next/head";
import AddContact from "../components/chat/AddContact";
import { useChat } from "../hooks/useChat";
import Message from "../components/chat/Message";
import ContactsHeader from "../components/chat/ContactsHeader";

const Chat = () => {
   const { openAddContact } = useChat();

   return (
      <>
         <Head>
            <title>Chat App</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
            <link rel="icon" href="/chatapp-icon.png" />
         </Head>
         <main className={styles.chat}>
            <aside className={styles.contactsArea}>
               <ContactsHeader />
               <Contacts />
            </aside>
            <Message />
         </main>
      </>
   );
};

export default Chat;
