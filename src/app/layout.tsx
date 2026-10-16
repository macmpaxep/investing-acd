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

export const metadata: Metadata = {
  title: "University of Budget Projecting — обучение инвестициям в акции на 12 месяцев",
  description:
    "Год обучения и сопровождения по инвестициям в акции с куратором и пожизненный доступ к авторским материалам.",
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
