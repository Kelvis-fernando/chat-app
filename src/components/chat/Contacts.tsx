import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/chat/Contacts.module.scss";

const Contacts: NextPage = () => {
   return (
      <div className={styles.contacts}>
         <Image
            src="/perfil.png"
            width={50}
            height={50}
            className="rounded"
            alt="Phoro from perfil"
         />
         <div className={styles.body}>
            <p>Kelvis Fernando</p>
            <p>Olá</p>
         </div>
         <span className={styles.timing}>1h</span>
      </div>
   );
};

export default Contacts;
