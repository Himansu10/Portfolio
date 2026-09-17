import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

const projects = [
  { num: '01', date: "Jul '26", title: 'Digital Phone Directory', stack: ['C++', 'Data Structures'], points: ['Built a hash table for fast, efficient contact searches.', 'Used Trie, Stack, Circular Queue and recursive Merge Sort for autocomplete, undo, recent contacts and sorting.', 'Improved the organization and retrieval speed of contact data.'] },
  { num: '02', date: "Jun '26", title: 'Traffic Management System', stack: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'MongoDB'], points: ['Designed a smart traffic monitoring and control system for urban areas.', 'Enabled emergency vehicle prioritization and live traffic analysis.', 'Built a full-stack web app focused on improving road safety.'] },
  { num: '03', date: "May '26", title: 'Resume Analyser', stack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API'], points: ['Created an AI-powered resume evaluator against job descriptions.', 'Integrated Gemini AI for ATS scores and skill-gap detection.', 'Added PDF parsing and an interactive insight dashboard.'] },
]
export default function Projects() { return <section id="projects" className="projects-showcase section relative isolate overflow-hidden border-y border-white/[.06] bg-[#090d16]">
  <div aria-hidden="true" className="skills-grid absolute inset-0" />
  <div aria-hidden="true" className="absolute -left-40 top-20 size-[28rem] rounded-full bg-[#e11d74]/[.14] blur-[120px]" />
  <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[.08] blur-[120px]" />
  <div aria-hidden="true" className="absolute -right-28 bottom-0 size-[25rem] rounded-full bg-[#0ea5e9]/[.1] blur-[110px]" />
  <div className="page-shell relative"><div className="projects-heading"><SectionHeading label="02 / selected work" title="Projects built to solve." text="A mix of systems thinking, data structures, and practical web development." /></div>
  <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} variants={{ hidden: {}, show: { transition: { delayChildren: .12, staggerChildren: .18 } } }} className="grid min-w-0 gap-4 lg:grid-cols-3">{projects.map((project) => <motion.article key={project.title} variants={{ hidden: { opacity: 0, y: 34, scale: .96 }, show: { opacity: 1, y: 0, scale: 1 } }} whileHover={{ y: -6, scale: 1.008 }} transition={{ duration: .52, ease: [0.22, 1, 0.36, 1] }} className="project-card group relative flex min-w-0 flex-col overflow-hidden rounded-[1.15rem] p-6">
    <div aria-hidden="true" className="project-card-shine absolute inset-0" />
    <div className="relative flex items-start justify-between gap-4"><span className="font-mono text-xs text-[#4de0c7]">{project.num}</span><span className="shrink-0 font-mono text-[10px] text-[#8194a6]">{project.date}</span></div>
    <div className="relative mt-6">
      <span aria-hidden="true" className="absolute -left-2 top-1/2 h-7 w-1 -translate-y-1/2 rounded-full bg-[#4de0c7] opacity-70 shadow-[0_0_12px_#4de0c7] transition duration-300 group-hover:h-9 group-hover:opacity-100 group-hover:shadow-[0_0_20px_#4de0c7]" />
      <h3 className="project-title break-words pl-2 text-[1.35rem] font-extrabold leading-tight tracking-[-.045em] text-[#f0f8fa] transition duration-300 group-hover:-translate-y-1 group-hover:scale-[1.025] group-hover:text-[#96ffed] group-hover:[text-shadow:0_0_22px_rgba(77,224,199,.72)]">{project.title}</h3>
    </div>
    <div className="relative mt-3 flex flex-wrap gap-1.5">{project.stack.map(item => <span key={item} className="rounded-md border border-[#4de0c7]/[.08] bg-[#4de0c7]/10 px-2 py-1 font-mono text-[10px] text-[#78e9d6] transition duration-300 group-hover:border-[#4de0c7]/25 group-hover:bg-[#4de0c7]/[.16]">{item}</span>)}</div>
    <ul className="relative mt-4 space-y-1.5 text-sm leading-6 text-[#9eb0c0]">{project.points.map(p => <li key={p} className="flex min-w-0 gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-[#4de0c7] shadow-[0_0_8px_#4de0c7]" />{p}</li>)}</ul>
    <div className="relative mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-5"><a href="#" aria-label={`${project.title} source code`} className="flex items-center gap-1.5 text-xs font-bold text-[#c9d6df] transition hover:text-[#4de0c7]"><FiGithub /> Code</a><a href="#" aria-label={`${project.title} demo`} className="flex items-center gap-1.5 text-xs font-bold text-[#c9d6df] transition hover:text-[#4de0c7]">Live demo <FiArrowUpRight className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a></div>
  </motion.article>)}</motion.div></div>
</section> }
