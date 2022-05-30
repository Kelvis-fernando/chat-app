import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/auth/SignUp.module.css";

const Register: NextPage = () => {
   return (
      <main className={styles.signUp}>
         <div>
            <header className="text-center">
               <h1 className="text-xl">Here you can create your own account</h1>
               <h3>Lets do it!</h3>
            </header>
            <form>
               <div>
                  <label
                     htmlFor="username"
                     className="block text-sm font-medium my-3"
                  >
                     Username
                  </label>
                  <div className="mt-1">
                     <input
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
                        type="password"
                        name="password"
                        id="password"
                        className={styles.signupInput}
                        placeholder="Confirm your password"
                     />
                  </div>
               </div>
               <div className="my-6 flex justify-center">
                  <button className={styles.signupButton}>Sign Up</button>
               </div>
            </form>
            <div className="text-center">
               <Link href={"/auth/signIn"}>Alredy have a account?</Link>
            </div>
         </div>
      </main>
   );
};

export default Register;
