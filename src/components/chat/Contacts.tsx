import type { NextPage } from "next";

import Image from "next/image";
import styles from "../../styles/chat/Contacts.module.scss";
import { convertMinutesInHourString } from "../../utils/convertMinutesInHourString";

const Contacts: NextPage = () => {
   const contacts = [
      {
         id: "hsdjagdn",
         name: "Kelvis Fernando",
         lastMessage: "Ola",
         timeLastMessage: convertMinutesInHourString(500),
         photo: "/perfil.png",
      },
      {
         id: "hsdjagdn",
         name: "Fernando Delapena",
         lastMessage: "Tudo bem",
         timeLastMessage: convertMinutesInHourString(580),
         photo: "/perfil.png",
      },
      {
         id: "hsdjagdn",
         name: "Stefany Fernanda",
         lastMessage: "Vai",
         timeLastMessage: convertMinutesInHourString(200),
         photo: "/perfil.png",
      },
      {
         id: "hsdjagdn",
         name: "Mae",
         lastMessage: "Te amo <3",
         timeLastMessage: convertMinutesInHourString(700),
         photo: "/perfil.png",
      },
      {
         id: "hsdjagdn",
         name: "Pai",
         lastMessage: "Te amo <3 <3",
         timeLastMessage: convertMinutesInHourString(25),
         photo: "/perfil.png",
      },
   ];

   const setContactMessage = (id: string) => {
      return (window.location.href = "/messagearea/" + id);
   };

   const renderMessages = () => {
      return contacts.map((contact, index) => (
         <div
            className={styles.contacts}
            key={index}
            onClick={() => setContactMessage(contact.id)}
         >
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
      ));
   };

   return <>{renderMessages()}</>;
};

export default Contacts;
