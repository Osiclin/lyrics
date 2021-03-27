import Link from 'next/link'
import styles from '../styles/Logo.module.css'

export default function Logo() {
    return(
        <div className={styles.container}>
            <div id={styles.logotext}>
                <Link href="/">
                    <a>Lyrics</a>
                </Link>
            </div>
            <div id={styles.logosymbol}>
                <p id={styles.logoletter}>L</p>
            </div>
        </div>
    )
}