import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "../../styles/chat/AddContact.module.scss";
import Head from "next/head";

interface AddContact {
   email: string;
}

const AddContact = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<AddContact>();

   const onSubmit: SubmitHandler<AddContact> = async (email) => {
      console.log(email);
   };

   return (
      <div className={styles.addContact}>
         <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white flex cursor-pointer">Add new contact</h1>
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
