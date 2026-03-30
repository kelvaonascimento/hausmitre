'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { COPY, IMAGES } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 12, ease: 'easeOut' }}
      >
        <Image
          src={IMAGES.hero}
          alt="Haus Mitre Edition Campo Belo"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/50 to-dark/70" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          className="font-montserrat text-xs font-normal tracking-[0.25em] uppercase text-gold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {COPY.hero.label}
        </motion.p>

        <motion.h1
          className="font-regranek text-white mb-6 whitespace-pre-line"
          style={{ fontSize: 'clamp(48px, 7vw, 100px)', lineHeight: '1.1', letterSpacing: '0.02em' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          {COPY.hero.title}
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <span className="block w-20 h-px bg-gold" />
          <p className="font-montserrat text-sm font-light tracking-[0.2em] text-white/60 uppercase">
            {COPY.hero.subtitle}
          </p>
          <span className="block w-20 h-px bg-gold" />
        </motion.div>

        <motion.a
          href="#empreendimento"
          className="inline-block font-montserrat text-xs tracking-[0.2em] uppercase px-8 py-4 border border-white text-white transition-all duration-300 hover:bg-white hover:text-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {COPY.hero.cta}
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-white/40">SCROLL</p>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
