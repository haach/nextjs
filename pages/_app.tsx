import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/App.module.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Playing around</title>
        <meta name="description" content="Playing around" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/you">You</Link>
          <Link href="/company">Company</Link>
          <Link href="/profile">Evil Corp</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
