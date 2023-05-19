import Header from '@/components/header/header-ui'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="w-full h-screen">
          <Header />
          <div className="px-12 py-24">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
