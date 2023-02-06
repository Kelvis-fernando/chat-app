import HeaderChat from "./HeaderChat";
import MessageArea from "./MessageArea";
import WriteAndSendMessage from "./WriteAndSendMessage";
import styles from "../../styles/chat/Chat.module.scss";

const Message = () => {
   return (
      <div className={styles.messageArea}>
         <HeaderChat />
         <MessageArea />
         <WriteAndSendMessage />
      </div>
   );
};

export default Message;
