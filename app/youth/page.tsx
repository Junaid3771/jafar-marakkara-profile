import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap, GraduationCap, Trophy, Laptop, Users, Mic } from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { ParticleCanvas } from '@/components/shared/ParticleCanvas'

export const metadata: Metadata = {
  title: 'Youth Empowerment | Jafar Marakkara',
  description: 'Youth welfare, scholarship, startup mentorship and sports development programmes by Jafar Marakkara in Malappuram, Kerala.',
}

const youthStats = [
  { value: 5000,  suffix: '+', label: 'Youth Directly Supported' },
  { value: 500,   suffix: '+', label: 'Annual Scholarships' },
  { value: 120,   suffix: '+', label: 'Youth Programmes' },
  { value: 300,   suffix: '+', label: 'Startup Mentees' },
]

const programmes = [
  {
    icon: GraduationCap,
    title: 'JM Scholarship Programme',
    tag: 'Education',
    description: 'Annual merit-cum-means scholarships covering full tuition, books, and coaching for 500+ students each year from Malappuram district. No bureaucratic barriers — just a direct investment in young minds.',
    impact: '500+ students per year',
    color: 'var(--jm-green-mid)',
  },
  {
    icon: Laptop,
    title: 'Digital Skills Academy',
    tag: 'Technology',
    description: 'Free 3-month intensive bootcamps in web development, digital marketing, e-commerce, and data entry — creating employment-ready youth in fields where Malappuram has an untapped talent surplus.',
    impact: '1,000+ trained annually',
    color: 'var(--jm-charcoal)',
  },
  {
    icon: Users,
    title: 'Startup Mentorship Hub',
    tag: 'Entrepreneurship',
    description: 'Pairing first-time young founders with established entrepreneurs for a structured 6-month mentorship — covering business plan development, funding access, marketing, and legal foundation.',
    impact: '300+ startups guided',
    color: 'var(--jm-green-deep)',
  },
  {
    icon: Trophy,
    title: 'Sports Development Initiative',
    tag: 'Sports',
    description: 'Infrastructure grants for village-level sports facilities, coaching support for talented athletes, and sponsorship for youth to represent Kerala in state and national competitions.',
    impact: '20+ sports facilities built',
    color: '#d97706',
  },
  {
    icon: Mic,
    title: 'Youth Leadership Forums',
    tag: 'Leadership',
    description: 'Quarterly leadership forums where young people from all walks of life come together to discuss community issues, present solutions to local government, and develop public-speaking and advocacy skills.',
    impact: '50+ forums conducted',
    color: '#7c3aed',
  },
  {
    icon: Zap,
    title: 'Emergency Student Relief Fund',
    tag: 'Welfare',
    description: 'A rapid-response fund for students facing sudden financial crisis — medical emergencies, family loss, or natural disasters — ensuring no student has to drop out because life became unpredictable.',
    impact: '800+ emergencies assisted',
    color: 'var(--jm-green-mid)',
  },
]

export default function YouthPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden pt-16"
        style={{ background: 'linear-gradient(135deg, var(--jm-charcoal) 0%, var(--jm-green-mid) 100%)' }}
      >
        <ParticleCanvas count={45} />
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
                <Zap size={12} /> Youth Empowerment
              </span>
              <h1
                className="font-display font-extrabold text-white leading-tight mb-5 text-pretty"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                The Youth Are Not the Future — They Are the Present
              </h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-2xl text-pretty">
                Jafar Marakkara believes that Malappuram&apos;s greatest untapped resource is its youth — and that investing in them is not charity, it is the smartest policy decision any leader can make.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ background: 'var(--jm-off-white)' }}>
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {youthStats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-7 text-center border border-border bg-white hover:shadow-md transition-shadow"
                >
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

      {/* Programmes */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="section-container">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="badge-pill mb-4 text-white" style={{ background: 'var(--jm-green-mid)' }}>Programmes</span>
              <h2 className="font-display font-extrabold text-pretty" style={{ color: 'var(--jm-charcoal)', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
                Six Ways Jafar Invests in Youth
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((prog, i) => {
              const Icon = prog.icon
              return (
                <SectionReveal key={prog.title} delay={i * 0.08}>
                  <div
                    className="rounded-2xl p-7 h-full border border-border hover:shadow-md transition-shadow flex flex-col"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'var(--jm-green-light)' }}
                      >
                        <Icon size={20} style={{ color: prog.color }} />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest block mb-0.5" style={{ color: prog.color }}>
                          {prog.tag}
                        </span>
                        <h3 className="font-display font-bold text-sm leading-tight" style={{ color: 'var(--jm-charcoal)' }}>
                          {prog.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-pretty flex-1" style={{ color: '#64748b' }}>
                      {prog.description}
                    </p>
                    <div
                      className="mt-4 pt-4 border-t border-border text-xs font-bold"
                      style={{ color: 'var(--jm-green-mid)' }}
                    >
                      Impact: {prog.impact}
                    </div>
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, var(--jm-green-deep), var(--jm-green-mid))' }}
      >
        <div className="section-container text-center">
          <SectionReveal>
            <h2 className="font-display font-extrabold text-white mb-4 text-pretty" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              Know a Youth Who Needs Support?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 text-pretty">
              Reach out directly — whether it&apos;s a scholarship application, mentorship request, or a programme suggestion. Every message is read.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:bg-white/90"
              style={{ background: '#fff', color: 'var(--jm-green-deep)' }}
            >
              Get in Touch <ArrowRight size={15} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
