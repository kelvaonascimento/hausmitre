'use client'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/constants'

const footerLinks = [
  { label: 'Localização', href: '#localizacao' },
  { label: 'Apartamentos', href: '#living' },
  { label: 'Lazer', href: '#lazer' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className="bg-dark px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Logo SVG oficial */}
        <div className="flex justify-center mb-8">
          <Image
            src={IMAGES.logoWhite}
            alt="Haus Mitre Edition Campo Belo"
            width={180}
            height={120}
            className="h-20 w-auto opacity-90"
          />
        </div>

        <span className="block w-20 h-px bg-gold mx-auto mb-8" />

        {/* Tagline */}
        <p className="font-regranek text-copper-light text-xl text-center mb-12 tracking-wide">
          Proporções Extraordinárias
        </p>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          {footerLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-montserrat text-[11px] tracking-[0.15em] uppercase text-white/50 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Legal */}
        <div className="border-t border-white/10 pt-8 text-center space-y-4">
          <p className="font-lato font-light text-white/30 text-xs leading-relaxed max-w-3xl mx-auto">
            As imagens são meramente ilustrativas com sugestão de decoração. Os móveis e acessórios são de dimensões comerciais e não fazem parte do contrato de compra e venda. Imagens preliminares sujeitas a alteração. Memorial descritivo disponível no estande de vendas. Incorporação registrada sob nº R-01 da matrícula 000.000 do 00º Oficial de Registro de Imóveis de São Paulo/SP.
          </p>
          <p className="font-lato font-light text-white/30 text-xs">
            Realização: Mitre Realty Empreendimentos e Participações S.A. — CRECI 025553-J
          </p>
          <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-white/20 mt-6">
            &copy; {new Date().getFullYear()} Haus Mitre Edition Campo Belo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
