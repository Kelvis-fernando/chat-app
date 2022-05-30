import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/auth/ForgotPassword.module.css";

const ForgotPassword: NextPage = () => {
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
            <form>
               <div className="mt-6">
                  <label
                     htmlFor="email"
                     className="block text-sm font-medium my-3"
                  >
                     Email
                  </label>
                  <div className="mt-1">
                     <input
                        type="email"
                        name="email"
                        id="email"
                        className={styles.ForgotPasswordInput}
                        placeholder="your.email@example.com"
                     />
                  </div>
               </div>
               <div className="my-6 flex justify-center">
                  <button className={styles.ForgotPasswordButton}>
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
