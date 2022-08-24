import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "../../styles/chat/AddContact.module.scss";
import { X } from "phosphor-react";
import { Dispatch, SetStateAction } from "react";

interface Props {
   openAddContact?: boolean;
   setOpenAddContact?: Dispatch<SetStateAction<boolean>> | void;
}
interface AddContact {
   email: string;
   message: string;
}

const MySwal = withReactContent(Swal);

const SuccessAlert = () => {
   MySwal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
         toast.addEventListener("mouseenter", Swal.stopTimer);
         toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
      icon: "success",
      title: "Contact message send success!",
   });
}

const AddContact = (props: Props) => {
   function SendMessageForContact(emailAndMessage: any) {
      fetch("api/chat/addnewcontact/", {
         method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
         body: JSON.stringify(emailAndMessage),
      }).then(() => {
         SuccessAlert();
      });
   }

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<AddContact>();

   const onSubmit: SubmitHandler<AddContact> = async (emailAndMessage) => {
      return SendMessageForContact(emailAndMessage);
   };

   return (
      <div className={styles.addContact}>
         <div className="flex space-x-52">
            <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white flex">
               Add new contact
            </h1>
            <X size={28} className="absolute font-semibold cursor-pointer hover:text-zinc-300 hover:rotate-90 hover:duration-75" onClick={() => console.log(props)} />
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-6">
               <label
                  htmlFor="email"
                  className="block text-sm font-medium my-3"
               >
                  Email
               </label>
               <div className="mt-1">
                  <input
                     {...register("email", { required: true })}
                     type="email"
                     id="email"
                     className={styles.addContactInput}
                     placeholder="email@example.com"
                     required
                  />
               </div>
               <div className="mt-1">
                  <input
                     {...register("message", { required: true })}
                     type="text"
                     id="message"
                     className={styles.addContactInput}
                     placeholder="Send a message"
                     required
                  />
               </div>
            </div>
            <div className="my-6 flex justify-center">
               <button type="submit" className={styles.sendContactButton}>
                  Send
               </button>
            </div>
         </form>
      </div>
   );
};

export default AddContact;
