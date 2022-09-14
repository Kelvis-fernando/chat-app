import { useForm, SubmitHandler } from "react-hook-form";
import { SignIn } from "phosphor-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { ErrorAlert, SuccessAlert } from "../../components/alert/SignInAlert";

import Link from "next/link";
import styles from "../../styles/auth/SignUp.module.scss";
import Image from "next/image";
import TitleAndSubtitle from "../../components/layout/TitleAndSubtitle";
import Head from "next/head";

interface SignUpInputs {
   username: string;
   email: string;
   password: string;
   confirmpassword: string;
}

function SignUp() {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<SignUpInputs>();

   async function registerAccount(dataFromRegister: SignUpInputs) {
      try {
         if (
            dataFromRegister?.email !== undefined &&
            dataFromRegister?.password !== undefined
         ) {
            await createUserWithEmailAndPassword(
               auth,
               dataFromRegister?.email,
               dataFromRegister?.password
            );
            SuccessAlert("Sign Up Success");
         }
      } catch (error) {
         ErrorAlert(error);
      }
   }

   function onSubmit(dataFromRegister: SignUpInputs) {
      registerAccount(dataFromRegister);
   }

   return (
      <main className={styles.signUp}>
         <Head>
            <title>Sign Up</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
            <link rel="icon" href="/chatapp-icon.png" />
         </Head>
         <h1>{auth.currentUser?.email}</h1>
         <div className={styles.formBox}>
            <TitleAndSubtitle
               title={"Create your own account"}
               subtitle={"Lets do it!"}
            />
            <form onSubmit={handleSubmit(onSubmit)}>
               <div>
                  <label
                     htmlFor="username"
                     className="block text-sm font-medium my-3"
                  >
                     Username
                  </label>
                  <div className="mt-1">
                     <input
                        {...register("username", { required: true })}
                        type="text"
                        name="username"
                        id="username"
                        className={styles.signupInput}
                        placeholder="Your username"
                     />
                  </div>
               </div>
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
                        name="email"
                        id="email"
                        className={styles.signupInput}
                        placeholder="your.email@example.com"
                     />
                  </div>
               </div>
               <div className="flex">
                  <div className="mt-3 pr-1">
                     <label
                        htmlFor="password"
                        className="block text-sm font-medium my-3"
                     >
                        Password
                     </label>
                     <div className="mt-1">
                        <input
                           {...register("password", { required: true })}
                           type="password"
                           name="password"
                           id="password"
                           className={styles.signupInput}
                           placeholder="Your password"
                        />
                     </div>
                  </div>
                  <div className="mt-3 pl-1">
                     <label
                        htmlFor="password"
                        className="block text-sm font-medium my-3"
                     >
                        Confirm password
                     </label>
                     <div className="mt-1">
                        <input
                           {...register("confirmpassword", { required: true })}
                           type="password"
                           name="confirmpassword"
                           id="confirmpassword"
                           className={styles.signupInput}
                           placeholder="Confirm your password"
                        />
                     </div>
                  </div>
               </div>

               <div className="my-6 flex justify-center">
                  <button type="submit" className={styles.signupButton}>
                     Sign Up
                  </button>
               </div>
               <div className="text-center">
                  <Link href={"/auth/signIn"}>
                     <div className="iconPhosphor">
                        <SignIn
                           size={20}
                           className=" hover:text-zinc-300 mt-1 mr-2"
                        />
                        <p>Alredy have a account?</p>
                     </div>
                  </Link>
               </div>
            </form>
         </div>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0"
         >
            <path
               fill="#7e22ce"
               fillOpacity="2"
               d="M0,0L40,53.3C80,107,160,213,240,240C320,267,400,213,480,181.3C560,149,640,139,720,154.7C800,171,880,213,960,240C1040,267,1120,277,1200,282.7C1280,288,1360,288,1400,288L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
         </svg>
      </main>
   );
}

export default SignUp;
