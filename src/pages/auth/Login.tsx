import type { NextPage } from "next";
import Link from "next/link";

const Login: NextPage = () => {
   return (
      <div className="bg-zinc-700 h-[100vh] text-white">
         <header className="text-center">
            <h1 className="text-xl">
               Hello, welcome to the best chat app of my street
            </h1>
            <p>Here is the plade where you will login</p>
         </header>
         <main>
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
                        className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none text-zinc-800"
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
                        className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none text-zinc-800"
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
                        className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none text-zinc-800"
                        placeholder="Your password"
                     />
                  </div>
               </div>
               <div className="my-6 flex justify-center">
                  <button className="bg-purple-700 hover:bg-purple-800 w-52 py-2.5 text-sm leading-5 rounded-md font-semibold text-white duration-100 transition ease-in-out delay-100">
                     Login
                  </button>
               </div>
            </form>
            <div className="flex">
               <Link href={"/auth/register"}>Dont have a account?</Link>
               <Link href={"/auth/forgotPassword"}>
                  Forgot yout password? its ok click here!
               </Link>
            </div>
         </main>
      </div>
   );
};

export default Login;
