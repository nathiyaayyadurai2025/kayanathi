"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import DonateSection from "@/components/donate-section"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar scrollY={scrollY} />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="what-we-do">
        <Services />
      </section>
      <section id="donate">
        <DonateSection />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <FloatingButtons scrollY={scrollY} />
      <ScrollToTop scrollY={scrollY} />
    </main>
  )
}
