'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { toast } from 'sonner'
import Image from 'next/image'
import { COPY, IMAGES } from '@/lib/constants'

export default function Formulario() {
  const { ref, isInView } = useScrollAnimation()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    interesse: '',
    contato: 'whatsapp',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    toast.success('Recebemos seu contato! Nossa equipe entrará em contato em breve.')
    setLoading(false)
    setForm({ nome: '', telefone: '', email: '', interesse: '', contato: 'whatsapp' })
  }

  const inputClass = 'w-full bg-transparent border-0 border-b border-copper/40 pb-3 pt-1 font-lato font-light text-dark placeholder:text-copper-light/50 focus:outline-none focus:border-copper transition-colors duration-300 text-base'
  const labelClass = 'block font-montserrat text-[10px] tracking-[0.2em] uppercase text-copper mb-1'

  return (
    <section id="contato" className="bg-beige-light" ref={ref}>
      <div className="grid lg:grid-cols-2 min-h-[700px]">
        {/* Left side - image + copy */}
        <div className="relative flex items-center justify-center p-12 lg:p-20 min-h-[400px] lg:min-h-0">
          <Image
            src={IMAGES.formulario}
            alt="Haus Mitre Edition Campo Belo"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-dark/80" />
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-montserrat text-xs font-normal tracking-[0.25em] uppercase text-gold mb-6">
              {COPY.formulario.label}
            </p>
            <h2
              className="font-cormorant font-light text-white whitespace-pre-line mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '1.05', letterSpacing: '-0.01em' }}
            >
              {COPY.formulario.title}
            </h2>
            <span className="block w-20 h-px bg-gold mx-auto" />
          </motion.div>
        </div>

        {/* Right side - form */}
        <motion.div
          className="flex items-center justify-center p-12 lg:p-20"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
            <p className="font-lato font-light text-text-mid">
              {COPY.formulario.subtitle}
            </p>

            <div className="space-y-6">
              <div>
                <label className={labelClass}>Nome completo *</label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={e => setForm({ ...form, nome: e.target.value })}
                  className={inputClass}
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className={labelClass}>Telefone (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  value={form.telefone}
                  onChange={e => setForm({ ...form, telefone: e.target.value })}
                  className={inputClass}
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className={labelClass}>E-mail *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className={labelClass}>Perfil de interesse</label>
                <div className="space-y-3 mt-2">
                  {[
                    { value: 'mansao', label: 'Mansão Suspensa — 222 m²' },
                    { value: 'cobertura', label: 'Cobertura Duplex — 438 m²' },
                    { value: 'opcoes', label: 'Quero conhecer as opções' },
                  ].map(opt => (
                    <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                      <div
                        className={`w-4 h-4 border flex-shrink-0 transition-all duration-200 flex items-center justify-center ${
                          form.interesse === opt.value ? 'border-copper bg-copper' : 'border-copper/40 group-hover:border-copper'
                        }`}
                        onClick={() => setForm({ ...form, interesse: opt.value })}
                      >
                        {form.interesse === opt.value && <div className="w-2 h-2 bg-white" />}
                      </div>
                      <span className="font-lato font-light text-sm text-text-mid">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass}>Como prefere ser contactado</label>
                <div className="flex gap-6 mt-2">
                  {[
                    { value: 'whatsapp', label: 'WhatsApp' },
                    { value: 'ligacao', label: 'Ligação' },
                    { value: 'email', label: 'E-mail' },
                  ].map(opt => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                      <div
                        className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-all ${
                          form.contato === opt.value ? 'border-copper' : 'border-copper/40'
                        }`}
                        onClick={() => setForm({ ...form, contato: opt.value })}
                      >
                        {form.contato === opt.value && <div className="w-2 h-2 rounded-full bg-copper" />}
                      </div>
                      <span className="font-lato font-light text-sm text-text-mid">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-block font-montserrat text-xs tracking-[0.2em] uppercase px-10 py-5 bg-copper text-white transition-all duration-300 hover:bg-copper-dark text-center disabled:opacity-50"
            >
              {loading ? 'ENVIANDO...' : COPY.formulario.cta}
            </button>

            <p className="font-lato text-xs text-text-light">
              *Suas informações são confidenciais e utilizadas apenas para contato sobre o empreendimento.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
