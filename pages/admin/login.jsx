import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Login.module.css";
import Head from "next/head";
import Image from "next/image";

const login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      setLoading(true);
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>{"Login Admin Ari Shoes"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700;900&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Chivo+Mono:ital,wght@1,700&display=swap');
        </style>
      </Head>

      <div className={styles.container}>
        <Image
          src="/img/official-login.jpg"
          alt=""
          width="600"
          height="600"
          className={styles.img}
        />
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Sign In</h1>
          <input
            placeholder="username"
            className={styles.input}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} className={styles.button}>
            {!loading ? "Sign In" : "Loading..."}
          </button>
          {error && (
            <span className={styles.error}>Email dan Password Salah!</span>
          )}
        </div>
      </div>
    </>
  );
};

export default login;
