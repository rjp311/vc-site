import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import { Section } from '@/components/layout/section/section'
import { Container } from '@/components/layout/container/container'
import Image from "next/image";
import Link from "next/link";

import styles from './cta.module.scss'

export const CTA = ({data}) => {
    return (
        <Section color={data.color} data-tina-field={tinaField(data, "image")} className={styles.section}>
            { data.image && data.image.src && (
                <Image
                    className={styles.background}
                    alt={data.image.alt}
                    src={data.image.src}
                    width={500}
                    height={500}
                    priority={true}
                />
            )}
            <Container className={styles.container}>
                { data.headline && (
                    <h1 data-tina-field={tinaField(data, "headline")}>
                        {data.headline}
                    </h1>
                )}
                <div className={styles.cta}>
                    { data.text && (
                        <div data-tina-field={tinaField(data, "text")} className={styles.text}>
                            <TinaMarkdown content={data.text} />
                        </div>
                    )}

                    { data.actions && (
                        <div className={styles.actions}>
                            { data?.actions.map((action, i) => {
                                return (
                                    <div key={i} data-tina-field={tinaField(data, `actions[${i}]`)} className={styles.link}>
                                        <h4>{action?.text || ''}</h4>
                                        <Link href={action?.link?.url || ''} target={action?.link?.location || '_self'}>
                                            {action.type === 'button' ?
                                                <button>
                                                    {action?.link?.text || ''}
                                                </button>
                                            :
                                                action?.link?.text || ''
                                            }
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </Container>
        </Section>
    )
}