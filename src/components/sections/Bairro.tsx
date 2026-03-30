'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { COPY, IMAGES } from '@/lib/constants'

export default function Bairro() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="empreendimento" className="px-6 py-20 md:px-12 lg:px-20 lg:py-32 bg-beige-light" ref={ref}>
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-montserrat text-xs font-normal tracking-[0.25em] uppercase text-gold mb-4">
            {COPY.bairro.label}
          </p>
          <h2
            className="font-cormorant font-light text-dark whitespace-pre-line mb-6"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '1.05', letterSpacing: '-0.01em' }}
          >
            {COPY.bairro.title}
          </h2>
          <span className="block w-20 h-px bg-gold mb-6" />
          <p className="font-lato font-light text-text-mid text-lg leading-relaxed max-w-lg">
            {COPY.bairro.text}
          </p>
        </motion.div>

        <motion.div
          className="relative h-[500px] lg:h-[600px] overflow-hidden"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={IMAGES.bairro}
            alt="Campo Belo, São Paulo"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  )
}
