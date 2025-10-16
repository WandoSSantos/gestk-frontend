import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { QueryProvider } from '@/components/providers/QueryProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GESTK - Sistema de Gestão Contábil Inteligente',
  description: 'Plataforma completa para administração contábil com dashboard inteligente, multi-tenant seguro e relatórios automatizados. Gerencie sua contabilidade com eficiência e segurança.',
  keywords: 'gestão contábil, sistema contábil, dashboard contábil, multi-tenant, relatórios automatizados, administração contábil',
  authors: [{ name: 'GESTK Team' }],
  creator: 'GESTK',
  publisher: 'GESTK',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.gestk.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.gestk.com.br',
    title: 'GESTK - Sistema de Gestão Contábil Inteligente',
    description: 'Plataforma completa para administração contábil com dashboard inteligente, multi-tenant seguro e relatórios automatizados.',
    siteName: 'GESTK',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GESTK - Sistema de Gestão Contábil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GESTK - Sistema de Gestão Contábil Inteligente',
    description: 'Plataforma completa para administração contábil com dashboard inteligente, multi-tenant seguro e relatórios automatizados.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <QueryProvider>
            {children}
            <Toaster />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
