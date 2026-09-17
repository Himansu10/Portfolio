import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiCplusplus, SiExpress, SiGit, SiGithub, SiJavascript, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { FiAward, FiBox } from 'react-icons/fi'

const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#f16529' }, { name: 'CSS', icon: FaCss3Alt, color: '#2d8ddb' }, { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' }, { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' }, { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#f2f6f8' }, { name: 'Node.js', icon: FaNodeJs, color: '#78aa62' }, { name: 'Express.js', icon: SiExpress, color: '#dfe8ed' }, { name: 'MongoDB', icon: SiMongodb, color: '#4baa53' }, { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'C++', icon: SiCplusplus, color: '#649ad2' }, { name: 'Git', icon: SiGit, color: '#f05033' }, { name: 'GitHub', icon: SiGithub, color: '#f2f6f8' },
]

const tabs = [{ label: 'Certificates', icon: FiAward, href: '#certificates' }, { label: 'Tech Stack', icon: FiBox, href: '#skills' }]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Tech Stack')

  useEffect(() => {
    const syncTab = () => setActiveTab(window.location.hash === '#certificates' ? 'Certificates' : 'Tech Stack')
    syncTab()
    window.addEventListener('hashchange', syncTab)
    return () => window.removeEventListener('hashchange', syncTab)
  }, [])

  return <section id="skills" className="skills-showcase relative min-h-[calc(100svh-82px)] overflow-hidden bg-[#090d16] py-5 scroll-mt-[82px] lg:py-6">
    <div className="skills-grid absolute inset-0" />
    <div className="absolute left-1/2 top-[42%] h-[34rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#e11d74]/[.12] blur-[115px]" />
    <div className="absolute right-[-12rem] top-20 h-[28rem] w-[28rem] rounded-full bg-[#0ea5e9]/[.12] blur-[110px]" />
    <div className="page-shell relative">
      <nav aria-label="Portfolio sections" className="mb-5 grid grid-cols-2 rounded-[1.25rem] border border-white/[.1] bg-[#0d101d]/80 p-2 backdrop-blur-md">
        {tabs.map(({ label, icon: Icon, href }) => {
          const active = label === activeTab
          return <a key={label} href={href} onClick={() => setActiveTab(label)} aria-current={active ? 'page' : undefined} className={`flex min-h-[4.5rem] flex-col items-center justify-center gap-1.5 rounded-[.95rem] px-4 text-sm font-extrabold tracking-[.01em] transition sm:text-base ${active ? 'bg-gradient-to-r from-[#30205d] to-[#123755] text-[#f5f3ff] shadow-[0_12px_30px_rgba(0,0,0,.22)]' : 'text-[#9e9bb7] hover:bg-white/[.045] hover:text-[#e8e5f2]'}`}><Icon className={`text-lg ${active ? 'text-[#a78bfa]' : 'text-[#9b9ab0]'}`} />{label}</a>
        })}
      </nav>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .12 }} variants={{ hidden: {}, show: { transition: { delayChildren: .1, staggerChildren: .09 } } }} className="mx-auto grid max-w-[1020px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {skills.map((skill) => {
          const Icon = skill.icon
          return <motion.article key={skill.name} variants={{ hidden: { opacity: 0, y: 16, scale: .9 }, show: { opacity: 1, y: 0, scale: 1 } }} transition={{ duration: .38, ease: 'easeOut' }} className="group relative flex aspect-[1.28/1] flex-col items-center justify-center overflow-hidden rounded-[1.15rem] border border-white/[.07] bg-[#121a2a]/90 p-3 text-center shadow-[0_14px_26px_rgba(0,0,0,.16)] transition duration-300 hover:-translate-y-1 hover:border-white/[.18] hover:bg-[#192339]">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />
            <Icon style={{ color: skill.color }} className="text-[clamp(2.5rem,4vw,4.1rem)] drop-shadow-[0_8px_16px_rgba(0,0,0,.28)] transition duration-300 group-hover:scale-110" />
            <h3 className="mt-2.5 text-sm font-extrabold tracking-[-.025em] text-[#dce1ee] sm:text-base">{skill.name}</h3>
          </motion.article>
        })}
      </motion.div>
    </div>
  </section>
}
