import client from '../../../tina/__generated__/client';
import Link from 'next/link';

import styles from './footer.module.scss'

export default async function Footer() {
    const response = await client.queries.global({ relativePath: 'website.json' })
    const nav = response?.data?.global?.footer?.footer_navigation
    
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <p>Made with <Link href="https://nextjs.org/" target="_blank">Next.js</Link> and <Link href="https://tina.io/" target="_blank">TinaCMS</Link>.</p>
            </div>
        </footer>
    );
}