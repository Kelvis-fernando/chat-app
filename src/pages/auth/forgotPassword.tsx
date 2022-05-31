import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/auth/ForgotPassword.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import TitleAndSubtitle from "../../components/layout/TitleAndSubtitle";
import { ArrowLeft } from "phosphor-react";
import Image from "next/image";

interface ForgotPasswordInput {
   email: string;
}

const ForgotPassword: NextPage = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<ForgotPasswordInput>();

   const onSubmit: SubmitHandler<ForgotPasswordInput> = (resp) =>
      console.log(resp);

   return (
      <main className={styles.ForgotPassword}>
         <div className={styles.formBox}>
            <Image
               className="flex justify-center"
               src="/chatapp-logo.png"
               alt="Logo App chat"
               width={320}
               height={100}
            />
            s
            <TitleAndSubtitle
               title={"Forgot you password?"}
               subtitle={"No problem, we will recover it for you!"}
            />
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
                        {...register("email")}
                        type="email"
                        name="email"
                        id="email"
                        className={styles.ForgotPasswordInput}
                        placeholder="your.email@example.com"
                     />
                  </div>
               </div>
               <div className="my-6 flex justify-center">
                  <button type="submit" className={styles.ForgotPasswordButton}>
                     Recover Password
                  </button>
               </div>
               <div className="text-center">
                  <Link href={"/auth/signIn"} className="relative">
                     <div className="iconPhosphor">
                        <ArrowLeft
                           size={20}
                           className=" hover:text-zinc-300 mt-1 mr-2"
                        />
                        <p>Back to sign up</p>
                     </div>
                  </Link>
               </div>
            </form>
         </div>
      </main>
   );
};

export default ForgotPassword;
