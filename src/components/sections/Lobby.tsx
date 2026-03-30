'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { COPY, IMAGES } from '@/lib/constants'

export default function Lobby() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="bg-dark" ref={ref}>
      {/* Full-width image with overlay text */}
      <div className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
        <Image
          src={IMAGES.lobby2}
          alt="Lobby Haus Mitre"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <motion.div
          className="absolute bottom-12 left-6 md:left-12 lg:left-20 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-montserrat text-xs font-normal tracking-[0.25em] uppercase text-gold mb-4">
            {COPY.lobby.label}
          </p>
          <p className="font-montserrat text-xs tracking-[0.2em] uppercase text-copper-light italic mb-2">
            {COPY.lobby.tagline}
          </p>
        </motion.div>
      </div>

      {/* Grid: image + text */}
      <div className="grid lg:grid-cols-2 gap-0">
        <motion.div
          className="relative h-[400px] lg:h-[500px] overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={IMAGES.lobby1}
            alt="Lobby detalhe"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <motion.div
          className="flex items-center px-6 py-16 md:px-12 lg:px-20"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div>
            <h2
              className="font-cormorant font-light text-white whitespace-pre-line mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 56px)', lineHeight: '1.1' }}
            >
              {COPY.lobby.title}
            </h2>
            <p className="font-cormorant font-light italic text-copper-light text-2xl mb-6">
              {COPY.lobby.subtitle}
            </p>
            <span className="block w-20 h-px bg-gold mb-6" />
            <p className="font-lato font-light text-white/60 text-lg leading-relaxed max-w-lg">
              {COPY.lobby.text}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
