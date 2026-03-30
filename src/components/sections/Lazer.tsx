'use client'
import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { COPY } from '@/lib/constants'

export default function Lazer() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const { ref, isInView } = useScrollAnimation()

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="lazer" className="bg-green px-6 py-20 md:px-12 lg:px-20 lg:py-32" ref={ref}>
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-montserrat text-xs font-normal tracking-[0.25em] uppercase text-gold mb-4">
            {COPY.lazer.label}
          </p>
          <h2
            className="font-cormorant font-light text-white whitespace-pre-line mb-6"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '1.05', letterSpacing: '-0.01em' }}
          >
            {COPY.lazer.title}
          </h2>
          <span className="block w-20 h-px bg-gold mb-6" />
          <p className="font-lato font-light text-white/60 text-lg max-w-2xl leading-relaxed">
            {COPY.lazer.text}
          </p>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {COPY.lazer.slides.map((slide, i) => (
              <div key={i} className="flex-none w-full md:w-1/2 lg:w-1/3 relative h-[500px] pr-4">
                <div className="relative h-full overflow-hidden group">
                  <Image
                    src={slide.image}
                    alt={slide.nome}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="font-montserrat text-xs font-normal tracking-[0.25em] uppercase text-gold mb-1">
                      {slide.nome}
                    </p>
                    <p className="font-cormorant font-light text-xl text-white/80 italic">
                      {slide.sub}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 border border-white/20 hover:border-gold flex items-center justify-center text-white hover:text-gold transition-all duration-300"
          >
            &larr;
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 border border-white/20 hover:border-gold flex items-center justify-center text-white hover:text-gold transition-all duration-300"
          >
            &rarr;
          </button>
          <span className="ml-auto font-montserrat text-xs tracking-[0.2em] uppercase text-copper-light italic">
            {COPY.lazer.tagline}
          </span>
        </div>
      </div>
    </section>
  )
}
