import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/auth/SignUp.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import TitleAndSubtitle from "../../components/layout/TitleAndSubtitle";

interface SignUpInputs {
   username: string;
   email: string;
   password: string;
   confirmpassword: string;
}

const SignUp: NextPage = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<SignUpInputs>();

   const onSubmit: SubmitHandler<SignUpInputs> = (resp) => console.log(resp);

   return (
      <main className={styles.signUp}>
         <div>
            <TitleAndSubtitle
               title={"Here you can create your own account"}
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
               <div className="mt-6">
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
               <div className="mt-6">
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
               <div className="my-6 flex justify-center">
                  <button type="submit" className={styles.signupButton}>
                     Sign Up
                  </button>
               </div>
            </form>
            <div className="text-center">
               <Link href={"/auth/signIn"}>Alredy have a account?</Link>
            </div>
         </div>
      </main>
   );
};

export default SignUp;
