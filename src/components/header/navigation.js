'use client'

import styles from './header.module.scss';

import { useState, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import CookBGSLogo from '../../assets/CookBGS_Logo.png'
import CookBanner from '../../assets/CookBannerV1.png'


const NavLink = ({props, isChild = false}) => {
    const url = props?.url
    const target = props?.location
    const text = props?.text

    if (url) {
        return <Link href={`${url}`} target={target} className={`${styles.link} ${isChild ? styles.child : styles.parent}`}>{text}</Link>
    } else {
        return <span className={`${styles.link} ${isChild ? styles.child : styles.parent}`}>{text}</span>
    }
}

const NavLinks = ({props, isChild = false}) => {
    const url = props?.url
    const target = props?.location
    const text = props?.text
    const children = props?.children

    if (children && children.length > 0) {
        return (
            <div className={styles.dropdown}>
                <NavLink props={props} isChild={isChild}></NavLink>
                <div className={styles.content}>
                    { children?.map((cl, i) => {
                        return <NavLinks key={i} props={cl} isChild={true}></NavLinks>
                    })}
                </div>
            </div>
        )
    } else {
        return <NavLink props={props} isChild={isChild}></NavLink>
    }
}

export default function Navigation({props}) {
    const path = usePathname();
    const nav = props

    const [isBurgerOpen, setBurgerOpen] = useState(false);

    const ToggleHamburger = useCallback(() => {
        setBurgerOpen(!isBurgerOpen);
    }, [isBurgerOpen]);

    useEffect(() => {
        setBurgerOpen(false);
    }, [path])

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
                <div className={styles.grow}></div>
                <div className={`${styles.navbar} ${isBurgerOpen ? styles.open : ''}`}>
                    <nav className={`${styles.navigation}`}>
                        { nav?.map((nl, i) => {
                            return <NavLinks key={i} props={nl} callback={() => ToggleHamburger()}/>
                        })}
                    </nav>
                </div>
                <div className={`${styles.hamburger} ${isBurgerOpen ? styles.open : ''}`} onClick={() => ToggleHamburger()}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}