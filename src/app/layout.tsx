import type { Metadata } from 'next';
import './globals.css';

import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';

const inter: NextFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'react-material-ui-sample',
  description: 'React Material UI sample',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>): JSX.Element {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );

}
