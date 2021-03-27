import Head from 'next/head'
import Form from '../components/Form'
import Logo from '../components/Logo'
import Text from '../components/Text'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lyrics</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Grenze:wght@600&display=swap" rel="stylesheet" />
      </Head>

      <Logo />

      <main className={styles.main}>
        
        <Text />
        <Form />

      </main>
    </div>
  )
}
