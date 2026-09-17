import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
export default function Training() { return <section id="training" className="section page-shell">
  <SectionHeading label="03 / learning" title="Training & growth." />
  <motion.article initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="panel border-l-2 border-l-[#4de0c7] p-6 sm:p-8">
    <div className="flex flex-col gap-5 sm:flex-row sm:justify-between"><div><div className="mb-4 grid size-11 place-items-center rounded-lg bg-[#4de0c7]/10 text-xl text-[#4de0c7]"><FiBookOpen /></div><h3 className="max-w-2xl text-xl font-bold tracking-[-.035em]">Fundamentals of Data Structures: Learn, Apply and Build Projects</h3><p className="mt-2 text-sm text-[#9dafbe]">Centre for Professional Enhancement, LPU</p></div><span className="font-mono text-xs text-[#4de0c7]">Jun '26 – Jul '26</span></div>
    <p className="mt-6 max-w-3xl leading-7 text-[#aab9c7]">Covered arrays, linked lists, stacks, queues, trees and graphs; applied them to practice problems and hands-on projects.</p>
  </motion.article>
</section> }
