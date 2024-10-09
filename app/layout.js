// app/layout.js

import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {/* <Header /> */}
        <div className="container mx-auto">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
