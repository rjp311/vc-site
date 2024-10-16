import { Georama } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.scss'

const ContentFont = Montserrat({
    display: 'swap',
    variable: '--font-content',
    subsets: ['latin']
});

const TitleFont = Georama({
    display: 'swap',
    variable: '--font-title',
    weight: ['700', '900'],
    subsets: ['latin']
});

export { ContentFont, TitleFont }