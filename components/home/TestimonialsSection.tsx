'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { testimonials } from '@/lib/data/testimonials'

export function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  const t = testimonials[active]

  return (
    <section className="py-28 overflow-hidden" style={{ background: 'var(--jm-green-light)' }}>
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-14">
            <span
              className="badge-pill mb-4"
              style={{ background: 'var(--jm-green-mid)', color: '#fff' }}
            >
              Community Voices
            </span>
            <h2
              className="font-display font-extrabold leading-tight text-pretty"
              style={{ color: 'var(--jm-charcoal)', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
            >
              What the People Say
            </h2>
          </div>
        </SectionReveal>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl p-10 text-center"
              style={{ background: '#fff', boxShadow: '0 4px 40px rgba(10,92,54,0.08)' }}
            >
              <Quote size={36} className="mx-auto mb-6 text-jm-green-fresh opacity-60" style={{ color: 'var(--jm-green-mid)' }} />
              <p className="text-xl leading-relaxed font-medium text-pretty mb-8" style={{ color: 'var(--jm-charcoal)' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex flex-col items-center gap-1">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-sm mb-2"
                  style={{ background: 'var(--jm-green-mid)' }}
                >
                  {t.name.charAt(0)}
                </div>
                <p className="font-display font-bold text-sm" style={{ color: 'var(--jm-charcoal)' }}>{t.name}</p>
                <p className="text-xs" style={{ color: '#64748b' }}>{t.role} &mdash; {t.location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors hover:text-white"
              style={{ borderColor: 'var(--jm-green-mid)', color: 'var(--jm-green-mid)' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all rounded-full"
                  style={{
                    width: i === active ? '24px' : '8px',
                    height: '8px',
                    background: i === active ? 'var(--jm-green-mid)' : 'rgba(26,122,76,0.25)',
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors hover:text-white"
              style={{ borderColor: 'var(--jm-green-mid)', color: 'var(--jm-green-mid)' }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
