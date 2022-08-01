import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/chat/Contacts.module.scss";

const Contacts: NextPage = () => {
   const contacts = [
      {
         name: "Kelvis Fernando",
         lastMessage: "Ola",
         timeLastMessage: "1h",
         photo: "/perfil.png",
      },
      {
         name: "Fernando Delapena",
         lastMessage: "Tudo bem",
         timeLastMessage: "3h",
         photo: "/perfil.png",
      },
      {
         name: "Stefany Fernanda",
         lastMessage: "Vai",
         timeLastMessage: "30min",
         photo: "/perfil.png",
      },
      {
         name: "Mae",
         lastMessage: "Te amo <3",
         timeLastMessage: "6h",
         photo: "/perfil.png",
      },
      {
         name: "Pai",
         lastMessage: "Te amo <3 <3",
         timeLastMessage: "6h",
         photo: "/perfil.png",
      },
   ];
   function renderMessages() {
      return contacts.map((contact, index) => (
         <div className={styles.contacts} key={index}>
            <Image
               src={contact.photo}
               width={50}
               height={50}
               className="rounded"
               alt="Photo from perfil"
            />
            <div className={styles.body}>
               <p>{contact.name}</p>
               <p>{contact.lastMessage}</p>
            </div>
            <span className={styles.timing}>{contact.timeLastMessage}</span>
         </div>
      ))
   }
   
   return (
      <>
         {renderMessages()}
      </>
   )
};

export default Contacts;
