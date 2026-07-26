import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Eye, Leaf, Users, Cpu, ShieldCheck, Handshake, TrendingUp } from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { ParticleCanvas } from '@/components/shared/ParticleCanvas'

export const metadata: Metadata = {
  title: 'Vision & Values | Jafar Marakkara',
  description: 'The vision, values, and leadership philosophy of Jafar Marakkara for Malappuram and Kerala.',
}

const values = [
  {
    icon: Leaf,
    title: 'Sustainable Development',
    description: 'Growth that honours the land, the culture, and future generations. Every project is judged by its long-term impact on community and environment alike.',
    color: 'var(--jm-green-mid)',
    bg: 'var(--jm-green-light)',
  },
  {
    icon: Users,
    title: 'Inclusive Prosperity',
    description: 'A Kerala where no community is left behind. From marginalised minorities to rural families — every person deserves equal access to opportunity and dignity.',
    color: 'var(--jm-green-deep)',
    bg: 'var(--jm-green-light)',
  },
  {
    icon: Cpu,
    title: 'Youth-Led Innovation',
    description: 'The next generation isn\'t waiting for permission. Jafar\'s vision invests in youth-led startups, digital skills, and entrepreneurship as engines of regional growth.',
    color: 'var(--jm-charcoal)',
    bg: 'var(--jm-grey-light)',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Governance',
    description: 'Leadership built on accountability, not promises. Every initiative is publicly tracked, every rupee responsibly spent, and every decision made with community input.',
    color: 'var(--jm-green-deep)',
    bg: 'var(--jm-green-light)',
  },
  {
    icon: Handshake,
    title: 'Community Partnership',
    description: 'True development is not done to communities — it is done with them. Jafar\'s model centres grassroots partnership, local expertise, and shared ownership.',
    color: 'var(--jm-charcoal)',
    bg: 'var(--jm-grey-light)',
  },
  {
    icon: TrendingUp,
    title: 'Economic Transformation',
    description: 'Malappuram has the talent and the hunger to be Kerala\'s next economic powerhouse. Vision 2030 lays the roadmap for that transformation through enterprise and infrastructure.',
    color: 'var(--jm-green-mid)',
    bg: 'var(--jm-green-light)',
  },
]

const vision2030Pillars = [
  { number: '01', title: 'Digital Malappuram',     body: 'High-speed internet in every village, digital skills for every youth, and a thriving startup ecosystem anchored in Malappuram.' },
  { number: '02', title: 'Education Excellence',    body: 'World-class schooling accessible to all, competitive exam coaching for economically weaker students, and 5 new higher-education institutions.' },
  { number: '03', title: 'Healthcare for All',      body: 'Primary healthcare within 5 km of every resident, free specialist camps quarterly, and a district-level hospital upgraded to tertiary standards.' },
  { number: '04', title: 'Infrastructure Leap',     body: '100% road connectivity to all habitations, smart water supply, waste management, and a green transportation corridor along the coastal belt.' },
  { number: '05', title: 'Women\'s Empowerment',     body: 'Economic independence for 10,000 women through SHG-linked enterprises, legal aid clinics, and leadership training by 2030.' },
  { number: '06', title: 'Youth Employment',        body: 'Create 15,000 new jobs in Malappuram through industrial zones, tourism development, and IT parks — reducing Gulf dependency for local families.' },
]

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden pt-16"
        style={{ background: 'linear-gradient(135deg, var(--jm-charcoal) 0%, var(--jm-green-deep) 100%)' }}
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
                <Eye size={12} /> Vision & Values
              </span>
              <h1
                className="font-display font-extrabold text-white leading-tight mb-5 text-pretty"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                <span className="font-malayalam text-white/70 block text-2xl mb-2">നാളെ കരുപ്പടിക്കുന്നത് ഇന്ന്</span>
                Building Tomorrow, Today
              </h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-2xl text-pretty">
                A vision rooted in Malappuram&apos;s soul — where heritage meets ambition, where compassion drives policy, and where every young person can see themselves in the future being built.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Vision statement */}
      <section className="py-24" style={{ background: 'var(--jm-off-white)' }}>
        <div className="section-container">
          <SectionReveal>
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-16 h-1 rounded-full mx-auto mb-8"
                style={{ background: 'var(--jm-gold)' }}
              />
              <blockquote
                className="font-display font-bold leading-tight text-pretty italic"
                style={{ color: 'var(--jm-charcoal)', fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
              >
                &ldquo;I envision a Malappuram where a young girl in a remote village has the same access to opportunity as anyone in a city — where her potential is her only limit, and where her community stands behind her, not in her way.&rdquo;
              </blockquote>
              <div className="mt-8 flex flex-col items-center gap-1">
                <div
                  className="w-12 h-12 rounded-full overflow-hidden relative mb-2"
                >
                  <Image
                    src="/images/jafar-hero.png"
                    alt="Jafar Marakkara"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <p className="font-display font-bold text-sm" style={{ color: 'var(--jm-charcoal)' }}>Jafar Marakkara</p>
                <p className="text-xs" style={{ color: '#64748b' }}>Youth Icon & Community Leader, Malappuram</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="section-container">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="badge-pill mb-4 text-white" style={{ background: 'var(--jm-green-mid)' }}>Core Values</span>
              <h2 className="font-display font-extrabold text-pretty" style={{ color: 'var(--jm-charcoal)', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
                The Principles That Guide Every Decision
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <SectionReveal key={v.title} delay={i * 0.08}>
                  <div className="rounded-2xl p-7 h-full border border-border hover:shadow-md transition-shadow">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: v.bg }}
                    >
                      <Icon size={22} style={{ color: v.color }} />
                    </div>
                    <h3 className="font-display font-bold text-base mb-3" style={{ color: 'var(--jm-charcoal)' }}>
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-pretty" style={{ color: '#64748b' }}>
                      {v.description}
                    </p>
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section className="py-24" style={{ background: 'var(--jm-charcoal)' }}>
        <div className="section-container">
          <SectionReveal>
            <div className="text-center mb-14">
              <span
                className="badge-pill text-white mb-4"
                style={{ background: 'rgba(212,168,67,0.2)', border: '1px solid rgba(212,168,67,0.4)', color: 'var(--jm-gold)' }}
              >
                Vision 2030
              </span>
              <h2 className="font-display font-extrabold text-white text-pretty" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
                A Blueprint for Malappuram&apos;s Future
              </h2>
              <p className="text-white/50 mt-3 max-w-2xl mx-auto text-pretty">
                Six transformational pillars that will reshape Malappuram into a model district — prosperous, educated, healthy, and proud.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vision2030Pillars.map((p, i) => (
              <SectionReveal key={p.number} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-7 h-full border transition-colors hover:border-green-500/30"
                  style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <span
                    className="font-display font-black text-3xl block mb-4"
                    style={{ color: 'var(--jm-green-fresh)', opacity: 0.6 }}
                  >
                    {p.number}
                  </span>
                  <h3 className="font-display font-bold text-white text-base mb-3">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed text-pretty">{p.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/achievements"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-90"
                style={{ background: 'var(--jm-green-mid)' }}
              >
                See Impact Numbers <ArrowRight size={15} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
