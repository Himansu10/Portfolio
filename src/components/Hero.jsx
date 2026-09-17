import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const socials = [
  ['GitHub', 'https://github.com/Himansu10', FiGithub],
  ['LinkedIn', 'https://linkedin.com/in/himansuneog', FiLinkedin],
  ['Email', 'mailto:himansuneog4@gmail.com', FiMail],
]
export default function Hero() {
  const [roleHighlighted, setRoleHighlighted] = useState(false)
  return <section id="home" className="grid-dot relative flex min-h-[760px] items-center overflow-hidden pt-20">
    <div className="absolute left-[4%] top-[20%] h-56 w-56 rounded-full bg-[#4de0c7]/[.08] blur-[90px]" />
    <div className="page-shell relative grid w-full items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
      <div>
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="flex items-center gap-2"><span className="grid size-8 place-items-center rounded-full border border-[#4de0c7]/40 bg-[#4de0c7]/10 font-mono text-xs text-[#4de0c7]">Hi</span><p className="section-label">Hey, I'm Himansu</p></motion.div>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .6 }} className="mt-5 max-w-4xl text-[clamp(3.35rem,8vw,6.3rem)] font-extrabold leading-[.88] tracking-[-.075em] text-[#f2f6f8]">I build things<br/>for the <span className="text-[#4de0c7]">web.</span></motion.h1>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .22, duration: .6 }} className="mt-8 max-w-xl">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm leading-6 text-[#b8c6d2]"><span>Computer Science Undergrad</span><span className="hidden text-[#4de0c7] sm:inline">|</span><button type="button" onClick={() => setRoleHighlighted(active => !active)} aria-pressed={roleHighlighted} className={`role-badge ${roleHighlighted ? 'role-badge-active' : ''}`}><span className="role-badge-dot" />Full-Stack Developer</button></p>
        <p className="mt-4 text-base leading-7 text-[#9aabba] sm:text-lg">CS undergrad at Lovely Professional University building full-stack web apps and data-structure-driven projects.</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .34, duration: .6 }} className="mt-9 flex flex-wrap gap-3">
        <a href="#projects" className="group flex items-center gap-2 rounded-md bg-[#4de0c7] px-5 py-3 text-sm font-bold text-[#07110f] transition hover:bg-[#7bf0db]">View Projects <FiArrowDownRight className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></a>
        <a href="/Himansu_Neog_CV.pdf" download="Himansu_Neog_CV.pdf" className="rounded-md border border-[#879caf]/50 px-5 py-3 text-sm font-bold text-[#dbe6ed] transition hover:border-[#4de0c7] hover:text-[#4de0c7]">Download Resume</a>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }} className="mt-11 flex gap-4">{socials.map(([name, url, Icon]) => <a key={name} href={url} target={url.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={name} className="text-xl text-[#8fa1b2] transition hover:-translate-y-0.5 hover:text-[#4de0c7]"><Icon /></a>)}</motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: .9, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: .18, duration: .7, ease: 'easeOut' }} className="relative mx-auto w-full max-w-[430px] lg:max-w-none">
        <div className="absolute inset-8 rounded-[2rem] border border-[#4de0c7]/40 bg-[#4de0c7]/5 -rotate-6" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[.14] bg-[#1a2332] p-2 shadow-[0_25px_80px_rgba(0,0,0,.38)]"><img src="/himansu-neog.png" alt="Himansu Neog in a formal suit" className="aspect-square w-full rounded-[1.65rem] object-cover object-top" /></div>
        <div className="absolute -bottom-4 -left-3 rounded-lg border border-white/[.12] bg-[#101927]/90 px-3 py-2.5 shadow-xl backdrop-blur"><p className="font-mono text-[9px] tracking-widest text-[#4de0c7]">BASED IN</p><p className="mt-1 text-xs font-bold">Punjab, India</p></div>
      </motion.div>
      </div>
    <a href="#skills" className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[.2em] text-[#718497]">SCROLL TO EXPLORE</a>
  </section>
}
