import type { Metadata } from "next";
import Header from "./components/Header/Header";

import './globals.scss'

export const metadata: Metadata = {
  title: "ECOmarket",
  description: "NextJS application for the Coderhouse course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
