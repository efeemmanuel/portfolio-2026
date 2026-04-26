import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Nav({ isCase = false, projectPath = '' }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    if (isCase) return
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
    }, { threshold: 0.4 })
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [isCase])

  const navLinks = isCase
    ? [{ label: 'home', to: '/' }, { label: 'projects', to: '/#projects' }, { label: 'contact', to: '/#contact' }]
    : [
        { label: 'approach', href: '#think' }, { label: 'skills', href: '#skills' },
        { label: 'projects', href: '#projects' }, { label: 'experience', href: '#experience' },
        { label: 'contact', href: '#contact' },
      ]

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b border-border py-4">
      <div className="max-w-[1020px] mx-auto px-8 flex items-center justify-between gap-4">
        <span className="text-[0.72rem] text-black tracking-[0.06em] font-semibold whitespace-nowrap">
          Efe Obaro
          {isCase && <span className="text-muted font-normal ml-1">/ {projectPath}</span>}
        </span>

        <div className="hidden md:flex gap-6 flex-wrap">
          {navLinks.map(link =>
            link.href ? (
              <a key={link.label} href={link.href}
                className={`text-[0.68rem] tracking-[0.06em] py-1 border-b border-transparent transition-colors duration-200
                  ${active === link.href.slice(1) ? 'text-black border-black' : 'text-dim hover:text-black'}`}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to}
                className="text-[0.68rem] tracking-[0.06em] py-1 text-dim hover:text-black transition-colors duration-200">
                {link.label}
              </Link>
            )
          )}
        </div>

        <button className="md:hidden flex flex-col gap-[4px] cursor-pointer p-1 bg-transparent border-none"
          onClick={() => setOpen(o => !o)} aria-label="Toggle navigation">
          <span className="block w-5 h-px bg-black" />
          <span className="block w-5 h-px bg-black" />
          <span className="block w-5 h-px bg-black" />
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border px-8 py-6 flex flex-col gap-5">
          {navLinks.map(link =>
            link.href ? (
              <a key={link.label} href={link.href}
                className="text-[0.68rem] tracking-[0.06em] text-dim hover:text-black transition-colors"
                onClick={() => setOpen(false)}>{link.label}</a>
            ) : (
              <Link key={link.label} to={link.to}
                className="text-[0.68rem] tracking-[0.06em] text-dim hover:text-black transition-colors"
                onClick={() => setOpen(false)}>{link.label}</Link>
            )
          )}
        </div>
      )}
    </nav>
  )
}
