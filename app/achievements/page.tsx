import type { Metadata } from 'next'
import { Trophy, Star } from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { ParticleCanvas } from '@/components/shared/ParticleCanvas'
import { impactStats, awards } from '@/lib/data/achievements'
import { Users, Calendar, Building, Briefcase, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Achievements & Impact | Jafar Marakkara',
  description: 'The measurable impact, community achievements, and recognitions of Jafar Marakkara in Malappuram, Kerala.',
}

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Users, Calendar, Star, Building, Briefcase, TrendingUp,
}

export default function AchievementsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-center overflow-hidden pt-16"
        style={{ background: 'linear-gradient(135deg, var(--jm-green-mid) 0%, var(--jm-green-deep) 100%)' }}
      >
        <ParticleCanvas count={40} />
        <div
          className="absolute -bottom-1 left-0 right-0 h-16 z-10"
          style={{ background: 'var(--jm-off-white)', clipPath: 'polygon(0 60%, 100% 0%, 100% 100%, 0 100%)' }}
        />
        <div className="section-container relative z-10 py-24">
          <SectionReveal>
            <div className="max-w-3xl">
              <span
                className="badge-pill text-white/80 mb-6"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <Trophy size={12} /> Impact & Achievements
              </span>
              <h1
                className="font-display font-extrabold text-white leading-tight mb-5 text-pretty"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                A Decade of Measurable Impact
              </h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-2xl text-pretty">
                These numbers are not statistics — they are people. Each one represents a moment when a problem was solved, a life was changed, or a future was opened up.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="py-24" style={{ background: 'var(--jm-off-white)' }}>
        <div className="section-container">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="badge-pill mb-4 text-white" style={{ background: 'var(--jm-green-mid)' }}>Impact Numbers</span>
              <h2 className="font-display font-extrabold text-pretty" style={{ color: 'var(--jm-charcoal)', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
                The Numbers Behind the Work
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {impactStats.map((stat, i) => {
              const Icon = iconMap[stat.icon]
              return (
                <SectionReveal key={stat.label} delay={i * 0.1}>
                  <div
                    className="rounded-2xl p-8 text-center border border-border bg-white hover:shadow-md transition-shadow"
                  >
                    {Icon && (
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                        style={{ background: 'var(--jm-green-light)' }}
                      >
                        <Icon size={24} style={{ color: 'var(--jm-green-deep)' }} />
                      </div>
                    )}
                    <p
                      className="font-display font-extrabold mb-2"
                      style={{ color: 'var(--jm-green-mid)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                    >
                      <AnimatedCounter value={stat.number} suffix={stat.suffix} duration={2.5} />
                    </p>
                    <p className="font-medium text-sm" style={{ color: '#64748b' }}>{stat.label}</p>
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="section-container">
          <SectionReveal>
            <div className="text-center mb-14">
              <span
                className="badge-pill mb-4"
                style={{ background: 'var(--jm-gold-light)', color: 'var(--jm-gold)', border: '1px solid rgba(212,168,67,0.3)' }}
              >
                <Star size={12} /> Awards & Recognition
              </span>
              <h2 className="font-display font-extrabold text-pretty" style={{ color: 'var(--jm-charcoal)', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
                Recognised by Those We Serve
              </h2>
              <p className="mt-3 max-w-xl mx-auto text-pretty" style={{ color: '#64748b' }}>
                Recognition is never the goal — but it validates that the work is real, the impact is felt, and the direction is right.
              </p>
            </div>
          </SectionReveal>
          <div className="max-w-4xl mx-auto space-y-5">
            {awards.map((award, i) => (
              <SectionReveal key={award.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-7 border border-border hover:shadow-md transition-shadow flex gap-6"
                  style={{ background: '#fff' }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 font-display font-black text-sm"
                    style={{ background: 'var(--jm-gold-light)', color: 'var(--jm-gold)' }}
                  >
                    {award.year}
                  </div>
                  <div>
                    <h3
                      className="font-display font-bold text-base mb-1"
                      style={{ color: 'var(--jm-charcoal)' }}
                    >
                      {award.title}
                    </h3>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: 'var(--jm-green-mid)' }}
                    >
                      {award.body}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                      {award.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community milestones */}
      <section className="py-24" style={{ background: 'var(--jm-charcoal)' }}>
        <div className="section-container">
          <SectionReveal>
            <div className="text-center mb-14">
              <h2 className="font-display font-extrabold text-white text-pretty" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
                Beyond Numbers — Community Milestones
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              'First mobile healthcare clinic in Marakkara Panchayat (2019)',
              'Scholarship programme sustained for 5+ consecutive years without interruption',
              '30 village roads completed — connecting communities that waited decades',
              'Zero school dropout rate achieved in 3 target villages (2023)',
              'First digital skills bootcamp in Malappuram reaching 500 students (2021)',
              'Women\'s SHG network expanded to 40+ groups across 5 panchayats',
              '3,000+ employment opportunities created in the local economy',
              'Gulf partnership creating pathways for 400 Malappuram workers annually',
              'JM Foundation established as registered non-profit serving Malappuram (2021)',
            ].map((milestone, i) => (
              <SectionReveal key={i} delay={i * 0.07}>
                <div
                  className="rounded-xl p-5 border flex items-start gap-3"
                  style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <span
                    className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                    style={{ background: 'var(--jm-green-fresh)' }}
                  />
                  <p className="text-white/70 text-sm leading-relaxed">{milestone}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
