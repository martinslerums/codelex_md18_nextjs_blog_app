import { Blogs } from './BlogList'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Blogs />
    </main>
  )
}
