import { MagnifyingGlass, Plus } from "phosphor-react";
import { useChat } from "../../hooks/useChat";
import styles from "../../styles/chat/Chat.module.scss";
import AddContact from "./AddContact";

const ContactsHeader = () => {
   const {
      toogleInputView,
      setToogleInputView,
      openAddContact,
      setOpenAddContact,
   } = useChat();

   return (
      <div className={styles.contactsHeader}>
         {openAddContact && <AddContact />}
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
   );
};

export default ContactsHeader;
