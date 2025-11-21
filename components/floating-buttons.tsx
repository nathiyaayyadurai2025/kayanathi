"use client"

import { Phone, MessageCircle, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

interface FloatingButtonsProps {
  scrollY: number
}

export default function FloatingButtons({ scrollY }: FloatingButtonsProps) {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    setShowTop(scrollY > 300) // show when user scrolls down
  }, [scrollY])

  // WhatsApp & Call slight movement UP on scroll
  const floatOffset = Math.min(scrollY / 10, 40) // max 40px up

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* WhatsApp + Call Buttons */}
      <div
        className="fixed right-4 md:right-6 z-40 flex flex-col gap-4 transition-transform duration-300"
        style={{ bottom: `${80 + floatOffset}px` }} // UP movement
      >
        {/* Call Button */}
        <a
          href="tel:+918800123488"
          className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all hover:scale-110"
        >
          <Phone size={24} />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918800123488?text=Hello%20KAYA%20Foundation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      {/* Scroll To Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 md:right-6 z-40 w-14 h-14 bg-gray-800 text-white rounded-full shadow-lg hover:scale-110 transition-all"
          style={{ bottom: "20px" }} // comes DOWN
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  )
}
