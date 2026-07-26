import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, BookOpen, Users, Stethoscope, Home, Construction } from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { ParticleCanvas } from '@/components/shared/ParticleCanvas'

export const metadata: Metadata = {
  title: 'Public Service & Social Impact | Jafar Marakkara',
  description: 'Healthcare, education, women\'s empowerment, and infrastructure initiatives by Jafar Marakkara in Malappuram, Kerala.',
}

const serviceStats = [
  { value: 15000, suffix: '+', label: 'Healthcare Beneficiaries' },
  { value: 2500,  suffix: '+', label: 'Families Assisted' },
  { value: 12,    suffix: '',  label: 'Village Roads Built' },
  { value: 300,   suffix: '+', label: 'Women Empowered' },
]

const services = [
  {
    icon: Stethoscope,
    title: 'Healthcare Access',
    image: '/images/jafar-community.png',
    imageAlt: 'Free healthcare camp in Malappuram',
    tag: 'Healthcare',
    description: 'Jafar Marakkara\'s mobile medical clinic initiative has reached 30 remote villages, delivering free consultations, medicines, and diagnostic screenings. Quarterly specialist camps bring cardiologists, gynaecologists, and paediatricians to communities that have never had access to specialist care.',
    highlights: [
      '30 villages covered by mobile clinic',
      '15,000+ patients served',
      'Free medicines distributed quarterly',
      'Specialist camps 4x per year',
    ],
    flip: false,
  },
  {
    icon: BookOpen,
    title: 'Education Welfare',
    image: '/images/jafar-youth.png',
    imageAlt: 'Education support programme',
    tag: 'Education',
    description: 'From school dropout prevention to competitive exam coaching, Jafar\'s education welfare work covers the entire student journey. Free study materials, exam fees coverage, coaching centres in rural areas, and a rapid-response fund for students facing financial crisis mid-year.',
    highlights: [
      '500+ scholarships per year',
      '12 free coaching centres established',
      'Exam fees covered for 800+ students',
      'Zero school dropouts in target villages',
    ],
    flip: true,
  },
  {
    icon: Users,
    title: 'Women\'s Empowerment',
    image: '/images/jafar-business.png',
    imageAlt: 'Women\'s self-help group programme',
    tag: 'Empowerment',
    description: 'Through SHG-linked enterprise training, legal aid clinics, domestic safety networks, and women\'s leadership forums, Jafar has built a growing ecosystem of economically empowered women in Malappuram. The goal: 10,000 financially independent women by 2030.',
    highlights: [
      '40+ SHG groups linked to enterprise',
      'Free legal aid clinics monthly',
      'Women\'s leadership forum quarterly',
      '300+ businesses launched by women',
    ],
    flip: false,
  },
  {
    icon: Construction,
    title: 'Infrastructure Development',
    image: '/images/jafar-hero.png',
    imageAlt: 'Village road infrastructure',
    tag: 'Infrastructure',
    description: 'Roads that connect isolated villages to markets and hospitals. Clean water supply to households that relied on wells. Street lighting for safer nights. Jafar\'s infrastructure push is not about grand projects — it is about the small changes that transform daily life.',
    highlights: [
      '12+ village roads completed',
      'Clean water to 3,000+ homes',
      '500+ streetlights installed',
      'Public libraries in 5 villages',
    ],
    flip: true,
  },
]

export default function PublicServicePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden pt-16"
        style={{ background: 'linear-gradient(135deg, var(--jm-green-deep) 0%, var(--jm-charcoal) 100%)' }}
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
                <Heart size={12} /> Public Service
              </span>
              <h1
                className="font-display font-extrabold text-white leading-tight mb-5 text-pretty"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                Service Before Self
              </h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-2xl text-pretty">
                For Jafar Marakkara, public service is not a campaign promise. It began long before any political ambition — and will continue long after any election.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ background: 'var(--jm-off-white)' }}>
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceStats.map((stat, i) => (
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

      {/* Service sections */}
      {services.map((service, i) => {
        const Icon = service.icon
        return (
          <section
            key={service.title}
            className="py-24"
            style={{ background: i % 2 === 0 ? '#fff' : 'var(--jm-off-white)' }}
          >
            <div className="section-container">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${service.flip ? 'lg:flex lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <SectionReveal direction={service.flip ? 'left' : 'right'}>
                  <div className="relative rounded-3xl overflow-hidden shadow-jm-glow" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 90vw, 45vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(10,92,54,0.45) 0%, transparent 55%)' }}
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="badge-pill text-white text-xs" style={{ background: 'var(--jm-green-mid)' }}>
                        {service.tag}
                      </span>
                    </div>
                  </div>
                </SectionReveal>

                {/* Text */}
                <div>
                  <SectionReveal direction={service.flip ? 'right' : 'left'}>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: 'var(--jm-green-light)' }}
                    >
                      <Icon size={22} style={{ color: 'var(--jm-green-deep)' }} />
                    </div>
                    <h2
                      className="font-display font-extrabold leading-tight mb-4 text-pretty"
                      style={{ color: 'var(--jm-charcoal)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
                    >
                      {service.title}
                    </h2>
                    <p className="leading-relaxed mb-6 text-pretty" style={{ color: '#64748b' }}>
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-3 text-sm" style={{ color: 'var(--jm-charcoal)' }}>
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: 'var(--jm-green-fresh)' }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </SectionReveal>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, var(--jm-green-deep), var(--jm-green-mid))' }}
      >
        <div className="section-container text-center">
          <SectionReveal>
            <h2 className="font-display font-extrabold text-white mb-4 text-pretty" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              Need Support for Your Community?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 text-pretty">
              Whether it&apos;s healthcare, education, or infrastructure — reach out and Jafar&apos;s team will respond.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:bg-white/90"
              style={{ background: '#fff', color: 'var(--jm-green-deep)' }}
            >
              Reach Out <ArrowRight size={15} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
