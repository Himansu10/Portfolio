import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Intro({ onComplete }) {
  const hasFinished = useRef(false)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const finish = () => {
      if (hasFinished.current) return
      hasFinished.current = true
      onComplete()
    }
    const timer = window.setTimeout(finish, 2500)
    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
    }
  }, [onComplete])

  return <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: [1, 1, 0] }}
    transition={{ duration: 2.5, times: [0, .86, 1], ease: 'easeInOut' }}
    onClick={onComplete}
    role="button"
    aria-label="Dismiss introduction"
    className="fixed inset-0 z-[100] grid cursor-pointer place-items-center overflow-hidden bg-[#05070b]/[.92] backdrop-blur-[2px]"
  >
    <motion.div animate={{ scale: [1, 1, 8], opacity: [1, 1, 0] }} transition={{ duration: 2.5, times: [0, .56, 1], ease: [0.76, 0, 0.24, 1] }} className="relative origin-center text-center will-change-transform">
      <motion.p
        initial={{ opacity: 0, y: 14, clipPath: 'inset(0 100% 0 0)' }}
        animate={{ opacity: 1, y: 0, clipPath: 'inset(-12% -12% -12% 0)' }}
        transition={{ duration: .95, ease: [0.16, 1, 0.3, 1] }}
        className="whitespace-nowrap font-['Caveat'] text-[clamp(5rem,14vw,10rem)] font-bold leading-none text-[#F1F3F5] drop-shadow-[0_8px_22px_rgba(0,0,0,.45)]"
      >hello</motion.p>
    </motion.div>
  </motion.div>
}
