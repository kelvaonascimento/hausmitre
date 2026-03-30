'use client'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { COPY } from '@/lib/constants'

export default function Statement() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="bg-dark px-6 py-20 md:px-12 lg:px-20 lg:py-32" ref={ref}>
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.p
          className="font-montserrat text-xs font-normal tracking-[0.25em] uppercase text-gold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {COPY.statement.label}
        </motion.p>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2
            className="font-regranek tracking-[0.15em] uppercase text-white"
            style={{ fontSize: 'clamp(60px, 10vw, 140px)', lineHeight: '0.9' }}
          >
            {COPY.statement.titleLine1}
          </h2>
          <h2
            className="font-regranek text-copper-light"
            style={{ fontSize: 'clamp(50px, 8vw, 120px)', lineHeight: '1.1' }}
          >
            {COPY.statement.titleLine2}
          </h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block w-20 h-px bg-gold mx-auto mb-6" />
          <p className="font-lato font-light text-white/60 text-lg leading-relaxed">
            {COPY.statement.text}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } },
          }}
        >
          {COPY.statement.stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <p className="font-cormorant font-light text-white" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: '1' }}>
                {stat.value}
              </p>
              <p className="font-montserrat text-xs tracking-[0.2em] uppercase text-gold mt-3 mb-1">
                {stat.label}
              </p>
              <p className="font-lato font-light text-white/40 text-sm">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
