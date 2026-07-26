import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Plus_Jakarta_Sans, Noto_Sans_Malayalam } from 'next/font/google'
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

const notoMalayalam = Noto_Sans_Malayalam({
  subsets: ['malayalam'],
  variable: '--font-malayalam-var',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Jafar Marakkara | ജാഫർ മറക്കാര',
  description:
    'Official website of Jafar Marakkara — Youth Icon, Community Leader, and Visionary Businessman from Malappuram, Kerala.',
  keywords: [
    'Jafar Marakkara',
    'ജാഫർ മറക്കാര',
    'Kerala politician',
    'Malappuram youth leader',
    'Kerala youth icon',
    'Malappuram business',
    'community development Kerala',
  ],
  authors: [{ name: 'Jafar Marakkara' }],
  openGraph: {
    title: 'Jafar Marakkara | ജാഫർ മറക്കാര',
    description:
      'Youth Icon. Community Leader. Visionary Businessman. A new generation of leadership from Malappuram, Kerala.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jafar Marakkara | ജാഫർ മറക്കാര',
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
      className={`${manrope.variable} ${jakartaSans.variable} ${notoMalayalam.variable} bg-background`}
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
