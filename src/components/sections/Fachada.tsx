'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { COPY, IMAGES } from '@/lib/constants'

export default function Fachada() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="bg-beige-light px-6 py-20 md:px-12 lg:px-20 lg:py-32" ref={ref}>
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-montserrat text-xs font-normal tracking-[0.25em] uppercase text-gold mb-4">
            {COPY.fachada.label}
          </p>
          <h2
            className="font-cormorant font-light text-dark whitespace-pre-line mb-6"
            style={{ fontSize: 'clamp(28px, 4vw, 56px)', lineHeight: '1.1' }}
          >
            {COPY.fachada.title}
          </h2>
          <span className="block w-20 h-px bg-gold mb-6" />
          <p className="font-lato font-light text-text-mid text-lg max-w-2xl leading-relaxed">
            {COPY.fachada.text}
          </p>
        </motion.div>

        {/* Asymmetric image grid */}
        <div className="grid grid-cols-12 gap-4 mb-8">
          <motion.div
            className="col-span-12 lg:col-span-7 relative h-[400px] lg:h-[500px] overflow-hidden group"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={IMAGES.fachada1}
              alt="Fachada Frontal"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute bottom-6 left-6">
              <p className="font-montserrat text-xs tracking-[0.2em] uppercase text-copper-light italic">
                {COPY.fachada.tagline}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-span-12 lg:col-span-5 relative h-[400px] lg:h-[500px] overflow-hidden group"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src={IMAGES.fachada2}
              alt="Fachada Lateral"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </motion.div>
        </div>

        <motion.div
          className="relative h-[300px] lg:h-[400px] overflow-hidden group mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src={IMAGES.fachada3}
            alt="Embasamento"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
          />
        </motion.div>

        {/* Autores */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } },
          }}
        >
          {COPY.fachada.autores.map((autor, i) => (
            <motion.div
              key={i}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <p className="font-montserrat text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
                {autor.role}
              </p>
              <p className="font-cormorant text-2xl font-light text-dark">
                {autor.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
