import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const sans = Onest({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const display = localFont({
  src: "../fonts/Faberge.ttf",
  variable: "--font-display",
  weight: "400",
});

const title = "University of Budget Projecting — обучение инвестициям в акции на 12 месяцев";
const description =
  "Год обучения и сопровождения по инвестициям в акции с куратором и пожизненный доступ к авторским материалам.";

export const metadata: Metadata = {
  metadataBase: new URL("https://unibp.cc"),
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://unibp.cc",
    siteName: "University of Budget Projecting",
    locale: "ru_RU",
    title,
    description,
    images: [{ url: "/og.png?v=3", width: 1200, height: 630, alt: "University of Budget Projecting" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png?v=3"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f5f1",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${sans.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
