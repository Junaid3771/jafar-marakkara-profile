import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { newsArticles } from '@/lib/data/news'

const categoryColors: Record<string, string> = {
  Political:  'var(--jm-green-deep)',
  Business:   'var(--jm-charcoal)',
  Community:  'var(--jm-green-mid)',
  Media:      '#7c3aed',
  Youth:      '#d97706',
}

export function NewsTeaser() {
  const latest = newsArticles.slice(0, 3)

  return (
    <section className="py-28" style={{ background: 'var(--jm-off-white)' }}>
      <div className="section-container">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <span
                className="badge-pill mb-3 text-white"
                style={{ background: 'var(--jm-green-mid)' }}
              >
                Latest News
              </span>
              <h2
                className="font-display font-extrabold leading-tight text-pretty"
                style={{ color: 'var(--jm-charcoal)', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
              >
                Latest Updates
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 font-bold text-sm transition-all hover:gap-3"
              style={{ color: 'var(--jm-green-mid)' }}
            >
              All News <ArrowRight size={15} />
            </Link>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((article, i) => (
            <SectionReveal key={article.slug} delay={i * 0.1}>
              <article
                className="rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                {/* Category header bar */}
                <div
                  className="h-1"
                  style={{ background: categoryColors[article.category] ?? 'var(--jm-green-mid)' }}
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="badge-pill text-white text-xs"
                      style={{ background: categoryColors[article.category] ?? 'var(--jm-green-mid)' }}
                    >
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: '#94a3b8' }}>
                      <Clock size={12} />
                      {article.readTime}
                    </div>
                  </div>
                  <h3
                    className="font-display font-bold text-base leading-snug mb-3 flex-1 text-pretty"
                    style={{ color: 'var(--jm-charcoal)' }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4 text-pretty line-clamp-3"
                    style={{ color: '#64748b' }}
                  >
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: '#94a3b8' }}>
                      <Calendar size={12} />
                      {article.date}
                    </div>
                    <Link
                      href={`/news#${article.slug}`}
                      className="text-xs font-bold inline-flex items-center gap-1 transition-all hover:gap-2"
                      style={{ color: 'var(--jm-green-mid)' }}
                    >
                      Read More <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
