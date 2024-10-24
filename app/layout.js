import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Default Title',
  description: 'Default description for your site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {/* <Header /> */}
        <div className="container mx-auto">{children}</div>
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  );
}
