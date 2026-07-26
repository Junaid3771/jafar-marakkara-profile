import Link from 'next/link'
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Vision',         href: '/vision' },
  { label: 'Youth',          href: '/youth' },
  { label: 'Public Service', href: '/public-service' },
  { label: 'Business',       href: '/business' },
  { label: 'Achievements',   href: '/achievements' },
]

const moreLinks = [
  { label: 'Gallery',   href: '/gallery' },
  { label: 'News',      href: '/news' },
  { label: 'Timeline',  href: '/timeline' },
  { label: 'Contact',   href: '/contact' },
]

const socials = [
  { icon: Facebook,  label: 'Facebook',  href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube,   label: 'YouTube',   href: '#' },
  { icon: Twitter,   label: 'X / Twitter', href: '#' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="text-white"
      style={{ background: 'var(--jm-charcoal)' }}
      role="contentinfo"
    >
      {/* Top section */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5" aria-label="Home">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-sm"
                style={{ background: 'var(--jm-green-mid)' }}
              >
                JM
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm leading-tight">Jafar Marakkara</p>
                <p className="font-malayalam text-white/50 text-xs">ജാഫർ മറക്കാര</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Youth Icon. Community Leader. Visionary Businessman. Building a better Malappuram, one step at a time.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-jm-mid transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-jm-gold mb-5">
              Pages
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-jm-gold mb-5">
              More
            </h3>
            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-jm-gold mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0 text-jm-green-fresh" />
                <span>Marakkara, Malappuram<br />Kerala, India</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={15} className="shrink-0 text-jm-green-fresh" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition-colors">
                  +91 XX XXXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={15} className="shrink-0 text-jm-green-fresh" />
                <a href="mailto:contact@jafarmarakkara.com" className="hover:text-white transition-colors">
                  contact@jafarmarakkara.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {year} Jafar Marakkara. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            <span className="font-malayalam">ജാഫർ മറക്കാര</span> &mdash; Malappuram, Kerala
          </p>
        </div>
      </div>
    </footer>
  )
}
