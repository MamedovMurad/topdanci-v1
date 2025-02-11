import '@mantine/core/styles.css';
import type { Metadata } from "next";

import { Roboto_Condensed } from 'next/font/google';
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MantineProvider } from '@mantine/core';

import { Notifications } from '@mantine/notifications';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'], // Specify weights you need
  style: ['normal', 'italic'],         // Include both normal and italic styles
  display: 'swap',                     // Ensure text is visible while font loads
});

export const metadata: Metadata = {
  title: "Topdanci.az",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={typeof window !=="undefined"&&localStorage.getItem('lang')||"az"} >

      <body
       className={robotoCondensed.className}
      >
        <Header/>
        <MantineProvider>  <Notifications />{children}</MantineProvider>
     
        <Footer/>
      </body>
    </html>
  );
}
