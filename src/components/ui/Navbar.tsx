'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/constants'

const links = [
  { label: 'Localização', href: '#localizacao' },
  { label: 'Apartamentos', href: '#living' },
  { label: 'Lazer', href: '#lazer' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark py-4 shadow-2xl' : 'bg-transparent py-6'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="#" className="block">
          <Image
            src={IMAGES.logoWhite}
            alt="Haus Mitre Edition Campo Belo"
            width={120}
            height={80}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-montserrat text-[11px] tracking-[0.15em] uppercase text-white/70 hover:text-gold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden md:inline-block font-montserrat text-[10px] tracking-[0.2em] uppercase px-6 py-3 border border-copper text-copper hover:bg-copper hover:text-white transition-all duration-300"
        >
          QUERO SABER MAIS
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <motion.div
        className="md:hidden absolute top-full left-0 right-0 bg-dark"
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <ul className="flex flex-col gap-0 px-6 py-8">
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block font-montserrat text-sm tracking-[0.15em] uppercase text-white/80 hover:text-gold py-4 border-b border-white/10 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <a
              href="#contato"
              className="inline-block font-montserrat text-xs tracking-[0.2em] uppercase px-10 py-5 bg-copper text-white transition-all duration-300 hover:bg-copper-dark w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              QUERO SABER MAIS
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  )
}
