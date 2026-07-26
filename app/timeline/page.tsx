'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { timelineMilestones } from '@/lib/data/timeline'

const categoryConfig = {
  personal:  { label: 'Personal',   color: '#d4a843' },
  business:  { label: 'Business',   color: '#1a7a4c' },
  community: { label: 'Community',  color: '#22c55e' },
  politics:  { label: 'Political',  color: '#0a5c36' },
  education: { label: 'Education',  color: '#94a3b8' },
}

function TimelineNode({ milestone, index }: { milestone: typeof timelineMilestones[number]; index: number }) {
  const isLeft = index % 2 === 0
  const config = categoryConfig[milestone.category]

  return (
    <div className={`relative flex items-start gap-0 ${isLeft ? 'flex-row' : 'flex-row-reverse'} group`}>
      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-[calc(50%-2rem)] bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
        style={milestone.highlight ? { borderColor: config.color, borderWidth: '1px' } : {}}
      >
        {/* Category + year row */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="badge-pill text-white text-[10px]"
            style={{ background: config.color }}
          >
            {config.label}
          </span>
          <span className="font-display font-bold text-2xl" style={{ color: config.color }}>
            {milestone.year}
          </span>
        </div>

        <h3 className="font-display font-bold text-jm-charcoal text-base mb-2 leading-snug">
          {milestone.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {milestone.description}
        </p>

        {milestone.highlight && (
          <div
            className="mt-4 pt-3 border-t flex items-center gap-2 text-xs font-semibold"
            style={{ borderColor: config.color + '33', color: config.color }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: config.color }}
            />
            Key Milestone
          </div>
        )}
      </motion.div>

      {/* Centre spine dot */}
      <div className="relative flex flex-col items-center w-16 shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 300 }}
          className="w-5 h-5 rounded-full border-4 border-card z-10 shadow-sm"
          style={{ background: config.color }}
        />
      </div>

      {/* Spacer for the other side */}
      <div className="w-[calc(50%-2rem)]" />
    </div>
  )
}

export default function TimelinePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--jm-charcoal) 0%, var(--jm-green-deep) 60%, var(--jm-charcoal-mid) 100%)' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, var(--jm-gold) 0%, transparent 60%)' }}
        />
        <div className="section-container relative z-10 text-center">
          <SectionReveal>
            <span className="badge-pill bg-white/10 text-white mb-6 inline-block">Journey & Milestones</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight text-balance">
              A Life of<br />
              <span className="text-gradient-green">Purpose & Action</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              From the streets of Marakkara to the halls of public life — trace the milestones of a journey
              defined by service, enterprise, and an unshakeable belief in Kerala&apos;s youth.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline */}
      <section ref={containerRef} className="relative py-20">
        <div className="section-container">
          {/* Vertical spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 origin-top"
            style={{
              height: lineHeight,
              background: 'linear-gradient(180deg, var(--jm-gold), var(--jm-green-fresh))',
            }}
          />

          <div className="relative flex flex-col gap-12">
            {timelineMilestones.map((milestone, i) => (
              <TimelineNode key={milestone.year + milestone.title} milestone={milestone} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-jm-light">
        <div className="section-container text-center">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-jm-charcoal mb-4 text-balance">
              The Journey Continues
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Every milestone has been a step toward a stronger, more vibrant Malappuram. Be part of the next chapter.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm hover:opacity-90 transition-opacity"
              style={{ background: 'var(--jm-green-mid)' }}
            >
              Join the Movement <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
