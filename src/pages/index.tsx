import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import SignIn from "./auth/signIn";

const Home: NextPage = () => {
   return (
      <div className="bg-zinc-700 text-white">
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/chatapp-icon.png" />
         </Head>

         <main className={styles.main}>
            <SignIn />
         </main>
      </div>
   );
};

export default Home;
