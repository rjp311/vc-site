import styles from './notfound.module.scss'

import Link from 'next/link'

export default async function NotFound() {

    return (
        <main>
            <section className={styles.sorry}>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        <h1>Whoops, sorry!</h1>
                        <p>Looks like the page you requested doesn't exist in this universe.</p>
                        <p>Try a <Link href='/'>New Game Plus</Link> or check out some featured content below.</p>
                    </div>
                    <div className={styles.image}>
                        <div className={styles.planet}><p>404</p></div>
                    </div>
                </div>
            </section>
        </main>
    )
}