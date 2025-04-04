//app/layout.tsx: root layout for my app

import './globals.css';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cocktail Explorer',
  description: 'Find/explore cocktails',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#fffef6] text-blue-900 font-sans">
        <Header />
        <main className="min-h-screen flex flex-col items-center py-10 px-6">
          {children}
        </main>
      </body>
    </html>
  );
}


