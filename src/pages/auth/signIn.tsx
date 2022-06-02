import type { NextPage } from "next";
import { auth } from "../../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorAlert, SuccessAlert } from "../../components/alert/SignInAlert";

import TitleAndSubtitle from "../../components/layout/TitleAndSubtitle";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/auth/SignIn.module.scss";

interface SignIn {
   email: string;
   password: string;
}

export default function SignIn() {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<SignIn>();

   async function login(userEmailAndPassword: SignIn) {
      try {
         if (
            userEmailAndPassword?.email !== undefined &&
            userEmailAndPassword?.password !== undefined
         ) {
            await signInWithEmailAndPassword(
               auth,
               userEmailAndPassword?.email,
               userEmailAndPassword?.password
            );
            SuccessAlert("Sign In Success");
            location.href = "/chat";
         }
      } catch (error) {
         ErrorAlert(error);
      }
   }
   const onSubmit: SubmitHandler<SignIn> = async (userEmailAndPassword) => {
      await login(userEmailAndPassword);
   };

   return (
      <main className={styles.signIn}>
         <div className={styles.formBox}>
            <Image
               className="flex justify-center"
               src="/chatapp-logo.png"
               alt="Logo App chat"
               width={320}
               height={100}
            />
            <TitleAndSubtitle
               title={"Welcome to Chat App"}
               subtitle={"Lets talk! Sign In"}
            />
            <form onSubmit={handleSubmit(onSubmit)}>
               {errors.email && <span>This field is required</span>}
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
                        className={styles.signinInput}
                        placeholder="your.email@example.com"
                        required
                     />
                  </div>
               </div>
               <div className="mt-6">
                  <label
                     htmlFor="password"
                     className="block text-sm font-medium my-3"
                  >
                     Password
                  </label>
                  <div className="mt-1">
                     <input
                        type="password"
                        id="password"
                        {...register("password", { required: true })}
                        className={styles.signinInput}
                        placeholder="Your password"
                        required
                     />
                  </div>
               </div>
               <div className="my-6 flex justify-center">
                  <button type="submit" className={styles.signinButton}>
                     Login
                  </button>
               </div>
               <div className={styles.links}>
                  <Link href={"/auth/signUp"}>
                     <p className=" hover:text-zinc-300 mt-1 mr-2 cursor-pointer">
                        Dont have a account?
                     </p>
                  </Link>
                  <Link href={"/auth/forgotPassword"}>
                     <p className=" hover:text-zinc-300 mt-1 mr-2 cursor-pointer">
                        Forgot yout password?
                     </p>
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
               d="M0,64L40,106.7C80,149,160,235,240,256C320,277,400,235,480,208C560,181,640,171,720,160C800,149,880,139,960,144C1040,149,1120,171,1200,160C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
         </svg>
      </main>
   );
}
