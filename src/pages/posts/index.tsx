import Head from "next/head";
import React from "react";
import styles from "./styles.module.scss";

type PostsProps = {};

export default function Posts({}: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Lorem ipsum dolor sit amet.</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi
              dignissimos, a ut molestiae tenetur nihil optio ea corporis fuga.
              Soluta maiores saepe temporibus numquam repellat corporis
              explicabo amet delectus.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Lorem ipsum dolor sit amet.</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi
              dignissimos, a ut molestiae tenetur nihil optio ea corporis fuga.
              Soluta maiores saepe temporibus numquam repellat corporis
              explicabo amet delectus.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Lorem ipsum dolor sit amet.</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi
              dignissimos, a ut molestiae tenetur nihil optio ea corporis fuga.
              Soluta maiores saepe temporibus numquam repellat corporis
              explicabo amet delectus.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Lorem ipsum dolor sit amet.</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi
              dignissimos, a ut molestiae tenetur nihil optio ea corporis fuga.
              Soluta maiores saepe temporibus numquam repellat corporis
              explicabo amet delectus.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
