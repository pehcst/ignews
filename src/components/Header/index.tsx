import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headercontainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="igNews" />
        <nav>
          <a className={styles.active} href="/">Home</a>
          <a href="/posts">post</a>
        </nav>
      </div>
    </header>
  )
}
