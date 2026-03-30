'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { COPY, IMAGES } from '@/lib/constants'

export default function Localizacao() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="localizacao" ref={ref}>
      {/* Header image */}
      <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <Image
          src={IMAGES.localizacao}
          alt="Localização Campo Belo"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/60" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <p className="font-montserrat text-xs font-normal tracking-[0.25em] uppercase text-gold mb-4">
              {COPY.localizacao.label}
            </p>
            <h2
              className="font-cormorant font-light text-white whitespace-pre-line"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '1.05' }}
            >
              {COPY.localizacao.title}
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="bg-beige-light px-6 py-20 md:px-12 lg:px-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-lato font-light text-text-mid text-lg mb-6">
              {COPY.localizacao.text}
            </p>
            <p className="font-montserrat text-xs tracking-[0.2em] uppercase text-copper font-medium">
              {COPY.localizacao.endereco}
            </p>
          </motion.div>

          {/* Mapa ilustrado do empreendimento */}
          <motion.div
            className="mb-16 relative bg-white rounded overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src={IMAGES.localizacaoMapa}
              alt="Mapa ilustrado da região — Campo Belo"
              width={1200}
              height={700}
              className="w-full h-auto"
              sizes="100vw"
            />
          </motion.div>

          {/* Proximity grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
            }}
          >
            {COPY.localizacao.grupos.map((grupo, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-5 h-5 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25M3.375 14.25V3.375c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v10.875" />}
                    {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37" />}
                    {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.502-4.688-4.502-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.748 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />}
                    {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0V3.375c0-.621.504-1.125 1.125-1.125h15.75c.621 0 1.125.504 1.125 1.125v5.974" />}
                    {i === 4 && <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />}
                    {i === 5 && <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />}
                  </svg>
                  <p className="font-montserrat text-xs tracking-[0.2em] uppercase text-copper font-medium">
                    {grupo.categoria}
                  </p>
                </div>
                <ul className="space-y-3">
                  {grupo.items.map((item, j) => (
                    <li key={j} className="flex justify-between items-center border-b border-copper/10 pb-2">
                      <span className="font-lato font-light text-sm text-text-mid">{item.nome}</span>
                      <span className="font-montserrat text-[10px] tracking-[0.15em] text-gold">{item.tempo}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
