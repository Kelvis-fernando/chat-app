import { ArrowLeft } from "phosphor-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { ErrorAlert, SuccessAlert } from "../../components/alert/SignInAlert";

import Link from "next/link";
import styles from "../../styles/auth/ForgotPassword.module.scss";
import TitleAndSubtitle from "../../components/layout/TitleAndSubtitle";
import Image from "next/image";
import Head from "next/head";

interface ForgotPasswordInput {
   email: string;
}

export default function ForgotPassword() {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<ForgotPasswordInput>();

   async function forgotPassword(email: any) {
      sendPasswordResetEmail(auth, email)
         .then(() => {
            SuccessAlert("Email for recover password was send");
         })
         .catch((error) => {
            ErrorAlert(error);
         });
   }

   const onSubmit: SubmitHandler<ForgotPasswordInput> = (resp) => {
      forgotPassword(resp.email);
   };

   return (
      <main className={styles.ForgotPassword}>
         <Head>
            <title>Forgot Password</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
            <link rel="icon" href="/chatapp-icon.png" />
         </Head>
         <div className={styles.formBox}>
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
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0"
         >
            <path
               fill="#7e22ce"
               fillOpacity="2"
               d="M0,64L40,64C80,64,160,64,240,85.3C320,107,400,149,480,186.7C560,224,640,256,720,229.3C800,203,880,117,960,96C1040,75,1120,117,1200,160C1280,203,1360,245,1400,266.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
         </svg>
      </main>
   );
}
