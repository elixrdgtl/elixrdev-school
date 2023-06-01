import Header from '@/components/header/header-ui'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'computer 4',
  description: 'Site under construction.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sky-900 text-white`}>
        <main className="w-full h-screen">
          <div className="px-12 py-24">
            {children}
          </div>
        </main>
        <Header />
      </body>
    </html>
  )
}
