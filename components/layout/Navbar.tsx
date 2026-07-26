'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home',           href: '/' },
  { label: 'Vision',         href: '/vision' },
  { label: 'Youth',          href: '/youth' },
  { label: 'Public Service', href: '/public-service' },
  { label: 'Business',       href: '/business' },
  { label: 'Achievements',   href: '/achievements' },
  { label: 'Gallery',        href: '/gallery' },
  { label: 'News',           href: '/news' },
  { label: 'Timeline',       href: '/timeline' },
  { label: 'Contact',        href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Jafar Marakkara Home">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-display font-bold text-sm transition-transform group-hover:scale-105"
                style={{ background: 'var(--jm-green-deep)' }}
              >
                JM
              </div>
              <span
                className={`font-display font-semibold text-sm tracking-tight transition-colors hidden sm:block ${
                  scrolled ? 'text-jm-charcoal' : 'text-white'
                }`}
              >
                Jafar Marakkara
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-xs font-semibold tracking-wide uppercase transition-colors rounded-md link-underline ${
                    isActive(link.href)
                      ? 'text-jm-green-fresh'
                      : scrolled
                      ? 'text-jm-charcoal hover:text-jm-green-mid'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                      style={{ background: 'var(--jm-green-fresh)' }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase text-white transition-all hover:opacity-90 hover:scale-105"
                style={{ background: 'var(--jm-green-mid)' }}
              >
                Connect
              </Link>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled || mobileOpen
                    ? 'text-jm-charcoal hover:bg-jm-light'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col pt-16"
            style={{ background: 'var(--jm-charcoal)' }}
          >
            <nav
              className="flex flex-col gap-1 p-6 overflow-y-auto"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-4 rounded-xl text-base font-semibold transition-colors ${
                      isActive(link.href)
                        ? 'bg-jm-mid text-white'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {isActive(link.href) && (
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: 'var(--jm-green-fresh)' }}
                      />
                    )}
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 pt-4 border-t border-white/10"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl text-sm font-bold tracking-wide uppercase text-white"
                  style={{ background: 'var(--jm-green-mid)' }}
                >
                  Connect with Jafar
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
