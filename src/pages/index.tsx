import Link from 'next/link';
import styles from '@styles/Home.module.css';

import Button from '@components/button'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={`${roboto.className} ${styles.container}`}>
      <h1 className={styles.title}>Welcome to Algorithmia</h1>
      <div className={styles.buttons}>
        <Link href="/n-quen" className={styles.button}>
          <Button>N-Queen</Button>
        </Link>
        <Link href="/sudoku" className={styles.button}>
          <Button>Sudoku</Button>
        </Link>
        <Link href="/maze" className={styles.button}>
          <Button>Maze</Button>
        </Link>
      </div>
    </main>
  );
}
