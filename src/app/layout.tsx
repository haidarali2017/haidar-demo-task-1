import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'; // ONLY CSS
import "./globals.css";
import Script from 'next/script';
import '/public/assets/css/style.css';
import '/public/assets/css/responsive.css';
import '/public/assets/fonts/stylesheet.css';
import Header from "./components/Header";

 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Metafusion | Home',
  description: 'MetaFusion Labs Next.js Migration',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Animate.css */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>
         <Header />
        {children}

          {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* jQuery */}
        <Script src="assets/js/jquery.min.js" strategy="afterInteractive" />

        {/* GSAP */}
        <Script src="https://unpkg.com/gsap@3/dist/gsap.min.js" strategy="afterInteractive" />

        {/* Lottie */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.0/lottie.min.js"
          strategy="afterInteractive"
        />

        {/* Your custom script */}
        <Script src="assets/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
