import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const certificates = [
  { title: 'Database Management System Part 1', issuer: 'Infosys', date: "Aug '26", image: '/dbms-certificate.png' },
  { title: 'Object Oriented Programming', issuer: 'Neo Colab', date: "Jul '25 - Jan '26", image: '/oop-certificate.png' },
  { title: 'Unleashing Innovation: The Generative AI Revolution', issuer: 'AWS / SheKnowsAI / AspireForHer', date: "Feb '25", image: '/generative-ai-workshop-certificate.jpeg' },
]

export default function Certificates() {
  return <section id="certificates" className="certificates-showcase section relative overflow-hidden" aria-label="Certificates">
    <div className="certificates-grid absolute inset-0" />
    <div className="pointer-events-none absolute -left-40 top-[-9rem] size-[31rem] rounded-full bg-[#0ea5e9]/[.1] blur-[120px]" />
    <div className="pointer-events-none absolute -right-32 bottom-[-12rem] size-[34rem] rounded-full bg-[#8b5cf6]/[.12] blur-[125px]" />
    <div className="page-shell relative">
      <p className="section-label mb-5">Certificates</p>
      <div className="grid gap-4 lg:grid-cols-3">
      {certificates.map((certificate, index) => <motion.article key={certificate.title} initial={{ opacity: 0, y: 42, scale: .9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: .2 }} transition={{ duration: .62, delay: index * .2, ease: [0.22, 1, 0.36, 1] }}>
        <a className="group block rounded-[1.15rem] border border-white/[.07] bg-[#121a2a]/90 p-3 shadow-[0_14px_26px_rgba(0,0,0,.16)] transition duration-300 hover:-translate-y-1 hover:border-[#4de0c7]/40 hover:bg-[#192339]" href={certificate.image} target="_blank" rel="noreferrer" aria-label={`Open ${certificate.title} certificate`}>
          <div className="relative aspect-[1.6/1] overflow-hidden rounded-[.95rem] border border-white/[.08] bg-[#0c1220]"><img src={certificate.image} alt={`${certificate.title} certificate`} className="size-full object-cover object-center transition duration-500 group-hover:scale-[1.04]" loading="lazy" /><span className="absolute inset-0 bg-gradient-to-t from-[#08101c]/35 to-transparent" /></div>
          <div className="mt-4 flex items-start justify-between gap-3"><div><h3 className="text-base font-extrabold leading-5 tracking-[-.025em] text-[#e8eff5]">{certificate.title}</h3><p className="mt-2 font-mono text-[10px] text-[#94a8b8]">{certificate.issuer} | {certificate.date}</p></div><FiArrowUpRight className="mt-0.5 shrink-0 text-lg text-[#4de0c7] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
        </a>
      </motion.article>)}
      </div>
    </div>
  </section>
}
