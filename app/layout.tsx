import type { Metadata } from "next";
import './globals.scss'
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "CoderApp",
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
