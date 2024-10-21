import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import { Section } from "../../layout/section/section";
import { Container } from "../../layout/container/container";
import Image from "next/image";

import styles from './content.module.scss'

export const Content = ({data}) => {
    return (
        <Section color={data.color} className={styles.section}>
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
            <Container data-tina-field={tinaField(data, "body")} className={styles.content}>
                <TinaMarkdown content={data.body} />
            </Container>
        </Section>
    )
}