'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { COPY } from '@/lib/constants'

export default function Wellness() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="wellness" className="bg-taupe px-6 py-20 md:px-12 lg:px-20 lg:py-32" ref={ref}>
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-montserrat text-xs font-normal tracking-[0.25em] uppercase text-white/70 mb-4">
            {COPY.wellness.label}
          </p>
          <h2
            className="font-cormorant font-light text-white whitespace-pre-line mb-6"
            style={{ fontSize: 'clamp(28px, 4vw, 56px)', lineHeight: '1.1' }}
          >
            {COPY.wellness.title}
          </h2>
          <span className="block w-20 h-px bg-white/30 mx-auto mb-6" />
          <p className="font-lato font-light text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            {COPY.wellness.text}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
          }}
        >
          {COPY.wellness.cards.map((card, i) => (
            <motion.div
              key={i}
              className="relative h-[350px] lg:h-[400px] overflow-hidden group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <Image
                src={card.image}
                alt={card.nome}
                fill
                quality={90}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-copper/0 group-hover:bg-copper/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="relative">
                  <p className="font-montserrat text-xs font-normal tracking-[0.25em] uppercase text-gold mb-1">
                    {card.nome}
                  </p>
                  <p className="font-cormorant font-light text-lg text-white/80 italic">
                    {card.sub}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center mt-8 font-montserrat text-xs tracking-[0.2em] uppercase text-white/60 italic">
          {COPY.wellness.tagline}
        </p>
      </div>
    </section>
  )
}
