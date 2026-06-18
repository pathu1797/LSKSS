import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "लोकसंस्कृती कला सेवा संघ | Lok Sanskruti Kala Seva Sangh",
  description:
    "17th generation custodians of Maharashtrian folk art & culture. Established 2022, Ahilyanagar. Home of Swarsandhya Sangeet Niketan — classical music education affiliated with Akhil Bharatiya Gandharva Mahavidyalaya.",
  keywords:
    "Lok Sanskruti, Gondhali, Maharashtrian folk art, Shinde, Swarsandhya Sangeet Niketan, classical music, Ahmednagar",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="mr"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}