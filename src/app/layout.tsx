import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/onesaas-managed/components/Navigation'
import Footer from '@/onesaas-managed/components/Footer'
import { AuthProvider } from '@/onesaas-core/auth/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OneSaaS App',
  description: 'Built with OneSaaS Starter Kit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <AuthProvider>
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
