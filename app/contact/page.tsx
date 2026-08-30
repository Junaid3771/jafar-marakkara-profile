'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

// SVG brand icons (removed from lucide-react v1+)
function IconFacebook() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
}
function IconInstagram() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" /></svg>
}
function IconYoutube() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" /></svg>
}
function IconX() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
}
import { SectionReveal } from '@/components/shared/SectionReveal'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Marakkara, Malappuram\nKerala — 676 519, India',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 95396 93771',
    href: 'tel:+919539693771',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@jafarmarakkara.com',
    href: 'mailto:contact@jafarmarakkara.com',
  },
]

const socials = [
  { icon: IconFacebook,  label: 'Facebook',    href: '#', handle: '@JafarMarakkara' },
  { icon: IconInstagram, label: 'Instagram',   href: '#', handle: '@jafarmarakkara' },
  { icon: IconYoutube,   label: 'YouTube',     href: '#', handle: 'Jafar Marakkara' },
  { icon: IconX,         label: 'X / Twitter', href: '#', handle: '@JafarMarakkara' },
]

const inquiryTypes = [
  'General Inquiry',
  'Community Issue',
  'Media & Press',
  'Business Collaboration',
  'Youth Programme',
  'Event Invitation',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputBase =
    'w-full px-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow'

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--jm-charcoal) 0%, var(--jm-green-deep) 60%, var(--jm-charcoal-mid) 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--jm-gold) 0%, transparent 60%)' }}
        />
        <div className="section-container relative z-10 text-center">
          <SectionReveal>
            <span className="badge-pill bg-white/10 text-white mb-6 inline-block">Get in Touch</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight text-balance">
              Let&apos;s Build<br />
              <span className="text-gradient-green">Together</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Have a community concern, a business proposal, or simply want to connect?
              Jafar Marakkara&apos;s office is open to everyone.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left column — contact info + socials */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <SectionReveal direction="right">
                <div>
                  <h2 className="font-display font-bold text-2xl text-jm-charcoal mb-6">
                    Contact Information
                  </h2>
                  <div className="flex flex-col gap-5">
                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: 'var(--jm-green-light)' }}
                        >
                          <Icon size={18} style={{ color: 'var(--jm-green-mid)' }} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
                            {label}
                          </p>
                          {href ? (
                            <a
                              href={href}
                              className="text-jm-charcoal text-sm font-medium hover:text-jm-green-mid transition-colors whitespace-pre-line"
                            >
                              {value}
                            </a>
                          ) : (
                            <p className="text-jm-charcoal text-sm font-medium whitespace-pre-line">{value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal direction="right" delay={0.1}>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: 'var(--jm-green-light)' }}
                >
                  <h3 className="font-display font-semibold text-jm-green-deep text-sm uppercase tracking-wide mb-4">
                    Follow on Social Media
                  </h3>
                  <div className="flex flex-col gap-3">
                    {socials.map(({ icon: Icon, label, href, handle }) => (
                      <a
                        key={label}
                        href={href}
                        className="flex items-center gap-3 group"
                        aria-label={label}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center"
                          style={{ background: 'var(--jm-green-mid)' }}
                        >
                          <Icon size={15} className="text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-jm-green-deep font-semibold">{label}</p>
                          <p className="text-xs text-muted-foreground group-hover:text-jm-green-mid transition-colors">
                            {handle}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal direction="right" delay={0.2}>
                <div
                  className="rounded-2xl p-6 text-white"
                  style={{ background: 'var(--jm-green-deep)' }}
                >
                  <h3 className="font-display font-bold text-base mb-2">Office Hours</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Monday – Friday: 9:00 AM – 6:00 PM<br />
                    Saturday: 9:00 AM – 1:00 PM<br />
                    Sunday: Closed
                  </p>
                  <p className="text-white/50 text-xs mt-3">
                    For urgent community matters, please call the office directly.
                  </p>
                </div>
              </SectionReveal>
            </div>

            {/* Right column — form */}
            <div className="lg:col-span-3">
              <SectionReveal direction="left">
                <div className="bg-card rounded-3xl border border-border p-8 lg:p-10 shadow-sm">
                  {!submitted ? (
                    <>
                      <h2 className="font-display font-bold text-2xl text-jm-charcoal mb-2">
                        Send a Message
                      </h2>
                      <p className="text-muted-foreground text-sm mb-8">
                        Fill in the form below and a member of the team will respond within 24 hours.
                      </p>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="name" className="block text-xs font-semibold text-jm-charcoal mb-1.5">
                              Full Name <span className="text-destructive">*</span>
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              placeholder="Your full name"
                              value={form.name}
                              onChange={handleChange}
                              className={inputBase}
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-xs font-semibold text-jm-charcoal mb-1.5">
                              Email Address <span className="text-destructive">*</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              placeholder="you@email.com"
                              value={form.email}
                              onChange={handleChange}
                              className={inputBase}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="phone" className="block text-xs font-semibold text-jm-charcoal mb-1.5">
                              Phone Number
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+91 XXXXX XXXXX"
                              value={form.phone}
                              onChange={handleChange}
                              className={inputBase}
                            />
                          </div>
                          <div>
                            <label htmlFor="type" className="block text-xs font-semibold text-jm-charcoal mb-1.5">
                              Inquiry Type
                            </label>
                            <select
                              id="type"
                              name="type"
                              value={form.type}
                              onChange={handleChange}
                              className={inputBase}
                            >
                              <option value="">Select a topic</option>
                              {inquiryTypes.map((t) => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-xs font-semibold text-jm-charcoal mb-1.5">
                            Message <span className="text-destructive">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            placeholder="Tell us how we can help..."
                            value={form.message}
                            onChange={handleChange}
                            className={`${inputBase} resize-none`}
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                          style={{ background: 'var(--jm-green-mid)' }}
                        >
                          {loading ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message <Send size={15} />
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center text-center py-12 gap-4"
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                        style={{ background: 'var(--jm-green-light)' }}
                      >
                        <CheckCircle size={32} style={{ color: 'var(--jm-green-mid)' }} />
                      </div>
                      <h3 className="font-display font-bold text-2xl text-jm-charcoal">
                        Message Received!
                      </h3>
                      <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                        Thank you for reaching out, {form.name.split(' ')[0]}. Our team will review your message and
                        get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', type: '', message: '' }) }}
                        className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold border border-border hover:bg-muted transition-colors text-jm-charcoal"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
