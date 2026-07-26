import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Jafar Marakkara | Youth Icon & Community Leader',
  description:
    'Official website of Jafar Marakkara — Youth Icon, Community Leader, and Visionary Businessman from Malappuram, Kerala.',
  keywords: [
    'Jafar Marakkara',
    'Kerala politician',
    'Malappuram youth leader',
    'Kerala youth icon',
    'Malappuram business',
    'community development Kerala',
  ],
  authors: [{ name: 'Jafar Marakkara' }],
  openGraph: {
    title: 'Jafar Marakkara | Youth Icon & Community Leader',
    description:
      'Youth Icon. Community Leader. Visionary Businessman. A new generation of leadership from Malappuram, Kerala.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jafar Marakkara | Youth Icon & Community Leader',
    description: 'Youth Icon. Community Leader. Visionary Businessman from Malappuram, Kerala.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a7a4c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jakartaSans.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
