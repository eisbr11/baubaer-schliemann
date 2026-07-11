import { Karla, Playfair_Display } from 'next/font/google';

import type { Metadata } from 'next';
import './globals.css';

const karla = Karla({
  variable: '--font-karla',
  subsets: ['latin', 'latin-ext'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Baubär Schliemann',
  description: 'Homepage für meinen Papa <3 (RIP)',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html
    lang='de'
    className={`${karla.variable} ${playfairDisplay.variable} h-full antialiased`}
  >
    <body className='min-h-full flex flex-col'>{children}</body>
  </html>
);

export default RootLayout;
