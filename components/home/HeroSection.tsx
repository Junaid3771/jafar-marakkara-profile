'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ParticleCanvas } from '@/components/shared/ParticleCanvas'

const titleWords = ['Jafar', 'Marakkara']
const tags = ['Youth Icon', 'Community Leader', 'Visionary Businessman']

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const wordVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: 'easeOut' },
  }),
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--jm-charcoal) 0%, var(--jm-green-deep) 55%, var(--jm-charcoal-mid) 100%)' }}>
      {/* Particle layer */}
      <ParticleCanvas count={60} color="255,255,255" />

      {/* Diagonal decorative shape */}
      <div
        className="absolute -bottom-1 left-0 right-0 h-24 z-10"
        style={{ background: 'var(--background)', clipPath: 'polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)' }}
      />

      <div className="section-container relative z-10 w-full pt-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text content ── */}
          <div>
            {/* Malaysian badge */}
            <motion.div
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 mb-6"
            >
              <span
                className="badge-pill text-white/90"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--jm-green-fresh)' }}
                />
                Malappuram, Kerala
              </span>
            </motion.div>

            {/* Malayalam heading */}
            <motion.p
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-malayalam text-2xl md:text-3xl text-white/70 mb-2 leading-relaxed"
            >
              ജാഫർ മറക്കാര
            </motion.p>

            {/* Main heading — staggered words */}
            <motion.h1
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="font-display font-extrabold leading-none mb-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
            >
              {titleWords.map((word) => (
                <motion.span
                  key={word}
                  variants={wordVariant}
                  className="block"
                  style={{ color: 'var(--jm-off-white)' }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Roles */}
            <motion.div
              custom={0.7}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-2 mb-8"
            >
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="badge-pill text-white/80"
                  style={{
                    background: i === 0 ? 'var(--jm-green-mid)' : 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              custom={0.85}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-white/60 text-lg leading-relaxed mb-10 max-w-md text-pretty"
            >
              Building a better tomorrow for Malappuram — through service, enterprise, and the unshakeable belief in the power of its youth.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              custom={1.0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/vision"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-105 hover:gap-3"
                style={{ background: 'var(--jm-green-mid)' }}
              >
                Explore Vision
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:bg-white/20"
                style={{ border: '1.5px solid rgba(255,255,255,0.3)' }}
              >
                Connect
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                style={{ background: 'var(--jm-green-mid)' }}
              />
              {/* Gold accent frame */}
              <div
                className="absolute -top-2 -right-2 w-full h-full rounded-3xl border-2 opacity-40"
                style={{ borderColor: 'var(--jm-gold)' }}
              />
              {/* Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-jm-glow" style={{ width: 'min(400px, 85vw)', aspectRatio: '4/5' }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6k0QxTi4koIGpnm66eeRJCGECObNts.png"
                  alt="Jafar Marakkara — Youth Icon, Community Leader, Malappuram"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 85vw, 400px"
                />
                {/* Green tint overlay to match brand */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,92,54,0.5) 0%, rgba(26,122,76,0.1) 40%, transparent 70%)' }}
                />
                {/* Name badge at bottom */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="glass-card rounded-2xl px-4 py-3"
                  >
                    <p className="font-display font-bold text-white text-sm">Jafar Marakkara</p>
                    <p className="font-malayalam text-white/70 text-xs">ജാഫർ മറക്കാര · Malappuram</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40"
      >
        <span className="text-xs tracking-widest uppercase font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
