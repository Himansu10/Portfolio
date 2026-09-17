import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'
import { FiMoon, FiSun } from 'react-icons/fi'

const links = ['Home', 'Skills', 'Certificates', 'Projects', 'Achievements', 'Education', 'Contact']
const scrollSections = [
  { id: 'home', link: 'Home' },
  { id: 'skills', link: 'Skills' },
  { id: 'projects', link: 'Projects' },
  { id: 'certificates', link: 'Certificates' },
  { id: 'achievements', link: 'Achievements' },
  { id: 'education', link: 'Education' },
  { id: 'contact', link: 'Contact' },
]

export default function Navbar({ lightTheme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const updateActiveLink = () => {
      // Use the visible position, not offsetTop, so hash links with scroll margins
      // (such as the Skills → Certificates tab) select the correct nav item.
      // The fixed navigation occupies the first ~100px of the viewport.  A wider
      // marker ensures an anchor target immediately beneath it is selected.
      const marker = 160
      let current = 'Home'
      scrollSections.forEach(({ id, link }) => {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= marker) current = link
      })
      setActiveLink(current)
    }
    updateActiveLink()
    window.addEventListener('scroll', updateActiveLink, { passive: true })
    window.addEventListener('hashchange', updateActiveLink)
    return () => {
      window.removeEventListener('scroll', updateActiveLink)
      window.removeEventListener('hashchange', updateActiveLink)
    }
  }, [])

  const trackCursor = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    currentTarget.style.setProperty('--nav-cursor-x', `${clientX - left}px`)
    currentTarget.style.setProperty('--nav-cursor-y', `${clientY - top}px`)
  }

  return <header className="fixed inset-x-0 top-4 z-50 px-3 sm:px-0">
    <nav onMouseMove={trackCursor} className="navbar-interactive page-shell flex h-[58px] items-center justify-between rounded-xl border border-white/[.08] bg-[#111827]/85 px-4 shadow-[0_10px_35px_rgba(0,0,0,.24)] backdrop-blur-xl sm:px-5">
      <a href="#home" className="group flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-white"><span className="grid size-5 place-items-center rounded-full bg-[#4de0c7] text-[10px] text-[#06100d] transition group-hover:rotate-180">H</span>himansu<span className="text-[#4de0c7]">.dev</span></a>
      <div className="hidden items-center gap-1 lg:flex">
        {links.map((link, index) => { const active = activeLink === link; return <a onClick={() => setActiveLink(link)} key={link} href={`#${link.toLowerCase()}`} aria-current={active ? 'page' : undefined} className={`group relative rounded-md px-2.5 py-2 text-xs font-semibold transition hover:bg-[#4de0c7]/10 hover:text-[#e6fffa] ${active ? 'bg-[#4de0c7]/10 text-[#e6fffa]' : 'text-[#9aaabd]'}`}><span className={`mr-1 font-mono text-[9px] transition ${active ? 'text-[#4de0c7]' : 'text-[#4de0c7]/0 group-hover:text-[#4de0c7]'}`}>0{index + 1}</span>{link}<span className={`absolute bottom-1 left-1/2 h-px -translate-x-1/2 bg-[#4de0c7] transition-all duration-300 ${active ? 'w-4/5' : 'w-0 group-hover:w-4/5'}`} /></a> })}
      </div>
      <div className="flex items-center gap-2"><button onClick={onToggleTheme} aria-label={`Switch to ${lightTheme ? 'dark' : 'light'} theme`} className="grid size-9 place-items-center rounded-md border border-white/[.1] text-sm text-[#b8c5d2] transition hover:border-[#4de0c7]/60 hover:bg-[#4de0c7]/10 hover:text-[#4de0c7]">{lightTheme ? <FiMoon /> : <FiSun />}</button><a href="#contact" className="hidden rounded-md border border-[#4de0c7]/55 px-3 py-2 text-xs font-bold text-[#4de0c7] transition hover:bg-[#4de0c7] hover:text-[#08110f] sm:block">Let's talk</a>
      <button onClick={() => setOpen(!open)} className="text-xl text-[#d7e4ef] lg:hidden" aria-label="Toggle menu">{open ? <HiX /> : <HiOutlineMenuAlt3 />}</button></div>
    </nav>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="page-shell mt-2 overflow-hidden rounded-xl border border-white/[.08] bg-[#101725]/95 shadow-xl lg:hidden">
      <div className="flex flex-col px-4 py-2">{links.map((link, index) => <a onClick={() => { setOpen(false); setActiveLink(link) }} key={link} href={`#${link.toLowerCase()}`} aria-current={activeLink === link ? 'page' : undefined} className={`group flex items-center gap-3 border-b border-white/[.06] py-3 text-sm font-medium transition hover:text-[#4de0c7] ${activeLink === link ? 'text-[#4de0c7]' : 'text-[#b8c5d2]'}`}><span className="font-mono text-[10px] text-[#4de0c7]">0{index + 1}</span>{link}</a>)}</div>
    </motion.div>}</AnimatePresence>
  </header>
}
