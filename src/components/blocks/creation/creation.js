

import Image from "next/image";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { Section } from '@/components/layout/section/section'
import { Container } from '@/components/layout/container/container'

import styles from './creation.module.scss'

export const Creation = ({data}) => {
    if (!data || !data.creation) {
        return (
            <Section color={data.color}>
                <h1>Please select a creation.</h1>
            </Section>
        )
    }

    const creation = data.creation;
    //console.log(creation);

    // return (
    //     <Section>
    //         <h1>Creation!</h1>
    //     </Section>
    // )

    return (
        <Section color={data.color}>
            <Container>
                {data.headline ? <h1>{data.headline}</h1> : <></> }
                <div className={styles.creation}>
                    <div className={styles.art}>
                        <Image
                            className={styles.box}
                            src={creation.box.src}
                            alt={creation.box.alt}
                            width={256}
                            height={256}
                        ></Image>
                        <Image
                            className={styles.cover}
                            src={creation.cover.src}
                            alt={creation.cover.alt}
                            fill={true}
                        ></Image>
                        <div className={styles.tags}>
                            <p className={styles.tag}>{creation.type}</p>
                            <p className={styles.tag}>{creation.game}</p>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.headline}>
                            <div className={styles.title}>
                                <h2>{creation.title}</h2>
                                { creation.version ? <sub>{creation.version}</sub> : <></> }
                            </div>
                            <p className={creation.status === 'published' ? `${styles.released}` : `${styles.wip}`}>{creation.status === 'published' ? 'Published' : 'In Development'}</p>
                        </div>
                        <div className={styles.tagline}>
                            <p>{creation.tagline}</p>
                            { creation?.slug ? (
                                <p>
                                    {/** <Link href={`/creations/${creation.slug}`} target='_self'>Learn more</Link> */}
                                </p>
                            ) : <></> }
                        </div>
                        <div className={styles.links}>
                            { creation?.links?.nexus ? (
                                <Link href={creation.links.nexus.url} target={creation.links.nexus.location}>
                                    <button>{creation.links.nexus.text}</button>
                                </Link>
                            ) : <></> }
                            { creation?.links?.bethesdapc ? (
                                <Link href={creation.links.bethesdapc.url} target={creation.links.bethesdapc.location}>
                                    <button>{creation.links.bethesdapc.text}</button>
                                </Link>
                            ) : <></> }
                            { creation?.links?.bethesdaxb ? (
                                <Link href={creation.links.bethesdaxb.url} target={creation.links.bethesdaxb.location}>
                                    <button>{creation.links.bethesdaxb.text}</button>
                                </Link>
                            ) : <></> }
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}