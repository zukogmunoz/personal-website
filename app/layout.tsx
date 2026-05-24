import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nalu.dev'),
  title: {
    default: 'Nalú Muñoz | Senior Frontend & Mobile Engineer',
    template: '%s | Nalú Muñoz'
  },
  description: 'Senior React Native & Frontend Engineer with 4+ years building fintech, e-commerce and SaaS products used by thousands of users across LATAM and Europe.',
  keywords: ['Software Engineer', 'React', 'React Native', 'Mobile Developer', 'Fullstack', 'TypeScript', 'Next.js', 'Fintech', 'Clean Architecture'],
  authors: [{ name: 'Nalú Muñoz' }],
  creator: 'Nalú Muñoz',
  openGraph: {
    title: 'Nalú Muñoz | Senior Frontend & Mobile Engineer',
    description: 'Senior React Native & Frontend Engineer with 4+ years building fintech, e-commerce and SaaS products.',
    url: 'https://nalu.dev',
    siteName: 'Nalú Muñoz Portfolio',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/icon.svg',
        width: 1200,
        height: 630,
        alt: 'Nalú Muñoz | Senior Frontend & Mobile Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nalú Muñoz | Senior Frontend & Mobile Engineer',
    description: 'Senior React Native & Frontend Engineer with 4+ years building fintech, e-commerce and SaaS products.',
    images: ['/icon.svg'],
  },
  alternates: {
    canonical: 'https://nalu.dev',
    languages: {
      'es-ES': '/?lang=es',
      'en-US': '/?lang=en',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
