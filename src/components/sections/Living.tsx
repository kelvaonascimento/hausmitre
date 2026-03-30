'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { COPY, IMAGES } from '@/lib/constants'

export default function Living() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="living" ref={ref}>
      {/* Fullscreen image with overlay */}
      <div className="relative h-screen min-h-[600px] overflow-hidden">
        <Image
          src={IMAGES.living}
          alt="Living Haus Mitre"
          fill
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />

        <motion.div
          className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-20"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl">
            <p className="font-montserrat text-xs font-normal tracking-[0.25em] uppercase text-gold mb-6">
              {COPY.living.label}
            </p>
            {COPY.living.titleLines.map((line, i) => (
              <h2
                key={i}
                className={`font-cormorant font-light text-white ${i === 0 ? '' : i === 2 ? 'italic text-copper-light' : ''}`}
                style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '1.05' }}
              >
                {line}
              </h2>
            ))}
            <span className="block w-20 h-px bg-gold my-6" />
            <p className="font-lato font-light text-white/70 text-lg leading-relaxed max-w-lg">
              {COPY.living.subtitle}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tipologia cards */}
      <div className="bg-beige-light px-6 py-20 md:px-12 lg:px-20">
        <motion.div
          className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
          }}
        >
          {COPY.living.tipologias.map((tipo, i) => (
            <motion.div
              key={i}
              className="border border-copper/20 p-10 text-center hover:border-copper transition-colors duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <p className="font-montserrat text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
                {tipo.nome}
              </p>
              <p className="font-cormorant font-light text-dark" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: '1' }}>
                {tipo.area}
              </p>
              <p className="font-lato font-light text-text-mid mt-2 mb-6">
                {tipo.suites}
              </p>
              <a
                href="#contato"
                className="inline-block font-montserrat text-xs tracking-[0.2em] uppercase px-8 py-4 border border-copper text-copper transition-all duration-300 hover:bg-copper hover:text-white"
              >
                {tipo.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
