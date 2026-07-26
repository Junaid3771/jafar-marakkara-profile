import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Briefcase } from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'

const identities = [
  {
    icon: Heart,
    label: 'Community Leader',
    title: 'Serving the People of Malappuram',
    body: 'From healthcare access to road infrastructure, education scholarships to women\'s empowerment — every initiative stems from a deep-rooted belief that every resident of Malappuram deserves dignity, opportunity, and a voice.',
    href: '/public-service',
    color: 'var(--jm-green-deep)',
  },
  {
    icon: Briefcase,
    label: 'Visionary Businessman',
    title: 'Creating Prosperity from the Ground Up',
    body: 'The Marakkara Group stands as proof that local enterprise can drive regional transformation. By building businesses that employ local youth and invest in community infrastructure, Jafar bridges commerce and conscience.',
    href: '/business',
    color: 'var(--jm-charcoal)',
  },
]

export function VisionTeaser() {
  return (
    <section className="py-28" style={{ background: 'var(--jm-off-white)' }}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: photo */}
          <SectionReveal direction="right">
            <div className="relative">
              <div
                className="absolute -bottom-6 -left-6 w-48 h-48 rounded-3xl opacity-15"
                style={{ background: 'var(--jm-green-light)' }}
              />
              <div className="relative rounded-3xl overflow-hidden shadow-jm-glow" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RmkFnNC2ROkAvOVkMwcYXxuWbulLir.png"
                  alt="Jafar Marakkara — Community Leader"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,92,54,0.55) 0%, transparent 50%)' }}
                />
                <div className="absolute bottom-5 left-5">
                  <span
                    className="badge-pill text-white"
                    style={{ background: 'var(--jm-green-mid)' }}
                  >
                    Malappuram, Kerala
                  </span>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Right: content */}
          <div className="space-y-10">
            <SectionReveal>
              <div>
                <span
                  className="badge-pill mb-4 text-white"
                  style={{ background: 'var(--jm-green-mid)' }}
                >
                  Two Paths, One Vision
                </span>
                <h2
                  className="font-display font-extrabold leading-tight mb-4 text-pretty"
                  style={{ color: 'var(--jm-charcoal)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  A Leader Forged by Community, Sharpened by Enterprise
                </h2>
                <p className="text-jm-grey-mid leading-relaxed text-pretty" style={{ color: 'var(--jm-grey-mid)' }}>
                  Jafar Marakkara carries two identities that reinforce each other — the community leader who fights for the forgotten, and the businessman who builds the foundations for their prosperity.
                </p>
              </div>
            </SectionReveal>

            {identities.map((item, i) => {
              const Icon = item.icon
              return (
                <SectionReveal key={item.label} delay={i * 0.15}>
                  <div
                    className="rounded-2xl p-6 border border-border hover:shadow-md transition-shadow"
                    style={{ background: '#fff' }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: i === 0 ? 'var(--jm-green-light)' : 'var(--jm-grey-light)' }}
                      >
                        <Icon size={20} style={{ color: i === 0 ? 'var(--jm-green-deep)' : 'var(--jm-charcoal)' }} />
                      </div>
                      <div>
                        <span
                          className="text-xs font-bold uppercase tracking-widest mb-1 block"
                          style={{ color: i === 0 ? 'var(--jm-green-mid)' : 'var(--jm-charcoal-mid)' }}
                        >
                          {item.label}
                        </span>
                        <h3 className="font-display font-bold text-base mb-2" style={{ color: 'var(--jm-charcoal)' }}>
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-pretty" style={{ color: '#64748b' }}>
                          {item.body}
                        </p>
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold uppercase tracking-wide transition-colors hover:gap-2.5"
                          style={{ color: i === 0 ? 'var(--jm-green-mid)' : 'var(--jm-charcoal)' }}
                        >
                          Learn more <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              )
            })}

            <SectionReveal delay={0.3}>
              <Link
                href="/vision"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-105"
                style={{ background: 'var(--jm-green-deep)' }}
              >
                Full Vision Statement <ArrowRight size={15} />
              </Link>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
