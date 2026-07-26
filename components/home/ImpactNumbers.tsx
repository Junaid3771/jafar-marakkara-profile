import { Users, Calendar, Star, Building, Briefcase, TrendingUp } from 'lucide-react'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { impactStats } from '@/lib/data/achievements'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Users, Calendar, Star, Building, Briefcase, TrendingUp,
}

export function ImpactNumbers() {
  return (
    <section className="py-24" style={{ background: 'var(--jm-charcoal)' }}>
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-14">
            <span
              className="badge-pill text-white/70 mb-4"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              Community Impact
            </span>
            <h2 className="font-display font-extrabold text-white leading-tight text-pretty"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Numbers That Tell the Story
            </h2>
            <p className="text-white/50 mt-3 max-w-xl mx-auto text-pretty">
              Every number represents a life touched, a community served, or an opportunity created across Malappuram and beyond.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.08)' }}>
          {impactStats.map((stat, i) => {
            const Icon = iconMap[stat.icon]
            return (
              <SectionReveal key={stat.label} delay={i * 0.08}>
                <div
                  className="flex flex-col items-center justify-center p-8 text-center transition-colors hover:bg-white/5"
                  style={{ background: 'var(--jm-charcoal)' }}
                >
                  {Icon && (
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                      style={{ background: 'rgba(34, 197, 94, 0.15)' }}
                    >
                      <Icon size={22} className="text-jm-green-fresh" />
                    </div>
                  )}
                  <p className="font-display font-extrabold text-white mb-1" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} duration={2.2} />
                  </p>
                  <p className="text-white/50 text-sm font-medium tracking-wide">{stat.label}</p>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
