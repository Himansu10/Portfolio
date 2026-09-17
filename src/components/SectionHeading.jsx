import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, text }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .5 }} className="mb-10 max-w-2xl">
    <p className="section-label">{label}</p>
    <h2 className="section-title">{title}</h2>
    {text && <p className="mt-4 leading-7 text-[#aebdcb]">{text}</p>}
  </motion.div>
}
