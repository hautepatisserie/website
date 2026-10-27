import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import "./globals.css";

const script = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-script" });

export const metadata: Metadata = {
  title: "Haute Pâtisserie | Bespoke Cakes & Atelier Karen, Nairobi",
  description: "Bespoke celebration tiers, luxury wedding cakes, and artisanal theme cakes handcrafted in Karen, Nairobi.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23B45309'><circle cx='12' cy='12' r='11' fill='%23FEF3C7'/><path d='M12 4v4m-2 0h4m-2 0c-2.5 2.2-3.2 6.5-2.5 9 .5 1.8 4.5 1.8 5 0 .7-2.5 0-6.8-2.5-9z' stroke='%23B45309' stroke-width='1.5' fill='none'/></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}