"use client"

import { ArrowUp } from "lucide-react"

interface ScrollToTopProps {
  scrollY: number
}

export default function ScrollToTop({ scrollY }: ScrollToTopProps) {
  const isVisible = scrollY > 300

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-4 md:right-6 z-40 flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all hover:scale-110"
      title="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  )
}
