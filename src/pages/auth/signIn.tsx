import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/auth/SignIn.module.css";

const Login: NextPage = () => {
   return (
      <main className={styles.signIn}>
         <div>
            <header className="text-center">
               <h1 className="text-xl">
                  Hello, welcome to the best chat app of my street
               </h1>
               <h3>Here is the place where you will login</h3>
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
                        className={styles.signinInput}
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
                        className={styles.signinInput}
                        placeholder="Your password"
                     />
                  </div>
               </div>
               <div className="my-6 flex justify-center">
                  <button className={styles.signinButton}>Login</button>
               </div>
            </form>
            <div className={styles.links}>
               <Link href={"/auth/signUp"}>Dont have a account?</Link>
               <Link href={"/auth/forgotPassword"}>Forgot yout password?</Link>
            </div>
         </div>
      </main>
   );
};

export default Login;
