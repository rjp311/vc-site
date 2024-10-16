import styles from './header.module.scss'

import client from '../../../tina/__generated__/client';
import Image from 'next/image';
import Link from 'next/link';

import Navigation from './navigation';

import CookBGSLogo from '../../assets/CookBGS_Logo.png'
import CookBanner from '../../assets/CookBannerV1.png'

export default async function Header() {
    const response = await client.queries.global({ relativePath: 'website.json' })
    const nav = response?.data?.global?.header?.header_navigation
    
    return (
        <header className={styles.wrapper}>
            <Image className={styles.background}
                src={CookBanner}
                fill={true}
                alt="Header background - gravity lines"
            />
            <div className={styles.header}>
                <Link className={styles.logo} href="/">
                    <span className={styles.image}>
                        <Image 
                            src={CookBGSLogo}
                            fill={true}
                            alt="Cook's Creations Logo"
                        ></Image>
                    </span>
                    <span className={styles.title}>Cook's<br/>Creations</span>
                </Link>
                <Navigation props={nav}/>
            </div>
        </header>
    );
}