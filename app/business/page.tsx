import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Briefcase, TrendingUp, Globe, Building, Truck, Cpu } from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { ParticleCanvas } from '@/components/shared/ParticleCanvas'

export const metadata: Metadata = {
  title: 'Business Leadership | Jafar Marakkara',
  description: 'The business ventures and entrepreneurial journey of Jafar Marakkara — Malappuram\'s leading young entrepreneur.',
}

const bizStats = [
  { value: 3000,  suffix: '+', label: 'Jobs Created' },
  { value: 1000,  suffix: '+', label: 'Entrepreneurs Mentored' },
  { value: 5,     suffix: '',  label: 'Business Verticals' },
  { value: 15,    suffix: '+', label: 'Years in Business' },
]

const ventures = [
  {
    icon: Building,
    title: 'Marakkara Real Estate & Construction',
    description: 'Developing residential complexes, commercial spaces, and community infrastructure across Malappuram district. Focus on affordable housing that keeps local families from the informal settlement trap.',
    tag: 'Real Estate',
    color: 'var(--jm-green-deep)',
  },
  {
    icon: Truck,
    title: 'Marakkara Logistics & Trade',
    description: 'A diversified trading and logistics operation connecting Malappuram\'s small businesses to broader markets in Kerala, India, and the Gulf. Creating supply chain efficiency for local producers.',
    tag: 'Logistics',
    color: 'var(--jm-charcoal)',
  },
  {
    icon: Cpu,
    title: 'JM Digital Ventures',
    description: 'A portfolio of digital businesses spanning e-commerce, SaaS products, digital marketing agencies, and mobile applications — all designed to create white-collar jobs for Kerala\'s youth.',
    tag: 'Technology',
    color: 'var(--jm-green-mid)',
  },
  {
    icon: Globe,
    title: 'Gulf Partnerships & Exports',
    description: 'Strategic alliances with UAE-based partners in logistics and hospitality, opening pathways for Keralites seeking dignified employment abroad while channelling investment back into Malappuram.',
    tag: 'International',
    color: '#d97706',
  },
  {
    icon: TrendingUp,
    title: 'JM Foundation Enterprises',
    description: 'Social enterprises under the JM Foundation umbrella — food processing units, handicraft collectives, and organic farming cooperatives — that generate profit while advancing community welfare.',
    tag: 'Social Enterprise',
    color: 'var(--jm-green-mid)',
  },
]

const principles = [
  { title: 'Employ Locally First',     body: '80% of hires are from Malappuram — building careers at home, not just exporting talent.' },
  { title: 'Reinvest in Community',    body: '10% of annual profits are channelled into community welfare initiatives and the JM Foundation.' },
  { title: 'Mentor the Next Wave',     body: 'Every year, 50+ young entrepreneurs receive direct mentorship from the Marakkara Group team.' },
  { title: 'Transparent Governance',  body: 'Ethical business practices, no conflicts of interest, and full compliance as non-negotiable standards.' },
]

export default function BusinessPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden pt-16"
        style={{ background: 'linear-gradient(135deg, var(--jm-charcoal) 0%, #1a1a2e 100%)' }}
      >
        <ParticleCanvas count={40} color="34,197,94" />
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
                <Briefcase size={12} /> Business Leadership
              </span>
              <h1
                className="font-display font-extrabold text-white leading-tight mb-5 text-pretty"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                Enterprise with a Conscience
              </h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-2xl text-pretty">
                Every business Jafar Marakkara builds is designed to serve a dual purpose: generate prosperity and generate opportunity for the community that surrounds it.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ background: 'var(--jm-off-white)' }}>
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {bizStats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.1}>
                <div className="rounded-2xl p-7 text-center border border-border bg-white hover:shadow-md transition-shadow">
                  <p
                    className="font-display font-extrabold mb-1"
                    style={{ color: 'var(--jm-green-mid)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm font-medium" style={{ color: '#64748b' }}>{stat.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo + intro */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-jm-glow" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/images/jafar-business.png"
                  alt="Jafar Marakkara — Business Leader"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,92,54,0.5) 0%, transparent 55%)' }}
                />
              </div>
            </SectionReveal>
            <div>
              <SectionReveal>
                <span className="badge-pill mb-4 text-white" style={{ background: 'var(--jm-green-mid)' }}>The Marakkara Group</span>
                <h2
                  className="font-display font-extrabold leading-tight mb-4 text-pretty"
                  style={{ color: 'var(--jm-charcoal)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
                >
                  From a Single Venture to a Diversified Group
                </h2>
                <p className="leading-relaxed mb-6 text-pretty" style={{ color: '#64748b' }}>
                  Starting at age 22 with a single trading venture, Jafar built the Marakkara Group over fifteen years through determination, community trust, and a relentless focus on creating value — not just extracting it. Today, the group operates across five verticals, employs over 3,000 people, and is expanding into Gulf markets.
                </p>
                <p className="leading-relaxed text-pretty" style={{ color: '#64748b' }}>
                  What sets Marakkara Group apart is not its size, but its philosophy: every hire is a family lifted, every rupee reinvested is a community strengthened, and every mentor is a future founder enabled.
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures grid */}
      <section className="py-24" style={{ background: 'var(--jm-off-white)' }}>
        <div className="section-container">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="badge-pill mb-4 text-white" style={{ background: 'var(--jm-green-mid)' }}>Our Ventures</span>
              <h2 className="font-display font-extrabold text-pretty" style={{ color: 'var(--jm-charcoal)', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
                Five Pillars of the Marakkara Group
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventures.map((v, i) => {
              const Icon = v.icon
              return (
                <SectionReveal key={v.title} delay={i * 0.08}>
                  <div className="rounded-2xl p-7 h-full border border-border bg-white hover:shadow-md transition-shadow flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'var(--jm-green-light)' }}
                      >
                        <Icon size={20} style={{ color: v.color }} />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest block mb-0.5" style={{ color: v.color }}>
                          {v.tag}
                        </span>
                        <h3 className="font-display font-bold text-sm leading-tight" style={{ color: 'var(--jm-charcoal)' }}>
                          {v.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-pretty flex-1" style={{ color: '#64748b' }}>
                      {v.description}
                    </p>
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Business principles */}
      <section className="py-24" style={{ background: 'var(--jm-charcoal)' }}>
        <div className="section-container">
          <SectionReveal>
            <div className="text-center mb-14">
              <h2 className="font-display font-extrabold text-white text-pretty" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
                Business Principles
              </h2>
              <p className="text-white/50 mt-3 max-w-xl mx-auto text-pretty">
                The values that define how Marakkara Group operates — and why it earns community trust.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {principles.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-7 border"
                  style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-4"
                    style={{ background: 'var(--jm-green-fresh)' }}
                  />
                  <h3 className="font-display font-bold text-white text-base mb-2">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-90"
                style={{ background: 'var(--jm-green-mid)' }}
              >
                Partnership Enquiries <ArrowRight size={15} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
