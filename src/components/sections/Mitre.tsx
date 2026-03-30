'use client'
import { useRef, useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { COPY } from '@/lib/constants'

export default function Mitre() {
  const { ref, isInView } = useScrollAnimation()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return
    const children = scrollRef.current.children
    if (children[index]) {
      children[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      setActiveIndex(index)
    }
  }, [])

  return (
    <section className="bg-dark px-6 py-20 md:px-12 lg:px-20 lg:py-32" ref={ref}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-montserrat text-xs font-normal tracking-[0.25em] uppercase text-gold mb-4">
              {COPY.mitre.label}
            </p>
            <h2
              className="font-cormorant font-light text-white whitespace-pre-line mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '1.05' }}
            >
              {COPY.mitre.title}
            </h2>
            <span className="block w-20 h-px bg-gold mb-6" />
            <p className="font-lato font-light text-white/60 text-lg leading-relaxed">
              {COPY.mitre.text}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
            }}
          >
            {COPY.mitre.credenciais.map((cred, i) => (
              <motion.div
                key={i}
                className="border border-white/10 p-6 text-center hover:border-gold/40 transition-colors duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <p className="font-montserrat text-sm font-semibold tracking-[0.1em] text-gold mb-2">
                  {cred.sigla}
                </p>
                <p className="font-lato font-light text-white/50 text-xs leading-relaxed">
                  {cred.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Depoimentos carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {COPY.mitre.depoimentos.map((dep, i) => (
              <div
                key={i}
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center border border-white/10 p-8"
              >
                <p className="font-cormorant font-light italic text-white/70 text-lg leading-relaxed mb-6">
                  &ldquo;{dep.texto}&rdquo;
                </p>
                <p className="font-montserrat text-xs tracking-[0.15em] uppercase text-gold">
                  {dep.autor}
                </p>
                <p className="font-lato font-light text-white/40 text-sm mt-1">
                  {dep.empreendimento}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {COPY.mitre.depoimentos.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-2 h-2 transition-all duration-300 ${
                  activeIndex === i ? 'bg-gold w-6' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
