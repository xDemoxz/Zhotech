import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Zhotech Solutions — Innovación Digital de Alto Impacto',
  description:
    'Zhotech Solutions es una empresa de innovación tecnológica enfocada en transformación digital, desarrollo creativo, sistemas inteligentes y servicios digitales innovadores.',
  generator: 'v0.app',
  keywords: ['innovación digital', 'soluciones tecnológicas', 'transformación digital', 'desarrollo web', 'Zhotech'],
  openGraph: {
    title: 'Zhotech Solutions — Innovación Digital de Alto Impacto',
    description: 'Smart solutions for a connected future',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
