import styles from './section.module.scss';

export const Section = ({ children, color, image, className }) => {

    const ColourMap = {
        primary: 'bg-color primary',
        secondary: 'bg-color secondary',
        tertiary: 'bg-color tertiary',
        light: 'bg-color light',
        dark: 'bg-color dark'
    }

    const StyleColor = color ? ColourMap[color] : ''

    return (
        <section className={`${styles.section} ${StyleColor} ${className ?? ''}`}>
            {children}
        </section>
    )
}