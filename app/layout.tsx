import type { Metadata } from "next";
import Header from "@components/Header/Header";

import './globals.scss'

export const metadata: Metadata = {
  title: "Capellari Muebles",
  description: "NextJS application for the Coderhouse course",
  keywords: ['Coderhouse', 'NextJS', 'eCommerce', 'Vercel', 'SSR']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-background-color'>
        <Header />
        <div className="py-6 px-10">{children}</div>
      </body>
    </html>
  );
}
