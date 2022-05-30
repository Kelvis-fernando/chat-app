import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/auth/ForgotPassword.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

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

   const onSubmit: SubmitHandler<ForgotPasswordInput> = (resp) => console.log(resp);

   return (
      <main className={styles.ForgotPassword}>
         <div>
            <header className="text-center">
               <h1 className="text-xl">Forgot you password?</h1>
               <h3>
                  No problem, tell us your e-mail and we will recover it for
                  you!
               </h3>
            </header>
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
                  <Link href={"/auth/signIn"}>Back to sign up</Link>
               </div>
            </form>
         </div>
      </main>
   );
};

export default ForgotPassword;
