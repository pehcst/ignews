import Link from "next/link";
import ActiveLink from "../ActiveLink";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  

  return (
    <header className={styles.headercontainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' alt='igNews' />
        <nav>
          <ActiveLink activeClassName={styles.active} href='/'>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href='/posts' prefetch>
            <a>post</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
