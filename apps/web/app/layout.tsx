import '@ui/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/theme-provider';
import { ReactNode } from 'react';
import ThemeDropdown from '../components/theme-dropdown';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Turborepo Playground'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <header className="container mx-auto p-4 flex justify-between">
        <h1 className="text-3xl">Web App for clients</h1>
        <ThemeDropdown/>
      </header>
      {children}
    </ThemeProvider>
    </body>
    </html>
  );
}
