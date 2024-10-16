import { ContentFont, TitleFont } from "@/fonts";
import "../styles/globals.scss";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: {
    default: "Cook's Creations | BGS Verified Creator and Modder",
    template: "%s | Cook's Creations"
  },
  description: "The home of Cook's Verified Creations and Modding Projects for Starfield and Fallout 4.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ContentFont.variable} ${TitleFont.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
