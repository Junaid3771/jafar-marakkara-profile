import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap, Globe } from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'

const youthPillars = [
  { title: 'Startup Mentorship',     desc: 'Direct guidance from established entrepreneurs to first-time founders.' },
  { title: 'Scholarship Programme',  desc: 'Annual scholarships for 500+ meritorious students from Malappuram.' },
  { title: 'Sports Development',     desc: 'Infrastructure and coaching support for young athletes across the district.' },
  { title: 'Digital Skills Training', desc: 'Free workshops on coding, e-commerce, and digital marketing for youth.' },
]

export function YouthBusinessSection() {
  return (
    <>
      {/* Youth */}
      <section className="py-28" style={{ background: 'var(--jm-charcoal)' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionReveal>
                <span
                  className="badge-pill text-white mb-4"
                  style={{ background: 'rgba(34,197,94,0.2)', border: '1px solid rgba(34,197,94,0.3)' }}
                >
                  <Zap size={12} className="text-jm-green-fresh" style={{ color: 'var(--jm-green-fresh)' }} />
                  Youth Empowerment
                </span>
                <h2
                  className="font-display font-extrabold leading-tight mb-5 text-pretty text-white"
                  style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
                >
                  The Youth of Malappuram Are His Priority
                </h2>
                <p className="text-white/60 leading-relaxed mb-8 text-pretty">
                  From school dropouts to startup founders, from underprivileged athletes to aspiring engineers — Jafar&apos;s youth programmes meet people where they are and take them further than they imagined possible.
                </p>
              </SectionReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {youthPillars.map((pillar, i) => (
                  <SectionReveal key={pillar.title} delay={i * 0.1}>
                    <div
                      className="rounded-2xl p-5 border transition-colors hover:border-green-500/40"
                      style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <div
                        className="w-2 h-2 rounded-full mb-3"
                        style={{ background: 'var(--jm-green-fresh)' }}
                      />
                      <h3 className="font-display font-bold text-sm text-white mb-1">{pillar.title}</h3>
                      <p className="text-white/50 text-xs leading-relaxed">{pillar.desc}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>

              <SectionReveal delay={0.4}>
                <Link
                  href="/youth"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:scale-105"
                  style={{ background: 'var(--jm-green-mid)' }}
                >
                  Youth Programmes <ArrowRight size={15} />
                </Link>
              </SectionReveal>
            </div>

            <SectionReveal direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-jm-glow" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/images/jafar-youth.png"
                  alt="Jafar Marakkara at a community event"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,92,54,0.6) 0%, transparent 55%)' }}
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Business strip */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--jm-green-deep) 0%, var(--jm-green-mid) 100%)' }}
      >
        <div className="section-container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <SectionReveal>
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                >
                  <Globe size={26} className="text-white" />
                </div>
                <div>
                  <h2 className="font-display font-extrabold text-white text-2xl leading-tight mb-2 text-pretty">
                    Marakkara Group — Building Malappuram&apos;s Economic Future
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed max-w-xl text-pretty">
                    From trade to logistics, real estate to digital ventures — a diversified portfolio that creates thousands of jobs and reinvests in the community it grows from.
                  </p>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <Link
                href="/business"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm whitespace-nowrap transition-all hover:bg-white/90"
                style={{ background: '#fff', color: 'var(--jm-green-deep)' }}
              >
                Explore Business <ArrowRight size={15} />
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  )
}
