import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata = {
  title: 'Default Title',
  description: 'Default description for your site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-MEMLV0HS0E"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MEMLV0HS0E');
            `,
          }}
        />
      </head>
      <body className="bg-background text-foreground">
        {/* <Header /> */}
        <div className="container mx-auto">{children}</div>
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  );
}
