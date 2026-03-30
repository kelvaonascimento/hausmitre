'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { COPY, IMAGES } from '@/lib/constants'

export default function Familia() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="bg-green" ref={ref}>
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        <motion.div
          className="relative h-[400px] lg:h-auto overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={IMAGES.playground}
            alt="Playground"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <motion.div
          className="flex items-center px-6 py-16 md:px-12 lg:px-20"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <p className="font-montserrat text-xs font-normal tracking-[0.25em] uppercase text-gold mb-4">
              {COPY.familia.label}
            </p>
            <h2
              className="font-cormorant font-light text-white whitespace-pre-line mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 56px)', lineHeight: '1.1' }}
            >
              {COPY.familia.title}
            </h2>
            <span className="block w-20 h-px bg-gold mb-6" />
            <p className="font-lato font-light text-white/60 text-lg leading-relaxed max-w-lg">
              {COPY.familia.text}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
