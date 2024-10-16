'use client'

import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import { Section } from '@/components/layout/section/section'
import { Container } from '@/components/layout/container/container'
import Image from "next/image";

import styles from './hero.module.scss'

export const Hero = ({data}) => {
    return (
        <Section color={data.color} data-tina-field={tinaField(data, "image")} className={styles.section}>
            { data.image && data.image.src && (
                <Image
                    className={styles.background}
                    alt={data.image.alt}
                    src={data.image.src}
                    width={1920}
                    height={1080}
                    priority={true}
                />
            )}
            <Container className={styles.container}>
                { data.headline && (
                    <h1 data-tina-field={tinaField(data, "headline")}>
                        {data.headline}
                    </h1>
                )}
                { data.text && (
                    <div data-tina-field={tinaField(data, "text")}>
                        <TinaMarkdown content={data.text} />
                    </div>
                )}
            </Container>
        </Section>
    )
}