import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/auth/SignIn.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

interface signIn {
   email: string;
   password: string;
}

const SignIn: NextPage = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<signIn>();

   const onSubmit: SubmitHandler<signIn> = (data) => console.log(data);

   return (
      <main className={styles.signIn}>
         <div>
            <header className="text-center">
               <h1 className="text-xl">
                  Hello, welcome to the best chat app of my street
               </h1>
               <h3>Here is the place where you will login</h3>
            </header>
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
            </form>
            <div className={styles.links}>
               <Link href={"/auth/signUp"}>Dont have a account?</Link>
               <Link href={"/auth/forgotPassword"}>Forgot yout password?</Link>
            </div>
         </div>
      </main>
   );
};

export default SignIn;
