import type { NextPage } from "next";
import styles from "../../styles/chat/WriteAndSendMessage.module.scss";
import { PaperPlaneRight } from "phosphor-react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Message {
   message: string;
}

const InputToWriteMessage: NextPage = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<Message>();
   const onSubmit: SubmitHandler<Message> = (message) =>
      console.log(message.message);
   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className={styles.writeAndSendMessage}
      >
         <input
            type="text"
            className={styles.sendMessageInput}
            placeholder="Write something here..."
            {...register("message")}
         />
         <button type="submit" onClick={() => console.log("/input")}>
            <PaperPlaneRight size={32} className="hover:text-zinc-300" />
         </button>
      </form>
   );
};

export default InputToWriteMessage;
