import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/auth/SignIn.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import TitleAndSubtitle from "../../components/layout/TitleAndSubtitle";

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
            <TitleAndSubtitle
               title={"Hello, welcome to the best chat app of my street"}
               subtitle={"Here is the place where you will login"}
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
            </form>
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
         </div>
      </main>
   );
};

export default SignIn;
