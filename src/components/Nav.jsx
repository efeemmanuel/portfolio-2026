import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Nav({ isCase = false, projectPath = '' }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (isCase) return
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
    }, { threshold: 0.4 })
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [isCase])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = isCase
    ? [{ label: 'home', to: '/' }, { label: 'projects', to: '/#projects' }, { label: 'contact', to: '/#contact' }]
    : [
        { label: 'approach', href: '#think' }, { label: 'skills', href: '#skills' },
        { label: 'projects', href: '#projects' }, { label: 'experience', href: '#experience' },
        { label: 'contact', href: '#contact' },
      ]

  return (
    <nav
      className={`sticky top-0 z-[100] border-b transition-all duration-500 ${
        scrolled
          ? 'bg-[#1a1a1c]/85 backdrop-blur-md border-white/[0.1] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]'
          : 'bg-[#1a1a1c] border-white/[0.08]'
      } py-4`}
    >
      <div className="max-w-[1020px] mx-auto px-8 flex items-center justify-between gap-4">
        <span className="text-[0.82rem] text-white tracking-[0.06em] font-semibold whitespace-nowrap transition-opacity duration-300 hover:opacity-70">
          Efe Obaro
          {isCase && <span className="text-white/40 font-normal ml-1">/ {projectPath}</span>}
        </span>

        <div className="hidden md:flex gap-7 flex-wrap">
          {navLinks.map(link =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-[0.76rem] tracking-[0.06em] py-1 transition-colors duration-200 group
                  ${active === link.href.slice(1) ? 'text-white' : 'text-white/45 hover:text-white'}`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-white transition-all duration-300 ease-out
                    ${active === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="relative text-[0.76rem] tracking-[0.06em] py-1 text-white/45 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-px bg-white w-0 group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            )
          )}
        </div>

        <button
          className="md:hidden flex flex-col gap-[4px] cursor-pointer p-1 bg-transparent border-none"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-5 h-px bg-white transition-transform duration-300 ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-5 h-px bg-white transition-transform duration-300 ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#1a1a1c]/95 backdrop-blur-md border-b border-white/[0.08] px-8 flex flex-col gap-5 overflow-hidden transition-all duration-300 ease-out
          ${open ? 'max-h-80 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
      >
        {navLinks.map(link =>
          link.href ? (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.76rem] tracking-[0.06em] text-white/45 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              to={link.to}
              className="text-[0.76rem] tracking-[0.06em] text-white/45 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </nav>
  )
}