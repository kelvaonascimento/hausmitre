import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat, Lato } from 'next/font/google'
import { Toaster } from 'sonner'
import Cursor from '@/components/ui/Cursor'
import Navbar from '@/components/ui/Navbar'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat-family',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-lato-family',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Haus Mitre Edition Campo Belo | Proporções Extraordinárias',
  description: 'O maior lançamento de Campo Belo. Mansões Suspensas de 222m² e Coberturas Duplex de 438m². Arquitetura Jonas Birger. Campo Belo, São Paulo.',
  openGraph: {
    title: 'Haus Mitre Edition Campo Belo',
    description: 'Proporções Extraordinárias. Campo Belo, São Paulo.',
    images: ['/images/1.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable} ${lato.variable}`}>
      <body className="bg-beige-light text-dark antialiased">
        <Cursor />
        <Navbar />
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}
