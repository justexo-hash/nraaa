import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yukon Lab - Pioneering Bio-Cloning Technology',
  description: 'Yukon Lab is at the forefront of bio-cloning and genetic engineering, bringing extinct species back to life through advanced technology.',
  keywords: 'bio-cloning, genetic engineering, extinct species, Yukon Lab, biotechnology, research, developmental biology',
  authors: [{ name: 'Yukon Lab' }],
  creator: 'Yukon Lab',
  publisher: 'Yukon Lab',
  openGraph: {
    title: 'Yukon Lab - Pioneering Bio-Cloning Technology',
    description: 'Yukon Lab is at the forefront of bio-cloning and genetic engineering, bringing extinct species back to life through advanced technology.',
    url: 'https://yukonlab.org',
    siteName: 'Yukon Lab',
    images: [
      {
        url: '/images/yukon-lab-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Yukon Lab Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yukon Lab - Pioneering Bio-Cloning Technology',
    description: 'Yukon Lab is at the forefront of bio-cloning and genetic engineering, bringing extinct species back to life through advanced technology.',
    images: ['/images/yukon-lab-twitter.jpg'],
  },
  icons: {
    icon: '/icon.ico',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  themeColor: '#ffffff',
  alternates: {
    canonical: 'https://yukonlab.org',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 