'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { SectionReveal } from '@/components/shared/SectionReveal'

type Category = 'All' | 'Community' | 'Youth' | 'Business' | 'Landscape'

const galleryItems = [
  {
    src: '/images/gallery/event-youth-summit.png',
    alt: 'Youth Entrepreneurship Summit 2024 — Malappuram',
    caption: 'Youth Entrepreneurship Summit 2024',
    category: 'Youth' as Category,
    wide: true,
  },
  {
    src: '/images/jafar-youth.png',
    alt: 'Jafar Marakkara at a youth panel discussion',
    caption: 'Youth Leadership Panel',
    category: 'Youth' as Category,
    wide: false,
  },
  {
    src: '/images/gallery/community-service.png',
    alt: 'Community aid distribution in rural Malappuram',
    caption: 'Community Aid Distribution',
    category: 'Community' as Category,
    wide: false,
  },
  {
    src: '/images/gallery/speech-stage.png',
    alt: 'Jafar Marakkara delivering a speech on stage',
    caption: 'Public Address, Malappuram',
    category: 'Community' as Category,
    wide: false,
  },
  {
    src: '/images/gallery/healthcare-camp.png',
    alt: 'Free medical camp organised by JM Foundation',
    caption: 'Free Medical Camp — JM Foundation',
    category: 'Community' as Category,
    wide: false,
  },
  {
    src: '/images/gallery/business-meeting.png',
    alt: 'Business strategy meeting, Marakkara Group',
    caption: 'Marakkara Group Strategy Session',
    category: 'Business' as Category,
    wide: false,
  },
  {
    src: '/images/jafar-business.png',
    alt: 'Jafar Marakkara — business portrait',
    caption: 'Entrepreneur & Visionary',
    category: 'Business' as Category,
    wide: false,
  },
  {
    src: '/images/gallery/malappuram-landscape.png',
    alt: 'Aerial view of Malappuram, Kerala',
    caption: 'The Heartland — Malappuram',
    category: 'Landscape' as Category,
    wide: true,
  },
  {
    src: '/images/jafar-community.png',
    alt: 'Jafar Marakkara engaging with the community',
    caption: 'With the People',
    category: 'Community' as Category,
    wide: false,
  },
  {
    src: '/images/jafar-hero.png',
    alt: 'Jafar Marakkara — official portrait',
    caption: 'Official Portrait 2024',
    category: 'Community' as Category,
    wide: false,
  },
]

const categories: Category[] = ['All', 'Community', 'Youth', 'Business', 'Landscape']

export default function GalleryPage() {
  const [active, setActive] = useState<Category>('All')
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[number] | null>(null)

  const filtered =
    active === 'All' ? galleryItems : galleryItems.filter((item) => item.category === active)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--jm-charcoal) 0%, var(--jm-green-deep) 60%, var(--jm-charcoal-mid) 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 60%, var(--jm-gold) 0%, transparent 60%)' }}
        />
        <div className="section-container relative z-10 text-center">
          <SectionReveal>
            <span className="badge-pill bg-white/10 text-white mb-6 inline-block">Photo Gallery</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight text-balance">
              Moments of<br />
              <span className="text-gradient-green">Impact & Purpose</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              A visual journey through community events, youth programmes, business milestones,
              and the people who make it all meaningful.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border py-4">
        <div className="section-container">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all ${
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
        </div>
      </section>

      {/* Masonry grid */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="break-inside-avoid mb-4 relative group cursor-pointer rounded-2xl overflow-hidden bg-muted"
                  onClick={() => setLightbox(item)}
                >
                  <div className={`relative ${item.wide ? 'aspect-video' : 'aspect-[4/3]'}`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-jm-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                      <ZoomIn size={24} className="text-white" />
                      <p className="text-white text-xs font-semibold text-center px-4">{item.caption}</p>
                    </div>
                    {/* Category tag */}
                    <div className="absolute top-3 left-3">
                      <span
                        className="badge-pill text-white text-[10px]"
                        style={{ background: 'var(--jm-green-deep)' }}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={800}
                className="w-full h-auto object-contain max-h-[80vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-6 py-4">
                <p className="text-white font-semibold text-sm">{lightbox.caption}</p>
                <span
                  className="badge-pill text-white text-[10px] mt-1 inline-block"
                  style={{ background: 'var(--jm-green-mid)' }}
                >
                  {lightbox.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
