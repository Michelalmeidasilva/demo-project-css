import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <body className={styles.body}>
      <div className={styles.leftContainer}>
        <div className={styles.icon}>a</div>
        <div className={styles.icon}>a</div>
        <div className={styles.icon}>a</div>
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.title}>Home</div>
        <div className={styles.whatshappening}>q q ta aconteceno</div>
        <p className={styles.tweetCard}>post</p>
      </div>
      <div className={styles.rightContainer}>
        <p>a</p>
      </div>
    </body>
  )
}
