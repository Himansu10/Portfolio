import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
const entries = [
  ['B.Tech, Computer Science & Engineering', 'Lovely Professional University, Punjab', "Aug '24 – Present", 'CGPA 7.51'],
  ['Intermediate (PCM)', 'Kendriya Vidyalaya School, Naharlagun', "Mar '22 – Apr '24", '75%'],
  ['Matriculation', 'Kendriya Vidyalaya School, Naharlagun', 'Completed', '81.8%'],
]
export default function Education() { return <section id="education" className="education-showcase section relative isolate overflow-hidden border-y border-white/[.06] bg-[#090d16]"><div aria-hidden="true" className="skills-grid absolute inset-0" /><div aria-hidden="true" className="absolute -right-28 top-10 size-[27rem] rounded-full bg-[#8b5cf6]/[.12] blur-[120px]" /><div aria-hidden="true" className="absolute -left-32 bottom-0 size-[23rem] rounded-full bg-[#0ea5e9]/[.1] blur-[110px]" /><div className="page-shell relative"><SectionHeading label="05 / education" title="Learning, by the numbers." />
  <div className="relative max-w-3xl border-l border-[#4de0c7]/35 pl-7 sm:pl-10">{entries.map(([degree, school, date, grade], i) => <motion.article initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i*.1 }} key={degree} className="relative pb-10 last:pb-0"><span className="absolute -left-[34px] top-1 size-3 rounded-full border-2 border-[#4de0c7] bg-[#090d16] shadow-[0_0_12px_#4de0c7] sm:-left-[46px]" /><div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between"><h3 className="font-bold tracking-[-.025em]">{degree}</h3><span className="font-mono text-[10px] text-[#4de0c7]">{date}</span></div><p className="mt-2 text-sm text-[#98aabb]">{school}</p><p className="mt-3 inline-block rounded bg-white/[.05] px-2 py-1 font-mono text-xs text-[#d2dee6]">{grade}</p></motion.article>)}</div></div>
</section> }
