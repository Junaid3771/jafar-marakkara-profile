'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, ArrowRight, Search } from 'lucide-react'
import Link from 'next/link'
import { SectionReveal } from '@/components/shared/SectionReveal'
import { newsArticles, type NewsCategory } from '@/lib/data/news'

const categoryColors: Record<NewsCategory, string> = {
  Political: 'var(--jm-green-deep)',
  Business:  'var(--jm-green-mid)',
  Community: 'var(--jm-green-fresh)',
  Media:     'var(--jm-gold)',
  Youth:     '#6366f1',
}

const categories: Array<NewsCategory | 'All'> = ['All', 'Political', 'Business', 'Community', 'Media', 'Youth']

export default function NewsPage() {
  const [active, setActive] = useState<NewsCategory | 'All'>('All')
  const [query, setQuery] = useState('')

  const filtered = newsArticles.filter((a) => {
    const matchesCat = active === 'All' || a.category === active
    const matchesQuery =
      query.trim() === '' ||
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(query.toLowerCase())
    return matchesCat && matchesQuery
  })

  const featured = filtered.find((a) => a.featured)
  const rest = filtered.filter((a) => !a.featured || active !== 'All' || query)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--jm-charcoal) 0%, var(--jm-green-deep) 60%, var(--jm-charcoal-mid) 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 60% 20%, var(--jm-gold) 0%, transparent 60%)' }}
        />
        <div className="section-container relative z-10 text-center">
          <SectionReveal>
            <span className="badge-pill bg-white/10 text-white mb-6 inline-block">Latest News</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight text-balance">
              News &<br />
              <span className="text-gradient-green">Media Coverage</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Stay informed about Jafar Marakkara&apos;s latest activities, public service initiatives,
              community programmes, and media appearances.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Filter + Search bar */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border py-4">
        <div className="section-container flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Category filters */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1 flex-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all ${
                  active === cat
                    ? 'text-white shadow-sm'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
                style={active === cat ? { background: 'var(--jm-green-mid)' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Search */}
          <div className="relative shrink-0 w-full sm:w-56">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-9 pr-4 py-2 text-sm rounded-full border border-border bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <p className="text-muted-foreground text-lg">No articles found. Try a different filter or search term.</p>
              </motion.div>
            ) : (
              <motion.div
                key={active + query}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Featured article */}
                {featured && active === 'All' && !query && (
                  <SectionReveal className="mb-12">
                    <article className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow group">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Text */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-5">
                            <span
                              className="badge-pill text-white text-[10px]"
                              style={{ background: categoryColors[featured.category] }}
                            >
                              {featured.category}
                            </span>
                            <span className="text-muted-foreground text-xs">Featured</span>
                          </div>
                          <h2 className="font-display font-bold text-2xl lg:text-3xl text-jm-charcoal mb-4 leading-snug text-balance">
                            {featured.title}
                          </h2>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                            {featured.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{featured.date}</span>
                              <span className="flex items-center gap-1">
                                <Clock size={11} /> {featured.readTime}
                              </span>
                            </div>
                            <Link
                              href={`/news/${featured.slug}`}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase text-white transition-all hover:opacity-90"
                              style={{ background: 'var(--jm-green-mid)' }}
                            >
                              Read More <ArrowRight size={13} />
                            </Link>
                          </div>
                        </div>
                        {/* Visual accent */}
                        <div
                          className="hidden lg:flex items-center justify-center min-h-64"
                          style={{ background: 'linear-gradient(135deg, var(--jm-green-deep), var(--jm-green-mid))' }}
                        >
                          <div className="text-center p-8">
                            <p className="font-display font-bold text-6xl text-white/20 leading-none">&ldquo;</p>
                            <p className="font-display font-semibold text-lg text-white leading-relaxed mt-2 max-w-xs">
                              Building Malappuram&apos;s future, one young person at a time.
                            </p>
                            <p className="text-white/60 text-sm mt-4">— Jafar Marakkara</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </SectionReveal>
                )}

                {/* Article grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((article, i) => (
                    <SectionReveal key={article.slug} delay={i * 0.07}>
                      <article className="group h-full rounded-2xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                        {/* Top color bar */}
                        <div
                          className="h-1.5 w-full"
                          style={{ background: categoryColors[article.category] }}
                        />
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className="badge-pill text-white text-[10px]"
                              style={{ background: categoryColors[article.category] }}
                            >
                              {article.category}
                            </span>
                            <span className="flex items-center gap-1 text-muted-foreground text-xs ml-auto">
                              <Clock size={11} /> {article.readTime}
                            </span>
                          </div>
                          <h3 className="font-display font-bold text-jm-charcoal text-base leading-snug mb-3 group-hover:text-jm-green-mid transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3">
                            {article.excerpt}
                          </p>
                          <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                            <span className="text-muted-foreground text-xs">{article.date}</span>
                            <Link
                              href={`/news/${article.slug}`}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-jm-green-mid hover:text-jm-green-deep transition-colors"
                            >
                              Read <ArrowRight size={12} />
                            </Link>
                          </div>
                        </div>
                      </article>
                    </SectionReveal>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
