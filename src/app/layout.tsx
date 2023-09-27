import Navbar from '@/components/Navbar';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Interactive alert board",
  description: "Interactive alert board",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full">
          <Navbar/>
          <div className="children">{children}</div>
        </main>
      </body>
    </html>
  );
}
